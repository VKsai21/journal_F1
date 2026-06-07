export default function EditorialBoardPage() {
  return (
    <main className="min-h-screen bg-[#f8f6f2] text-black">
      {/* HERO */}
      <section className="max-w-5xl mx-auto px-6 pt-24 pb-12 text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-[#8b6b47] mb-2">
          Editorial Board
        </p>

        <h1 className="text-5xl md:text-6xl font-light leading-tight">
          Meet the Experts Behind JFER
        </h1>

        <p className="mt-3 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          The Journal of Future Engineering and Research is guided by a
          distinguished editorial team comprising academicians, researchers,
          and industry professionals dedicated to maintaining the highest
          standards of scholarly publishing and research integrity.
        </p>
      </section>

      {/* EDITOR IN CHIEF */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="text-center mb-4">
          <p className="text-sm uppercase tracking-[0.2em] text-[#8b6b47]">
            Leadership
          </p>
          {/* <h2 className="text-4xl font-light mt-3">
            Editor-in-Chief
          </h2> */}
        </div>

        <div className="bg-white border border-[#d8cbb8] rounded-3xl p-10 shadow-sm">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-36 h-36 rounded-full bg-gray-200 flex-shrink-0" />

            <div>
              <h3 className="text-3xl font-medium">
                Dr. Full Name
              </h3>

              <p className="text-[#8b6b47] mt-2">
                Editor-in-Chief
              </p>

              <p className="text-gray-600 mt-4">
                Professor, Department of Engineering
              </p>

              <p className="text-gray-600">
                University Name, Country
              </p>

              <div className="flex flex-wrap gap-3 mt-6">
                <span className="px-4 py-2 bg-[#f5efe5] rounded-full text-sm">
                  Artificial Intelligence
                </span>
                <span className="px-4 py-2 bg-[#f5efe5] rounded-full text-sm">
                  Embedded Systems
                </span>
                <span className="px-4 py-2 bg-[#f5efe5] rounded-full text-sm">
                  IoT
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ASSOCIATE EDITORS */}
      <section className="max-w-6xl mx-auto px-6 py-6">
        <div className="text-center mb-4">
          <p className="text-sm uppercase tracking-[0.2em] text-[#8b6b47]">
            Editorial Team
          </p>
            
          {/* <h2 className="text-4xl font-light mt-3">
            Associate Editors
          </h2> */}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="bg-white border border-[#d8cbb8] rounded-3xl p-8 text-center hover:shadow-lg transition"
            >
              <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto mb-6" />

              <h3 className="text-xl font-medium">
                Dr. Full Name
              </h3>

              <p className="text-[#8b6b47] mt-2">
                Associate Editor
              </p>

              <p className="text-gray-600 mt-4">
                Institution Name
              </p>

              <p className="text-gray-500">
                Country
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* EDITORIAL BOARD MEMBERS */}
      {/* <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.2em] text-[#8b6b47]">
            Editorial Board
          </p>

          <h2 className="text-4xl font-light mt-3">
            Editorial Board Members
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((member) => (
            <div
              key={member}
              className="bg-white border border-[#d8cbb8] rounded-3xl p-8 hover:shadow-lg transition"
            >
              <div className="w-20 h-20 rounded-full bg-gray-200 mb-6" />

              <h3 className="text-xl font-medium">
                Dr. Full Name
              </h3>

              <p className="text-gray-600 mt-3">
                Institution Name
              </p>

              <p className="text-gray-500">
                Country
              </p>

              <div className="flex flex-wrap gap-2 mt-5">
                <span className="px-3 py-1 text-xs bg-[#f5efe5] rounded-full">
                  Research
                </span>

                <span className="px-3 py-1 text-xs bg-[#f5efe5] rounded-full">
                  Engineering
                </span>

                <span className="px-3 py-1 text-xs bg-[#f5efe5] rounded-full">
                  Technology
                </span>
              </div>
            </div>
          ))}
        </div>
      </section> */}

      {/* INTERNATIONAL ADVISORY BOARD */}
      {/* <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.2em] text-[#8b6b47]">
            Global Expertise
          </p>

          <h2 className="text-4xl font-light mt-3">
            International Advisory Board
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[1, 2, 3, 4].map((advisor) => (
            <div
              key={advisor}
              className="bg-white border border-[#d8cbb8] rounded-2xl p-6"
            >
              <h3 className="text-xl font-medium">
                Prof. Full Name
              </h3>

              <p className="text-gray-600 mt-2">
                University Name
              </p>

              <p className="text-gray-500">
                Country
              </p>
            </div>
          ))}
        </div>
      </section> */}

      <section className="max-w-6xl mx-auto px-6 py-6">

        <div className="text-center mb-6">
          <p className="text-sm uppercase tracking-[0.25em] text-[#8b6b47] mb-1">
            Editorial Standards
          </p>

          {/* <h2 className="text-4xl md:text-5xl font-light text-black">
            Editorial Responsibilities
          </h2> */}

          {/* <div className="w-20 h-px bg-[#c7b39a] mx-auto mt-2" /> */}

          {/* <p className="max-w-2xl mx-auto mt-2 text-gray-600 leading-relaxed">
            The editorial board plays a critical role in maintaining academic
            excellence, research integrity, and the overall quality of publications
            within the Journal of Future Engineering Research.
          </p> */}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          <div className="group bg-white border border-[#e6ddd0] rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="text-3xl mb-4">01</div>
            <h3 className="font-semibold text-lg mb-3">
              Scientific Quality
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Maintain the scientific quality and relevance of published research.
            </p>
          </div>

          <div className="group bg-white border border-[#e6ddd0] rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="text-3xl mb-4">02</div>
            <h3 className="font-semibold text-lg mb-3">
              Peer Review
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Ensure a fair, transparent, and rigorous peer-review process.
            </p>
          </div>

          <div className="group bg-white border border-[#e6ddd0] rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="text-3xl mb-4">03</div>
            <h3 className="font-semibold text-lg mb-3">
              Publication Ethics
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Uphold ethical publishing practices and research integrity.
            </p>
          </div>

          <div className="group bg-white border border-[#e6ddd0] rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="text-3xl mb-4">04</div>
            <h3 className="font-semibold text-lg mb-3">
              Author Support
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Support authors, reviewers, and readers through professional editorial
              standards.
            </p>
          </div>

          <div className="group bg-white border border-[#e6ddd0] rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="text-3xl mb-4">05</div>
            <h3 className="font-semibold text-lg mb-3">
              Global Visibility
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Contribute to the growth and international visibility of the journal.
            </p>
          </div>

          <div className="group bg-white border border-[#e6ddd0] rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="text-3xl mb-4">06</div>
            <h3 className="font-semibold text-lg mb-3">
              Policy Guidance
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Advise on editorial policies and publication ethics.
            </p>
          </div>

        </div>

      </section>

      {/* COMMITMENT */}
      <section className="max-w-4xl mx-auto px-6 pt-8 pb-24 text-center">
        <h2 className="text-4xl font-light mb-6">
          Commitment to Excellence
        </h2>

        <p className="text-lg text-gray-600 leading-relaxed">
          Through the collective expertise of its editorial board, JFER remains
          committed to publishing high-quality, original, and impactful research
          while fostering innovation, academic excellence, and ethical research
          practices across engineering and interdisciplinary fields.
        </p>
      </section>
    </main>
  );
}