"use client";

export default function DownloadCV() {
  return (
    <a
      href="/cv.pdf"
      download
      className="px-6 py-3 bg-blue-600/40 border border-blue-400/40 text-blue-200 rounded-xl backdrop-blur-md hover:bg-blue-600/60 transition shadow-lg"
    >
      Download My CV
    </a>
  );
}
