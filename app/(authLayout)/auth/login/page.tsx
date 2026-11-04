import { AuthForm } from "@/components/custom/shared/auth/AuthForm"

const LoginPage = () => {
  return (
    <div className="flex min-h-dvh items-center justify-center p-4 md:p-6">
      <AuthForm type={"login"} />
    </div>
  )
}

export default LoginPage
