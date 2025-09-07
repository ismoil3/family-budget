import { AnimatedGradientText } from "@/shared/magicui/animated-gradient-text";
import { PulsatingButton } from "@/shared/magicui/pulsating-button";
import { ShinyButton } from "@/shared/magicui/shiny-button";
import { Carousel, CarouselContent, CarouselItem } from "@/shared/ui/carousel";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import Autoplay from "embla-carousel-autoplay";
import { useRouter } from "next/navigation";
const images = ["/family-budget.png"];
const HeroSection = () => {
  const t = useTranslations("home");
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  const router = useRouter()

  return (
    <div>
      {" "}
      <section className="py-6 mx-auto w-full">
        <ShinyButton className="w-fit m-auto mb-4 flex border-blue-500 text-white justify-center items-center">
          🎉
          <AnimatedGradientText >
            {t("hero.badge")}
          </AnimatedGradientText>
        </ShinyButton>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-tight">
                {t("hero.title")}{" "}
                <span className="text-blue-500 dark:text-blue-400">
                  {t("hero.titleHighlight")}
                </span>
              </h1>

              <p className="text-lg text-muted-foreground text-pretty max-w-lg">
                {t("hero.description")}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <PulsatingButton
              onClick={() => router.push("/login")}
                className="text-lg px-8 text-white bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700"
                pulseColor="#bfdbfe"
              >
                <p  className="flex items-center">
                  {t("hero.cta")}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </p>
              </PulsatingButton>
            </div>
          </div>

          <div className="relative">
            <div className=" rounded-3xl p-8 lg:p-12">
              <Carousel
                plugins={[plugin.current]}
                className="w-full "
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}

              >
                <CarouselContent>
                  {images.map((e, index) => (
                    <CarouselItem key={index}>
                      <Image
                        src={e}
                        alt="Семья управляет бюджетом вместе"
                        className="w-full h-auto rounded-2xl"
                        width={500}
                        height={300}
                        unoptimized={true}
                        priority
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
