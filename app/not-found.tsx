import { House } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const NotFoundPage = () => {
  return (
    <div className="flex h-dvh w-full flex-col items-center justify-center gap-4 bg-gray-100 text-center text-gray-800">
      <Image
        src={
          "https://res.cloudinary.com/dsxmcn2mq/image/upload/v1793687660/Girl_relaxing_while_error_404_zs8tqz.svg"
        }
        alt="404"
        height={300}
        width={300}
      ></Image>
      <h2 className="text-xl font-bold md:text-2xl">404 - Page Not Found!</h2>
      <p className="mx-auto max-w-md text-center text-sm text-primary-background/80">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="flex items-center gap-1 rounded-md bg-primary-background p-1 text-primary-foreground transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 active:opacity-80 md:p-2"
      >
        <House className="h-5 w-5" />
        <span>Go to Homepage</span>
      </Link>
    </div>
  )
}

export default NotFoundPage
