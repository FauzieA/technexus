import React from "react";
import video1 from "../../assets/video1.jpg";
import video2 from "../../assets/video2.png";
import video3 from "../../assets/video3.png";

 const TutorialCard = ({ image, title }) => {
  return (
    <div className="w-full max-w-[387px] h-[400px] relative rounded-[8px] overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover rounded-[8px]"
      />
      <div className="absolute bottom-0 left-0 w-full h-[75px] bg-[#17171733] backdrop-blur-[32px] px-4 py-3 text-white flex items-center rounded-b-[8px]">
        <h3 className="text-lg font-medium">{title}</h3>
      </div>
    </div>
  );
};

export const Tutorials = () => {
  return (
    <section id="Tutorials" className="py-20 px-6 bg-black text-white flex flex-col items-center">
      <h2 className="text-[56px] font-[Orbitron] font-medium leading-none mt-10">
        Latest Videos
      </h2>

      <div className="flex items-center gap-6 mb-14 flex-wrap justify-center">
  {/* Left lines */}
  <div className="flex flex-col gap-1">
    <div className="w-24 sm:w-40 md:w-56 lg:w-64 h-[1px] bg-[#D6F80D]" />
    <div className="w-24 sm:w-40 md:w-56 lg:w-64 h-[1px] bg-[#D6F80D]" />
  </div>

  {/* Center Text */}
  <span className="text-[32px] font-[Satoshi] font-normal text-white">Programming</span>

  {/* Right lines */}
  <div className="flex flex-col gap-1">
    <div className="w-24 sm:w-40 md:w-56 lg:w-64 h-[1px] bg-[#D6F80D]" />
    <div className="w-24 sm:w-40 md:w-56 lg:w-64 h-[1px] bg-[#D6F80D]" />
  </div>
</div>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center font-satoshi">
        <TutorialCard image={video1} title="Machine Learning Introduction" />
        <TutorialCard image={video2} title="Introduction to Learning Programming" />
        <TutorialCard image={video3} title="Tips to help you learn programming quickly" />
      </div>
    </section>
  );
};


