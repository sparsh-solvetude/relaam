"use client";

import React, { useEffect, useState } from "react";

export const Form = ({}: any) => {

  const [formData, setFormData] = useState({
    fullName: '',
    nationality: '',
    basedInUAE: '',
    department: '',
    email: '',
    mobile: '',
    resume: null,
    acceptTerms: false
  });

  const handleChange = (e:any) => {
    const { name, value, type, checked, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value
    }));
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };


  return (    
    <div className="w-full mb-20">
        <div className="w-full pb-16 mb-8 relative pt-16 md:pt-20" id="form">
            <div className=" max-w-6xl m-auto relative h-full">
                <div className="bg-neutral-200 md:mr-8 md:mb-8 h-full">
                    <div className="w-full md:w-1/2 h-full px-4 md:px-16 py-10 md:py-32 text-center md:text-start flex flex-col items-center md:items-start">
                        <h2 className="text-4xl font-bold px-3 md:px-8 py-4 leading-base">
                            Step Into a Future of Opportunity
                        </h2>
                        <p className="mt-2 px-4 md:px-8 font-light opacity-80">
                            Join RELAAM and be part of a team that's transforming the real estate landscape across the Middle East. Experience a culture of excellence, innovation, and growth as you work alongside industry leaders.
                        </p>
                        
                        {/* Mobile Device */}
                        <form className="h-full object-cover bg-white border border-slate-400 p-4 block md:hidden mt-4">
                            <input
                                type="text"
                                placeholder="Full Name"
                                className="w-full px-5 py-2 bg-[#F8F8F7] border border-neutral-300 mb-2 font-light opacity-80 placeholder:text-black rounded-lg"
                                name="name"
                            />
                            <input
                                type="text"
                                placeholder="Nationality"
                                className="w-full px-5 py-2 bg-[#F8F8F7] border border-neutral-300 mb-2 font-light opacity-80 placeholder:text-black rounded-lg"
                                name="nationality"
                            />
                            <select
                                className="w-full px-5 py-2 bg-[#F8F8F7] border border-neutral-300 mb-2 font-light opacity-80 placeholder:text-black rounded-lg"
                                name="inDubai"
                                title="inDubai"
                            >
                                <option disabled selected>Are you currently based in Dubai?</option>
                                <option>Yes</option>
                                <option>No</option>
                            </select>
                            <select
                                className="w-full px-5 py-2 bg-[#F8F8F7] border border-neutral-300 mb-2 font-light opacity-80 placeholder:text-black rounded-lg"
                                name="department"
                                title="department"
                            >
                                <option disabled selected>
                                Which department you're interested to work?
                                </option>
                                <option>Sales &amp; Leasing (Residential or Commercial)</option>
                                <option>Property Management</option>
                                <option>Conveyancing</option>
                                <option>HR / Recruitment / Training</option>
                                <option>Marketing</option>
                                <option>Customer Service</option>
                                <option>Technology</option>
                                <option>Accounting</option>
                                <option>Admin</option>
                                <option>Other</option>
                            </select>
                            <input
                                type="text"
                                placeholder="E-mail address"
                                className="w-full px-5 py-2 bg-[#F8F8F7] border border-neutral-300 mb-2 font-light opacity-80 placeholder:text-black rounded-lg"
                                name="email"
                            />
                            <input
                                type="text"
                                placeholder="Mobile Number"
                                className="w-full px-5 py-2 bg-[#F8F8F7] border border-neutral-300 mb-2 font-light opacity-80 placeholder:text-black rounded-lg"
                                name="mobile"
                            />
                            <div className="flex items-center justify-between gap-0.5 w-full bg-neutral-200 border border-neutral-300 px-4 py-2 rounded-lg">
                                <div className="flex items-center gap-2">
                                    <span className="text-sm text-theme-dark-green line-clamp-1 text-ellipsis font-light opacity-80">
                                        Upload your CV and/or cover letter*
                                    </span>
                                </div>
                                <label
                                className="px-4 py-2 bg-white border border-neutral-300 text-sm text-nowrap font-light opacity-80 rounded-lg"
                                htmlFor="cv2"
                                >
                                    Choose File
                                </label>
                                <input
                                type="file"
                                id="cv2"
                                className="hidden"
                                accept=".pdf,.doc,.docx"
                                name="cv"
                                />
                            </div>
                            <small className="text-xs text-gray-500 mb-6 font-light opacity-80">
                                *Please upload a file in PDF, DOC, or DOCX format. Maximum file size is 10MB.
                            </small>
                            <div className="flex items-center justify-start gap-2 mt-6">
                                <input
                                type="checkbox"
                                id="terms"
                                className="w-6 h-6"
                                required
                                name="terms"
                                />
                                <label htmlFor="terms" className="text-xs text-gray-500 font-light opacity-80 w-[90%]">
                                    By submitting this form, I consent to the use of my personal data to process my request, in accordance with the privacy policy.
                                </label>
                            </div>
                            <button
                                type="submit"
                                className="bg-[#9f3517] rounded-lg flex font-bold text-lg items-center justify-center gap-4 px-5 py-2 text-white mt-3 font-black w-full"                        
                            >
                                Submit Application
                                <img
                                src="/icons/arrow-right-white.svg"
                                alt="arrow"
                                className="w-4 h-4"
                                />
                            </button>
                        </form>
                    </div>
                </div>
                
                {/* Desktop Device */}
                <form className="absolute top-8 bottom-0 right-0 w-1/2 h- min-h-[fit-content] object-cover bg-white border border-slate-400 px-8 py-8 md:block hidden">
                    <input
                        type="text"
                        placeholder="Full Name"
                        className="w-full px-5 py-2 bg-[#F8F8F7] border border-neutral-300 mb-2 font-light opacity-80 placeholder:text-black rounded-lg"
                        name="name"
                    />
                    <input
                        type="text"
                        placeholder="Nationality"
                        className="w-full px-5 py-2 bg-[#F8F8F7] border border-neutral-300 mb-2 font-light opacity-80 placeholder:text-black rounded-lg"
                        name="nationality"
                    />
                    <select
                        className="w-full px-5 py-2 bg-[#F8F8F7] border border-neutral-300 mb-2 font-light opacity-80 placeholder:text-black rounded-lg"
                        name="inDubai"
                        title="inDubai"
                        required
                    >
                        <option disabled selected>Are you currently based in Dubai?</option>
                        <option>Yes</option>
                        <option>No</option>
                    </select>
                    <select
                        className="w-full px-5 py-2 bg-[#F8F8F7] border border-neutral-300 mb-2 font-light opacity-80 placeholder:text-black rounded-lg"
                        name="department"
                        title="department"
                    >
                        <option disabled selected>
                            Which department you're interested to work?
                        </option>
                        <option>Sales &amp; Leasing</option>
                        <option>Property Management</option>
                        <option>Conveyancing</option>
                        <option>HR / Recruitment / Training</option>
                        <option>Marketing</option>
                        <option>Customer Service</option>
                        <option>Technology</option>
                        <option>Accounting</option>
                        <option>Admin</option>
                        <option>Other</option>
                    </select>
                    <input
                        type="text"
                        placeholder="E-mail address"
                        className="w-full px-5 py-2 bg-[#F8F8F7] border border-neutral-300 mb-2 font-light opacity-80 placeholder:text-black rounded-lg"
                        name="email"
                    />
                    <input
                        type="text"
                        placeholder="Mobile Number"
                        className="w-full px-5 py-2 bg-[#F8F8F7] border border-neutral-300 mb-2 font-light opacity-80 placeholder:text-black rounded-lg"
                        name="mobile"
                    />
                    <div className="flex items-center justify-between gap-0.5 w-full bg-neutral-200 border border-neutral-300 px-4 py-2 rounded-lg">
                        <div className="flex items-center gap-2">
                            <span className="text-sm text-theme-dark-green line-clamp-1 text-ellipsis font-light opacity-80">
                                Upload your CV and/or cover letter*
                            </span>
                        </div>
                        <label
                        className="px-4 py-2 bg-white border border-neutral-300 text-sm text-nowrap font-light opacity-80 rounded-lg"
                        htmlFor="cv"
                        >
                            Choose File
                        </label>
                        <input
                        type="file"
                        id="cv"
                        className="hidden"
                        accept=".pdf,.doc,.docx"
                        name="cv"
                        />
                    </div>
                    <small className="text-xs text-gray-500 mb-6 font-light opacity-80">
                        *Please upload a file in PDF, DOC, or DOCX format. Maximum file size is 10MB.
                    </small>
                    <div className="flex items-center justify-start gap-2 mt-6">
                        <input
                        type="checkbox"
                        id="terms"
                        className="w-6 h-6"
                        required
                        name="terms"
                        />
                        <label htmlFor="terms" className="text-xs text-gray-500 font-light opacity-80 w-[90%]">
                            By submitting this form, I consent to the use of my personal data to process my request, in accordance with the privacy policy.
                        </label>
                    </div>
                    <button
                        type="submit"
                        className="bg-[#9f3517] rounded-lg flex font-bold text-lg items-center justify-center gap-4 px-5 py-2 text-white mt-3 font-black w-full "                        
                    >
                        Submit Application
                        <img
                        src="/icons/arrow-right-white.svg"
                        alt="arrow"
                        className="w-4 h-4"
                        />
                    </button>
                </form>
            </div>
            </div>



      {/*<div className="max-w-4xl mx-auto px-6 py-8">
        <h2 className="text-2xl md:text-3xl text-center font-light text-theme-dark-green">
          Fill Out the Form Below to Join Our Team
        </h2>
        
        <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-100">
            <div className="w-full rounded-xl bg-gray-200 shadow-[0_0_0_1px_rgba(0,0,0,0.1),0_1px_3px_0_rgba(0,0,0,0.1)] overflow-hidden p-8 max-w-2xl mx-auto" style={{ backgroundColor: '#f5f5f5' }}>
                <form onSubmit={handleSubmit} className="space-y-6">
                    
                    <div>
                        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                        Full Name
                        </label>
                        <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        required
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        value={formData.fullName}
                        onChange={handleChange}
                        />
                    </div>
                    
                    <div>
                        <label htmlFor="nationality" className="block text-sm font-medium text-gray-700">
                        Nationality
                        </label>
                        <input
                        type="text"
                        id="nationality"
                        name="nationality"
                        required
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        value={formData.nationality}
                        onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                        Are you currently based in UAE?
                        </label>
                        <div className="mt-2 space-x-4">
                        <label className="inline-flex items-center">
                            <input
                            type="radio"
                            name="basedInUAE"
                            value="Yes"
                            checked={formData.basedInUAE === 'Yes'}
                            onChange={handleChange}
                            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                            />
                            <span className="ml-2 text-sm text-gray-700">Yes</span>
                        </label>
                        <label className="inline-flex items-center">
                            <input
                            type="radio"
                            name="basedInUAE"
                            value="No"
                            checked={formData.basedInUAE === 'No'}
                            onChange={handleChange}
                            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                            />
                            <span className="ml-2 text-sm text-gray-700">No</span>
                        </label>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="department" className="block text-sm font-medium text-gray-700">
                        Which department are you interested to work in?
                        </label>
                        <select
                        id="department"
                        name="department"
                        required
                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                        value={formData.department}
                        onChange={handleChange}
                        >
                        <option value="">Select department</option>
                        <option value="Sales & Leasing">Sales & Leasing</option>
                        <option value="Accounts">Accounts</option>
                        <option value="HR">HR</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Admin">Admin</option>
                        <option value="Other">Other</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email Address
                        </label>
                        <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        value={formData.email}
                        onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">
                        Mobile Number
                        </label>
                        <input
                        type="tel"
                        id="mobile"
                        name="mobile"
                        required
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        value={formData.mobile}
                        onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Upload Resume</label>
                        <input
                            type="file"
                            className="w-full border text-md border-gray-300 rounded-md file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200"
                            required
                        />
                    </div>

                    
                    <div>
                        <label htmlFor="resume" className="block text-sm font-medium text-gray-700">
                        Upload Resume
                        </label>
                        <input
                        type="file"
                        id="resume"
                        name="resume"
                        accept=".pdf,.doc,.docx"
                        required
                        className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
                        onChange={handleChange}
                        />
                    </div> 

                    <div className="flex items-start">
                        <div className="flex items-center h-5">
                        <input
                            id="acceptTerms"
                            name="acceptTerms"
                            type="checkbox"
                            required
                            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                            checked={formData.acceptTerms}
                            onChange={handleChange}
                        />
                        </div>
                        <div className="ml-3 text-sm">
                            <label htmlFor="acceptTerms" className="font-light text-gray-700">
                                By submitting this form, I consent to the use of my personal data to process my request, in accordance with the privacy policy.
                            </label>
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"                            
                            className="w-full bg-[#9f3517] flex justify-center px-8 py-2 border border-transparent rounded-md shadow-sm text-lg font-bold text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Submit Application
                        </button>
                    </div>
                </form>
            </div>
        </div>
      </div> */ }
    </div>
  );
};
