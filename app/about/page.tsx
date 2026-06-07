export default function AboutPage() {
  const researchAreas = [
    "Computer Science and Engineering",
    "Artificial Intelligence & Machine Learning",
    "Data Science & Big Data Analytics",
    "Electronics & Communication Engineering",
    "Electrical & Electronics Engineering",
    "Mechanical Engineering",
    "Civil Engineering",
    "Information Technology",
    "Internet of Things (IoT)",
    "Cyber Security",
    "Cloud Computing",
    "Embedded Systems",
    "Robotics & Automation",
    "Image Processing & Computer Vision",
    "Wireless Communication",
    "Renewable Energy Systems",
    "Blockchain Technology",
    "Biomedical Engineering",
    "Smart Systems & Industry 4.0",
    "Interdisciplinary Engineering Research",
  ];

  return (
    <main className="min-h-screen bg-[#f8f6f2] text-black">

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 pt-10 pb-8 text-center">
        {/* <p className="text-sm tracking-[0.25em] uppercase text-gray-500 mb-4">
          About JFER
        </p> */}

        <h1 className="text-7xl md:text-6xl font-light leading-tight">
          Advancing Engineering Research Through
          <span className="block font-semibold">
            Open Knowledge Sharing
          </span>
        </h1>

        <p className="mt-8 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Journal of Future Engineering and Research (JFER) is an
          international open-access journal dedicated to publishing
          high-quality research in engineering, technology, and
          interdisciplinary domains.
        </p>
      </section>

      {/* ABOUT */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-4">
              About The Journal
            </p>

            <h2 className="text-4xl font-light mb-8">
              Journal of Future Engineering and Research
            </h2>

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                The Journal of Future Engineering and Research (JFER)
                is a peer-reviewed, open-access academic journal
                committed to promoting high-quality research and
                innovation across engineering, technology, and
                interdisciplinary scientific fields.
              </p>

              <p>
                JFER provides a reliable platform for researchers,
                academicians, industry professionals, and students
                to publish original research articles, review papers,
                technical reports, and innovative engineering
                contributions.
              </p>

              {/* <p>
                The journal encourages knowledge exchange, supports
                emerging technologies, and contributes to the
                advancement of engineering solutions that address
                current and future global challenges.
              </p> */}

              <p>
                All published articles are freely accessible to
                readers worldwide, ensuring wider dissemination of
                scientific knowledge and research impact.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-10 shadow-sm border border-gray-100">
            <div className="space-y-8">

              <div>
                <h3 className="text-2xl font-semibold mb-3">
                  Our Mission
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  To provide a reliable and professional platform for
                  publishing quality research in engineering,
                  technology, and interdisciplinary fields while
                  promoting innovation, academic excellence, and
                  ethical research practices.
                </p>
              </div>

              <div className="border-t pt-8">
                <h3 className="text-2xl font-semibold mb-3">
                  Our Vision
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  To become a globally recognized journal that supports
                  advanced research, encourages knowledge sharing,
                  and contributes to future technological and
                  engineering development.
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* RESEARCH AREAS */}
      <section className="bg-white py-10">
        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-6">
            <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-4">
              Research Scope
            </p>

            <h2 className="text-4xl font-light">
              Areas of Publication
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {researchAreas.map((area) => (
              <span
                key={area}
                className="px-5 py-3 rounded-full border border-gray-200 bg-[#f8f6f2] text-gray-700"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEW PROCESS */}
      <section className="max-w-6xl mx-auto px-6 py-8">

        <div className="text-center mb-6">
          <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-4">
            Review Process
          </p>

          <h2 className="text-4xl font-light mb-6">
            Transparent & Structured Peer Review
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            JFER follows a transparent and structured peer-review
            process to ensure the publication of high-quality and
            original research articles. The journal is completely
            open access and does not charge any submission or
            publication fees.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white rounded-3xl p-8 shadow-sm">
            <div className="text-5xl font-light text-gray-300 mb-5">
              01
            </div>

            <h3 className="text-xl font-semibold mb-4">
              Initial Screening
            </h3>

            <ul className="space-y-2 text-gray-600">
              <li>• Scope Verification</li>
              <li>• Formatting Review</li>
              <li>• Plagiarism Check</li>
              <li>• Author Details Review</li>
              <li>• Language Assessment</li>
            </ul>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm">
            <div className="text-5xl font-light text-gray-300 mb-5">
              02
            </div>

            <h3 className="text-xl font-semibold mb-4">
              Peer Review
            </h3>

            <ul className="space-y-2 text-gray-600">
              <li>• Originality & Novelty</li>
              <li>• Technical Quality</li>
              <li>• Research Methodology</li>
              <li>• Ethical Standards</li>
              <li>• Contribution Significance</li>
            </ul>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm">
            <div className="text-5xl font-light text-gray-300 mb-5">
              03
            </div>

            <h3 className="text-xl font-semibold mb-4">
              Publication
            </h3>

            <ul className="space-y-2 text-gray-600">
              <li>• Acceptance Notification</li>
              <li>• Final Formatting</li>
              <li>• Issue Assignment</li>
              <li>• Journal Archive Publication</li>
              <li>• Open Access Availability</li>
            </ul>
          </div>

        </div>
      </section>

      {/* PUBLICATION FREQUENCY */}
      <section className="bg-white py-10">

        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-6">
            <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-4">
              Publication Frequency
            </p>

            <h2 className="text-4xl font-light mb-6">
              Quarterly Publication Schedule
            </h2>

            <p className="text-gray-600 max-w-3xl mx-auto">
              JFER publishes four issues every year under one annual
              volume, ensuring the regular dissemination of quality
              research contributions.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">

            <div className="bg-[#f8f6f2] rounded-3xl p-8 text-center">
              <h3 className="font-semibold text-lg mb-2">
                Issue 1
              </h3>
              <p className="text-gray-600">January</p>
            </div>

            <div className="bg-[#f8f6f2] rounded-3xl p-8 text-center">
              <h3 className="font-semibold text-lg mb-2">
                Issue 2
              </h3>
              <p className="text-gray-600">April</p>
            </div>

            <div className="bg-[#f8f6f2] rounded-3xl p-8 text-center">
              <h3 className="font-semibold text-lg mb-2">
                Issue 3
              </h3>
              <p className="text-gray-600">July</p>
            </div>

            <div className="bg-[#f8f6f2] rounded-3xl p-8 text-center">
              <h3 className="font-semibold text-lg mb-2">
                Issue 4
              </h3>
              <p className="text-gray-600">October</p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-6 py-10 text-center">

        <h2 className="text-4xl font-light mb-6">
          Ready to Submit Your Research?
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          Join researchers and academicians contributing to the
          advancement of engineering and technology through JFER.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="/submit"
            className="px-8 py-4 bg-black text-white rounded-full
                      transition-all duration-300 ease-in-out
                      hover:bg-slate-800 hover:scale-105
                      cursor-pointer text-center"
          >
            Submit Manuscript
          </a>

          <a
            href="/guidelines"
            className="px-8 py-4 border border-slate-300 rounded-full
                      transition-all duration-300 ease-in-out
                      hover:bg-slate-100 hover:border-slate-500
                      hover:scale-105 cursor-pointer text-center"
          >
            Author Guidelines
          </a>
        </div>

      </section>

    </main>
  );
}