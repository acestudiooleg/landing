import React, { useEffect, useState, useRef } from "react";
import tankSprite from "../assets/images/tank-sprite.png";

interface ParallaxTankProps {
  side: "left" | "right";
  top: string;
  speed: number;
  color: "yellow" | "red" | "blue" | "green";
}

export const ParallaxTank: React.FC<ParallaxTankProps> = ({ side, top, speed, color }) => {
  const [offset, setOffset] = useState(0);
  const [direction, setDirection] = useState<"up" | "down">("down");
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Визначаємо куди крутимо коліщатко
      if (currentScrollY > lastScrollY.current) {
        setDirection("down");
      } else if (currentScrollY < lastScrollY.current) {
        setDirection("up");
      }

      setOffset(currentScrollY * speed);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  // Логіка розвороту:
  // Якщо танк має позитивну швидкість (їде вниз зі скролом):
  //   - скрол вниз -> дуло вниз (180deg)
  //   - скрол вгору -> дуло вгору (0deg)
  // Якщо швидкість негативна (їде вгору при скролі вниз):
  //   - скрол вниз -> дуло вгору (0deg)
  //   - скрол вгору -> дуло вниз (180deg)
  const isMovingDown = speed > 0 ? direction === "down" : direction === "up";
  const rotation = isMovingDown ? "180deg" : "0deg";

  const positions = {
    yellow: "0 0",
    red: "100% 0",
    blue: "0 100%",
    green: "100% 100%",
  };

  return (
    <div
      className="fixed pointer-events-none z-[50] md:z-[150]" // На мобільних кладемо ПІД текст (z-50)
      style={{
        top: top,
        // На мобільних ховаємо на половину за екран (-16px при ширині 32px)
        [side]: window.innerWidth < 768 ? "-20px" : "-28px",
        transform: `translateY(${offset}px) rotate(${rotation})`,
        transition: "transform 0.2s ease-out",
        opacity: window.innerWidth < 768 ? 0.4 : 1, // На мобільних робимо напівпрозорими
        willChange: "transform",
      }}
    >
      <div
        style={{
          // Золота середина: 32px для мобільних
          width: window.innerWidth < 768 ? "48px" : "68px",
          height: window.innerWidth < 768 ? "48px" : "68px",
          backgroundImage: `url(${tankSprite})`,
          backgroundSize: "200%",
          backgroundPosition: positions[color],
          imageRendering: "pixelated",
          filter: "drop-shadow(2px 2px 0 rgba(0,0,0,0.4))",
        }}
      />
    </div>
  );
};
