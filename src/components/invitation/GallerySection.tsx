import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import OrnamentDivider from "./OrnamentDivider";

interface Props {
  images: string[];
}

const GallerySection = ({ images }: Props) => {
  const [current, setCurrent] = useState(0);

  if (!images.length) return null;

  const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));

  return (
    <>
      <OrnamentDivider />
      <AnimatedSection className="py-8 md:py-12 px-4 md:px-6 text-center">
        <h2 className="text-2xl md:text-4xl font-serif text-foreground mb-8 md:mb-10">Galería</h2>

        <div className="relative w-full max-w-4xl mx-auto">
          <div className="w-full bg-black rounded-lg overflow-hidden shadow-lg">
            <img
              src={images[current]}
              alt={`Galería ${current + 1}`}
              className="w-full h-auto object-contain transition-opacity duration-500"
              loading="lazy"
            />
          </div>

          {images.length > 1 && (
            <>
              <button
                onClick={prev}
                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full bg-foreground/30 backdrop-blur-sm text-primary-foreground flex items-center justify-center hover:bg-foreground/50 transition-colors z-10"
              >
                <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
              </button>
              <button
                onClick={next}
                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full bg-foreground/30 backdrop-blur-sm text-primary-foreground flex items-center justify-center hover:bg-foreground/50 transition-colors z-10"
              >
                <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
              </button>
            </>
          )}

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-4 md:mt-6 flex-wrap">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  i === current ? "bg-primary" : "bg-border"
                }`}
              />
            ))}
          </div>

          {/* Counter */}
          <p className="text-sm text-muted-foreground mt-3 md:mt-4">
            {current + 1} / {images.length}
          </p>
        </div>
      </AnimatedSection>
    </>
  );
};

export default GallerySection;
