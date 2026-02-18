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
  nombre_festejada: "Valentina García",
  subtitulo: "Mis XV Años",
  fecha_evento: "2026-06-14T18:00:00-06:00",
  imagen_portada: heroImage,
  musica_url: "",
  ceremonia: {
    nombre: "Misa de Acción de Gracias",
    hora: "18:00 hrs",
    direccion: "Parroquia de San José, Av. Juárez 120, Col. Centro, Guadalajara, Jal.",
    maps_url: "https://maps.google.com/?q=Parroquia+de+San+Jose+Guadalajara",
  },
  recepcion: {
    nombre: "Recepción y Fiesta",
    hora: "20:00 hrs",
    direccion: "Salón La Hacienda, Blvd. Puerta de Hierro 4965, Zapopan, Jal.",
    maps_url: "https://maps.google.com/?q=Salon+La+Hacienda+Zapopan",
  },
  dress_code: "Formal / Elegante — Colores sugeridos: rosa, dorado, champagne. Evitar blanco.",
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
    beneficiario: "María García López",
  },
  galeria: [gallery1, gallery2, gallery3],
  whatsapp_numero: "523312345678",
  mensaje_whatsapp_template:
    "¡Hola! Soy {nombre} y quiero confirmar mi asistencia a los XV de Valentina. Asistencia: {asistencia}. Personas: {cantidad}.",
};
