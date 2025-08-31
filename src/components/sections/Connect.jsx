import React from "react";
import { BsPhoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import MultiStepForm from "./MultiStepForm";

export const Connect = () => {
  return (
    <section
      id="connect"
      className="min-h-[900px] bg-black flex items-center justify-center px-4 py-20 font-satoshi"
    >
      <div className="bg-white rounded-xl shadow-xl w-full max-w-[1196px] flex flex-col md:flex-row overflow-hidden min-h-[670px]">
        
        {/* Left Contact Info */}
        <div className="bg-black rounded-xl m-2 w-full md:basis-[496px] p-8 text-white flex flex-col justify-between">
          <div>
            <h2 className="text-[28px] font-medium leading-none mb-4">Contact Information</h2>
            <p className="text-[18px] font-normal mb-12">
              Feel free to contact us!
            </p>
            <div className="space-y-8">
              <div className="flex items-center gap-4 mb-10">
                <div className="bg-[#D6F80D] w-6 h-6 rounded-full flex items-center justify-center">
                  <BsPhoneFill className="text-black text-sm" />
                </div>
                <span className="text-base">+00000000</span>
              </div>
              <div className="flex items-center gap-4 mb-10">
                <div className="bg-[#D6F80D] w-6 h-6 rounded-full flex items-center justify-center">
                  <MdEmail className="text-black text-sm" />
                </div>
                <span className="text-base">technexus.team12@gmail.com</span>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-[#D6F80D] w-6 h-6 rounded-full flex items-center justify-center mt-1">
                  <IoLocationSharp className="text-black text-sm" />
                </div>
                <span className="text-base">
                  Alor setar, Kedah, Malaysia
                </span>
              </div>
            </div>
          </div>

          {/* Social icons */}
          <div className="flex gap-4 mt-12">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/technexus-club/about/?viewAsMember=true"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#D6F80D] w-[30px] h-[30px] rounded-full flex items-center justify-center"
            >
              <FaLinkedin className="text-black" size={16} />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/technexus_team"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#D6F80D] w-[30px] h-[30px] rounded-full flex items-center justify-center"
            >
              <FaInstagram className="text-black" size={16} />
            </a>
          </div>
        </div> {/* ✅ closes the Left Contact Info */}

        {/* Right Form Panel */}
        <div className="flex-1 p-12">
          <MultiStepForm />
        </div>
      </div>
    </section>
  );
};
