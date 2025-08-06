import React from "react";
import aboutimg from "../../assets/aboutimg.png";

export const About = () => {
  return (
    <section id="about" className="w-full bg-black px-6 py-20 mt-50 mb-30">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Text Section */}
        <div className="w-full md:w-1/2 text-white space-y-6">
          <p className="text-[19.2px] font-medium font-[Orbitron]">About us</p>

          <h2 className="text-[60px] font-bold font-[Orbitron] leading-none text-[#D6F80D]">
             TechNexus Club
         </h2>


          <p className="text-[18px] font-satoshi font-medium leading-[160%]">
            TechNexus is a vibrant tech community driven by a passion for
            technology, innovation, and creativity. The team aims to empower
            students with technical skills, foster collaboration among members,
            and encourage hands-on learning and innovation. By creating a
            supportive environment, TechNexus strives to nurture creativity and
            develop skills while connecting members with industry experts and
            academic professionals. Together, we aspire to build the next
            generation of innovators.
          </p>

          <p className="text-[24px] font-medium font-[Orbitron] leading-[140%]">
            “Let’s Build, Innovate, and Grow Together with TechNexus!”
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src={aboutimg}
            alt="About TechNexus"
            className="w-full h-[498px] object-cover rounded-2xl shadow-md"
          />
        </div>
      </div>
    </section>
  );
};
