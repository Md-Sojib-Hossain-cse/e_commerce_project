import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { Truck } from "lucide-react"
import { Controller, useForm } from "react-hook-form"
import z from "zod"

const customerInfoFormSchema = z.object({
  name: z
    .string()
    .min(3, "Name must be at least 3 characters.")
    .max(32, "Name must be at most 32 characters."),
  phone: z
    .string()
    .regex(
      /^01[3-9]\d{8}$/,
      "Please enter a valid Bangladeshi mobile number (e.g. 01712345678)."
    ),
  address: z
    .string()
    .min(8, "Address must be at least 8 characters")
    .max(50, "Address must be at most 50 characters"),
})

const CustomerInformation = () => {
  const form = useForm<z.infer<typeof customerInfoFormSchema>>({
    resolver: zodResolver(customerInfoFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      address: "",
    },
  })

  const customerInfoSubmit = (data: z.infer<typeof customerInfoFormSchema>) => {
    console.log(data)
  }
  return (
    <div className="space-y-3 md:space-y-4">
      <h3 className="flex items-center gap-2">
        <Truck className="h-9 w-9 rounded-full bg-primary-background/5 p-2" />
        <span className="text-lg font-semibold md:text-xl">
          Customer Information
        </span>
      </h3>
      <div>
        <form
          id="form-rhf-demo"
          onSubmit={form.handleSubmit(customerInfoSubmit)}
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
              name="phone"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid} className="gap-1">
                  <FieldLabel htmlFor="form-phone">Phone</FieldLabel>
                  <Input
                    {...field}
                    id="form-phone"
                    aria-invalid={fieldState.invalid}
                    placeholder="Enter your phone"
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
              name="address"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid} className="gap-1">
                  <FieldLabel htmlFor="form-address">Address</FieldLabel>
                  <Input
                    {...field}
                    id="form-address"
                    aria-invalid={fieldState.invalid}
                    placeholder="Enter your Address"
                    autoComplete="off"
                    className="rounded-sm py-2 md:py-3 lg:py-4"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
        </form>
      </div>
    </div>
  )
}

export default CustomerInformation
