import React from "react";

const StepFour = ({ setStep, setFormData }) => {
  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      studentId: "",
      whatsapp: "",
      school: "",
      year: "",
      experience: "",
      workshop: "",
      learningInterests: [],
      codingFrequency: "",
      classPreference: "",
    });
    setStep(1); // jump back to Step 1
  };

  return (
    <div className="flex flex-col items-center justify-center h-full px-8 py-12 text-center">
      {/* Thank you message */}
      <h2 className="text-3xl font-orbitron font-bold text-black mb-4">
         Thank You!
      </h2>
      <p className="text-lg text-gray-700 mb-8 max-w-md">
        Your response has been successfully submitted.  
        We truly appreciate your time and input!
      </p>

      {/* Reset button */}
      <button
        onClick={handleReset}
        className="w-[250px] h-[54px] bg-[#D6F80D] text-black rounded-[10px] 
                   font-orbitron text-base shadow-md
                   hover:bg-[#c0e30c] active:bg-[#b0d809] transition duration-200"
      >
        Submit Another Response
      </button>
    </div>
  );
};

export default StepFour;
