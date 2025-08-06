import { ProgressBar } from "../ProgressBar";


    const StepOne = ({ formData, handleChange, nextStep }) => {
  return (
    <div className="flex flex-col justify-between h-full w-full px-12 py-10">
      {/* Stepper Progress Bar */}
      <ProgressBar currentStep={1} />
     
      {/* Input Section */}
      <div className="flex flex-col gap-10">
        {/* Row 1: Full Name + Email */}
        <div className="flex flex-row gap-8">
          {/* Full Name */}
          <div className="flex flex-col w-1/2">
            <label className="text-black font-orbitron text-sm mb-1">Full Name</label>
            <div className="border-b border-black">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-transparent focus:outline-none font-orbitron text-base pb-2"
              />
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-col w-1/2">
            <label className="text-black font-orbitron text-sm mb-1">Your Email</label>
            <div className="border-b border-black">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-transparent focus:outline-none font-orbitron text-base pb-2"
              />
            </div>
          </div>
        </div>

        {/* Row 2: Student ID + WhatsApp Number */}
        <div className="flex flex-row gap-8">
          {/* Student ID */}
          <div className="flex flex-col w-1/2">
            <label className="text-black font-orbitron text-sm mb-1">Student ID</label>
            <div className="border-b border-black">
              <input
                type="text"
                name="studentId"
                value={formData.studentId}
                onChange={handleChange}
                className="w-full bg-transparent focus:outline-none font-orbitron text-base pb-2"
              />
            </div>
          </div>

          {/* WhatsApp Number */}
          <div className="flex flex-col w-1/2">
            <label className="text-black font-orbitron text-sm mb-1">WhatsApp Number</label>
            <div className="border-b border-black">
              <input
                type="tel"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleChange}
                className="w-full bg-transparent focus:outline-none font-orbitron text-base pb-2"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Button aligned to bottom right */}
      <div className="flex justify-end mt-auto pt-10">
        <button
          onClick={nextStep}
          className="w-[214px] h-[54px] bg-[#D6F80D] text-black rounded-[5px] 
                     px-[48px] py-[15px] font-orbitron text-base 
                     hover:bg-[#c0e30c] active:bg-[#b0d809] transition duration-200"
        >
          Next
        </button>
      </div>
    </div>
  );
};
export default StepOne;