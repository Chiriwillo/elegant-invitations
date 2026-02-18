import { Shirt } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import OrnamentDivider from "./OrnamentDivider";

interface Props {
  text: string;
}

const DressCodeSection = ({ text }: Props) => (
  <>
    <OrnamentDivider />
    <AnimatedSection className="py-12 px-6 text-center max-w-xl mx-auto">
      <Shirt className="w-10 h-10 text-primary mx-auto mb-4" />
      <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">Código de vestimenta</h2>
      <p className="font-sans text-muted-foreground leading-relaxed">{text}</p>
    </AnimatedSection>
  </>
);

export default DressCodeSection;
