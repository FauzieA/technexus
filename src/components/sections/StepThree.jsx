import { ProgressBar } from "../ProgressBar";
import { CheckCircle2 } from "lucide-react";

const StepThree = ({ formData, handleChange, prevStep, submitForm }) => {
  const learningInterests = ["Web Development", "Python", "Mobile Development", "Other"];
  const codingFrequency = ["Once a week", "Twice", "Thrice", "Other"];
  const classPreference = ["Afternoon", "Night", "Other"];

  return (
    <div className="flex flex-col justify-between h-full w-full px-12 py-10">
      {/* Stepper Progress Bar */}
      <ProgressBar currentStep={3} />

      {/* Input Section */}
      <div className="flex flex-col gap-10">
        {/* Row 1: Learning Interests */}
        <div className="flex flex-col">
          <label className="text-black text-base mb-2">
            What would you be most interested in learning?{" "}
            <span className="text-sm text-black/60">
              (You can choose more than one)
            </span>
          </label>
          <div className="flex flex-wrap gap-8">
            {learningInterests.map((option) => (
              <label
                key={option}
                className="flex items-center gap-2 cursor-pointer text-base text-black"
              >
                <div className="relative w-4 h-4">
                  {formData.learningInterests?.includes(option) && (
                    <CheckCircle2
                      size={16}
                      className="text-black absolute top-[2px] left-[2px] opacity-100"
                    />
                  )}
                </div>
                <input
                  type="checkbox"
                  name="learningInterests"
                  value={option}
                  checked={formData.learningInterests?.includes(option)}
                  onChange={handleChange}
                  className="hidden"
                />
                <span
                  className={
                    formData.learningInterests?.includes(option)
                      ? "text-black"
                      : "text-black/40"
                  }
                >
                  {option}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Row 2: Coding Frequency */}
        <div className="flex flex-col">
          <label className="text-black text-base mb-2">
            How often do you practice coding?
          </label>
          <div className="flex flex-row gap-8">
            {codingFrequency.map((option) => (
              <label
                key={option}
                className="flex items-center gap-2 cursor-pointer text-base text-black"
              >
                <div className="relative w-4 h-4">
                  {formData.codingFrequency === option && (
                    <CheckCircle2
                      size={16}
                      className="text-black absolute top-[2px] left-[2px] opacity-100"
                    />
                  )}
                </div>
                <input
                  type="radio"
                  name="codingFrequency"
                  value={option}
                  checked={formData.codingFrequency === option}
                  onChange={handleChange}
                  className="hidden"
                />
                <span
                  className={
                    formData.codingFrequency === option
                      ? "text-black"
                      : "text-black/40"
                  }
                >
                  {option}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Row 3: Class Preference */}
        <div className="flex flex-col">
          <label className="text-black text-base mb-2">
            Do you prefer afternoon or night classes during the weekend?
          </label>
          <div className="flex flex-row gap-8">
            {classPreference.map((option) => (
              <label
                key={option}
                className="flex items-center gap-2 cursor-pointer text-base text-black"
              >
                <div className="relative w-4 h-4">
                  {formData.classPreference === option && (
                    <CheckCircle2
                      size={16}
                      className="text-black absolute top-[2px] left-[2px] opacity-100"
                    />
                  )}
                </div>
                <input
                  type="radio"
                  name="classPreference"
                  value={option}
                  checked={formData.classPreference === option}
                  onChange={handleChange}
                  className="hidden"
                />
                <span
                  className={
                    formData.classPreference === option
                      ? "text-black"
                      : "text-black/40"
                  }
                >
                  {option}
                </span>
              </label>
            ))}
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
          onClick={submitForm}
          className="w-[214px] h-[54px] bg-[#D6F80D] text-black rounded-[5px] 
                     px-[48px] py-[15px] font-orbitron text-base 
                     hover:bg-[#c0e30c] active:bg-[#b0d809] transition duration-200"
        >
          Join Us
        </button>
      </div>
    </div>
  );
};

export default StepThree;
