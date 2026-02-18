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
      <AnimatedSection className="py-12 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-10">Galería</h2>

        <div className="relative max-w-2xl mx-auto">
          <div className="aspect-[4/3] overflow-hidden rounded-lg">
            <img
              src={images[current]}
              alt={`Galería ${current + 1}`}
              className="w-full h-full object-cover transition-opacity duration-500"
              loading="lazy"
            />
          </div>

          {images.length > 1 && (
            <>
              <button
                onClick={prev}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-foreground/20 backdrop-blur-sm text-primary-foreground flex items-center justify-center hover:bg-foreground/40 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-foreground/20 backdrop-blur-sm text-primary-foreground flex items-center justify-center hover:bg-foreground/40 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-4">
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
        </div>
      </AnimatedSection>
    </>
  );
};

export default GallerySection;
