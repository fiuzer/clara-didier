"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import { cn } from "@/lib/utils";

type CarouselImage = {
  src: string;
  alt: string;
};

type ImageCarouselProps = {
  images: readonly CarouselImage[];
  className?: string;
};

const swipeThreshold = 70;

export function ImageCarousel({ images, className }: ImageCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const reduceMotion = useReducedMotion();
  const hasNavigation = images.length > 1;

  const goToSlide = (nextIndex: number) => {
    if (!hasNavigation) return;

    const normalizedIndex = (nextIndex + images.length) % images.length;
    setDirection(normalizedIndex > activeIndex || (activeIndex === images.length - 1 && normalizedIndex === 0) ? 1 : -1);
    setActiveIndex(normalizedIndex);
  };

  const paginate = (nextDirection: number) => {
    setDirection(nextDirection);
    setActiveIndex((current) => (current + nextDirection + images.length) % images.length);
  };

  if (images.length === 0) return null;

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem]">
        <AnimatePresence custom={direction} initial={false} mode="wait">
          <motion.div
            key={images[activeIndex].src}
            custom={direction}
            className={cn("absolute inset-0", hasNavigation && "cursor-grab active:cursor-grabbing")}
            drag={hasNavigation ? "x" : false}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.16}
            onDragEnd={(_, info) => {
              if (!hasNavigation) return;
              if (info.offset.x <= -swipeThreshold) paginate(1);
              if (info.offset.x >= swipeThreshold) paginate(-1);
            }}
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, x: direction >= 0 ? 42 : -42 }}
            animate={{ opacity: 1, x: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, x: direction >= 0 ? -42 : 42 }}
            transition={{ duration: reduceMotion ? 0.2 : 0.34, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src={images[activeIndex].src}
              alt={images[activeIndex].alt}
              fill
              sizes="(max-width: 640px) 88vw, 448px"
              className="object-cover"
              priority={activeIndex === 0}
            />
          </motion.div>
        </AnimatePresence>

        {hasNavigation ? (
          <>
            <button
              type="button"
              onClick={() => paginate(-1)}
              aria-label="Foto anterior"
              className="absolute left-3 top-1/2 z-10 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[color:var(--gold-200)] bg-white/88 text-lg text-[color:var(--gold-800)] shadow-[0_18px_34px_-24px_rgba(36,28,10,0.6)] transition hover:bg-white"
            >
              {"<-"}
            </button>
            <button
              type="button"
              onClick={() => paginate(1)}
              aria-label="Próxima foto"
              className="absolute right-3 top-1/2 z-10 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[color:var(--gold-200)] bg-white/88 text-lg text-[color:var(--gold-800)] shadow-[0_18px_34px_-24px_rgba(36,28,10,0.6)] transition hover:bg-white"
            >
              {"->"}
            </button>
            <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
              {images.map((image, index) => (
                <button
                  key={image.src}
                  type="button"
                  onClick={() => goToSlide(index)}
                  aria-label={`Ir para foto ${index + 1}`}
                  className={cn(
                    "h-2.5 rounded-full border border-white/70 bg-white/55 transition-all",
                    index === activeIndex ? "w-6" : "w-2.5",
                  )}
                />
              ))}
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}
