import { Gift, ExternalLink, Copy, Check } from "lucide-react";
import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import OrnamentDivider from "./OrnamentDivider";
import type { Regalo, Transferencia } from "@/lib/demo-data";

interface Props {
  regalos: Regalo[];
  transferencia?: Transferencia;
}

const CopyButton = ({ text }: { text: string }) => {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button
      onClick={copy}
      className="inline-flex items-center gap-1 text-primary hover:text-primary/80 transition-colors text-sm"
    >
      {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
      {copied ? "Copiado" : "Copiar"}
    </button>
  );
};

const GiftsSection = ({ regalos, transferencia }: Props) => (
  <>
    <OrnamentDivider />
    <AnimatedSection className="py-8 md:py-12 px-4 md:px-6 text-center">
      <Gift className="w-8 md:w-10 h-8 md:h-10 text-primary mx-auto mb-4" />
      <h2 className="text-2xl md:text-4xl font-serif text-foreground mb-4">Mesa de regalos</h2>
      <p className="font-sans text-sm md:text-base text-muted-foreground mb-8 md:mb-10 max-w-md mx-auto">
        Tu presencia es el mejor regalo, pero si deseas obsequiarme algo, aquí tienes algunas opciones.
      </p>

      <div className="flex flex-col md:flex-row items-stretch justify-center gap-4 md:gap-6 max-w-2xl mx-auto mb-8 md:mb-10">
        {regalos.map((r, i) => (
          <AnimatedSection
            key={i}
            delay={i * 0.15}
            className="bg-card border border-border rounded-lg p-6 flex-1 text-center"
          >
            <h3 className="font-serif font-semibold text-foreground mb-2 text-lg">{r.titulo}</h3>
            <p className="text-xs md:text-sm font-sans text-muted-foreground mb-4">{r.descripcion}</p>
            <a
              href={r.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs md:text-sm font-sans text-primary hover:text-primary/80 transition-colors"
            >
              Ir a la tienda <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </AnimatedSection>
        ))}
      </div>

      {transferencia && (
        <AnimatedSection delay={0.3} className="bg-card border border-border rounded-lg p-6 max-w-sm mx-auto text-left text-sm md:text-base">
          <h3 className="font-serif font-semibold text-foreground text-center mb-4">
            Transferencia bancaria
          </h3>
          <div className="space-y-3 text-xs md:text-sm font-sans">
            {[
              { label: "Banco", value: transferencia.banco },
              { label: "Cuenta", value: transferencia.cuenta },
              { label: "CLABE", value: transferencia.clabe },
              { label: "Beneficiario", value: transferencia.beneficiario },
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-between gap-2">
                <div className="min-w-0">
                  <span className="text-muted-foreground">{item.label}: </span>
                  <span className="text-foreground break-all">{item.value}</span>
                </div>
                <CopyButton text={item.value} />
              </div>
            ))}
          </div>
        </AnimatedSection>
      )}
    </AnimatedSection>
  </>
);

export default GiftsSection;
