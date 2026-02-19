import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Index = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [showImage, setShowImage] = useState(true);
  const navigate = useNavigate();

  const handleButtonClick = async () => {
    setShowImage(false);

    if (audioRef.current) {
      try {
        audioRef.current.currentTime = 0;
        await audioRef.current.play();
      } catch (error) {
        console.log("Audio play failed:", error);
      }
    }

    setTimeout(() => {
      navigate("/i/demo");
    }, 500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-white to-red-50" />

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -ml-20 -mb-20" />

      {/* Image overlay - fades out on button click */}
      {showImage && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 bg-contain bg-center bg-no-repeat md:bg-cover"
          style={{
            backgroundImage: "url(/src/assets/DSC00076_de_tamaño_grande.png)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />
        </motion.div>
      )}

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center max-w-3xl px-6 md:px-8"
      >
        {/* Decorative flourish top */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-8 text-4xl tracking-widest text-rose-400"
        >
          ✦ ✦ ✦
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-xs md:text-sm font-semibold tracking-[0.3em] uppercase text-rose-600 mb-6 font-montserrat"
        >
          Cordialmente invitamos
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1.2 }}
          className="text-7xl md:text-9xl mb-4 leading-none font-playfair font-light"
          style={{
            background: "linear-gradient(135deg, #dc2626 0%, #be123c 50%, #e11d48 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Mis 15 Años
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="h-1 w-32 bg-gradient-to-r from-rose-300 via-red-400 to-rose-300 mx-auto mb-8 rounded-full"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="text-2xl md:text-4xl font-cormorant font-light italic text-rose-900 mb-2 leading-relaxed"
        >
          Eres uno de los afortunados!
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="text-sm md:text-base font-montserrat tracking-widest text-gray-600 mb-12 uppercase"
        >
          Celebra conmigo este momento especial
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          onClick={handleButtonClick}
          className="relative group inline-flex items-center justify-center px-10 md:px-16 py-5 md:py-6 text-white font-montserrat text-base md:text-lg font-semibold overflow-hidden transition-all duration-300 hover:scale-110 active:scale-95"
          style={{
            borderRadius: "50px",
            letterSpacing: "0.05em",
          }}
        >
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-rose-500 to-red-500 group-hover:from-red-600 group-hover:via-rose-600 group-hover:to-red-600 transition-all duration-500 rounded-full" />

          {/* Shadow glow effect */}
          <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-2xl shadow-red-500/50" />

          {/* Shine effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </div>

          {/* Text */}
          <span className="relative z-10">Abre tu invitación</span>
        </motion.button>

        {/* Decorative flourish bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-16 text-3xl tracking-widest text-rose-300"
        >
          ✦ ✦ ✦
        </motion.div>
      </motion.div>

      {/* Audio element */}
      <audio
        ref={audioRef}
        crossOrigin="anonymous"
        preload="auto"
      >
        <source
          src="https://raw.githubusercontent.com/Chiriwillo/elegant-invitations/main/Photograph.mp3"
          type="audio/mpeg"
        />
      </audio>
    </div>
  );
};

export default Index;
