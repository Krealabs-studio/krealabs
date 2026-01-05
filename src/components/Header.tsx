"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Australia/Melbourne",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      const timeString = new Intl.DateTimeFormat("en-GB", options).format(now);
      setTime(timeString);
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="w-full border-b border-krea-border flex justify-between items-center px-4 py-3 sticky top-0 z-40 bg-krea-black/95 backdrop-blur-sm">
      <div className="text-[0.65rem] md:text-xs uppercase tracking-widest text-krea-gray flex items-center gap-2">
        <span className="w-1.5 h-1.5 bg-[#22C55E] rounded-full shadow-[0_0_4px_#22C55E] animate-pulse" />
        System: Online
      </div>
      <div className="text-[0.65rem] md:text-xs uppercase tracking-widest text-krea-gray">
        <span>{time || "00:00:00"}</span> MEL
      </div>
    </header>
  );
}
