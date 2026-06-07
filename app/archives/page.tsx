"use client";

import { useEffect, useMemo, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "@/lib/firebase";

export default function ArchivesPage() {
  const [papers, setPapers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedPaper, setSelectedPaper] = useState<any>(null);
  const [selectedYear, setSelectedYear] =
    useState<string>("");

  useEffect(() => {
    const fetchPapers = async () => {
      try {
        const allPapers: any[] = [];

        const yearsSnapshot = await getDocs(
          collection(firestore, "published")
        );

        for (const yearDoc of yearsSnapshot.docs) {
          const year = yearDoc.id;

          const volumesSnapshot = await getDocs(
            collection(
              firestore,
              "published",
              year,
              "volumes"
            )
          );

          for (const volumeDoc of volumesSnapshot.docs) {
            const volume = volumeDoc.id;

            const papersSnapshot = await getDocs(
              collection(
                firestore,
                "published",
                year,
                "volumes",
                volume,
                "papers"
              )
            );

            papersSnapshot.forEach((paperDoc) => {
              allPapers.push({
                id: paperDoc.id,
                year,
                volume,
                ...paperDoc.data(),
              });
            });
          }
        }

        setPapers(allPapers);

        const years = [
          ...new Set(
            allPapers.map((p) => p.year)
          ),
        ].sort(
          (a, b) => Number(b) - Number(a)
        );

        if (years.length > 0) {
          setSelectedYear(years[0]);
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPapers();
  }, []);

  const years = useMemo(() => {
    return [
      ...new Set(papers.map((p) => p.year)),
    ].sort(
      (a, b) => Number(b) - Number(a)
    );
  }, [papers]);

  const groupedVolumes = useMemo(() => {
    const grouped: any = {};

    papers
      .filter(
        (paper) =>
          paper.year === selectedYear
      )
      .forEach((paper) => {
        if (!grouped[paper.volume]) {
          grouped[paper.volume] = [];
        }

        grouped[paper.volume].push(paper);
      });

    return grouped;
  }, [papers, selectedYear]);

  if (selectedPaper) {
    return (
      <main className="max-w-5xl mx-auto px-6 py-6">
        <button
          onClick={() =>
            setSelectedPaper(null)
          }
          className="mb-10 text-cyan-700 font-medium"
        >
          ← Back to Archive
        </button>

        <div className="mb-2 flex flex-wrap gap-3 -mt-10">
          {/* <span className="px-4 py-2 rounded-full bg-cyan-100 text-cyan-800 text-sm">
            {selectedPaper.id}
          </span> */}

          <span className="px-4 py-2 rounded-full bg-slate-100 text-sm">
            {selectedPaper.year} / Volume {selectedPaper.volume}
          </span>

          {/* <span className="px-4 py-2 rounded-full bg-slate-100 text-sm">
            {selectedPaper.year}
          </span> */}
        </div>

        <h1 className="text-5xl font-bold text-slate-900 leading-tight mb-0">
          {selectedPaper.title}
        </h1>

        <p className="text-xl text-slate-600 mb-0">
          {selectedPaper.author}
        </p>

        <div className="border-t pt-4">
          <h2 className="text-lg font-semibold mb-2">
            Abstract
          </h2>

          <p className="text-slate-700 leading-8 text-justify">
            {selectedPaper.abstract}
          </p>
        </div>

        {selectedPaper.keywords && (
          <div className="mt-4">
            <h2 className="text-lg font-semibold mb-2">
              Keywords
            </h2>

            <p className="text-slate-700">
              {selectedPaper.keywords}
            </p>
          </div>
        )}

        {selectedPaper.pdfUrl && (
          <div className="mt-8">
            <h2 className="text-lg font-semibold mb-3">
              PDF Preview
            </h2>

            <div className="border rounded-xl overflow-hidden bg-white shadow-sm">
              <iframe
                src={`https://docs.google.com/gview?embedded=true&url=${encodeURIComponent(
                  selectedPaper.pdfUrl
                )}`}
                width="100%"
                height="900"
                className="w-full"
                title="PDF Preview"
              />
            </div>
          </div>
        )}

        {selectedPaper.pdfUrl && (
          <div className="mt-12">
            <a
              href={selectedPaper.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex px-6 py-4 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition"
            >
              Download Paper
            </a>
          </div>
        )}
      </main>
    );
  }

  return (
    <main className="max-w-7xl mx-auto px-6 py-0">
      {/* HERO */}

      <div className="text-center mb-2">
        <p className="uppercase tracking-[0.4em] text-sm text-slate-500 mb-0">
          Research Archive
        </p>

        <h1 className="text-6xl font-bold text-slate-900 -mt-5 -mb-2">
          Published Papers
        </h1>

        <p className="text-slate-600 max-w-2xl mx-auto">
          Browse all published research
          articles by year and volume.
        </p>
      </div>

      {/* STATS */}

      {/* <div className="grid md:grid-cols-3 gap-6 mb-16">
        <div className="border rounded-2xl p-8 text-center">
          <div className="text-4xl font-bold">
            {years.length}
          </div>

          <div className="text-slate-500 mt-2">
            Years
          </div>
        </div>

        <div className="border rounded-2xl p-8 text-center">
          <div className="text-4xl font-bold">
            {
              [
                ...new Set(
                  papers.map(
                    (p) =>
                      `${p.year}-${p.volume}`
                  )
                ),
              ].length
            }
          </div>

          <div className="text-slate-500 mt-2">
            Volumes
          </div>
        </div>

        <div className="border rounded-2xl p-8 text-center">
          <div className="text-4xl font-bold">
            {papers.length}
          </div>

          <div className="text-slate-500 mt-2">
            Papers
          </div>
        </div>
      </div> */}

      {loading && (
        <div className="text-center py-20">
          Loading...
        </div>
      )}

      {!loading && (
        <>
          {/* YEAR NAVIGATION */}

          <div className="flex flex-wrap justify-left gap-3 mb-6">
            {years.map((year) => (
              <button
                key={year}
                onClick={() =>
                  setSelectedYear(year)
                }
                className={`px-6 py-3 rounded-full transition ${
                  selectedYear === year
                    ? "bg-slate-900 text-white"
                    : "bg-slate-100 hover:bg-slate-200"
                }`}
              >
                {year}
              </button>
            ))}
          </div>

          {/* VOLUMES */}
          <div className="space-y-6">
            {Object.keys(groupedVolumes)
              .sort(
                (a, b) =>
                  Number(a) - Number(b)
              )
              .map((volume) => (
                <section key={volume}>
                  <div className="mb-2">
                    <h2 className="text-3xl font-bold">
                      Volume {volume}
                    </h2>

                    <div className="w-20 h-1 bg-cyan-600 mt-3 rounded-full" />
                  </div>

                  <div className="bg-white border rounded-3xl overflow-hidden">
                    {groupedVolumes[
                      volume
                    ].map(
                      (
                        paper: any,
                        index: number
                      ) => (
                        <button
                          key={paper.id}
                          onClick={() =>
                            setSelectedPaper(
                              paper
                            )
                          }
                          className={`w-full text-left p-8 hover:bg-slate-50 transition ${
                            index !==
                            groupedVolumes[
                              volume
                            ].length -
                              1
                              ? "border-b"
                              : ""
                          }`}
                        >
                          {/* <div className="text-sm font-semibold text-cyan-700 mb-2">
                            {paper.id}
                          </div> */}

                          <h3 className="text-2xl font-semibold text-slate-900 mb-3">
                            {paper.title}
                          </h3>

                          <p className="text-slate-600">
                            {paper.author}
                          </p>

                          <div className="mt-4 text-sm text-cyan-700 font-medium">
                            View Article →
                          </div>
                        </button>
                      )
                    )}
                  </div>
                </section>
              ))}
          </div>
        </>
      )}
    </main>
  );
}