import Image from "next/image";

const linkDetails = [
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
    desc: "Slide On top of whole screen, headless ui ",
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
  {
    title: "Valentine",
    desc: "Be my valentine?",
    link: "/valentine",
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
       <div className="flex items-center gap-4 mb-16">
        <span className="text-2xl font-serif">Cl</span>
        <div className="w-12 h-12 border border-[#C5B358] rounded-full flex items-center justify-center">
          <div className="w-8 h-8 relative">
            {/* Simplified flower icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-4 h-6 border-[1px] border-[#C5B358] rounded-full transform rotate-45" />
            </div>
          </div>
        </div>
        <span className="text-2xl font-serif">an</span>
      </div>
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        {linkDetails.map((link, index) => (
          <a
            key={index}
            href={link.link}
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              {link.title}{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              {link.desc}
            </p>
          </a>
        ))}
      </div>
    </main>
  );
}
