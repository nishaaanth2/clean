'use client'
// import styles from './style.module.css';
import { motion } from 'framer-motion';
import './style.css';
import { useState, useEffect } from "react"


const Flame = ({ cursor, cardRef, mouseOnCard }) => {
  const [gradientCenter, setGradientCenter] = useState({ cx: "50%", cy: "50%" })

  useEffect(() => {
    if (cardRef.current && cursor.x !== null && cursor.y !== null) {
      const cardRect = cardRef.current.getBoundingClientRect()
      const cxPercentage = (cursor.x / cardRect.width) * 100 - 24
      const cyPercentage = (cursor.y / cardRect.height) * 100
      setGradientCenter({
        cx: `${cxPercentage}%`,
        cy: `${cyPercentage}%`,
      })
    }
  }, [cursor, cardRef])

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 477.1579 467.5801"
      className="w-96 h-96 duration-200 transition-all"
    >
      <defs>
        <radialGradient
          id="emeraldGradient"
          gradientUnits="userSpaceOnUse"
          r="35%"
          cx={gradientCenter.cx}
          cy={gradientCenter.cy}
        >
          {mouseOnCard && <stop stopColor="#10b981" />}
          <stop offset={1} stopColor="#404040" />
        </radialGradient>
        <style>
          {`
            .cls-1 {
              fill: none;
              stroke: url(#emeraldGradient);
              stroke-miterlimit: 5;
              stroke-width: 7px;
            }
          `}
        </style>
      </defs>
      <path
      className='cls-1'
        d="M341.5406,238.579c0-57.467-47.8891-105.3561-105.3561-105.3561s-105.3561,47.8891-105.3561,105.3561v215.5011H13.5V238.579C13.5,114.0672,114.0672,13.5,238.579,13.5s225.079,100.5672,225.079,225.079v215.5011h-117.3284c-4.7889,0-4.7889-186.7677-4.7889-215.5011"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        className="fill-neutral-800/50"
        stroke="url(#emeraldGradient)"
        d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"
      />
    </svg>
  )
}

export default Flame

