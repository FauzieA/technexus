
const StepThree = ({ formData, prevStep }) => {
  const handleSubmit = () => {
    // You can integrate emailjs or any backend here
    alert('Form submitted!');
  };

  return (
    <div>
      <h2 className="text-xl font-medium mb-4">Step 3: Review</h2>
      <p><strong>Name:</strong> {formData.name}</p>
      <p><strong>Email:</strong> {formData.email}</p>
      <p><strong>Message:</strong> {formData.message}</p>

      <div className="flex justify-between mt-4">
        <button onClick={prevStep} className="border px-4 py-2 rounded">
          Back
        </button>
        <button onClick={handleSubmit} className="bg-black text-white px-4 py-2 rounded">
          Submit
        </button>
      </div>
    </div>
  );
};

export default StepThree;
