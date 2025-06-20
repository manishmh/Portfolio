"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function ResumePage() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [resumeUrl, setResumeUrl] = useState<string | null>(null);

  useEffect(() => {
    fetchResume();
  }, []);

  const fetchResume = async () => {
    try {
      const response = await fetch("/api/resume");

      if (response.ok) {
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        // Add parameters to disable sidebar and navigation panels
        setResumeUrl(`${url}#pagemode=none&toolbar=0&navpanes=0&view=Fit`);
      } else {
        setError("No resume found");
      }
    } catch {
      setError("Failed to load resume");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black-100 flex items-center justify-center">
        <div className="text-white text-xl">Loading resume...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-black-100 flex items-center justify-center">
        <div className="text-red-400 text-xl">{error}</div>
      </div>
    );
  }

  return (
    <div className="h-screen bg-black-100">
      <div className="max-w-5xl mx-auto">
        <div className="text-center flex justify-between py-2">
          <h1 className="text-2xl font-bold text-white">Resume</h1>
          <div className="flex justify-center gap-4">
            <Link
              href="/api/resume"
              download
              className="bg-blue-600 text-sm hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors"
            >
              Download PDF
            </Link>
            <Link
              href="/"
              className="bg-gray-600 text-sm hover:bg-gray-700 text-white px-4 py-2 rounded transition-colors"
            >
              Back to Portfolio
            </Link>
          </div>
        </div>

        {resumeUrl && (
          <div className="bg-white rounded overflow-hidden">
            <iframe
              src={resumeUrl}
              className="w-full h-[800px]"
              title="Resume"
            />
          </div>
        )}
      </div>
    </div>
  );
}
