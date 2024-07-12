"use client"
import { useRef, useState } from "react"
import Flame from "@/components/flame"
import Nlame from "@/components/nflame"
import "./styles.css";
import Head from "next/head";

const Home = () => {
  const cardsRef = useRef(null)
  const [cursor, setCursor] = useState({ x: 0, y: 0 })
  const [mouseOnCard, setMouseOnCard] = useState(false)

  const handleMouseMove = (
    event
  ) => {
    if (cardsRef.current !== null) {
      const rect = cardsRef.current.getBoundingClientRect()
      const x = event.clientX - rect.left
      const y = event.clientY - rect.top
      setCursor({ x: x, y: y })
    }
  }
  const otitle = "SVG Outline Glow New"
  const odescription = "SVG Outline Glow Content New"
  const ourl = "https://clean.nishaanth.com/svgoutline"
  const oimage = "https://clean.nishaanth.com/og/svgoutline.png"
  return (
    <>

    <head>
    {/* Primary Meta Tags  */}
<title>{otitle}</title>
<meta name="title" content={otitle} />
<meta name="description" content={odescription} />

{/* <!-- Open Graph / Facebook --> */}
<meta property="og:type" content="website" />
<meta property="og:url" content={ourl} />
<meta property="og:title" content={otitle} />
<meta property="og:description" content={odescription} />
<meta property="og:image" content={oimage} />

{/* <!-- Twitter --> */}
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:url" content={ourl} />
<meta property="twitter:title" content={otitle} />
<meta property="twitter:description" content={odescription} />
<meta property="twitter:image" content={oimage} />
</head>

     {/* <Head> 
        <title>SVG Outline Glow</title> 
        <meta name="description" content="For all custom svg you a emerald glow outline" /> 
      </Head> */}
    <main className="w-full h-screen flex place-items-center justify-center">
      <section
        className="card"
        ref={cardsRef}
        onMouseEnter={() => setMouseOnCard(true)}
        onMouseLeave={() => setMouseOnCard(false)}
        onMouseMove={(event) => handleMouseMove(event)}
      >
        <div className="flex flex-col w-2/5 justify-between">
          <div className="flex flex-col gap-5">
            <h1 className="font-poppins text-neutral-200 tracking-wide text-2xl">
            SVG Outline Glow
            </h1>
            <p className="-mt-2 font-poppins text-neutral-500 tracking-wide">
              A SVG outline glow animation. If you want in your own svg, contact nishaanthms1@gmail.com.
              CC: https://www.youtube.com/watch?v=KKQQn_lDuVQ
            </p>
          </div>
          
        </div>
        <div className="w-3/5 flex flex-col place-items-center">
          {/* <Flame cursor={cursor} cardRef={cardsRef} mouseOnCard={mouseOnCard} /> */}
          <Nlame cursor={cursor} cardRef={cardsRef} mouseOnCard={mouseOnCard} />
        </div>
      </section>
    </main>
    </>
  )
}

export default Home
