import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, MessageCircle, CalendarPlus, Share2, Check } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import OrnamentDivider from "./OrnamentDivider";
import { useToast } from "@/hooks/use-toast";

const rsvpSchema = z.object({
  nombre: z.string().trim().min(1, "Tu nombre es obligatorio").max(100),
  asistencia: z.enum(["si", "no"], { required_error: "Selecciona una opción" }),
  cantidad: z.number().min(1).max(10),
  telefono: z.string().max(20).optional().or(z.literal("")),
  mensaje: z.string().max(500).optional().or(z.literal("")),
});

type RsvpForm = z.infer<typeof rsvpSchema>;

interface Props {
  invitationSlug: string;
  fechaEvento: string;
  nombreFestejada: string;
  whatsapp: string;
  template: string;
  recepcionNombre: string;
  recepcionDireccion: string;
}

const generateICS = (
  fecha: string,
  nombre: string,
  lugar: string,
  direccion: string
) => {
  const start = new Date(fecha);
  const end = new Date(start.getTime() + 5 * 3600000);
  const fmt = (d: Date) =>
    d.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
  const ics = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//XV Años//ES
BEGIN:VEVENT
DTSTART:${fmt(start)}
DTEND:${fmt(end)}
SUMMARY:XV Años de ${nombre}
LOCATION:${lugar} - ${direccion}
DESCRIPTION:Celebración de XV Años de ${nombre}
END:VEVENT
END:VCALENDAR`;
  const blob = new Blob([ics], { type: "text/calendar" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `xv-${nombre.toLowerCase().replace(/\s+/g, "-")}.ics`;
  a.click();
  URL.revokeObjectURL(url);
};

const RsvpSection = ({
  invitationSlug,
  fechaEvento,
  nombreFestejada,
  whatsapp,
  template,
  recepcionNombre,
  recepcionDireccion,
}: Props) => {
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<RsvpForm>({
    resolver: zodResolver(rsvpSchema),
    defaultValues: { cantidad: 1, asistencia: "si" },
  });

  const asistencia = watch("asistencia");

  const onSubmit = async (data: RsvpForm) => {
    // In v1, just log. With Cloud, this would save to DB.
    console.log("RSVP submitted:", data);
    toast({ title: "¡Gracias!", description: "Tu confirmación ha sido registrada." });
    setSubmitted(true);
  };

  const openWhatsApp = () => {
    const form = watch();
    const msg = template
      .replace("{nombre}", form.nombre || "")
      .replace("{asistencia}", form.asistencia === "si" ? "Sí" : "No")
      .replace("{cantidad}", String(form.cantidad || 1));
    window.open(
      `https://wa.me/${whatsapp}?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
  };

  const shareInvitation = async () => {
    const url = window.location.href;
    if (navigator.share) {
      await navigator.share({ title: `XV Años de ${nombreFestejada}`, url });
    } else {
      await navigator.clipboard.writeText(url);
      toast({ title: "Link copiado", description: "El enlace se copió al portapapeles." });
    }
  };

  return (
    <>
      <OrnamentDivider />
      <AnimatedSection className="py-8 md:py-12 px-4 md:px-6 text-center">
        <h2 className="text-2xl md:text-4xl font-serif text-foreground mb-4">
          Confirma tu asistencia
        </h2>
        <p className="font-sans text-sm md:text-base text-muted-foreground mb-8 md:mb-10 max-w-md mx-auto">
          Espero contar con tu presencia en este día tan especial.
        </p>

        {submitted ? (
          <div className="max-w-md mx-auto bg-card border border-border rounded-lg p-6 md:p-8">
            <Check className="w-10 h-10 md:w-12 md:h-12 text-primary mx-auto mb-4" />
            <h3 className="font-serif text-lg md:text-xl text-foreground mb-2">¡Confirmación recibida!</h3>
            <p className="font-sans text-xs md:text-sm text-muted-foreground">Gracias por confirmar. ¡Te esperamos!</p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="max-w-md mx-auto bg-card border border-border rounded-lg p-6 md:p-8 text-left space-y-5"
          >
            {/* Nombre */}
            <div>
              <label className="block text-xs md:text-sm font-sans font-medium text-foreground mb-1.5">
                Tu nombre *
              </label>
              <input
                {...register("nombre")}
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-xs md:text-sm font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="Nombre completo"
              />
              {errors.nombre && (
                <p className="text-destructive text-xs mt-1">{errors.nombre.message}</p>
              )}
            </div>

            {/* Asistencia */}
            <div>
              <label className="block text-xs md:text-sm font-sans font-medium text-foreground mb-1.5">
                ¿Asistirás? *
              </label>
              <div className="flex gap-2 md:gap-4">
                {[
                  { value: "si" as const, label: "Sí, asistiré" },
                  { value: "no" as const, label: "No podré asistir" },
                ].map((opt) => (
                  <label
                    key={opt.value}
                    className={`flex-1 text-center border rounded-md py-2 px-2 md:px-3 text-xs md:text-sm font-sans cursor-pointer transition-colors ${
                      asistencia === opt.value
                        ? "border-primary bg-primary/10 text-foreground"
                        : "border-input text-muted-foreground hover:border-primary/50"
                    }`}
                  >
                    <input
                      {...register("asistencia")}
                      type="radio"
                      value={opt.value}
                      className="sr-only"
                    />
                    {opt.label}
                  </label>
                ))}
              </div>
            </div>

            {/* Cantidad */}
            {asistencia === "si" && (
              <div>
                <label className="block text-xs md:text-sm font-sans font-medium text-foreground mb-1.5">
                  Número de invitados
                </label>
                <input
                  type="number"
                  {...register("cantidad", { valueAsNumber: true })}
                  min={1}
                  max={10}
                  className="w-20 rounded-md border border-input bg-background px-3 py-2 text-xs md:text-sm font-sans text-foreground text-center focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
            )}

            {/* Teléfono */}
            <div>
              <label className="block text-xs md:text-sm font-sans font-medium text-foreground mb-1.5">
                WhatsApp (opcional)
              </label>
              <input
                {...register("telefono")}
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-xs md:text-sm font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="10 dígitos"
              />
            </div>

            {/* Mensaje */}
            <div>
              <label className="block text-xs md:text-sm font-sans font-medium text-foreground mb-1.5">
                Mensaje (opcional)
              </label>
              <textarea
                {...register("mensaje")}
                rows={3}
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-xs md:text-sm font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                placeholder="Escribe un mensaje para la festejada..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-md bg-primary text-primary-foreground py-2.5 text-xs md:text-sm font-sans font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              Confirmar asistencia
            </button>
          </form>
        )}

        {/* Extra buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 mt-6 md:mt-8">
          {whatsapp && (
            <button
              onClick={openWhatsApp}
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-3 md:px-4 py-2 text-xs md:text-sm font-sans text-foreground hover:bg-muted transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-primary" />
              WhatsApp
            </button>
          )}
          <button
            onClick={() =>
              generateICS(
                fechaEvento,
                nombreFestejada,
                recepcionNombre,
                recepcionDireccion
              )
            }
            className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-3 md:px-4 py-2 text-xs md:text-sm font-sans text-foreground hover:bg-muted transition-colors"
          >
            <CalendarPlus className="w-4 h-4 text-primary" />
            Calendario
          </button>
          <button
            onClick={shareInvitation}
            className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-3 md:px-4 py-2 text-xs md:text-sm font-sans text-foreground hover:bg-muted transition-colors"
          >
            <Share2 className="w-4 h-4 text-primary" />
            Compartir
          </button>
        </div>
      </AnimatedSection>
    </>
  );
};

export default RsvpSection;
