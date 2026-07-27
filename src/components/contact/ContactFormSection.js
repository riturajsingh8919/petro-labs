"use client";

import { LazyMotion, m } from "framer-motion";
import { useState } from "react";
import { HiPaperAirplane, HiCheckCircle } from "react-icons/hi2";

const loadFeatures = () =>
  import("framer-motion").then((res) => res.domAnimation);

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const services = [
    "Petroleum Testing",
    "Water Quality Testing",
    "Coolant & DEF Testing",
    "RoHS & ELV Certification",
    "Chemical & Mechanical Testing",
    "Metallography Testing",
    "Food Testing",
    "Air Quality Testing",
    "Other",
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          service: "",
          message: "",
        });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        const data = await response.json();
        setError(data.error || "Something went wrong.");
      }
    } catch (err) {
      setError("Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <LazyMotion features={loadFeatures} strict>
      <section className="container mx-auto px-8 md:px-12 py-16 bg-gray-100">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl xl:text-5xl font-black leading-tight mb-6 text-gray-900">
            Send Us a <span className="text-primary">Message</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Fill out the form and our team will get back to you within 24 hours
          </p>
        </m.div>

        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl p-8 shadow-xl border-2 border-gray-100"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-900 font-bold mb-2"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-900 font-bold mb-2"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label
                  htmlFor="phone"
                  className="block text-gray-900 font-bold mb-2"
                >
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-gray-900 font-bold mb-2"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors"
                  placeholder="Your Company"
                />
              </div>
            </div>

            <div className="mb-6">
              <label
                htmlFor="service"
                className="block text-gray-900 font-bold mb-2"
              >
                Service of Interest *
              </label>
              <select
                id="service"
                name="service"
                required
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors"
              >
                <option value="">Select a service</option>
                {services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-gray-900 font-bold mb-2"
              >
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors resize-none"
                placeholder="Tell us about your testing requirements..."
              />
            </div>

            <m.button
              type="submit"
              disabled={loading || submitted}
              whileHover={{ scale: loading || submitted ? 1 : 1.02 }}
              whileTap={{ scale: loading || submitted ? 1 : 0.98 }}
              className={`w-full text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-colors shadow-lg cursor-pointer ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-primary hover:bg-primary/90"
              }`}
            >
              {loading ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Sending...
                </>
              ) : submitted ? (
                <>
                  <HiCheckCircle className="w-6 h-6" />
                  Message Sent!
                </>
              ) : (
                <>
                  Send Message
                  <HiPaperAirplane className="w-5 h-5" />
                </>
              )}
            </m.button>

            {error && (
              <m.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center text-red-500 font-semibold mt-4"
              >
                {error}
              </m.p>
            )}

            {submitted && (
              <m.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center text-primary font-semibold mt-4"
              >
                Thank you! We&apos;ll get back to you soon.
              </m.p>
            )}
          </form>
        </m.div>
      </section>
    </LazyMotion>
  );
}
