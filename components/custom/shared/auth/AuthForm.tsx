"use client"

import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { toast } from "sonner"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { CircleCheckBig, Eye, EyeOff } from "lucide-react"
import Link from "next/link"
import { Checkbox } from "@/components/ui/checkbox"
import { useAppDispatch } from "@/redux/hook"
import { setUser } from "@/redux/features/auth/authSlice"

type TType = "login" | "register"

const registerFormSchema = z.object({
  name: z
    .string()
    .min(3, "Name must be at least 3 characters.")
    .max(32, "Name must be at most 32 characters."),
  email: z.string().email("Invalid email format"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(16, "Password must be at most 16 characters"),
})

export function AuthForm(props: { type: TType }) {
  const { type } = props
  const [showPassword, setShowPassword] = React.useState(false)
  const [rememberMe, setRememberMe] = React.useState(false)
  const dispatch = useAppDispatch()

  const form = useForm<z.infer<typeof registerFormSchema>>({
    resolver: zodResolver(registerFormSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  })

  const loginSubmit = (data: z.infer<typeof registerFormSchema>) => {
    console.log("Login Submit", data)
    const authInfo = {
      user: {
        name: data.name,
        email: data.email,
        password: data.password,
      },
      token: "demo-access-token",
    }
    dispatch(setUser(authInfo))

    toast(`${data.name || "User"} Login information submitted successfully`, {
      className: "my-classname",
      duration: 5000,
      icon: <CircleCheckBig />,
      position: "top-right",
    })
  }

  const registrationSubmit = (data: z.infer<typeof registerFormSchema>) => {
    console.log("Registration Submit", data)
    toast(
      `${data.name || "User"} Registration information submitted successfully`,
      {
        className: "my-classname",
        duration: 5000,
        icon: <CircleCheckBig />,
        position: "top-right",
      }
    )
  }

  return (
    <Card className="my-6 w-full rounded-md bg-primary-white p-4 py-6 sm:max-w-md md:my-8 md:max-w-lg md:p-5 md:py-8 lg:my-10 lg:max-w-xl lg:p-6 lg:py-10">
      <CardHeader className="space-y-2">
        <CardTitle className="text-center text-xl font-bold md:text-2xl lg:text-3xl">
          Chaity
        </CardTitle>
        <CardDescription className="text-center">
          {type === "login"
            ? "Welcome back! Please enter your details to sign in."
            : "Create an account to get started with us today."}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form
          id="form-rhf-demo"
          onSubmit={form.handleSubmit(
            type === "login" ? loginSubmit : registrationSubmit
          )}
        >
          <FieldGroup>
            <Controller
              name="name"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid} className="gap-1">
                  <FieldLabel htmlFor="form-name">Name</FieldLabel>
                  <Input
                    {...field}
                    id="form-name"
                    aria-invalid={fieldState.invalid}
                    placeholder="Enter your name"
                    autoComplete="off"
                    className="rounded-sm py-2 md:py-3 lg:py-4"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid} className="gap-1">
                  <FieldLabel htmlFor="form-email">Email</FieldLabel>
                  <Input
                    {...field}
                    id="form-email"
                    aria-invalid={fieldState.invalid}
                    placeholder="Enter your email"
                    autoComplete="off"
                    className="rounded-sm py-2 md:py-3 lg:py-4"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="password"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid} className="gap-1">
                  <FieldLabel htmlFor="form-password">Password</FieldLabel>

                  <div className="relative">
                    <Input
                      {...field}
                      id="form-password"
                      type={showPassword ? "text" : "password"}
                      aria-invalid={fieldState.invalid}
                      placeholder="Enter your password"
                      autoComplete="current-password"
                      className="rounded-sm py-2 pr-10 md:py-3 lg:py-4"
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword((prev) => !prev)}
                      className="absolute top-1/2 right-3 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground"
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>

                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            {type === "login" && (
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <Checkbox
                    id="remember-me"
                    checked={rememberMe}
                    onCheckedChange={(checked) =>
                      setRememberMe(checked === true)
                    }
                  />

                  <label
                    htmlFor="remember-me"
                    className="cursor-pointer text-sm font-medium"
                  >
                    Remember me
                  </label>
                </div>

                <Link
                  href="/forgot-password"
                  className="text-sm font-medium text-primary underline-offset-4 transition-colors hover:text-primary/80 hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
            )}
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-4 rounded-b-md bg-primary-white md:gap-6">
        <Field orientation="horizontal">
          <Button
            type="submit"
            form="form-rhf-demo"
            className="w-full rounded-md py-2 md:py-4 lg:py-5"
          >
            {type === "login" ? "Login" : "Register"}
          </Button>
        </Field>
        <p className="space-x-2">
          <span>
            {type === "login"
              ? "Dont Have an Account?"
              : "Already Have an Account?"}
          </span>
          {type === "login" ? (
            <Link href="/auth/register" className="text-blue-500 underline">
              Register
            </Link>
          ) : (
            <Link href="/auth/login" className="text-blue-500 underline">
              Login
            </Link>
          )}
        </p>
      </CardFooter>
    </Card>
  )
}
