import React, { useState } from "react";
import { BsPhoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import StepOne from "./StepOne.jsx";
import StepTwo from "./StepTwo.jsx";
import StepThree from "./StepThree.jsx";

export const Connect = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: "",
    fullName: "",
    studentId: "",
    whatsapp: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="connect" className="min-h-[900px] bg-black flex items-center justify-center px-4 py-20 font-satoshi">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-[1196px] flex flex-col md:flex-row overflow-hidden min-h-[670px]">
        
        {/* Left Contact Info */}
        <div className="bg-black rounded-xl m-2 w-full md:basis-[496px] p-8 text-white flex flex-col justify-between">
          <div>
            <h2 className="text-[28px] font-medium leading-none mb-4">Contact Information</h2>
            <p className="text-[18px] font-normal mb-12">Say something to start a live chat!</p>
            <div className="space-y-8">
              <div className="flex items-center gap-4 mb-10">
                <div className="bg-[#D6F80D] w-6 h-6 rounded-full flex items-center justify-center">
                  <BsPhoneFill className="text-black text-sm" />
                </div>
                <span className="text-base">+1012 3456 789</span>
              </div>
              <div className="flex items-center gap-4 mb-10">
                <div className="bg-[#D6F80D] w-6 h-6 rounded-full flex items-center justify-center">
                  <MdEmail className="text-black text-sm" />
                </div>
                <span className="text-base">demo@gmail.com</span>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-[#D6F80D] w-6 h-6 rounded-full flex items-center justify-center mt-1">
                  <IoLocationSharp className="text-black text-sm" />
                </div>
                <span className="text-base">132 Dartmouth Street Boston, MA 02156 United States</span>
              </div>
            </div>
          </div>

          <div className="flex gap-4 mt-12">
            <div className="bg-[#D6F80D] w-[30px] h-[30px] rounded-full flex items-center justify-center">
              <FaTwitter className="text-black" size={16} />
            </div>
            <div className="bg-[#D6F80D] w-[30px] h-[30px] rounded-full flex items-center justify-center">
              <FaInstagram className="text-black" size={16} />
            </div>
          </div>
        </div>

        {/* Right Form Panel */}
        <div className="flex-1 p-12">
          {step === 1 && (
            <StepOne formData={formData} handleChange={handleChange} nextStep={() => setStep(2)} />
          )}
          {step === 2 && (
            <StepTwo formData={formData} handleChange={handleChange} nextStep={() => setStep(3)} prevStep={() => setStep(1)} />
          )}
          {step === 3 && (
            <StepThree formData={formData} prevStep={() => setStep(2)} />
          )}
        </div>
      </div>
    </section>
  );
};
