"use client";

import { LazyMotion, m, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  HiXMark,
  HiPaperAirplane,
  HiCheckCircle,
} from "react-icons/hi2";

const loadFeatures = () =>
  import("framer-motion").then((res) => res.domAnimation);

export default function SyllabusModal({ isOpen, onClose, initialCourse = "" }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: initialCourse,
  });

  const [courses, setCourses] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadCourses() {
      try {
        const [analyticalRes, lubricationRes] = await Promise.all([
          fetch("/data/analyticalChemistryTraining.json"),
          fetch("/data/lubricationTraining.json"),
        ]);
        const analyticalData = await analyticalRes.json();
        const lubricationData = await lubricationRes.json();
        
        const combined = [
          ...(analyticalData.courses || []),
          ...(lubricationData.courses || []),
        ];
        
        setCourses(combined);
      } catch (err) {
        console.error("Failed to load courses", err);
      }
    }
    loadCourses();
  }, []);

  // Update initial course if it changes
  useEffect(() => {
    if (initialCourse) {
      setFormData((prev) => ({ ...prev, course: initialCourse }));
    }
  }, [initialCourse]);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/syllabus", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          setFormData({
            name: "",
            email: "",
            phone: "",
            course: "",
          });
          onClose();
        }, 3000);
      } else {
        const resData = await response.json();
        setError(resData.error || "Something went wrong.");
      }
    } catch (err) {
      setError("Failed to request syllabus. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

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
                  className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-hidden flex flex-col"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Header */}
                  <div className="flex items-center justify-between p-6 border-b border-gray-100 shrink-0">
                    <div>
                      <h3 className="text-xl font-black text-gray-900">
                        Request Course Syllabus
                      </h3>
                      <p className="text-gray-600 mt-1 text-sm">
                        Get the detailed curriculum sent directly to your inbox.
                      </p>
                    </div>
                    <button
                      onClick={onClose}
                      className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors shrink-0"
                    >
                      <HiXMark className="w-6 h-6 text-gray-600" />
                    </button>
                  </div>

                  {/* Form */}
                  <form
                    onSubmit={handleSubmit}
                    className="flex-1 overflow-y-auto"
                  >
                    <div className="p-6 space-y-5">
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
                          placeholder="Your Name"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
                            placeholder="you@example.com"
                          />
                        </div>

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
                      </div>

                      <div>
                        <label
                          htmlFor="course"
                          className="block text-gray-900 font-bold mb-2 text-sm"
                        >
                          Select Course *
                        </label>
                        <select
                          id="course"
                          name="course"
                          required
                          value={formData.course}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary focus:outline-none transition-colors text-sm bg-white"
                        >
                          <option value="" disabled>Select a course</option>
                          {courses.map((c) => (
                            <option key={c.id} value={c.title}>
                              {c.title}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Footer - Fixed */}
                    <div className="p-6 border-t border-gray-100 bg-gray-50 shrink-0">
                      {error && (
                        <p className="text-red-500 text-sm font-semibold mb-3 text-center">
                          {error}
                        </p>
                      )}
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
                          disabled={loading || submitted}
                          whileHover={{
                            scale: loading || submitted ? 1 : 1.02,
                          }}
                          whileTap={{ scale: loading || submitted ? 1 : 0.98 }}
                          className={`flex-1 text-white py-3 px-6 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors disabled:opacity-70 cursor-pointer ${
                            loading
                              ? "bg-gray-400 cursor-not-allowed"
                              : "bg-primary hover:bg-primary/90"
                          }`}
                        >
                          {loading ? (
                            <>
                              <svg
                                className="animate-spin h-5 w-5 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                              >
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              Requesting...
                            </>
                          ) : submitted ? (
                            <>
                              <HiCheckCircle className="w-5 h-5" />
                              Requested!
                            </>
                          ) : (
                            <>
                              Request Syllabus
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
