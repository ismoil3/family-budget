"use client"

import type React from "react"

import { Button } from "@/shared/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/ui/select"
import { Moon, Sun, Home, Info, Phone } from "lucide-react"
import { useTheme } from "next-themes"
import { useRouter } from "next/navigation"
import { useState } from "react"
import Cookies from "js-cookie"
import { useLocale, useTranslations } from "next-intl"
import Link from "next/link"

function NavLink({ href, children, className = "" }: { href: string; children: React.ReactNode; className?: string }) {
    return (
        <Link
            href={href}
            className={`text-sm font-medium text-foreground hover:text-blue-500 transition-colors ${className}`}
        >
            {children}
        </Link>
    )
}

export default function Header() {
    const { theme, setTheme } = useTheme()
    const locale = useLocale()
    const t = useTranslations("header")
    const [selectedLanguage, setSelectedLanguage] = useState(locale)
    const router = useRouter()

    function handleChangeSelect(locale: string) {
        Cookies.set("NEXT_LOCALE", locale)
        router.refresh()
        setSelectedLanguage(locale)
    }
    const languages = [
        { code: "en", name: "English", flag: "/en.png" },
        { code: "ru", name: "Руский", flag: "/ru.png" },
        { code: "tj", name: "Точики", flag: "/tj.png" },
    ]

    const currentLanguage = languages.find((lang) => lang.code === selectedLanguage)

    return (
        <>
            <header className="w-full bg-background     container">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <img className="hidden md:block" src="/logo.png" alt="" />
                        <img className="block md:hidden w-[40px]" src="/mini-logo.png" alt="" />
                    </div>

                    {/* Navigation - Desktop only */}
                    <nav className="hidden md:flex items-center gap-8">
                        <NavLink href="/">{t("links.home")}</NavLink>
                        <NavLink href="/about">{t("links.about")}</NavLink>
                        <NavLink href="/contact">{t("links.contact")}</NavLink>
                    </nav>

                    {/* Right side controls - Desktop only */}
                    <div className="hidden md:flex items-center gap-3">
                        <Select value={selectedLanguage} onValueChange={handleChangeSelect}>
                            <SelectTrigger className="w-auto border-none bg-transparent p-0 h-auto gap-2 hover:bg-accent/50 rounded-md px-2 py-1">
                                <SelectValue>
                                    <div className="flex items-center gap-2">
                                        <img className="w-[20px]" src={currentLanguage?.flag || "/placeholder.svg"} alt="flag" />
                                        <span className="text-sm font-medium text-foreground">{currentLanguage?.name}</span>
                                    </div>
                                </SelectValue>
                            </SelectTrigger>
                            <SelectContent>
                                {languages.map((language) => (
                                    <SelectItem key={language.code} value={language.code}>
                                        <div className="flex items-center gap-2">
                                            <img className="w-[20px]" src={language?.flag || "/placeholder.svg"} alt="flag" />
                                            <span>{language.name}</span>
                                        </div>
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>

                        <Button className="bg-blue-500 hover:bg-blue-600 text-white px-6">{t("btn-login")}</Button>

                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                            className="h-9 w-9"
                        >
                            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                            <span className="sr-only">Toggle theme</span>
                        </Button>
                    </div>

                    {/* Mobile controls - Theme toggle only */}
                    <div className="flex md:hidden items-center gap-2">
                        {/* Login Button */}
                        <Button size="sm" className="bg-blue-500 hover:bg-blue-600 text-white text-xs px-3 py-1">
                            {t("btn-login")}
                        </Button>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                            className="h-9 w-9"
                        >
                            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                            <span className="sr-only">Toggle theme</span>
                        </Button>
                    </div>
                </div>
            </header>

            <nav className="fixed bottom-0 left-0 right-0 bg-background border-t border-border md:hidden z-50">
                <div className="flex items-center justify-around px-4 py-2">
                    {/* Navigation Links */}
                    <NavLink href="/" className="flex flex-col items-center gap-1 py-2 px-3 rounded-lg hover:bg-accent/50">
                        <Home className="h-5 w-5" />
                        <span className="text-xs">{t("links.home")}</span>
                    </NavLink>

                    <NavLink href="/about" className="flex flex-col items-center gap-1 py-2 px-3 rounded-lg hover:bg-accent/50">
                        <Info className="h-5 w-5" />
                        <span className="text-xs">{t("links.about")}</span>
                    </NavLink>

                    <NavLink href="/contact" className="flex flex-col items-center gap-1 py-2 px-3 rounded-lg hover:bg-accent/50">
                        <Phone className="h-5 w-5" />
                        <span className="text-xs">{t("links.contact")}</span>
                    </NavLink>

                    {/* Language Selector */}
                    <div className="flex flex-col items-center gap-1">
                        <Select value={selectedLanguage} onValueChange={handleChangeSelect}>
                            <SelectTrigger className="w-auto border-none bg-transparent p-0 h-auto">
                                <SelectValue>
                                    <div className="flex flex-col items-center gap-1 py-2 px-3 rounded-lg hover:bg-accent/50">
                                        <img className="w-5 h-5 rounded-sm" src={currentLanguage?.flag || "/placeholder.svg"} alt="flag" />
                                        <span className="text-xs">{currentLanguage?.code.toUpperCase()}</span>
                                    </div>
                                </SelectValue>
                            </SelectTrigger>
                            <SelectContent>
                                {languages.map((language) => (
                                    <SelectItem key={language.code} value={language.code}>
                                        <div className="flex items-center gap-2">
                                            <img className="w-[20px]" src={language?.flag || "/placeholder.svg"} alt="flag" />
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
    )
}
