import heroImage from "@/assets/hero-quinceanera.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";

export interface CeremonyInfo {
  nombre: string;
  hora: string;
  direccion: string;
  maps_url: string;
}

export interface Regalo {
  titulo: string;
  descripcion: string;
  url: string;
}

export interface Transferencia {
  banco: string;
  cuenta: string;
  clabe: string;
  beneficiario: string;
}

export interface InvitationData {
  id: string;
  slug: string;
  nombre_festejada: string;
  subtitulo: string;
  presentada_por: string;
  fecha_evento: string;
  imagen_portada: string;
  musica_url: string;
  ceremonia: CeremonyInfo;
  recepcion: CeremonyInfo;
  dress_code: string;
  regalos: Regalo[];
  transferencia?: Transferencia;
  galeria: string[];
  whatsapp_numero: string;
  mensaje_whatsapp_template: string;
}

export const demoInvitation: InvitationData = {
  id: "demo-001",
  slug: "demo",
  nombre_festejada: "Xiomara Nicole García Cerda",
  subtitulo: "Mis XV Años",
  presentada_por: "Mary López Martinez",
  fecha_evento: "2025-02-28T18:00:00-06:00",
  imagen_portada: heroImage,
  musica_url: "",
  ceremonia: {
    nombre: "Misa de Acción de Gracias",
    hora: "6:00 pm",
    direccion: "Parroquia San Alfonso María de Ligorio, Col. Nueva Madero",
    maps_url: "https://maps.google.com/?q=Parroquia+San+Alfonso+Maria+de+Ligorio+Nueva+Madero",
  },
  recepcion: {
    nombre: "Recepción",
    hora: "8:00 pm",
    direccion: "Casino Romano, Av. Aztlán #7301, Valle de Santa Lucía",
    maps_url: "https://maps.google.com/?q=Casino+Romano+Av+Aztlan+7301+Valle+de+Santa+Lucia",
  },
  dress_code: "Formal — Se les invita cordialmente a no vestir de color rojo.",
  regalos: [
    {
      titulo: "Mesa de regalos Amazon",
      descripcion: "Lista de regalos seleccionados con mucho cariño",
      url: "https://www.amazon.com.mx",
    },
    {
      titulo: "Liverpool",
      descripcion: "Evento #12345678",
      url: "https://www.liverpool.com.mx",
    },
  ],
  transferencia: {
    banco: "BBVA México",
    cuenta: "1234 5678 9012",
    clabe: "012320001234567890",
    beneficiario: "Mary López Martinez",
  },
  galeria: [gallery1, gallery2, gallery3],
  whatsapp_numero: "528127634836",
  mensaje_whatsapp_template:
    "¡Hola! Soy {nombre} y quiero confirmar mi asistencia a los XV de Xiomara Nicole. Asistencia: {asistencia}. Personas: {cantidad}.",
};
