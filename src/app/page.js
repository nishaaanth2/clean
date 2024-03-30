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
  },,
  {
    title: "Deploy",
    desc: "Instantly deploy your Next.js site to a shareable URL with Vercel.",
    link: "/deploy",
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
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
