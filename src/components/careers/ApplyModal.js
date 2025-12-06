"use client";

import { LazyMotion, m, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  HiXMark,
  HiPaperAirplane,
  HiCheckCircle,
  HiPaperClip,
} from "react-icons/hi2";

const loadFeatures = () =>
  import("framer-motion").then((res) => res.domAnimation);

export default function ApplyModal({ isOpen, onClose, job }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    resume: null,
    coverLetter: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState("");

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        experience: "",
        resume: null,
        coverLetter: "",
      });
      setFileName("");
      onClose();
    }, 2000);
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
      setFileName(files[0].name);
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  if (!job) return null;

  return (
    <LazyMotion features={loadFeatures} strict>
      <AnimatePresence>
        {isOpen && (
          <>
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            />

            <div className="fixed inset-0 z-50 overflow-y-auto">
              <div className="min-h-full flex items-center justify-center p-4">
                <m.div
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 20 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between p-6 border-b border-gray-100 shrink-0">
                    <div className="flex-1 pr-4">
                      <h3 className="text-xl  font-black text-gray-900 wrap-break-word">
                        Apply for {job.title}
                      </h3>
                      <p className="text-gray-600 mt-1 text-sm">
                        {job.location}
                      </p>
                    </div>
                    <button
                      onClick={onClose}
                      className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors shrink-0"
                    >
                      <HiXMark className="w-6 h-6 text-gray-600" />
                    </button>
                  </div>

                  {/* Form - Scrollable */}
                  <form
                    onSubmit={handleSubmit}
                    className="flex-1 overflow-y-auto"
                  >
                    <div className="p-6 space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                        <div>
                          <label
                            htmlFor="name"
                            className="block text-gray-900 font-bold mb-2 text-sm"
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
                            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors text-sm"
                            placeholder="John Doe"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="email"
                            className="block text-gray-900 font-bold mb-2 text-sm"
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
                            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors text-sm"
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                        <div>
                          <label
                            htmlFor="phone"
                            className="block text-gray-900 font-bold mb-2 text-sm"
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
                            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors text-sm"
                            placeholder="+91 XXXXX XXXXX"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="experience"
                            className="block text-gray-900 font-bold mb-2 text-sm"
                          >
                            Years of Experience *
                          </label>
                          <input
                            type="text"
                            id="experience"
                            name="experience"
                            required
                            value={formData.experience}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors text-sm"
                            placeholder="e.g., 2 years"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="resume"
                          className="block text-gray-900 font-bold mb-2 text-sm"
                        >
                          Upload Resume *
                        </label>
                        <div className="relative">
                          <input
                            type="file"
                            id="resume"
                            name="resume"
                            required
                            onChange={handleChange}
                            accept=".pdf,.doc,.docx"
                            className="hidden"
                          />
                          <label
                            htmlFor="resume"
                            className="flex items-center justify-between w-full px-4 py-3 rounded-xl border-2 border-gray-200 hover:border-primary cursor-pointer transition-colors"
                          >
                            <span className="text-sm text-gray-600">
                              {fileName || "Choose file..."}
                            </span>
                            <HiPaperClip className="w-5 h-5 text-gray-400" />
                          </label>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">
                          PDF, DOC, or DOCX (Max 5MB)
                        </p>
                      </div>

                      <div>
                        <label
                          htmlFor="coverLetter"
                          className="block text-gray-900 font-bold mb-2 text-sm"
                        >
                          Cover Letter (Optional)
                        </label>
                        <textarea
                          id="coverLetter"
                          name="coverLetter"
                          value={formData.coverLetter}
                          onChange={handleChange}
                          rows={4}
                          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors resize-none text-sm"
                          placeholder="Tell us why you're a great fit for this role..."
                        />
                      </div>
                    </div>

                    {/* Footer - Fixed */}
                    <div className="p-6 border-t border-gray-100 bg-gray-50 shrink-0">
                      <div className="flex flex-col sm:flex-row gap-3">
                        <button
                          type="button"
                          onClick={onClose}
                          className="flex-1 bg-white text-gray-700 py-3 px-6 rounded-xl font-bold border-2 border-gray-200 hover:bg-gray-50 transition-colors cursor-pointer"
                        >
                          Cancel
                        </button>
                        <m.button
                          type="submit"
                          disabled={submitted}
                          whileHover={{ scale: submitted ? 1 : 1.02 }}
                          whileTap={{ scale: submitted ? 1 : 0.98 }}
                          className="flex-1 bg-primary text-white py-3 px-6 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors disabled:opacity-70"
                        >
                          {submitted ? (
                            <>
                              <HiCheckCircle className="w-5 h-5" />
                              Submitted!
                            </>
                          ) : (
                            <>
                              Submit Application
                              <HiPaperAirplane className="w-5 h-5" />
                            </>
                          )}
                        </m.button>
                      </div>
                    </div>
                  </form>
                </m.div>
              </div>
            </div>
          </>
        )}
      </AnimatePresence>
    </LazyMotion>
  );
}
