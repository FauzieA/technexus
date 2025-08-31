import React from "react";
import database from "../../assets/database.png";
import django from "../../assets/django.png";
import { Link } from "react-router-dom";

const BootcampCard = ({ image, title, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full max-w-[387px] h-[400px] relative rounded-[8px] overflow-hidden block group transform transition-transform duration-300 hover:scale-105"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover rounded-[8px] group-hover:brightness-90"
      />
      <div className="absolute bottom-0 left-0 w-full h-[75px] bg-[#17171733] backdrop-blur-[32px] px-4 py-3 text-white flex items-center rounded-b-[8px]">
        <h3 className="text-lg font-medium">{title}</h3>
      </div>
    </a>
  );
};

export const Bootcamps = () => {
  return (
    <section id="Bootcamps" className="py-20 px-6 bg-black text-white flex flex-col items-center">
      <h2 className="text-[56px] font-[Orbitron] font-medium leading-none mt-10">
        Bootcamps
      </h2>

      <div className="flex items-center gap-6 mb-14 flex-wrap justify-center">
  

</div>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-40 justify-center font-satoshi">
        <BootcampCard image={database} title="Machine Learning Introduction" link = "https://www.linkedin.com/posts/technexus-club_database-sql-bootcamp-activity-7365600466518413312-IPR7?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFwkWi0BhlamI9xXSrm7DO9cp7-wvBge8Ck" />
        <BootcampCard image={django} title="Introduction to Learning Programming" link = "https://www.linkedin.com/posts/technexus-club_django-drf-backenddevelopment-activity-7365604609635127297-tqkm?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFwkWi0BhlamI9xXSrm7DO9cp7-wvBge8Ck" />
       
      </div>
    </section>
  );
};


