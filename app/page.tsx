const steps = [
  {
    step: "01",
    title: "Manuscript Preparation",
    text: "Prepare your manuscript according to JFER formatting guidelines and ensure all required sections are included."
  },
  {
    step: "02",
    title: "Paper Submission",
    text: "Submit your manuscript through the journal portal or official editorial email."
  },
  {
    step: "03",
    title: "Editorial Screening",
    text: "The editorial team verifies scope relevance, formatting, plagiarism compliance and submission completeness."
  },
  {
    step: "04",
    title: "Peer Review Process",
    text: "Expert reviewers evaluate originality, technical quality, contribution and practical significance."
  },
  {
    step: "05",
    title: "Author Revision",
    text: "Authors address reviewer comments and submit the revised manuscript."
  },
  {
    step: "06",
    title: "Final Decision",
    text: "The editorial board issues acceptance, revision requests or rejection."
  },
  {
    step: "07",
    title: "Publication Process",
    text: "Accepted papers undergo formatting, proofreading and publication preparation."
  },
  {
    step: "08",
    title: "Online Availability",
    text: "Published papers become available through the journal archives."
  }
];
export default function Home() {
  return (
    <main className="min-h-screen">

      <section className="max-w-7xl mx-auto px-6 py-6">
        <div className="grid lg:grid-cols-2 gap-6 items-center">

          {/* Hero Image */}
          <div className="order-1 lg:order-2">
            <img
              src="/Journel_logo.png"
              alt="Future Engineering Research"
              className="w-56 md:w-72 lg:w-80 mx-auto rounded-3xl shadow-2xl"
            />
          </div>

          {/* Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-5xl font-bold leading-tight">
              Journal of Future
              <br />
              Engineering & Research
            </h2>

            <p className="mt-6 text-lg text-gray-600">
              The Journal of Future Engineering and Research (JFER)
              publishes high-quality research across engineering,
              technology, and interdisciplinary sciences.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/submit"
                className="group inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-black text-white font-semibold transition-all duration-300 hover:bg-slate-800 hover:shadow-xl"
              >
                Submit Paper
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>

        </div>
      </section>

      <section className="py-0 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">

          {/* Header */}
          <div className="text-center mb-6">

            <div className="inline-flex items-center px-4 py-2 rounded-full border border-slate-200 bg-white mt-10 mb-2">
              <span className="text-xl font-bold ">
                Submission WorkFlow
              </span>
            </div>

            <p className="max-w-2xl mx-auto text-sm leading-relaxed text-slate-600">
              The Journal of Future Engineering and Research (JFER) follows a
              transparent and systematic submission and review process to ensure
              publication of high-quality research articles.
            </p>

          </div>

          <div className="hidden lg:block">

            <div className="relative max-w-6xl mx-auto h-[300px]">

              {/* Connector Lines */}
              <div className="absolute inset-0 z-0">

                {/* Top Horizontal */}
                <div className="absolute top-8 left-[12%] right-[12%] h-[2px] bg-slate-300" />

                {/* Bottom Horizontal */}
                <div className="absolute bottom-16 left-[12%] right-[12%] h-[2px] bg-slate-300" />

                
                {/* Right Vertical */}
                <div className="absolute top-16 right-[8%] h-[100px] w-[2px] bg-slate-300" />

              </div>

              {/* Top Row */}
              <div className="absolute top-0 left-0 right-0 flex justify-between z-10">

                {steps.slice(0, 4).map((item, index) => {

                  const isFirst = index === 0;
                  const isLast = index === 3;

                  return (
                    <div
                      key={item.step}
                      className="relative group flex flex-col items-center"
                    >
                                           
                      {/* Circle */}
                      <div
                        className="
                          relative z-20
                          w-15 h-15
                          rounded-full
                          bg-white
                          border-4 border-blue-500
                          shadow-lg
                          flex items-center justify-center
                          font-bold text-xl
                          transition-all duration-300
                        "
                      >
                        {item.step}
                      </div>

                      <h4 className="mt-2 text-center font-semibold w-40">
                        {item.title}
                      </h4>                      

                      {/* Hover Card */}
                      {/* <div
                        className={`
                          absolute top-32
                          w-[280px]
                          opacity-0 invisible
                          group-hover:opacity-100
                          group-hover:visible
                          transition-all duration-300
                          z-50
                          ${
                            isFirst
                              ? "left-0"
                              : isLast
                              ? "right-0"
                              : "left-1/2 -translate-x-1/2"
                          }
                        `}
                      >
                        <div className="bg-white border rounded-2xl p-5 shadow-2xl">
                          <div className="text-sm font-semibold mb-2">
                            Step {item.step}
                          </div>

                          <h5 className="font-bold mb-2">
                            {item.title}
                          </h5>

                          <p className="text-sm text-muted-foreground">
                            {item.text}
                          </p>
                        </div>
                      </div> */}

                    </div>
                  );
                })}

              </div>

              {/* Bottom Row */}
              <div className="absolute bottom-0 left-0 right-0 flex justify-between z-10">

                {[...steps.slice(4)].reverse().map((item, index) => {

                  const isFirst = index === 0;
                  const isLast = index === 3;

                  return (
                    <div
                      key={item.step}
                      className="relative group flex flex-col items-center"
                    >

                      {/* Circle */}
                      <div
                        className="
                          relative z-1
                          w-15 h-15
                          rounded-full
                          bg-white
                          border-4 border-emerald-500
                          shadow-lg
                          flex items-center justify-center
                          font-bold text-xl
                          transition-all duration-300
                        "
                      >
                        {item.step}
                      </div>

                      {/* Title */}
                      <h4 className="mt-2 text-center font-semibold w-40">
                        {item.title}
                      </h4>

                      {/* Hover Card */}
                      

                    </div>
                  );
                })}

              </div>

            </div>

          </div>

          {/* Mobile */}
          <div className="lg:hidden space-y-4">
            {steps.map((item) => (
              <details
                key={item.step}
                className="border rounded-xl p-4"
              >
                <summary className="cursor-pointer font-medium">
                  Step {item.step} — {item.title}
                </summary>

                <p className="mt-3 text-muted-foreground">
                  {item.text}
                </p>
              </details>
            ))}
          </div>

          {/* CTA */}
          {/* <div className="text-center mt-8">
            <a
              href="/submit"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-black text-white hover:scale-105 transition-all"
            >
              Submit Your Paper
              <span>→</span>
            </a>
          </div> */}

        </div>
      </section>
  
      {/* REVIEWER SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-5">

      <div className="text-center mb-6">

        <div className="inline-flex items-center px-4 py-2 rounded-full border border-slate-200 bg-white mt-10 mb-2">
          <span className="text-xl font-bold ">
            Academic Leadership
          </span>
        </div>
        
        <p className="max-w-2xl mx-auto text-sm leading-relaxed text-slate-600">
          The Journal of Future Engineering and Research (JFER) is guided by an
          experienced editorial and reviewer board consisting of academicians,
          researchers, scientists, and industry professionals.
        </p>

      </div>

        {/* Editorial Team */}
        <div className="grid md:grid-cols-5 gap-6 mb-16">

          <div className="md:col-span-1 bg-white border rounded-xl p-6 shadow-sm text-center">
            <div className="w-16 h-16 mx-auto rounded-full bg-gray-100 flex items-center justify-center text-2xl">
              👨‍🎓
            </div>
            <h3 className="mt-4 text-lg font-semibold">Chief Editor</h3>
            <p className="text-sm text-gray-500 mt-2">
              Oversees journal operations, publication ethics, and final editorial decisions.
            </p>
          </div>

          <div className="md:col-span-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {[1, 2, 3, 4].map((editor) => (
              <div
                key={editor}
                className="bg-white border rounded-xl p-6 shadow-sm text-center"
              >
                <div className="w-14 h-14 mx-auto rounded-full bg-gray-100 flex items-center justify-center text-xl">
                  👨‍💼
                </div>
                <h3 className="mt-4 font-semibold">
                  Associate Editor {editor}
                </h3>
                <p className="text-sm text-gray-500 mt-2">
                  Supports manuscript handling, reviewer assignment, and editorial evaluation.
                </p>
              </div>
            ))}

          </div>
        </div>

        {/* Editorial Information */}
        <div className="grid lg:grid-cols-2 gap-10 mb-5">

          <div className="bg-white border rounded-xl p-8 shadow-sm">
            <h3 className="text-xl font-semibold mb-4">
              Editorial & Reviewer Information
            </h3>

            <p className="text-gray-600 mb-4">
              The Editor-in-Chief, Associate Editors, and Review Board Members are
              responsible for maintaining the academic quality, transparency, and
              integrity of the journal publication process.
            </p>

            <p className="text-gray-600 mb-4">
              Reviewers are selected based on their subject expertise, research
              contributions, and academic experience in relevant engineering and
              technology domains.
            </p>

            <p className="text-gray-600">
              All manuscripts are evaluated through a fair, unbiased, and confidential
              review process, focusing on originality, technical quality, research
              significance, clarity, and relevance to the journal scope.
            </p>
          </div>

          <div className="bg-white border rounded-xl p-8 shadow-sm">
            <h3 className="text-xl font-semibold mb-4">
              Publication Ethics
            </h3>

            <p className="text-gray-600 mb-4">
              JFER is committed to maintaining ethical publishing practices and
              ensuring that every published article meets recognized academic and
              research standards.
            </p>

            <p className="text-gray-600">
              Editorial decisions are made independently based on academic merit,
              reviewer recommendations, ethical compliance, and the overall
              contribution of the work to the engineering and research community.
            </p>
          </div>

        </div>

        {/* Review Standards */}
        <div className="bg-gradient-to-br from-gray-50 to-white border rounded-2xl p-8 md:p-10">

          <div className="text-center mb-12">

            <span className="text-lg tracking-[0.15em] text-slate-900 font-bold">
              Journal Review Standards
            </span>

          </div>

          <div className="grid md:grid-cols-2 gap-5">

            {[
              "Originality and novelty of the research",
              "Technical and scientific quality",
              "Relevance to engineering and interdisciplinary domains",
              "Clarity of presentation and organization",
              "Accuracy of methodology and analysis",
              "Practical significance and contribution to the field",
              "Proper citation and referencing practices",
              "Compliance with ethical publishing guidelines",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 bg-white border rounded-lg p-4"
              >
                <span className="text-green-600 text-lg">✓</span>
                <span className="text-gray-700">{item}</span>
              </div>
            ))}

          </div>

          <div className="mt-8 pt-8 border-t">
            <p className="text-red-600 font-bold text-center max-w-4xl mx-auto bg-red-50 border-l-4 border-red-600 p-4 rounded-lg">
              <span className="uppercase">Note:</span> Manuscripts identified with plagiarism,
              unethical practices, duplicate publication, or poor research quality may be
              rejected during the review process. Authors may be requested to revise and
              resubmit manuscripts based on reviewer recommendations. JFER aims to ensure a
              transparent, professional, and timely review process while promoting
              innovative and impactful engineering research.
            </p>
          </div>

        </div>

      </section>

    </main>
  );
}


