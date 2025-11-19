// src/components/ContactForm.jsx
import React, { useEffect, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Switch } from "@headlessui/react";
import { Link } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ContactForm() {
  const initialForm = {
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    country: "IND",
    phoneNumber: "",
    message: "",
  };

  const [formFields, setFormFields] = useState(initialForm);
  const [agreed, setAgreed] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null); // null | 'sending' | 'success' | 'failure'
  const [errors, setErrors] = useState({}); // field -> message

  // Controlled input handler
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormFields((prev) => ({ ...prev, [name]: value }));
    // clear field-level error as user types
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  // Basic validation: returns errors object
  const validate = () => {
    const errs = {};
    if (!formFields.firstName.trim()) errs.firstName = "First name is required.";
    if (!formFields.lastName.trim()) errs.lastName = "Last name is required.";
    if (!formFields.email.trim()) errs.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formFields.email)) errs.email = "Enter a valid email.";
    if (!formFields.phoneNumber.trim()) errs.phoneNumber = "Phone number is required.";
    // optional: simple numeric check
    else if (!/^[0-9+\-\s()]{6,20}$/.test(formFields.phoneNumber)) errs.phoneNumber = "Enter a valid phone number.";
    if (!formFields.message.trim()) errs.message = "Message cannot be empty.";
    if (!agreed) errs.agreed = "Please agree to the privacy policy.";
    return errs;
  };

  // Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    // prevent double submit while sending
    if (submissionStatus === "sending") return;

    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      setSubmissionStatus(null);
      // focus the first error field (nice UX)
      const firstErr = Object.keys(errs)[0];
      const el = document.querySelector(`[name="${firstErr}"]`);
      if (el) el.focus();
      return;
    }

    setSubmissionStatus("sending");
    setErrors({});

    try {
      const response = await fetch("https://formspree.io/f/xeqyeenr", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formFields,
          country: formFields.country,
        }),
      });

      if (response.ok) {
        setSubmissionStatus("success");
        setFormFields(initialForm);
        setAgreed(false);
        // clear success after a bit
        setTimeout(() => setSubmissionStatus(null), 4000);
      } else {
        setSubmissionStatus("failure");
        setTimeout(() => setSubmissionStatus(null), 4000);
      }
    } catch (err) {
      setSubmissionStatus("failure");
      setTimeout(() => setSubmissionStatus(null), 4000);
    }
  };

  return (
    <div className="bg-white px-6 py-20 sm:py-32 lg:px-8">
      {/* Decorative background */}
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Let's Connect!</h2>
        <p className="mt-2 text-gray-600">Feel free to reach out regarding projects, collaboration, or support.</p>
      </div>

      {/* Status banners */}
      <div className="mx-auto mt-6 max-w-xl">
        {submissionStatus === "success" && (
          <div role="status" aria-live="polite" className="rounded-md bg-green-50 border border-green-100 px-4 py-2 text-sm text-green-700">
            Message sent — thanks! I will reply soon.
          </div>
        )}
        {submissionStatus === "failure" && (
          <div role="alert" className="rounded-md bg-amber-50 border border-amber-100 px-4 py-2 text-sm text-amber-800">
            Something went wrong. Please try again later.
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="mx-auto mt-8 max-w-xl sm:mt-10" noValidate>
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          {/* First name */}
          <div>
            <label htmlFor="firstName" className="block text-sm font-semibold leading-6 text-gray-900">
              First name
            </label>
            <div className="mt-2.5">
              <input
                id="firstName"
                name="firstName"
                value={formFields.firstName}
                onChange={handleInputChange}
                autoComplete="given-name"
                className={classNames(
                  "block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset sm:text-sm sm:leading-6",
                  errors.firstName ? "ring-red-400" : "ring-gray-300",
                  "focus:ring-2 focus:ring-inset focus:ring-indigo-600 placeholder:text-gray-400"
                )}
              />
            </div>
            {errors.firstName && <p className="mt-1 text-xs text-red-600">{errors.firstName}</p>}
          </div>

          {/* Last name */}
          <div>
            <label htmlFor="lastName" className="block text-sm font-semibold leading-6 text-gray-900">
              Last name
            </label>
            <div className="mt-2.5">
              <input
                id="lastName"
                name="lastName"
                value={formFields.lastName}
                onChange={handleInputChange}
                autoComplete="family-name"
                className={classNames(
                  "block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset sm:text-sm sm:leading-6",
                  errors.lastName ? "ring-red-400" : "ring-gray-300",
                  "focus:ring-2 focus:ring-inset focus:ring-indigo-600 placeholder:text-gray-400"
                )}
              />
            </div>
            {errors.lastName && <p className="mt-1 text-xs text-red-600">{errors.lastName}</p>}
          </div>

          {/* Company */}
          <div className="sm:col-span-2">
            <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900">
              Company
            </label>
            <div className="mt-2.5">
              <input
                id="company"
                name="company"
                value={formFields.company}
                onChange={handleInputChange}
                autoComplete="organization"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          {/* Email */}
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
              Email
            </label>
            <div className="mt-2.5">
              <input
                id="email"
                name="email"
                type="email"
                value={formFields.email}
                onChange={handleInputChange}
                autoComplete="email"
                className={classNames(
                  "block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset sm:text-sm sm:leading-6",
                  errors.email ? "ring-red-400" : "ring-gray-300",
                  "focus:ring-2 focus:ring-inset focus:ring-indigo-600 placeholder:text-gray-400"
                )}
              />
            </div>
            {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
          </div>


          {/* PhoneNumber */}
          <div className="sm:col-span-2">
            <label htmlFor="phoneNumber" className="block text-sm font-semibold leading-6 text-gray-900">
              Phone number
            </label>

            <div className="relative mt-2.5">

              {/* Country selector box (fixed width) */}
              <div className="absolute inset-y-0 left-0 flex items-center">
                <select
                  id="country"
                  name="country"
                  value={formFields.country}
                  onChange={handleInputChange}
                  className="h-full w-24 rounded-l-md border-0 bg-gray-50 px-2 text-gray-700 text-sm focus:ring-indigo-600"
                >
                  <option value="IND">+91 (IND)</option>
                  <option value="USA">+1 (USA)</option>
                  <option value="UK">+44 (UK)</option>
                  <option value="UAE">+971 (UAE)</option>
                  <option value="CAN">+1 (CAN)</option>
                  <option value="AUS">+61 (AUS)</option>
                </select>
              </div>

              {/* Phone input field */}
              <input
                id="phoneNumber"
                name="phoneNumber"
                type="tel"
                value={formFields.phoneNumber}
                onChange={handleInputChange}
                autoComplete="tel"
                placeholder="Enter phone number"
                className={classNames(
                  "block w-full rounded-md border-0 px-3.5 py-2 pl-28 text-gray-900 shadow-sm ring-1 ring-inset sm:text-sm sm:leading-6",
                  errors.phoneNumber ? "ring-red-400" : "ring-gray-300",
                  "focus:ring-2 focus:ring-inset focus:ring-indigo-600 placeholder:text-gray-400"
                )}
              />
            </div>

            {errors.phoneNumber && (
              <p className="mt-1 text-xs text-red-600">{errors.phoneNumber}</p>
            )}
          </div>




          {/* Message */}
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formFields.message}
                onChange={handleInputChange}
                className={classNames(
                  "block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset sm:text-sm sm:leading-6",
                  errors.message ? "ring-red-400" : "ring-gray-300",
                  "focus:ring-2 focus:ring-inset focus:ring-indigo-600 placeholder:text-gray-400"
                )}
              />
            </div>
            {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message}</p>}
          </div>

          {/* Agree switch */}
          <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2 items-center">
            <div className="flex h-6 items-center">
              <Switch
                checked={agreed}
                onChange={setAgreed}
                className={classNames(
                  agreed ? "bg-indigo-600" : "bg-gray-200",
                  "relative inline-flex h-6 w-11 items-center rounded-full transition-colors"
                )}
              >
                <span className={classNames(agreed ? "translate-x-6" : "translate-x-1", "inline-block h-4 w-4 transform rounded-full bg-white transition")} />
              </Switch>
            </div>

            <Switch.Label className="text-sm text-gray-600">
              By selecting this, you agree to our{" "}
              <Link to="/privacy-policy" className="font-semibold text-indigo-600">
                privacy policy
              </Link>
              .
            </Switch.Label>
            {errors.agreed && <p className="mt-1 text-xs text-red-600">{errors.agreed}</p>}
          </Switch.Group>
        </div>

        <div className="mt-10">
          <button
            type="submit"
            disabled={submissionStatus === "sending"}
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-60"
          >
            {submissionStatus === "sending" ? "Sending..." : "Send"}
          </button>
        </div>
      </form>
    </div>
  );
}
