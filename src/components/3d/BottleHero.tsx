import { FC } from "react";
import Background3D from "./Background3D";

const isMobile =
  typeof window !== "undefined" && window.innerWidth < 768;

interface BottleHeroProps {
  scale: number;
  enabled: boolean;
}

const BottleHero: FC<BottleHeroProps> = ({ scale, enabled }) => {
  // 📱 MOBILE → IMAGE
  if (isMobile) {
    return (
      <div
        className="
          fixed inset-0 -z-10
          flex items-center justify-center
          pointer-events-none
        "
      >
        <img
          src="/images/bottle.webp"
          alt="WhiteUp Bottle"
          className="
            w-[260px]
            sm:w-[300px]
            md:w-[340px]
            object-contain
            drop-shadow-[0_30px_60px_rgba(0,0,0,0.35)]
            animate-fade-up
          "
        />
      </div>
    );
  }

  // 🖥 DESKTOP → FULL 3D
  return <Background3D scale={scale} enabled={enabled} />;
};

export default BottleHero;
