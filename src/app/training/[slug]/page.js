"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import TrainingCourseClient from "@/components/training/TrainingCourseClient";
import Link from "next/link";
import { HiArrowLeft } from "react-icons/hi2";

export default function TrainingCoursePage() {
  const params = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    async function loadCourse() {
      try {
        // Try Analytical Chemistry
        const analyticalRes = await fetch(
          "/data/analyticalChemistryTraining.json"
        );
        const analyticalData = await analyticalRes.json();
        let course = analyticalData.courses.find((c) => c.slug === params.slug);

        if (course) {
          setData({ course, allCourses: analyticalData.courses });
          setLoading(false);
          return;
        }

        // Try Lubrication
        const lubricationRes = await fetch("/data/lubricationTraining.json");
        const lubricationData = await lubricationRes.json();
        course = lubricationData.courses.find((c) => c.slug === params.slug);

        if (course) {
          setData({ course, allCourses: lubricationData.courses });
          setLoading(false);
          return;
        }

        // Not found
        setNotFound(true);
        setLoading(false);
      } catch (error) {
        console.error("Error loading course:", error);
        setNotFound(true);
        setLoading(false);
      }
    }

    if (params.slug) {
      loadCourse();
    }
  }, [params.slug]);

  if (loading) {
    return (
      <div className="bg-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 font-semibold">Loading course...</p>
        </div>
      </div>
    );
  }

  if (notFound || !data) {
    return (
      <div className="bg-white min-h-screen flex items-center justify-center">
        <div className="text-center px-8 py-16">
          <div className="w-24 h-24 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-6">
            <span className="text-5xl">🔍</span>
          </div>
          <h1 className="text-5xl font-black text-gray-900 mb-4">
            Course Not Found
          </h1>
          <p className="text-gray-600 text-xl mb-8 max-w-md mx-auto">
            The training course you&apos;re looking for doesn&apos;t exist or
            has been moved.
          </p>
          <Link
            href="/training"
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl"
          >
            <HiArrowLeft className="w-5 h-5" />
            Back to All Training
          </Link>
        </div>
      </div>
    );
  }

  return (
    <TrainingCourseClient
      courseData={data.course}
      allCourses={data.allCourses}
    />
  );
}
