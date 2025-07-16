"use client";

import React, { useState } from "react";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  description: string;
  agreePolicy: boolean;
  subscribe: boolean;
  contactMode: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

export default function ContactUs() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    description: "",
    agreePolicy: false,
    subscribe: false,
    contactMode: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => {
  const { name, value, type } = e.target;
  const checked = type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;

  const newValue = type === "checkbox" ? checked : value;

  setFormData((prev) => ({
    ...prev,
    [name]: newValue,
  }));

  // Clear individual field error when corrected
  setErrors((prevErrors) => {
    const updatedErrors = { ...prevErrors };

    switch (name) {
      case "firstName":
      case "lastName":
        if ((newValue as string).trim()) delete updatedErrors[name];
        break;
      case "email":
        if ((newValue as string).trim() && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newValue as string)) {
          delete updatedErrors.email;
        }
        break;
      case "mobile":
        if (/^\d{10}$/.test(newValue as string)) {
          delete updatedErrors.mobile;
        }
        break;
      case "agreePolicy":
        if (newValue) delete updatedErrors.agreePolicy;
        break;
      case "contactMode":
        if (newValue) delete updatedErrors.contactMode;
        break;
      default:
        break;
    }

    return updatedErrors;
  });
};


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors: FormErrors = {};

    if (!formData.firstName.trim())
      newErrors.firstName = "First Name is required";

    if (!formData.lastName.trim()) newErrors.lastName = "Last Name is required";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile Number is required";
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Mobile Number must be exactly 10 digits";
    }

    if (!formData.agreePolicy)
      newErrors.agreePolicy = "You must agree to the Privacy Policy";

    if (!formData.contactMode)
      newErrors.contactMode = "Please select a preferred mode of contact";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Form submitted successfully!");
      // Submission logic here
    }
  };

  return (
    <div className="min-h-screen bg-white py-24 px-5 md:px-10">
      <button className="bg-[#c2d6ef] text-black px-3 py-1 rounded-full">
        Back
      </button>

      <div className="max-w-3xl mx-auto space-y-10">
        <section className="space-y-6">
          <h1 className="text-3xl font-bold text-center text-[#9f3323] mt-5">
            EXPRESS YOUR INTEREST
          </h1>
          <p className="text-center text-[#1e2a45]">
            We genuinely want to hear from you. Whether you have a question,
            need support, or simply want to connect — we’re here for it.
          </p>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  className="w-full border border-gray-300 rounded-full py-2 px-4"
                  value={formData.firstName}
                  onChange={handleChange}
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm px-[16px] pt-1">
                    {errors.firstName}
                  </p>
                )}
              </div>

              <div className="w-full">
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  className="w-full border border-gray-300 rounded-full py-2 px-4"
                  value={formData.lastName}
                  onChange={handleChange}
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm px-[16px] pt-1">
                    {errors.lastName}
                  </p>
                )}
              </div>
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full border border-gray-300 rounded-full py-2 px-4"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <p className="text-red-500 text-sm px-[16px] pt-1">
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <input
                type="tel"
                name="mobile"
                placeholder="+971 | Mobile Number"
                maxLength={10}
                className="w-full border border-gray-300 rounded-full py-2 px-4"
                value={formData.mobile}
                onChange={handleChange}
              />
              {errors.mobile && (
                <p className="text-red-500 text-sm px-[16px] pt-1">
                  {errors.mobile}
                </p>
              )}
            </div>

            <textarea
              name="description"
              placeholder="Add a description"
              className="w-full border border-gray-300 rounded-xl py-2 px-4 h-24"
              value={formData.description}
              onChange={handleChange}
            />

            <div className="space-y-10">
              <div className="space-y-2">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="subscribe"
                    className="form-checkbox"
                    checked={formData.subscribe}
                    onChange={handleChange}
                  />
                  <span>
                    I would like to receive communications from Relaam.
                  </span>
                </label>

                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="agreePolicy"
                    className="form-checkbox"
                    checked={formData.agreePolicy}
                    onChange={handleChange}
                  />
                  <span>
                    I have read and agree to the{" "}
                    <a href="#" className="underline">
                      Privacy Policy
                    </a>
                    .
                  </span>
                </label>
                {errors.agreePolicy && (
                  <p className="text-red-500 text-sm px-5">
                    {errors.agreePolicy}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <p>Please select a preferred mode of contact:</p>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="contactMode"
                    value="phone"
                    checked={formData.contactMode === "phone"}
                    onChange={handleChange}
                  />
                  <span>Request a phone callback</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="contactMode"
                    value="email"
                    checked={formData.contactMode === "email"}
                    onChange={handleChange}
                  />
                  <span>Request email communications</span>
                </label>
                {errors.contactMode && (
                  <p className="text-red-500 text-sm px-5">
                    {errors.contactMode}
                  </p>
                )}
              </div>
            </div>

            <button
              type="submit"
              className="bg-[#9f3323] text-white px-6 py-2 rounded-full"
            >
              Submit
            </button>
          </form>
        </section>

        <section className="space-y-2">
          <h2 className="text-2xl font-semibold text-[#1e2a45]">Enquiries</h2>
          <p>
            Careers, Media, and other general enquiries can be addressed through
            the form above or the provided contact links.
          </p>
        </section>
      </div>
    </div>
  );
}
