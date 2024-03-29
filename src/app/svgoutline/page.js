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

  return (
    <>
     <Head> {/* Use Head component to modify meta tags */}
        <title>SVG Outline Glow</title> {/* Set custom title */}
        <meta name="description" content="For all custom svg you a emerald glow outline" /> {/* Set custom description */}
      </Head>
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
              Every project is a full Postgres database, the world&apos;s most
              trusted relational database.
            </p>
          </div>
          <div className="flex flex-col font-poppins text-neutral-200 tracking-wide">
            <span className="flex flex-row gap-2">
              <p>100% portable</p>
            </span>
            <span className="flex flex-row gap-2">
              <p>Built-in Auth with RLS</p>
            </span>
            <span className="flex flex-row gap-2">
              <p>Easy to extend</p>
            </span>
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
