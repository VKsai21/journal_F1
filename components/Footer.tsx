import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white mt-8">
      <div className="max-w-7xl mx-auto px-6 py-3">

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10">

          {/* Journal Description */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-semibold mb-3">
              Journal of Future Engineering and Research (JFER)
            </h3>

            <p className="text-gray-400 leading-7 text-sm mt-2">
              The Journal of Future Engineering and Research (JFER) is an
              international peer-reviewed open-access journal dedicated to
              promoting innovative research in engineering, technology, and
              interdisciplinary sciences. JFER provides a platform for
              researchers, academicians, industry professionals, and students
              to publish original research, review articles, and technical
              studies that contribute to scientific and technological
              advancement.
            </p>

            {/* <p className="text-gray-400 leading-7 text-sm mt-4">
              The journal welcomes contributions from areas including Computer
              Science, Artificial Intelligence, Electronics and Communication
              Engineering, Mechanical Engineering, Data Science, Internet of
              Things, and other emerging technologies. Through rigorous
              peer-review and a commitment to research integrity, JFER strives
              to support global knowledge sharing and future-focused innovation.
            </p> */}
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>

            <div className="flex flex-col gap-3 text-sm text-gray-400">
              <Link
                href="/manuscript template.docx"
                className="hover:text-white transition"
              >
                Manuscript Template (DOCX)
              </Link>

              <Link
                href="/guidelines"
                className="hover:text-white transition"
              >
                Author Guidelines
              </Link>

              {/* <Link
                href="/reviewer-paper"
                className="hover:text-white transition"
              >
                Reviewer Version Paper
              </Link> */}

              <Link
                href="/admin"
                className="hover:text-white transition"
              >
                Admin Panel
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>

            <div className="space-y-3 text-sm text-gray-400">
              <p>
                <span className="text-white">Email:</span>
                <br />
                editor@jfer.ac.in
                <br />
                support@jfer.ac.in
              </p>

              {/* <p>
                <span className="text-white">Mobile:</span>
                <br />
                Not Available
              </p>

              <p>
                <span className="text-white">Social Media:</span>
                <br />
                Coming Soon
              </p> */}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>
            © 2026 Journal of Future Engineering and Research (JFER). All rights reserved.
          </p>

          <p>
            Peer-Reviewed • Open Access • International Journal
          </p>
        </div>

      </div>
    </footer>
  );
}