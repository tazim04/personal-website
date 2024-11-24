import { useState } from "react";
import Marquee from "react-fast-marquee";
import "./TechCarousel.css";

const icons = [
  "./icons/carousel/javascript.png",
  "./icons/carousel/typescript.png",
  "./icons/carousel/python.png",
  "./icons/carousel/java.png",
  "./icons/carousel/kotlin.png",
  "./icons/carousel/spring.png",
  "./icons/carousel/nextjs.png",
  "./icons/carousel/react.png",
  "./icons/carousel/angular.png",
  "./icons/carousel/node.png",
  "./icons/github.png",
];

export const TechCarousel = () => {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

  return (
    <div className="w-[90%] mx-auto my-20 overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
      <Marquee
        gradient={false}
        speed={50} // Adjust the speed as needed
        pauseOnHover={true} // Pauses on hover
      >
        {icons.map((icon, index) => (
          <div
            key={index}
            className="flex-shrink-0 mx-14 py-1"
            onMouseEnter={() => setHoveredIcon(icon)}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            <img
              src={icon}
              alt={`Icon ${index}`}
              className={`h-32 transition-all ease-in-out hover:-translate-y-1 ${
                icon === "/icons/github.png" ? "invert" : ""
              } ${
                hoveredIcon && hoveredIcon !== icon
                  ? "blur-[2px] opacity-90"
                  : ""
              }`}
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};
