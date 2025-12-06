"use client";

import { useState, useEffect } from "react";
import PageHeader from "@/components/PageHeader";
import CareersIntro from "@/components/careers/CareersIntro";
import InternshipSection from "@/components/careers/InternshipSection";
import JobListings from "@/components/careers/JobListings";
import ApplyModal from "@/components/careers/ApplyModal";

export default function CareersPage() {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetch("/data/jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data.jobs))
      .catch((error) => console.error("Error loading jobs:", error));
  }, []);

  const handleApply = (job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedJob(null), 300);
  };

  return (
    <div className="bg-white">
      <PageHeader tagline="Join our team and build your career in testing excellence" />
      <CareersIntro />
      <InternshipSection />
      <JobListings jobs={jobs} onApply={handleApply} />
      <ApplyModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        job={selectedJob}
      />
    </div>
  );
}
