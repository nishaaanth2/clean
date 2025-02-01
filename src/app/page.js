import Image from "next/image";

const linkDetails = [
  {
    title: "Valentine",
    desc: "Be my valentine?",
    link: "/valentine", 
    new: true,
  },
  {
    title: "Patch Image",
    desc: "Image in between two layouts.",
    link: "/patchimage",
  },
  {
    title: "Screen Navbar",
    desc: "A Full screen Navbar",
    link: "/screenav",
  },
  {
    title: "Slide Over", 
    desc: "Slide On top of whole screen, headless ui",
    link: "/slideover",
  },
  {
    title: "Carousel",
    desc: "Image Carousel for every 2 second",
    link: "/carousel", 
  },
  {
    title: "KJ Portfolio",
    desc: "A Desginer's Portfolio",
    link: "/kj",
  },
  {
    title: "High Rise Bar",
    desc: "Instantly deploy your Next.js site to a shareable URL with Vercel.",
    link: "/highrise",
  },
  {
    title: "SVG Logo Glow",
    desc: "Instantly deploy your Next.js site to a shareable URL with Vercel.",
    link: "/svgoutline",
  },
  {
    title: "Parallax",
    desc: "Instantly deploy your Next.js site to a shareable URL with Vercel.",
    link: "/parallax",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <span className="text-3xl font-serif text-gray-800 dark:text-gray-200">Cl</span>
          <div className="w-14 h-14 border-2 border-[#C5B358] rounded-full flex items-center justify-center hover:rotate-45 transition-transform duration-300">
            <div className="w-10 h-10 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-5 h-7 border-2 border-[#C5B358] rounded-full transform rotate-45" />
              </div>
            </div>
          </div>
          <span className="text-3xl font-serif text-gray-800 dark:text-gray-200">an</span>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {linkDetails.map((link, index) => (
            <a
              key={index}
              href={link.link}
              className="group relative p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 border border-gray-100 dark:border-gray-700 overflow-hidden"
            >
              {link.new && (
                <span className="absolute top-7 right-5 bg-gradient-to-r from-[#C5B358] to-[#DAA520] text-white text-xs px-3 py-0.5 rounded-full shadow-lg shadow-[#C5B358]/30 border border-[#C5B358]/30 backdrop-blur-sm">
                  <span className="relative inline-flex items-center gap-2">
                    {/* <span className="w-2 h-2 bg-white rounded-full animate-ping absolute -left-3"></span> */}
                    {/* <span className="w-2 h-2 bg-white rounded-full absolute -left-3"></span> */}
                    NEW
                  </span>
                </span>
              )}
              <div className="flex flex-col h-full">
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 group-hover:text-[#C5B358] transition-colors duration-200 mb-3">
                  {link.title}
                  <span className="inline-block ml-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-10px] group-hover:translate-x-0">
                    →
                  </span>
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-sm flex-grow">
                  {link.desc}
                </p>
                {/* <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-[#C5B358] to-transparent transition-all duration-300 mt-4"></div> */}
              </div>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
