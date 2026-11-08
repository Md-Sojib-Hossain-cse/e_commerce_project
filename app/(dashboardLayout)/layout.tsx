"use client"

import Footer from "@/components/custom/shared/footer/Footer"
import MainMenu from "@/components/custom/shared/mainMenu/MainMenu"
import MobileBottomNav from "@/components/custom/shared/navbar/MobileBottomNav"
import Navbar from "@/components/custom/shared/navbar/Navbar"

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
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

export default DashboardLayout
