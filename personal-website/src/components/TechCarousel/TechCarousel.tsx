import React from "react";
import "./TechCarousel.css";

const icons = [
  "/icons/carousel/javascript.png",
  "/icons/carousel/typescript.png",
  "/icons/carousel/java.png",
  "/icons/carousel/kotlin.png",
  "/icons/carousel/nextjs.svg",
  "/icons/carousel/react.png",
  "/icons/carousel/angular.png",
  "/icons/carousel/node.png",
  "/icons/github.png",
]; // Add more icons as needed

export const TechCarousel = () => {
  return (
    <div className="w-[90%] mx-auto my-10 overflow-hidden">
      <div className="flex whitespace-nowrap animate-infinite-scroll">
        {icons.concat(icons).map((icon, index) => (
          <div key={index} className="flex-shrink-0 mx-14">
            <img src={icon} alt={`Icon ${index}`} className="max-w-none h-32" />
          </div>
        ))}
      </div>
    </div>
  );
};
