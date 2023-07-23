import React from "react";
import image from "../../../public/title-img.png";

function TitleSection({ title, description }) {
  return (
    <div
      className="py-20"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="container mx-auto">
        <h1 className="text-white text-5xl">{title}</h1>
        <p className="text-white text-xl mt-4">{description}</p>
      </div>
    </div>
  );
}

export default TitleSection;
