import React from "react";
import video1 from "../../assets/video1.jpg";
import video2 from "../../assets/video2.png";
import video3 from "../../assets/video3.png";

 const TutorialCard = ({ image, title, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full max-w-[387px] h-[400px] relative rounded-[8px] overflow-hidden block group"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover rounded-[8px] group-hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute bottom-0 left-0 w-full h-[75px] bg-[#17171799] backdrop-blur-[32px] px-4 py-3 text-white flex items-center rounded-b-[8px]">
        <h3 className="text-lg font-medium">{title}</h3>
      </div>
    </a>
  );
};

export const Tutorials = () => {
  return (
    <section id="Tutorials" className="py-20 px-6 bg-black text-white flex flex-col items-center">
      <h2 className="text-[56px] font-[Orbitron] font-medium leading-none mt-10">
        Events
      </h2>

      <div className="flex items-center gap-6 mb-14 flex-wrap justify-center">
  
</div>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center font-satoshi">
        <TutorialCard image={video1} title="Google I/O Extended George Town 2025" link="https://www.linkedin.com/posts/technexus-club_ai-machinelearning-technexus-activity-7355482650482020352-SRgh?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFwkWi0BhlamI9xXSrm7DO9cp7-wvBge8Ck" />
        <TutorialCard image={video2} title="Swiss Innovation Challenge Malaysia 2025" link="https://www.linkedin.com/posts/technexus-club_technexus-innovation-swissinnovationchallenge-activity-7343937365280718849-TJuZ?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFwkWi0BhlamI9xXSrm7DO9cp7-wvBge8Ck" />
        <TutorialCard image={video3} title="Dialogue session with Prime Minister of Malaysia" link="https://www.linkedin.com/posts/technexus-club_technexus-innovation-aiu-activity-7301850216670842880-gf_y?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFwkWi0BhlamI9xXSrm7DO9cp7-wvBge8Ck" />
      </div>
    </section>
  );
};


