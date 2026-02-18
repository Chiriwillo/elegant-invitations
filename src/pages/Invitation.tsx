import { useParams } from "react-router-dom";
import { demoInvitation } from "@/lib/demo-data";
import HeroSection from "@/components/invitation/HeroSection";
import MusicPlayer from "@/components/invitation/MusicPlayer";
import CountdownSection from "@/components/invitation/CountdownSection";
import ItinerarySection from "@/components/invitation/ItinerarySection";
import DressCodeSection from "@/components/invitation/DressCodeSection";
import GiftsSection from "@/components/invitation/GiftsSection";
import GallerySection from "@/components/invitation/GallerySection";
import RsvpSection from "@/components/invitation/RsvpSection";
import FooterSection from "@/components/invitation/FooterSection";

const Invitation = () => {
  const { slug } = useParams<{ slug: string }>();

  // V1: always use demo data. With Cloud, fetch by slug from DB.
  const data = demoInvitation;

  return (
    <div className="min-h-screen bg-background">
      <MusicPlayer url={data.musica_url} />
      <HeroSection data={data} />
      <CountdownSection targetDate={data.fecha_evento} />
      <ItinerarySection ceremonia={data.ceremonia} recepcion={data.recepcion} />
      <DressCodeSection text={data.dress_code} />
      <GiftsSection regalos={data.regalos} transferencia={data.transferencia} />
      <GallerySection images={data.galeria} />
      <RsvpSection
        invitationSlug={data.slug}
        fechaEvento={data.fecha_evento}
        nombreFestejada={data.nombre_festejada}
        whatsapp={data.whatsapp_numero}
        template={data.mensaje_whatsapp_template}
        recepcionNombre={data.recepcion.nombre}
        recepcionDireccion={data.recepcion.direccion}
      />
      <FooterSection nombreFestejada={data.nombre_festejada} />
    </div>
  );
};

export default Invitation;
