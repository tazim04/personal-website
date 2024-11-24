import { useEffect, useState } from "react";

export const MouseGlow = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // track mouse movement
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 w-[1000px] h-[1000px] bg-blue-900 opacity-[0.01] rounded-full blur-[100px]"
      style={{
        transform: `translate(${position.x - 500}px, ${position.y - 500}px)`,
      }}
    />
  );
};
