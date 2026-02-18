import { Church, PartyPopper, MapPin, Clock, Navigation } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import OrnamentDivider from "./OrnamentDivider";
import type { CeremonyInfo } from "@/lib/demo-data";

interface Props {
  ceremonia: CeremonyInfo;
  recepcion: CeremonyInfo;
}

const EventCard = ({
  icon: Icon,
  info,
  delay,
}: {
  icon: typeof Church;
  info: CeremonyInfo;
  delay: number;
}) => (
  <AnimatedSection
    delay={delay}
    className="bg-card rounded-lg p-8 text-center max-w-sm w-full border border-border"
  >
    <Icon className="w-10 h-10 text-primary mx-auto mb-4" />
    <h3 className="text-xl font-serif font-semibold text-foreground mb-4">{info.nombre}</h3>
    <div className="flex items-center justify-center gap-2 text-muted-foreground mb-2">
      <Clock className="w-4 h-4" />
      <span className="font-sans text-sm">{info.hora}</span>
    </div>
    <div className="flex items-start justify-center gap-2 text-muted-foreground mb-6">
      <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
      <span className="font-sans text-sm">{info.direccion}</span>
    </div>
    <a
      href={info.maps_url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 text-sm font-sans text-primary hover:text-primary/80 transition-colors"
    >
      <Navigation className="w-4 h-4" />
      Cómo llegar
    </a>
  </AnimatedSection>
);

const ItinerarySection = ({ ceremonia, recepcion }: Props) => (
  <>
    <OrnamentDivider />
    <AnimatedSection className="py-12 px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-12">Itinerario</h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-3xl mx-auto">
        <EventCard icon={Church} info={ceremonia} delay={0} />
        <EventCard icon={PartyPopper} info={recepcion} delay={0.2} />
      </div>
    </AnimatedSection>
  </>
);

export default ItinerarySection;
