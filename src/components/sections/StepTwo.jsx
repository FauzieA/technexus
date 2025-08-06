import { ProgressBar } from "../ProgressBar";
import { CheckCircle2 } from "lucide-react"; // or teenyicons if you've imported it differently

const StepTwo = ({ formData, handleChange, nextStep, prevStep }) => {
  const schools = ["SCI", "SBSS", "SEHS", "LC", "Foundation"];
  const years = ["First Year", "Second Year", "Third Year", "Foundation", "LC", "Postgraduate"];
  const experiences = ["Yes", "No", "Basic"];
  const workshopInterest = ["Yes", "No"];

  return (
    <div className="flex flex-col justify-between h-full w-full px-12 py-10">
      {/* Stepper Progress Bar */}
      <ProgressBar currentStep={2} />

      {/* Input Section */}
      <div className="flex flex-col gap-10">
        {/* Row 1: School + Year of Study */}
        <div className="flex flex-row gap-8">
          {/* School Dropdown */}
          <div className="flex flex-col w-1/2">
            <label className="text-black font-satoshi mb-1">School</label>
            <div className="border-b border-black">
              <select
                name="school"
                value={formData.school}
                onChange={handleChange}
                className="w-full bg-transparent focus:outline-none text-black font-medium text-base pb-2 appearance-none"
              >
                <option value="" disabled>Select your school</option>
                {schools.map((school) => (
                  <option key={school} value={school}>
                    {school}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Year of Study Dropdown */}
          <div className="flex flex-col w-1/2">
            <label className="text-black font-orbitron mb-1">Year of Study</label>
            <div className="border-b border-black">
              <select
                name="year"
                value={formData.year}
                onChange={handleChange}
                className="w-full bg-transparent focus:outline-none text-black font-medium text-base pb-2 appearance-none"
              >
                <option value="" disabled>Select year</option>
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Row 2: Experience + Workshop Interest */}
        <div className="flex flex-col gap-3">
          <div className="flex flex-row gap-16">
            {/* Experience */}
            <div className="flex flex-col">
              <label className="text-black text-base mb-2">
                Do you have any experience with coding?
              </label>
              <div className="flex flex-row gap-8">
                {experiences.map((option) => (
                  <label
                    key={option}
                    className="flex items-center gap-2 cursor-pointer text-base text-black"
                  >
                    <div className="relative w-4 h-4">
                      {formData.experience === option && (
                        <CheckCircle2
                          size={16}
                          className="text-black absolute top-[2px] left-[2px] opacity-100"
                        />
                      )}
                    </div>
                    <input
                      type="radio"
                      name="experience"
                      value={option}
                      checked={formData.experience === option}
                      onChange={handleChange}
                      className="hidden"
                    />
                    <span className={formData.experience === option ? "text-black" : "text-black/40"}>
                      {option}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Workshop Interest */}
            <div className="flex flex-col">
              <label className="text-black text-base mb-2">
                Are you interested in joining coding workshops?
              </label>
              <div className="flex flex-row gap-8">
                {workshopInterest.map((option) => (
                  <label
                    key={option}
                    className="flex items-center gap-2 cursor-pointer text-base text-black"
                  >
                    <div className="relative w-4 h-4">
                      {formData.workshop === option && (
                        <CheckCircle2
                          size={16}
                          className="text-black absolute top-[2px] left-[2px] opacity-100"
                        />
                      )}
                    </div>
                    <input
                      type="radio"
                      name="workshop"
                      value={option}
                      checked={formData.workshop === option}
                      onChange={handleChange}
                      className="hidden"
                    />
                    <span className={formData.workshop === option ? "text-black" : "text-black/40"}>
                      {option}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-auto pt-10">
        <button
          onClick={prevStep}
          className="w-[214px] h-[54px] bg-transparent border border-black text-black rounded-[5px] 
                     px-[48px] py-[15px] font-orbitron text-base 
                     hover:bg-gray-100 active:bg-gray-200 transition duration-200"
        >
          Back
        </button>

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

export default StepTwo;
