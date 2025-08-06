const Step = ({ number, label, isActive, isCompleted }) => {
  const circleStyle = isActive
    ? "bg-black text-white"
    : isCompleted
    ? "bg-gray-600 text-white"
    : "bg-gray-300 text-white";

  const textStyle = isActive
    ? "text-black"
    : isCompleted
    ? "text-gray-600"
    : "text-gray-400";

  return (
    <div className="flex flex-col items-center">
      <div
        className={`w-8 h-8 rounded-full flex items-center justify-center font-orbitron font-bold text-sm ${circleStyle}`}
      >
        {number}
      </div>
      <span className={`text-xs mt-1 font-orbitron ${textStyle}`}>{label}</span>
    </div>
  );
};

export const ProgressBar = ({ currentStep }) => {
  return (
    <div className="flex items-center justify-center gap-4 mb-10">
      {/* Step 1 */}
      <Step
        number={1}
        label="Step 1"
        isActive={currentStep === 1}
        isCompleted={currentStep > 1}
      />

      {/* Line 1 */}
      <div className={`flex-1 h-[2px] ${currentStep > 1 ? "bg-black" : "bg-gray-300"}`} />

      {/* Step 2 */}
      <Step
        number={2}
        label="Step 2"
        isActive={currentStep === 2}
        isCompleted={currentStep > 2}
      />

      {/* Line 2 */}
      <div className={`flex-1 h-[2px] ${currentStep > 2 ? "bg-black" : "bg-gray-300"}`} />

      {/* Step 3 */}
      <Step
        number={3}
        label="Step 3"
        isActive={currentStep === 3}
        isCompleted={false}
      />
    </div>
  );
};
