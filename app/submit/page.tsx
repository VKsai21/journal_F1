"use client";

import { useState } from "react";

export default function SubmitPage() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [email, setEmail] = useState("");
  const [keywords, setKeywords] = useState("");
  const [abstract, setAbstract] = useState("");
  const [remarks, setRemarks] = useState("");

  const [fileName, setFileName] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    try {
      setLoading(true);
      setSuccess(false);
      setError("");

      const formData = new FormData();

      formData.append("title", title);
      formData.append("author", author);
      formData.append("email", email);
      formData.append("keywords", keywords);
      formData.append("abstract", abstract);
      formData.append("remarks", remarks);

      const res = await fetch("/api/submit", {
        method: "POST",
        body: formData,
      });

      const result = await res.json();

      if (result.success) {
        setSuccess(true);

        setTitle("");
        setAuthor("");
        setEmail("");
        setKeywords("");
        setAbstract("");
        setRemarks("");
      } else {
        setError(result.message || "Submission failed");
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#f8f6f2] text-black">
      {/* HERO */}
      <section className="border-b border-black/10 bg-white">
        <div className="max-w-6xl mx-auto px-6 py-24 text-center">
          <p className="uppercase tracking-[0.3em] text-sm text-gray-500">
            Journal Submission
          </p>

          <h1 className="mt-5 text-5xl md:text-6xl font-light">
            Submit Your Manuscript
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Submit original research articles, review papers, and innovative
            engineering studies for peer review and publication in the Journal
            of Future Engineering and Research.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* LEFT */}
          <div>
            <div className="sticky top-24 bg-white rounded-3xl border border-black/10 p-8">
              <h3 className="text-2xl font-medium mb-6">
                Submission Guidelines
              </h3>

              <ul className="space-y-4 text-gray-600">
                <li>✓ Manuscript must be in PDF format</li>
                <li>✓ Original and unpublished research</li>
                <li>✓ English language only</li>
                <li>✓ Peer-reviewed publication process</li>
                <li>✓ Ethical publication standards</li>
                <li>✓ DOI assigned after publication</li>
                <li>✓ Include complete author details</li>
                <li>✓ Provide relevant keywords</li>
              </ul>

              <div className="mt-8 pt-8 border-t">
                <h4 className="font-medium mb-3">Review Process</h4>

                <p className="text-sm text-gray-600 leading-relaxed">
                  All submissions undergo editorial screening followed by
                  peer-review evaluation. Authors will be informed regarding
                  acceptance, revision requirements, or rejection.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl border border-black/10 p-8 md:p-10">
              <div className="mb-10">
                <h2 className="text-3xl font-light">
                  Manuscript Information
                </h2>

                <p className="mt-2 text-gray-600">
                  Complete the form below and upload your manuscript.
                </p>
              </div>

              <div className="space-y-7">
                {/* TITLE */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Paper Title
                  </label>

                  <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-black"
                  />
                </div>

                {/* AUTHOR */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Author Name(s)
                  </label>

                  <input
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-black"
                  />
                </div>

                {/* EMAIL */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email Address
                  </label>

                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-black"
                  />
                </div>

                {/* KEYWORDS */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Keywords
                  </label>

                  <input
                    value={keywords}
                    onChange={(e) => setKeywords(e.target.value)}
                    placeholder="AI, Machine Learning, IoT, Smart Systems"
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-black"
                  />

                  <p className="mt-2 text-xs text-gray-500">
                    Separate keywords with commas.
                  </p>
                </div>

                {/* ABSTRACT */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Abstract
                  </label>

                  <textarea
                    rows={3}
                    value={abstract}
                    onChange={(e) => setAbstract(e.target.value)}
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-black resize-none"
                  />
                </div>

                {/* REMARKS */}
                {/* <div>
                  <label className="block text-sm font-medium mb-2">
                    Remarks
                  </label>

                  <textarea
                    rows={4}
                    value={remarks}
                    onChange={(e) => setRemarks(e.target.value)}
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-black resize-none"
                  />
                </div> */}

                {/* FILE UPLOAD */}
                {/* <div>
                  <label className="block text-sm font-medium mb-3">
                    Upload Manuscript
                  </label>

                  <label className="block cursor-pointer">
                    <div className="border-2 border-dashed border-gray-300 rounded-2xl p-10 text-center hover:border-black transition-all">
                      <div className="text-5xl mb-4">📄</div>

                      <h4 className="text-lg font-medium">
                        Upload PDF Manuscript
                      </h4>

                      <p className="mt-2 text-sm text-gray-500">
                        Click here to select your PDF file
                      </p>

                      <input
                        type="file"
                        name="pdf"
                        accept="application/pdf"
                        className="hidden"
                        onChange={(e) => {
                          const selectedFile = e.target.files?.[0];

                          if (selectedFile) {
                            setFile(selectedFile);
                            setFileName(selectedFile.name);
                          }
                        }}
                      />
                    </div>
                  </label>

                  {fileName && (
                    <div className="mt-4 inline-flex items-center rounded-xl bg-gray-100 px-4 py-3 text-sm">
                      📄 {fileName}
                    </div>
                  )}
                </div> */}

                <button
                  onClick={handleSubmit}
                  disabled={loading}
                  className="
                    w-full
                    py-4
                    rounded-xl
                    bg-black
                    text-white
                    text-lg
                    font-medium
                    transition-all
                    hover:opacity-90
                    disabled:opacity-50
                  "
                >
                  Submit Manuscript
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {(loading || success || error) && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm">

          <div className="bg-white rounded-3xl p-8 w-[90%] max-w-md shadow-2xl text-center">

            {loading && (
              <>
                <div className="mx-auto mb-6 w-16 h-16 border-4 border-gray-200 border-t-black rounded-full animate-spin" />

                <h3 className="text-2xl font-semibold mb-2">
                  Submitting Manuscript
                </h3>

                <p className="text-gray-500">
                  Please wait while we process your submission.
                </p>
              </>
            )}

            {success && (
              <>
                <div className="mx-auto mb-6 flex items-center justify-center w-20 h-20 rounded-full bg-green-100">
                  <svg
                    className="w-10 h-10 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>

                <h3 className="text-2xl font-semibold text-green-700 mb-2">
                  Submission Successful
                </h3>

                <p className="text-gray-500">
                  Your manuscript has been submitted successfully.
                </p>

                <button
                  onClick={() => setSuccess(false)}
                  className="mt-6 px-6 py-3 rounded-xl bg-green-600 text-white"
                >
                  Continue
                </button>
              </>
            )}

            {error && (
              <>
                <div className="mx-auto mb-6 flex items-center justify-center w-20 h-20 rounded-full bg-red-100">
                  <svg
                    className="w-10 h-10 text-red-600"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 6L18 18M18 6L6 18"
                    />
                  </svg>
                </div>

                <h3 className="text-2xl font-semibold text-red-700 mb-2">
                  Submission Failed
                </h3>

                <p className="text-gray-500">
                  {error}
                </p>

                <button
                  onClick={() => setError("")}
                  className="mt-6 px-6 py-3 rounded-xl bg-red-600 text-white"
                >
                  Close
                </button>
              </>
            )}

          </div>

        </div>
      )}
    </main>
  );
}