"use client";

import type React from "react";

import { Button } from "@/shared/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/select";
import { Moon, Sun, Home, Info, Phone, Star } from "lucide-react";
import { useTheme } from "next-themes";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import Cookies from "js-cookie";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import { AnimatedThemeToggler } from "@/shared/magicui/animated-theme-toggler";

export default function Header() {
  const { theme, setTheme } = useTheme();
  const locale = useLocale();
  const t = useTranslations("header");
  const [selectedLanguage, setSelectedLanguage] = useState(locale);
  const router = useRouter();
  const pathname = usePathname();
  if (pathname === "/login" || pathname === "/register") {
    return null;
  }

  function handleChangeSelect(locale: string) {
    Cookies.set("NEXT_LOCALE", locale);
    router.refresh();
    setSelectedLanguage(locale);
  }
  const languages = [
    { code: "en", name: "English", flag: "/en.png" },
    { code: "ru", name: "Руский", flag: "/ru.png" },
    { code: "tj", name: "Точики", flag: "/tj.png" },
  ];

  const currentLanguage = languages.find(
    (lang) => lang.code === selectedLanguage
  );

  return (
    <>
      <header className="w-full bg-background  sticky top-0 z-50">
        <div className="flex items-center container justify-between">
          <Link href="/">
            <div className="flex items-center gap-2">
              <Image
                src="/mini-logo.png"
                alt="mini logo"
                width={40}
                height={40}
              />
              <p className="hidden caveat md:block text-2xl">FamilyBudget</p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/"> {t("links.home")}</Link>
            <Link href="/#about">{t("links.about")}</Link>
            {/* <Link
              href="/#contact"
              className={
                pathname === "/#contact" ? "text-blue-500 " : " hover:underline"
              }
            >
              {t("links.contact")}
            </Link> */}
            <Link href="/#reviews">{t("links.reviews")}</Link>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Select value={selectedLanguage} onValueChange={handleChangeSelect}>
              <SelectTrigger className="w-auto border-none bg-transparent p-0 h-auto gap-2 hover:bg-accent/50 rounded-md px-2 py-1">
                <SelectValue>
                  <div className="flex items-center gap-2">
                    <Image
                      className="w-[20px]"
                      src={currentLanguage?.flag || "/placeholder.svg"}
                      alt="flag"
                      width={20}
                      height={20}
                    />
                    <span className="text-sm font-medium text-foreground">
                      {currentLanguage?.name}
                    </span>
                  </div>
                </SelectValue>
              </SelectTrigger>
              <SelectContent>
                {languages.map((language) => (
                  <SelectItem key={language.code} value={language.code}>
                    <div className="flex items-center gap-2">
                      <Image
                        className="w-[20px]"
                        src={language?.flag || "/placeholder.svg"}
                        alt="flag"
                        width={20}
                        height={20}
                      />
                      <span>{language.name}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white px-6">
              {t("btn-login")}
            </Button>
            <AnimatedThemeToggler/>
          </div>

          <div className="flex md:hidden items-center gap-2">
            <Button
              size="sm"
              className="bg-blue-500 hover:bg-blue-600 text-white text-xs px-3 py-1"
            >
              {t("btn-login")}
            </Button>
           
          </div>
        </div>
      </header>

      <nav className="fixed bottom-0 left-0 right-0 bg-background border-t border-border md:hidden z-50">
        <div className="flex items-center justify-around px-4 py-2">
          <Link
            href="/"
            className="flex flex-col items-center gap-1 py-2 px-3 rounded-lg hover:bg-accent/50"
          >
            <Home className="h-5 w-5" />
            <span className="text-xs">{t("links.home")}</span>
          </Link>

          <Link
            href="/#about"
            className="flex flex-col items-center gap-1 py-2 px-3 rounded-lg hover:bg-accent/50"
          >
            <Info className="h-5 w-5" />
            <span className="text-xs">{t("links.about")}</span>
          </Link>
          {/*
          <Link
            href="/#contact"
            className="flex flex-col items-center gap-1 py-2 px-3 rounded-lg hover:bg-accent/50"
          >
            <Phone className="h-5 w-5" />
            <span className="text-xs">{t("links.contact")}</span>
          </Link> */}

          <Link
            href="/#reviews"
            className="flex flex-col items-center gap-1 py-2 px-3 rounded-lg hover:bg-accent/50"
          >
            <Star className="h-5 w-5" />
            <span className="text-xs">{t("links.reviews")}</span>
          </Link>

          <div className="flex flex-col items-center gap-1">
            <Select value={selectedLanguage} onValueChange={handleChangeSelect}>
              <SelectTrigger className="w-auto border-none bg-transparent p-0 h-auto">
                <SelectValue>
                  <div className="flex flex-col items-center gap-1 py-2 px-3 rounded-lg hover:bg-accent/50">
                    <Image
                      className="w-5 h-5 rounded-sm"
                      src={currentLanguage?.flag || "/placeholder.svg"}
                      alt="flag"
                      width={20}
                      height={20}
                    />
                    <span className="text-xs">
                      {currentLanguage?.code.toUpperCase()}
                    </span>
                  </div>
                </SelectValue>
              </SelectTrigger>
              <SelectContent>
                {languages.map((language) => (
                  <SelectItem key={language.code} value={language.code}>
                    <div className="flex items-center gap-2">
                      <Image
                        className="w-[20px]"
                        src={language?.flag || "/placeholder.svg"}
                        alt="flag"
                        width={20}
                        height={20}
                      />
                      <span>{language.name}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </nav>
    </>
  );
}
