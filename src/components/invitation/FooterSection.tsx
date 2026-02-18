const FooterSection = ({ nombreFestejada }: { nombreFestejada: string }) => (
  <footer className="py-8 md:py-10 px-4 md:px-6 text-center border-t border-border">
    <p className="text-xs font-sans text-muted-foreground max-w-md mx-auto leading-relaxed">
      Esta invitación es personal e intransferible. Al confirmar tu asistencia aceptas el uso de
      tus datos únicamente para la organización del evento de XV años de {nombreFestejada}.
    </p>
    <p className="text-xs text-muted-foreground/50 mt-4 font-sans">
      Hecho con ♥ — Invitaciones Digitales
    </p>
  </footer>
);

export default FooterSection;
