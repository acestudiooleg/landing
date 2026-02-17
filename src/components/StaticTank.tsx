import tankSprite from "../assets/images/tank-sprite.png";

const StaticTank: React.FC<{ color: "yellow" | "red" | "blue" | "green"; rotation: string }> = ({
  color,
  rotation,
}) => {
  const positions = { yellow: "0 0", red: "100% 0", blue: "0 100%", green: "100% 100%" };

  return (
    <div
      style={{
        width: "48px",
        height: "48px",
        backgroundImage: `url(${tankSprite})`,
        backgroundSize: "200%",
        backgroundPosition: positions[color],
        imageRendering: "pixelated",
        transform: `rotate(${rotation})`,
        filter: "drop-shadow(4px 4px 0 rgba(0,0,0,0.5))",
      }}
    />
  );
};

export default StaticTank;