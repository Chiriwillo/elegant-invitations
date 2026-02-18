import { useState, useEffect } from "react";
import AnimatedSection from "./AnimatedSection";

interface Props {
  targetDate: string;
}

const CountdownSection = ({ targetDate }: Props) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calc = () => {
      const diff = new Date(targetDate).getTime() - Date.now();
      if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      return {
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      };
    };
    setTimeLeft(calc());
    const timer = setInterval(() => setTimeLeft(calc()), 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const units = [
    { label: "Días", value: timeLeft.days },
    { label: "Horas", value: timeLeft.hours },
    { label: "Min", value: timeLeft.minutes },
    { label: "Seg", value: timeLeft.seconds },
  ];

  return (
    <AnimatedSection className="py-12 md:py-20 px-4 md:px-6 text-center">
      <h2 className="text-2xl md:text-4xl font-serif text-foreground mb-2">Faltan</h2>
      <div className="flex justify-center gap-2 md:gap-8 mt-6 md:mt-8 flex-wrap">
        {units.map((u) => (
          <div key={u.label} className="flex flex-col items-center min-w-[70px] md:min-w-auto">
            <span className="text-3xl sm:text-4xl md:text-6xl font-serif text-primary font-bold leading-none">
              {String(u.value).padStart(2, "0")}
            </span>
            <span className="text-xs md:text-sm font-sans text-muted-foreground uppercase tracking-widest mt-1 md:mt-2">
              {u.label}
            </span>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
};

export default CountdownSection;
