import { useState, useEffect } from "react";

interface TimerProps {
  endDate: Date;
}

interface TimerStates {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const calculateTimeLeft = (endDate: Date): TimerStates => {
  const now = new Date().getTime();
  const distance = endDate.getTime() - now;

  if (distance < 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
    hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((distance % (1000 * 60)) / 1000),
  };
};

const Timer = ({ endDate }: TimerProps) => {
  const [timer, setTimer] = useState<TimerStates>(calculateTimeLeft(endDate));
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(calculateTimeLeft(endDate));
    }, 1000);

    return () => clearInterval(interval);
  }, [endDate]);

  if (!isClient) {
    return null;
  }

  return (
    <div className="flex flex-row justify-around md:justify-start pr-0 md:pr-10 w-full md:w-3/4">
      {["Days", "Hours", "Minutes", "Seconds"].map((unit) => (
        <div key={unit} className="flex flex-col items-center px-4 md:px-10">
          <span className="font-mono text-base mb-2 md:mb-5 text-slate-400">
            {unit}
          </span>
          <span className="text-4xl md:text-6xl font-poppins font-semibold">
            {timer[unit.toLowerCase() as keyof TimerStates]
              .toString()
              .padStart(2, "0")}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Timer;
