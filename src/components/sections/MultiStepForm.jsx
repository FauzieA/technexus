import React, { useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import emailjs from "emailjs-com";

const MultiStepForm = () => {
  const [formData, setFormData] = useState({
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

  const [step, setStep] = useState(1);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => {
      if (type === "checkbox") {
        const currentArray = prev[name] || [];
        if (checked) {
          return { ...prev, [name]: [...currentArray, value] };
        } else {
          return { ...prev, [name]: currentArray.filter((v) => v !== value) };
        }
      } else {
        return { ...prev, [name]: value };
      }
    });
  };

  const nextStep = () => setStep((s) => s + 1);
  const prevStep = () => setStep((s) => s - 1);

  // Submit form & send email, then go to Step 4
  const submitForm = async () => {
    try {
      await emailjs.send(
        "service_g14wlo7",   // your EmailJS service ID
        "template_w8j5imk",  // your EmailJS template ID
        formData,
        "Q5DDr9q2AmiQI8uIq" // your EmailJS public key
      );
      setStep(4); // go to Thank You step after success
    } catch (error) {
      console.error("Email error:", error);
      alert("Failed to send form. Try again.");
    }
  };

  return (
    <>
      {step === 1 && (
        <StepOne formData={formData} handleChange={handleChange} nextStep={nextStep} />
      )}
      {step === 2 && (
        <StepTwo
          formData={formData}
          handleChange={handleChange}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}
      {step === 3 && (
        <StepThree
          formData={formData}
          handleChange={handleChange}
          prevStep={prevStep}
          submitForm={submitForm}
        />
      )}
     {step === 4 && <StepFour setStep={setStep} setFormData={setFormData} />}

    </>
  );
};

export default MultiStepForm;
