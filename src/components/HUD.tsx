import { cn } from "@/lib/utils";

interface HUDCornerProps {
  className?: string;
  position: "tl" | "tr" | "bl" | "br";
}

export function HUDCorner({ className, position }: HUDCornerProps) {
  const corners = {
    tl: "top-0 left-0 border-l border-t",
    tr: "top-0 right-0 border-r border-t",
    bl: "bottom-0 left-0 border-l border-b",
    br: "bottom-0 right-0 border-r border-b",
  };

  return (
    <div
      className={cn(
        "absolute w-2 h-2 border-krea-white opacity-70 pointer-events-none transition-all duration-300",
        corners[position],
        className
      )}
    />
  );
}

export function Crosshairs({ className }: { className?: string }) {
  return (
    <>
      {/* Top Left Crosshair */}
      <div className={cn("absolute top-0 left-0 z-10 pointer-events-none", className)}>
        <div className="absolute top-0 left-0 w-[10px] h-[1px] bg-krea-white" />
        <div className="absolute top-0 left-0 w-[1px] h-[10px] bg-krea-white" />
      </div>
      {/* Bottom Right Crosshair */}
      <div className={cn("absolute bottom-0 right-0 z-10 pointer-events-none", className)}>
        <div className="absolute bottom-0 right-0 w-[10px] h-[1px] bg-krea-white" />
        <div className="absolute bottom-0 right-0 w-[1px] h-[10px] bg-krea-white" />
      </div>
    </>
  );
}

export function TechCoords({ 
  className, 
  value, 
  position 
}: { 
  className?: string; 
  value: string; 
  position: "tl" | "tr" | "bl" | "br" | "custom"
}) {
  const positions = {
    tl: "top-[-15px] left-0",
    tr: "top-[-15px] right-0",
    bl: "bottom-[-15px] left-0",
    br: "bottom-[-15px] right-0",
    custom: "",
  };

  return (
    <span className={cn(
      "absolute text-[0.6rem] text-krea-gray font-mono tracking-widest opacity-50 uppercase pointer-events-none",
      positions[position],
      className
    )}>
      {value}
    </span>
  );
}
