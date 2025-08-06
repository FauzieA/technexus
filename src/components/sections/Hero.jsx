import React from "react";
import heroimg from "../../assets/heroimg.png";

export const Hero = () => {
  return (
    <section id="News" className="w-full bg-black mt-50 px-6 pb-10">
  <div className="relative max-w-6xl w-full mx-auto h-[400px] sm:h-[500px] md:h-[600px]">
    <img
      src={heroimg}
      alt="Cybersecurity Workshop"
      className="w-full h-full object-cover rounded-2xl shadow-lg"
    />

    {/* Gradient Overlay */}
    <div
      className="absolute bottom-0 left-0 w-full h-1/2 z-10 rounded-b-md pointer-events-none"
      style={{
        background: "linear-gradient(to top, #D6F80D99 0%, #07080000 100%)",
      }}
    ></div>

    {/* News Box */}
    <div className="absolute bottom-0 left-0 bg-black bg-opacity-100 px-6 pt-6 pb-10 w-1/3 rounded-tr-2xl z-20">
      <h2 className="text-white text-5xl md:text-6xl font-bold leading-tight">
        Our <br />
        Latest <br />
        <span className="border-b-4 border-lime-400">News</span>
      </h2>
    </div>

    {/* Workshop Title */}
    <div className="absolute bottom-14 left-1/2 transform -translate-x-1/7 text-left w-[60%] z-20">
      <h3 className="text-white text-3xl md:text-5xl font-semibold leading-tight font-satoshi">
        Cybersecurity & Data <br />
        Science Workshop
      </h3>
    </div>
  </div>

  {/* Scrolling Band */}
  <div className="w-screen overflow-hidden mt-26">
    <div className="animate-marquee whitespace-nowrap flex gap-10 text-white text-sm md:text-lg px-6">
      {[
        "Innovation",
        "Creativity",
        "Sustainability",
        "Technology",
        "Empowerment",
        "Inclusion",
        "Leadership",
        "Innovation",
        "Creativity",
        "Sustainability",
        "Technology",
        "Empowerment",
        "Inclusion",
        "Leadership",
      ].map((word, index) => (
        <span key={index} className="flex items-center gap-2">
          <span className="text-lime-400">■</span> {word}
        </span>
      ))}
    </div>
  </div>
</section>

  );
};
