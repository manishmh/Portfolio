"use client";

import Link from "next/link";
import { useState } from "react";

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [uploadStatus, setUploadStatus] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }),
      });

      const data = await response.json();

      if (response.ok) {
        setIsAuthenticated(true);
        setPassword("");
      } else {
        setError(data.error || "Authentication failed");
      }
    } catch {
      setError("Network error");
    } finally {
      setLoading(false);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setUploadStatus(null);
    }
  };

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedFile) return;

    setLoading(true);
    setUploadStatus(null);
    setError(null);

    try {
      const formData = new FormData();
      formData.append("resume", selectedFile);

      const response = await fetch("/api/resume/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        setUploadStatus("Resume uploaded successfully!");
        setSelectedFile(null);
        // Reset file input
        const fileInput = document.getElementById(
          "resume-file"
        ) as HTMLInputElement;
        if (fileInput) fileInput.value = "";
      } else {
        setError(data.error || "Upload failed");
      }
    } catch {
      setError("Upload error");
    } finally {
      setLoading(false);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-black-100 flex items-center justify-center p-4">
        <div className="bg-gray-900 rounded-lg p-8 w-full max-w-md">
          <h1 className="text-2xl font-bold text-center mb-6 text-white">
            Admin Login
          </h1>

          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 bg-gray-800 border border-gray-600 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {error && <div className="mb-4 text-red-400 text-sm">{error}</div>}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition-colors disabled:opacity-50"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black-100 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gray-900 rounded-lg p-8">
          <h1 className="text-3xl font-bold text-center mb-8 text-white">
            Admin Dashboard
          </h1>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-white">
              Upload Resume
            </h2>

            <form onSubmit={handleUpload}>
              <div className="mb-4">
                <label
                  htmlFor="resume-file"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Select Resume File (PDF recommended)
                </label>
                <input
                  type="file"
                  id="resume-file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileSelect}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-600 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              {selectedFile && (
                <div className="mb-4 text-sm text-gray-400">
                  Selected:{" "}
                  <span className="text-white">{selectedFile.name}</span> (
                  {(selectedFile.size / 1024 / 1024).toFixed(2)} MB)
                </div>
              )}

              {uploadStatus && (
                <div className="mb-4 text-green-400 text-sm">
                  {uploadStatus}
                </div>
              )}

              {error && (
                <div className="mb-4 text-red-400 text-sm">{error}</div>
              )}

              <button
                type="submit"
                disabled={loading || !selectedFile}
                className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded transition-colors disabled:opacity-50"
              >
                {loading ? "Uploading..." : "Upload Resume"}
              </button>
            </form>
          </div>

          <div className="border-t border-gray-700 pt-6">
            <h2 className="text-xl font-semibold mb-4 text-white">
              Quick Actions
            </h2>
            <div className="flex gap-4">
              <a
                href="/resume"
                className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition-colors"
              >
                View Current Resume
              </a>
              <Link
                href="/"
                className="bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded transition-colors"
              >
                Back to Portfolio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
