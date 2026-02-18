import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import type { InvitationData } from "@/lib/demo-data";

interface Props {
  data: InvitationData;
}

const HeroSection = ({ data }: Props) => {
  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  const eventDate = new Date(data.fecha_evento);
  const formattedDate = eventDate.toLocaleDateString("es-MX", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${data.imagen_portada})` }}
      />
      <div className="absolute inset-0 bg-foreground/40" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-2xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-primary-foreground/80 text-lg tracking-[0.3em] uppercase font-sans mb-4"
        >
          {data.subtitulo}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif text-primary-foreground font-bold leading-tight mb-6"
        >
          {data.nombre_festejada}
        </motion.h1>

        {data.presentada_por && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-primary-foreground/80 text-base font-sans mb-6"
          >
            La presenta ante la sociedad: <span className="font-semibold">{data.presentada_por}</span>
          </motion.p>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <div className="h-px w-12 bg-primary-foreground/40" />
          <p className="text-primary-foreground/90 font-sans text-lg tracking-wide">
            {formattedDate}
          </p>
          <div className="h-px w-12 bg-primary-foreground/40" />
        </motion.div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          onClick={scrollToContent}
          className="inline-flex flex-col items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors cursor-pointer"
        >
          <span className="text-sm font-sans tracking-widest uppercase">Ver invitación</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </motion.button>
      </div>
    </section>
  );
};

export default HeroSection;
