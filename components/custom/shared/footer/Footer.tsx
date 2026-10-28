"use client";

import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaLocationDot, FaWhatsapp, FaYoutube } from "react-icons/fa6";
import { Mail } from "lucide-react";
import { IoMdMail } from "react-icons/io";

export default function Footer() {
  const appStoreUrl =
    "https://res.cloudinary.com/dtges64tg/image/upload/w_120,h_40,f_auto,q_auto/v1759399126/appstore_waa00a.png";
  const googlePlayUrl =
    "https://res.cloudinary.com/dtges64tg/image/upload/w_120,h_40,f_auto,q_auto/v1759399057/googleplay_kxh8bu.png";

  // logged-in check (your app uses currentUser.id)
  const currentUser = {
    email: "johndoe@gmail.com",
    id : 1
  };
  const isLoggedIn = Boolean(currentUser?.id);
  const settings = {
  logo: "https://res.cloudinary.com/dsxmcn2mq/image/upload/v1793168158/dressenlogo_h2qkni.jpg",

  contactAndSocial: {
    facebookUrl: [
      "https://www.facebook.com/chaitygroup/",
    ],

    youtubeUrl: [
      "https://www.youtube.com/@ChaityGroup-i2j",
    ],

    email: "support@chaity.com",

    whatsappLink: [
      "https://wa.me/8801909008004",
    ],

    phone: "+8801000000000",

    address: "Tipurdi, Sonargaon , Bangladesh",
  },

  returnPolicy: {
    title: "Return & Exchange",
  },

  privacyPolicy: {
    title: "Privacy Policy",
  },
};
  // const sellerHref = isLoggedIn ? "/sr" : "/auth/login";

  const sellerHref = "https://dressen-admin-panel-gamma.vercel.app/auth/login";

  return (
    <footer className="bg-white shadow-t shadow-sm border-t border-neutral py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="mb-6">
              {settings?.logo ? (
                <Image
                  src={settings.logo}
                  alt="Chaity Logo"
                  width={120}
                  height={40}
                  className="h-10 w-auto mb-1"
                />
              ) : (
                <h2 className="text-2xl font-bold text-primary-background mb-1">Caity Group</h2>
              )}
              <p className="text-sm text-gray-600 mb-6">
                Connect with our social media platforms
              </p>

              {/* Social Media Icons */}
              <div className="space-y-3 mb-6">
                <div className="text-sm font-medium text-gray-700 mb-2">
                  Follow Us:
                </div>
                <div className="flex flex-col gap-2">
                  {settings?.contactAndSocial?.facebookUrl?.map((url, index) => {
                    const labels = ['Dressen Facebook Page', 'Dressen Facebook Page', 'Dressen Facebook Page'];
                    return (
                      <a
                        key={index}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                      >
                        <div className="w-6 h-6 bg-primary-foreground rounded-full flex items-center justify-center">
                          <FaFacebook className="w-full h-full text-blue-600" />
                        </div>
                        {labels[index] || `Facebook Page ${index + 1}`}
                      </a>
                    );
                  })}
                  {settings?.contactAndSocial?.youtubeUrl?.[0] && (
                    <a
                      href={settings.contactAndSocial.youtubeUrl[0]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-gray-600 hover:text-red-600 transition-colors"
                    >
                      <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center">
                        <FaYoutube  className="text-primary-foreground w-full"/>
                      </div>
                      Chaity Youtube Channel
                    </a>
                  )}
                </div>
              </div>

              {/* App Store Buttons */}
              <div className="flex gap-3">
                <Image
                  src={appStoreUrl}
                  alt="Download on the App Store"
                  width={120}
                  height={40}
                  className="rounded"
                />
                <Image
                  src={googlePlayUrl}
                  alt="Get it on Google Play"
                  width={120}
                  height={40}
                  className="rounded"
                />
              </div>
            </div>
          </div>

          {/* About Section */}
          <div>
            <h3 className="font-semibold text-black mb-4">About</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="/faqs-page" className="hover:text-black transition-colors">
                  FAQ
                </Link>
              </li>
              
               <li>
                <Link href="/return-policy" className="hover:text-black transition-colors">
                  {settings?.returnPolicy?.title || 'Return & Exchange'}
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-black transition-colors">
                  {settings?.privacyPolicy?.title || 'Privacy Policy'}
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-black transition-colors">
                  Search
                </a>
              </li>
             
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="font-semibold text-black mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a
                  href={`mailto:${settings?.contactAndSocial?.email || 'dressenbd@gmail.com'}`}
                  className="hover:text-black transition-colors flex items-center gap-2"
                >
                  <IoMdMail className="h-5 w-5" />
                  {settings?.contactAndSocial?.email || 'dressenbd@gmail.com'}
                </a>
              </li>
              <li>
                <a
                  href={(() => {
                    const whatsappLink = settings?.contactAndSocial?.whatsappLink?.[0];
                    const phone = settings?.contactAndSocial?.phone || '+88019090008004';
                    
                    // If whatsappLink exists and is a proper URL, use it
                    if (whatsappLink && (whatsappLink.startsWith('https://wa.me/') || whatsappLink.startsWith('https://api.whatsapp.com/'))) {
                      return whatsappLink;
                    }
                    
                    // Otherwise, create proper WhatsApp URL from phone number
                    const cleanPhone = phone.replace(/[^0-9]/g, ''); // Remove non-numeric characters
                    return `https://wa.me/${cleanPhone}`;
                  })()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-600 transition-colors flex items-center gap-2"
                >
                  <FaWhatsapp className="text-green-500 h-5 w-5"/>
                  {settings?.contactAndSocial?.phone || '+88 019090008004'}
                </a>
              </li>
              <li className="text-sm">
                <div className="flex items-start gap-2">
                  <FaLocationDot  className="h-5 w-5" />
                  <p className="text-gray-500">
                    {settings?.contactAndSocial?.address || 'Kazla, Dhaka, Bangladesh'}
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Shop Section */}
          <div>
            <h3 className="font-semibold text-black mb-4">Shop</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              
               <li>
                <a href="/product-listing" className="hover:text-black transition-colors">
                  Shop
                </a>
              </li>
              <li>
                <Link href="/tracking-order" className="hover:text-black transition-colors">
                  Track Your Order
                </Link>
              </li>
              <li>
                <a
                  href="https://dressen-admin-panel-gamma.vercel.app/auth/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black transition-colors"
                >
                  Dressen Admin
                </a>
              </li>
              
             
            </ul>
          </div>

          {/* Our Information Section */}
          <div>
            <h3 className="font-semibold text-black mb-4">Our Information</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              
              <li>
                <a href="/about" className="hover:text-black transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact-us" className="hover:text-black transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12  pt-8 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Dressen Ltd. All rights reserved - Design &amp; Developed by <span className="text-md">Chaity Composite Ltd IT Team</span> 
          </p>
        </div>
      </div>
    </footer>
  );
}
