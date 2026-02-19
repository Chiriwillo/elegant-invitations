import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Index = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [showImage, setShowImage] = useState(true);
  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (audioRef.current) {
      audioRef.current.play().catch(() => {
        console.log("Audio play failed");
      });
    }
    setTimeout(() => {
      setShowImage(false);
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
        className="relative z-10 text-center max-w-2xl px-6 md:px-8"
      >
        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="h-1 w-20 bg-gradient-to-r from-rose-400 via-red-400 to-rose-400 mx-auto mb-8 rounded-full"
        />

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-sm md:text-base font-sans tracking-widest uppercase text-rose-600 font-semibold mb-4"
        >
          Te Invitamos a Celebrar
        </motion.h2>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="text-6xl md:text-8xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-500 to-red-600 font-bold mb-6 leading-tight"
        >
          Mis 15 Años
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-xl md:text-2xl font-serif text-gray-700 mb-8 font-light italic"
        >
          Eres uno de los afortunados!
        </motion.p>

        {/* Decorative line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="h-px w-24 bg-gradient-to-r from-transparent via-rose-400 to-transparent mx-auto mb-8"
        />

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          onClick={handleButtonClick}
          className="relative group inline-flex items-center justify-center px-8 md:px-12 py-4 md:py-5 text-white font-serif text-lg md:text-xl font-semibold overflow-hidden rounded-full transition-all duration-300 hover:scale-105 active:scale-95"
        >
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-r from-rose-500 via-red-500 to-rose-500 group-hover:from-rose-600 group-hover:via-red-600 group-hover:to-rose-600 transition-all duration-300" />

          {/* Shine effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </div>

          {/* Text */}
          <span className="relative z-10">Abre tu invitación</span>
        </motion.button>

        {/* Decorative flourish */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-12 flex justify-center gap-2 text-rose-300"
        >
          <span className="text-2xl">✦</span>
          <span className="text-2xl">✦</span>
          <span className="text-2xl">✦</span>
        </motion.div>
      </motion.div>

      {/* Audio element */}
      <audio
        ref={audioRef}
        src="https://raw.githubusercontent.com/Chiriwillo/elegant-invitations/main/Photograph.mp3"
        crossOrigin="anonymous"
      />
    </div>
  );
};

export default Index;
