"use client";

import { PulsatingButton } from "@/shared/magicui/pulsating-button";
import * as motion from "motion/react-client";
import { Card, CardContent } from "@/shared/ui/card";
import Reviews from "@/widgets/reviews/reviews";
import {
  Accessibility,
  ArrowRight,
  CheckCheck,
  CrosshairIcon,
  LucideIndentDecrease,
  MonitorSmartphone,
  PlaneTakeoffIcon,
} from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { MacbookScroll } from "@/shared/ui/macbook-scroll";
import { useEffect, useState } from "react";
import HeroSection from "@/widgets/hero/hero";

const dataTeam = [
  {
    name: {
      en: "Isfandiyor Zabirov",
      ru: "Исфандиёр Забиров",
      tj: "Исфандиёр Забиров",
    },
    position: "Backend Developer",
    image: "/isfandiyor.jpg",
  },
  {
    name: {
      en: "Ismoil Sufonqulzoda",
      ru: "Исмоил Суфонкулзода",
      tj: "Исмоил Суфонкулзода",
    },
    position: "Frontend Developer",
    image: "/ismoil.jpg",
  },
  {
    name: {
      en: "Eraj Ahmedov",
      ru: "Эраж Ахмедов",
      tj: "Эраж Ахмедов",
    },
    position: "Designer + Frontend Developer",
    image: "/eraj.jpeg",
  },
  {
    name: {
      en: "Narzullozoda Sakhijon",
      ru: "Нарзуллозода Сахиджон",
      tj: "Нарзуллозода Сахиджон",
    },
    position: "Designer + Frontend Developer",
    image: "/sakhijon.webp",
  },
  {
    name: {
      en: "Isfandiyor Zabirov",
      ru: "Исфандиёр Забиров",
      tj: "Исфандиёр Забиров",
    },
    position: "Backend Developer",
    image: "/isfandiyor.jpg",
  },
];

interface HomePageProps {
  params: {
    locale: string;
  };
}
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const fadeUpLeft = {
  hidden: { opacity: 0, x: 50, y: 50 },
  visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.8 } },
};

const fadeUpRight = {
  hidden: { opacity: 0, x: -50, y: 50 },
  visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.8 } },
};

const HomePage = ({ params: { locale } }: HomePageProps) => {
  const t = useTranslations("home");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => setIsClient(true), []);

  return (
    <div className="container">
      <HeroSection />

      {/* plus section */}
      <section className="py-16 md:py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
            {t("whyOnline.title")}
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left  */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={container}
            className="space-y-8"
          >
            <motion.div variants={fadeUpRight} className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-blue-600 dark:text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-foreground">
                  {t("whyOnline.availability.title")}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t("whyOnline.availability.description")}
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeUpLeft} className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-blue-600 dark:text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-foreground">
                  {t("whyOnline.sync.title")}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t("whyOnline.sync.description")}
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeUpRight} className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-blue-600 dark:text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-foreground">
                  {t("whyOnline.backup.title")}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t("whyOnline.backup.description")}
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeUpLeft} className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-blue-600 dark:text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-foreground">
                  {t("whyOnline.analytics.title")}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t("whyOnline.analytics.description")}
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right*/}
          <div className="space-y-6">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              className="text-center space-y-2"
            >
              <h3 className="text-xl font-semibold text-foreground">
                {t("whyOnline.traditional")}
              </h3>
              <p className="text-muted-foreground">{t("whyOnline.vs")}</p>
              <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
                {t("whyOnline.online")}
              </h3>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={container}
              className="space-y-3"
            >
              <motion.div
                variants={fadeUpLeft}
                className="grid grid-cols-2 gap-2"
              >
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg px-4 py-3 text-center">
                  <span className="text-sm text-red-700 dark:text-red-300">
                    {t("whyOnline.paperRecords")}
                  </span>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg px-4 py-3 text-center">
                  <span className="text-sm text-green-700 dark:text-green-300">
                    {t("whyOnline.outdated")}
                  </span>
                </div>
              </motion.div>

              <motion.div
                variants={fadeUpRight}
                className="grid grid-cols-2 gap-2"
              >
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg px-4 py-3 text-center">
                  <span className="text-sm text-green-700 dark:text-green-300">
                    {t("whyOnline.digitalAccounting")}
                  </span>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg px-4 py-3 text-center">
                  <span className="text-sm text-green-700 dark:text-green-300">
                    {t("whyOnline.modern")}
                  </span>
                </div>
              </motion.div>

              <motion.div
                variants={fadeUpLeft}
                className="grid grid-cols-2 gap-2"
              >
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg px-4 py-3 text-center">
                  <span className="text-sm text-red-700 dark:text-red-300">
                    {t("whyOnline.manualCalculations")}
                  </span>
                </div>
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg px-4 py-3 text-center">
                  <span className="text-sm text-red-700 dark:text-red-300">
                    {t("whyOnline.errors")}
                  </span>
                </div>
              </motion.div>

              <motion.div
                variants={fadeUpRight}
                className="grid grid-cols-2 gap-2"
              >
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg px-4 py-3 text-center">
                  <span className="text-sm text-green-700 dark:text-green-300">
                    {t("whyOnline.autoCalculations")}
                  </span>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg px-4 py-3 text-center">
                  <span className="text-sm text-green-700 dark:text-green-300">
                    {t("whyOnline.accuracy")}
                  </span>
                </div>
              </motion.div>

              <motion.div
                variants={fadeUpLeft}
                className="grid grid-cols-2 gap-2"
              >
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg px-4 py-3 text-center">
                  <span className="text-sm text-red-700 dark:text-red-300">
                    {t("whyOnline.localStorage")}
                  </span>
                </div>
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg px-4 py-3 text-center">
                  <span className="text-sm text-red-700 dark:text-red-300">
                    {t("whyOnline.riskOfLoss")}
                  </span>
                </div>
              </motion.div>

              <motion.div
                variants={fadeUpRight}
                className="grid grid-cols-2 gap-2"
              >
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg px-4 py-3 text-center">
                  <span className="text-sm text-green-700 dark:text-green-300">
                    {t("whyOnline.cloudStorage")}
                  </span>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg px-4 py-3 text-center">
                  <span className="text-sm text-green-700 dark:text-green-300">
                    {t("whyOnline.security")}
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* our  platform */}
      <section className="w-full overflow-hidden" suppressHydrationWarning>
        {isClient ? (
          <MacbookScroll
            title={
              <p
                className="text-6xl text-center md:text-4xl caveat mb-4 text-foreground"
                suppressHydrationWarning
              >
                {t("platform.title")}
              </p>
            }
            src="/my-app.png"
            showGradient={false}
          />
        ) : null}
      </section>

      {/* feauters platform */}
      <section className="py-16 md:py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
            {t("features.title")}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Row 1 */}
          <motion.div whileHover={{ scale: 1.043 }} whileTap={{ scale: 0.95 }}>
            <Card className="bg-pink-50 dark:bg-pink-900/20 cursor-pointer border-pink-200 dark:border-pink-800">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mx-auto">
                  <Accessibility className="text-blue-500" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {t("features.accessibility.title")}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t("features.accessibility.description")}
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div whileHover={{ scale: 1.043 }} whileTap={{ scale: 0.95 }}>
            <Card className="bg-green-50 dark:bg-green-900/20 cursor-pointer border-green-200 dark:border-green-800">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mx-auto">
                  <CrosshairIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {t("features.crossPlatform.title")}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t("features.crossPlatform.description")}
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div whileHover={{ scale: 1.043 }} whileTap={{ scale: 0.95 }}>
            <Card className="bg-blue-50 dark:bg-blue-900/20 cursor-pointer border-blue-200 dark:border-blue-800">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mx-auto">
                  <PlaneTakeoffIcon className="text-blue-500" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {t("features.planning.title")}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t("features.planning.description")}
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div whileHover={{ scale: 1.043 }} whileTap={{ scale: 0.95 }}>
            <Card className="bg-pink-50 dark:bg-pink-900/20 cursor-pointer border-pink-200 dark:border-pink-800">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mx-auto">
                  <LucideIndentDecrease className="text-blue-500" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {t("features.automation.title")}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t("features.automation.description")}
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div whileHover={{ scale: 1.043 }} whileTap={{ scale: 0.95 }}>
            <Card className="bg-green-50 dark:bg-green-900/20 cursor-pointer border-green-200 dark:border-green-800">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mx-auto">
                  <MonitorSmartphone className="text-blue-500" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {t("features.smartAnalytics.title")}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t("features.smartAnalytics.description")}
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div whileHover={{ scale: 1.043 }} whileTap={{ scale: 0.95 }}>
            <Card className="bg-blue-50 dark:bg-blue-900/20 cursor-pointer border-blue-200 dark:border-blue-800">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mx-auto">
                  <CheckCheck className="text-blue-500" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {t("features.familyGoals.title")}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t("features.familyGoals.description")}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* history */}
      <section id="about">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
            {t("history.title")}
          </h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div className="space-y-6">
            <p className="text-3xl caveat  leading-relaxed caveat font-handwriting">
              {t("history.description")}
            </p>
          </div>

          {/* Right */}
          <div className="relative max-w-[600px] max-h-[300px] w-full h-full">
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl w-full h-full text-center">
              <div className="flex transform rotate-330 absolute bg-white dark:bg-gray-800 rounded border border-blue-500 dark:border-blue-400 text-xs px-3 py-1 top-0 -left-10 items-center justify-center gap-2">
                <img
                  src={"/logo.png"}
                  alt="logo FamilyBudget"
                  className="w-40 h-10"
                />
              </div>
              <div className="absolute top-4 -right-6 bg-black dark:bg-gray-800 text-xs px-3 py-1 rounded transform rotate-40">
                <img
                  src={"/technohub.webp"}
                  alt="logo FamilyBudget"
                  className="w-40 h-10"
                />
              </div>
              <Image
                src="/photo-techno-hub.jpeg"
                alt="FamilyBudget"
                width={600}
                height={400}
                className="w-[600px] h-[300px] rounded-2xl"
                priority={true}
                unoptimized={true}
              />
            </div>
          </div>
        </div>
      </section>

      {/* our team */}
      <section className="py-12 md:py-14">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
            {t("team.title")}
          </h2>
        </div>
        <div className="grid md:grid-cols-3 grid-rows-1 gap-16 items-center justify-center">
          {dataTeam.slice(0, 3).map((item, index) => (
            <div key={index} className="text-center m-auto space-y-4">
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-gray-200 dark:border-gray-700">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={
                    item.name[locale as keyof typeof item.name] || item.name.en
                  }
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground">
                  {item.name[locale as keyof typeof item.name] || item.name.en}
                </h3>
                <p className="text-sm text-muted-foreground">{item.position}</p>
              </div>
            </div>
          ))}
        </div>
        <div
          id="reviews"
          className="flex flex-row max-w-[700px] m-auto mt-10  gap-16 items-center justify-center"
        >
          {dataTeam.slice(3, 5).map((item, index) => (
            <div key={index} className="text-center m-auto space-y-4">
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-gray-200 dark:border-gray-700">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={
                    item.name[locale as keyof typeof item.name] || item.name.en
                  }
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground">
                  {item.name[locale as keyof typeof item.name] || item.name.en}
                </h3>
                <p className="text-sm text-muted-foreground">{item.position}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
            {t("reviews.title")}
          </h2>
        </div>
        <Reviews />
      </section>

      <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8">
        <div className="text-center space-y-4 md:space-y-6 lg:space-y-8 max-w-6xl mx-auto">
          {/* Logo and Title */}
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8">
            <img
              src="/mini-logoo.png"
              className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64"
              alt="logo"
            />
            <h1 className="font-bold caveat text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-foreground">
              FamilyBudget
            </h1>
          </div>

          {/* Subtitle */}
          <div className="space-y-1 sm:space-y-2">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl 2xl:text-6xl caveat text-foreground font-light italic leading-relaxed px-2">
              {t("cta.subtitle1")}
            </p>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl 2xl:text-6xl caveat text-foreground font-light italic leading-relaxed px-2">
              {t("cta.subtitle2")}
            </p>
          </div>

          {/* CTA Button */}
          <div className="pt-2 md:pt-4">
            <PulsatingButton
              pulseColor="#bfdbfe"
              className="bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white mx-auto px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-3 text-sm sm:text-base md:text-lg rounded-lg font-medium transition-all duration-200"
            >
              {t("cta.button")}
            </PulsatingButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
