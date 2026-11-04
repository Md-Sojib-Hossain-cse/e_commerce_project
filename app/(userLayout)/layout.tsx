"use client"

import Footer from "@/components/custom/shared/footer/Footer"
import MainMenu from "@/components/custom/shared/mainMenu/MainMenu"
import MobileBottomNav from "@/components/custom/shared/navbar/MobileBottomNav"
import Navbar from "@/components/custom/shared/navbar/Navbar"
import { selectCurrentUser } from "@/redux/features/auth/authSlice"
import { useAppSelector } from "@/redux/hook"

const UserLayout = ({ children }: { children: React.ReactNode }) => {
  const currentUser = useAppSelector(selectCurrentUser)

  console.log(currentUser)

  return (
    <div>
      <Navbar />
      <MainMenu />

      <div className="mx-auto min-h-screen max-w-7xl">{children}</div>
      <Footer />
      <div className="mx-auto max-w-5xl">
        <MobileBottomNav />
      </div>
    </div>
  )
}

export default UserLayout
