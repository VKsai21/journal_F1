"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | "";
    message: string;
  }>({
    type: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      setStatus({
        type: "error",
        message: "Please fill all fields.",
      });
      return;
    }

    try {
      setLoading(true);
      setStatus({
        type: "",
        message: "",
      });

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message);
      }

      setStatus({
        type: "success",
        message:
          "Inquiry submitted successfully. Our editorial team will review your inquiry and respond shortly.",
      });
      setTimeout(() => {
        setStatus({
          type: "",
          message: "",
        });
      }, 5000);

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

    } catch (error: any) {
      setStatus({
        type: "error",
        message:
          error.message || "Failed to submit inquiry. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#f4f4f4]">

      {/* TOP GRADIENT */}
      <section className="bg-gradient-to-br from-white via-zinc-900 to-zinc-500 pb-12 -mt-30">

        <div className="max-w-5xl mx-auto px-6 pt-25 text-center text-white">

          <h1 className="text-5xl md:text-6xl font-bold mt-6">
            Don't Be A Stranger
            Just Say Hello.
          </h1>

          {/* <p className="mt-6 text-lg text-white/90 max-w-2xl mx-auto">
            Contact the Journal of Future Engineering and Research
            regarding submissions, publication support, reviewer
            communication, indexing information, and editorial assistance.
          </p> */}

        </div>

      </section>

      {/* FLOATING CARD */}
      <section className="px-6">

        <div className="max-w-5xl mx-auto -mt-10 relative z-10">

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">

            <div className="grid lg:grid-cols-2">

              {/* LEFT SIDE */}
              <div className="p-10 bg-[#fafafa] border-r border-black/5">

                {/* <div className="flex justify-center mb-8">

                  <div className="
                    w-35
                    h-35
                    rounded-full
                    bg-gradient-to-br from-white via-zinc-900 to-zinc-500
                    flex
                    items-center
                    justify-center
                    text-4xl
                  ">
                    📖
                  </div>

                </div> */}

                <div className="space-y-8">

                  <div>
                    <p className="text-sm text-gray-500">
                      Editorial Office
                    </p>

                    <p className="font-semibold">
                      Journal of Future Engineering and Research
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">
                      Editorial Email
                    </p>

                    <p className="font-medium">
                      editor@jfer.ac.in
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">
                      Submission Support
                    </p>

                    <p className="font-medium">
                      support@jfer.ac.in
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">
                      Publication Timeline
                    </p>

                    <p className="font-medium">
                      2–4 Weeks
                    </p>
                  </div>

                </div>

              </div>

              {/* RIGHT SIDE */}
              <div className="p-5">

                <div className="space-y-2">

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    className="
                      w-full
                      px-2
                      py-2
                      rounded-xl
                      border
                      border-gray-200
                      outline-none
                      focus:border-cyan-500
                    "
                  />

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className="
                      w-full
                      px-2
                      py-2
                      rounded-xl
                      border
                      border-gray-200
                      outline-none
                      focus:border-cyan-500
                    "
                  />

                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    className="
                      w-full
                      px-2
                      py-2
                      rounded-xl
                      border
                      border-gray-200
                      outline-none
                      focus:border-cyan-500
                    "
                  />

                  <textarea
                    rows={2}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    className="
                      w-full
                      px-2
                      py-2
                      rounded-xl
                      border
                      border-gray-200
                      outline-none
                      resize-none
                      focus:border-cyan-500
                    "
                  />

                  {status.message && (
                    <div
                      className={`
                        rounded-2xl
                        border
                        p-4
                        flex
                        gap-3
                        items-start
                        transition-all
                        ${
                          status.type === "success"
                            ? "bg-green-50 border-green-200 text-green-800"
                            : "bg-red-50 border-red-200 text-red-800"
                        }
                      `}
                    >
                      <div className="text-xl">
                        {status.type === "success" ? "✓" : "⚠"}
                      </div>

                      <div>
                        <h4 className="font-semibold">
                          {status.type === "success"
                            ? "Inquiry Submitted"
                            : "Submission Failed"}
                        </h4>

                        <p className="text-sm mt-1">
                          {status.message}
                        </p>
                      </div>
                    </div>
                  )}

                  <button
                    onClick={handleSubmit}
                    disabled={loading}
                    className="
                      w-full
                      bg-zinc-900
                      text-white
                      py-2
                      rounded-xl
                      font-semibold
                      transition-all
                      disabled:opacity-50
                    "
                  >
                    {loading
                      ? "Submitting..."
                      : "Submit Inquiry"}
                  </button>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}