"use client"

import { Button } from "@/shared/ui/button"
import { Input } from "@/shared/ui/input"
import { Linkedin, Facebook, Twitter } from "lucide-react"
import { useTranslations } from "next-intl"

export default function Footer() {
  const t = useTranslations("footer")

  return (
    <footer className="w-full py-8">
      <div className="container">
        <div style={{ borderBottomLeftRadius: "0px",borderBottomRightRadius: "0px" }} className="bg-gray-800 rounded-2xl p-8">
          {/* Top section with navigation and social icons */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            {/* Navigation links */}
            <nav className="flex flex-wrap gap-6 mb-4 md:mb-0">
              <a href="#" className="text-white text-sm font-medium hover:text-gray-300 transition-colors underline">
                {t("nav.aboutUs")}
              </a>
              <a href="#" className="text-white text-sm font-medium hover:text-gray-300 transition-colors underline">
                {t("nav.services")}
              </a>
              <a href="#" className="text-white text-sm font-medium hover:text-gray-300 transition-colors underline">
                {t("nav.useCases")}
              </a>
              <a href="#" className="text-white text-sm font-medium hover:text-gray-300 transition-colors underline">
                {t("nav.pricing")}
              </a>
              <a href="#" className="text-white text-sm font-medium hover:text-gray-300 transition-colors underline">
                {t("nav.blog")}
              </a>
            </nav>

            {/* Social icons */}
            <div className="flex gap-3">
              <a href="#" className="text-white hover:text-gray-300 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Contact and newsletter section */}
          <div className="bg-gray-700 rounded-xl p-6 mb-6">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Contact information */}
              <div className="flex-1">
                <div className="bg-blue-500 text-white text-sm font-medium px-3 py-1 rounded inline-block mb-4">
                  {t("contact.title")}
                </div>
                <div className="space-y-2 text-white text-sm">
                  <p>
                    {/* Added translation for email */}
                    {t("contact.email")}
                  </p>
                  <p>
                    {/* Added translation for phone */}
                    {t("contact.phone")}: +992 10 77 90 777
                  </p>
                  <p>
                    {/* Added translation for address */}
                    {t("contact.address")}: Tajikistan Dushanbe Ayni 55
                  </p>
                </div>
              </div>

              {/* Newsletter signup */}
              <div className="flex-1 lg:max-w-md">
                <div className="flex gap-3">
                  <Input
                    type="email"
                    placeholder={/* Added translation for email placeholder */ t("newsletter.emailPlaceholder")}
                    className="bg-gray-600 border-gray-600 text-white placeholder:text-gray-400 flex-1"
                  />
                  <Button className="bg-blue-500 hover:bg-blue-600 text-white px-6 whitespace-nowrap">
                    {t("newsletter.subscribeButton")}
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom section with copyright and privacy policy */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-4 border-t border-gray-600">
            <p className="text-white text-sm mb-2 md:mb-0">
              {/* Added translation for copyright */}
              {t("bottom.copyright")}
            </p>
            <a href="#" className="text-white text-sm hover:text-gray-300 transition-colors underline">
              {t("bottom.privacyPolicy")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
