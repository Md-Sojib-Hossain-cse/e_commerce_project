"use client";

import MobileBottomNav from "@/components/custom/shared/navbar/MobileBottomNav";
import Navbar from "@/components/custom/shared/navbar/Navbar";



const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      
      <div className="max-w-7xl mx-auto min-h-screen px-2 md:px-4 lg:px-6 pt-4">
        {children}
      </div>
      {/* <Footer /> */}
      <MobileBottomNav />
    </div>
  );
};

export default DashboardLayout;
