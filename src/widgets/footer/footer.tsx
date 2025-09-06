"use client";

import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { Linkedin, Facebook, Twitter } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="w-full ">
      <div style={{padding: "0px 0px 0px 0px"}} className="container ">
        <div
          style={{
            borderBottomLeftRadius: "0px",
            borderBottomRightRadius: "0px",
          }}
          className="bg-gray-800 rounded-2xl p-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <nav className="flex flex-wrap gap-6 mb-4 md:mb-0">
              <Link
                href="#"
                className="text-white text-sm font-medium hover:text-gray-300 transition-colors underline"
              >
                {t("nav.aboutUs")}
              </Link>
              <Link
                href="#"
                className="text-white text-sm font-medium hover:text-gray-300 transition-colors underline"
              >
                {t("nav.services")}
              </Link>
              <Link
                href="#"
                className="text-white text-sm font-medium hover:text-gray-300 transition-colors underline"
              >
                {t("nav.useCases")}
              </Link>
              <Link
                href="#"
                className="text-white text-sm font-medium hover:text-gray-300 transition-colors underline"
              >
                {t("nav.pricing")}
              </Link>
              <Link
                href="#"
                className="text-white text-sm font-medium hover:text-gray-300 transition-colors underline"
              >
                {t("nav.blog")}
              </Link>
            </nav>

            <div className="flex gap-3">
              <Link
                href="#"
                className="text-white hover:text-gray-300 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-white hover:text-gray-300 transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-white hover:text-gray-300 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div className="bg-gray-700 rounded-xl p-6 mb-6">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="flex-1">
                <div className="bg-blue-500 text-white text-sm font-medium px-3 py-1 rounded inline-block mb-4">
                  {t("contact.title")}
                </div>
                <div className="space-y-2 text-white text-sm">
                  <p>{t("contact.email")}</p>
                  <p>{t("contact.phone")}</p>
                  <p>{t("contact.address")}</p>
                </div>
              </div>

              <div className="flex-1 lg:max-w-md">
                <div className="flex gap-3">
                  <Input
                    type="email"
                    placeholder={t("newsletter.emailPlaceholder")}
                    className="bg-gray-600 border-gray-600 text-white placeholder:text-gray-400 flex-1"
                  />
                  <Button className="bg-blue-500 hover:bg-blue-600 text-white px-6 whitespace-nowrap">
                    {t("newsletter.subscribeButton")}
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-4 border-t border-gray-600">
            <p className="text-white text-sm mb-2 md:mb-0">
              {t("bottom.copyright")}
            </p>
            <Link
              href="#"
              className="text-white text-sm hover:text-gray-300 transition-colors underline"
            >
              {t("bottom.privacyPolicy")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
