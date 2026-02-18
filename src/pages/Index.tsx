import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-lg"
      >
        <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-4">
          Invitaciones Digitales
        </h1>
        <p className="text-muted-foreground font-sans mb-8">
          Crea hermosas invitaciones digitales para XV años, bodas y más.
        </p>
        <Link
          to="/i/demo"
          className="inline-flex items-center gap-2 rounded-md bg-primary text-primary-foreground px-6 py-3 font-sans text-sm font-medium hover:bg-primary/90 transition-colors"
        >
          Ver invitación demo
        </Link>
      </motion.div>
    </div>
  );
};

export default Index;
