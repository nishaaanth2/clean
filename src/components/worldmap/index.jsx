"use client";
import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import "./style.css";

// Simplified world map paths for major countries
const countryPaths = {
  usa: {
    name: "United States",
    d: "M158.1,160.1l-0.2,0.8l-2.4,1.5l-2.5,0.2l-1.6-0.8l-2.7-0.2l-3.2,0.6l-2.5,1.2l-1.5,0.2l-0.2-1.1l1-1.6l2.2-1.8l1.2-0.2l1.7,0.6l2.2-0.2l2.5-1l2.2-0.4l1.3,0.1l2.5,1.2v1zM48,134l2.1,3.1l3-0.5l2,2.4l2.9,1.1l1.3,2.2l-0.8,2.9l3.2,1.6l2.4,1.3l0.6,1.9l1.6,2.6l3.5,0.8l3.7,0.5l3.5-0.3l2.9-2.1l0.5-2.4l2.1-3.2l3.2-0.5l2.4-1.3l0.5-2.4l2.4-0.8l2.4,0.5l2.4-1.6l0.8-2.1l4-2.1l4.3-0.8l2.6,0.3l2.1-2.1l-1.1-1.9l-0.3-2.9l2.4-1.1l3.5,0.5l2.4,1.6l1.9-1.1l2.9,0.3l2.6,1.9l0.5,2.6l2.1,0.3l2.6-1.6l2.4-0.3l2.4,1.6l0.5,2.1l-2.9,2.1l-0.5,2.6l2.1,2.4l2.6,0.5l-0.3,2.4l-2.4,1.9l0.5,1.6l2.9,0.5l1.6,2.4l-2.9,0.5l-2.1,2.9l-2.4,0.5l-2.4-1.1l-2.1,0.5l-1.1,3.2l-2.6,0.8l-0.5,2.6l-3.5,0.3l-2.9,1.6l0.5,2.4l-1.3,2.6l-28.7,0l-7.4-0.5l-10.6-17.7l-1.6-3.2l-2.6-1.1l-2.4,0.5l-2.1-1.1l-1.9-0.8l-2.1-2.1l-0.8-2.6l1.1-3.7l-1.6-2.6l-1.1-3.5l1.6-2.9l1.6-0.8l-0.5-3.5l-0.8-3.5l1.3-0.5l7.6,0.8l3.2,1.1z",
    center: [95, 155]
  },
  canada: {
    name: "Canada",
    d: "M46,50l2.6,2.8l-0.5,2.9l-2.1,0.5l-1.6,2.4l3.5,2.4l3.5-0.3l2.9,1.3l2.4,2.6l-0.5,2.4l2.4,3.2l3.7,0.8l2.9-1.1l3.2,1.1l-0.3,3.2l2.4,2.1l2.6-0.3l2.9,1.3l2.4-2.4l3.5-0.3l2.9,2.9l-2.1,2.1l-0.5,3.2l2.6,1.9l2.1,3.5l3.2-0.5l1.6,2.6l-1.6,2.9l2.6,3.2l4-0.5l2.6,1.6l-0.5,2.9l3.5,0.8l2.1,2.6l2.4-1.6l4,0.3l0.8,3.2l-2.1,2.4l1.3,3.5l2.9,0.8l0.3,2.9l-2.6,1.9l-0.3,2.9l-2.4,0.5l-1.6,2.6l-2.9-0.5l-3.5,1.3l-2.1-1.9l-2.9,0.3l-2.4,2.1l-3.2-1.1l-2.4,0.8l-2.1-2.4l-2.9,1.1l-2.6-1.3l-3.7,0.3l-2.1-2.9l-2.6,0.5l-3.5-1.6l-2.4,1.1l-2.6-0.8l-2.6,2.1l-2.4-1.6l-3.2-0.3l-2.1,2.4l-2.9-1.6l-3.5,0.3l-2.1-2.6l-2.6,0.5l-3.2-2.1l-2.6,1.1l-2.6-2.9l-2.4,0.3l-3.5-1.1l0.3-3.2l-2.4-2.4l2.6-2.1l-1.9-2.9l-2.9-0.3l-0.8-2.6l2.9-2.4l-1.3-3.7l1.9-2.9l3.2-1.1l-0.5-3.2l2.6-2.6l0.8-3.2l2.9-1.3l-1.1-3.5l2.1-2.6l2.9,0.5l1.6-2.9l3.2-0.8l0.5-3.2l2.6-1.6l2.1,1.9l2.9-2.1l0.3-3.5l3.7-0.8l0.8-3.2l3.2,0.3z",
    center: [80, 85]
  },
  brazil: {
    name: "Brazil",
    d: "M108,260l2.6,2.1l0.8,3.2l2.4,2.4l-0.5,3.5l2.1,2.6l2.6-0.5l2.1,2.1l1.3,3.2l-1.6,2.9l0.8,2.9l2.4,1.1l0.3,2.6l-2.1,2.4l0.5,3.2l2.9,1.9l1.9,2.9l-0.3,3.7l-2.4,2.1l-3.5,0.3l-2.6-1.3l-3.2,0.8l-2.4-0.5l-2.9,1.6l-2.1-2.1l-2.6,0.3l-3.2-1.9l-0.5-3.5l-2.4-2.4l0.3-2.9l-2.6-1.6l-2.4,0.8l-3.5-0.3l-1.6-2.9l0.5-3.2l-2.1-2.4l-2.9,0.3l-1.1-3.2l-2.6-1.1l0.3-2.9l2.1-2.6l-0.5-2.9l2.4-2.4l0.8-3.2l2.9-0.8l1.9-2.6l3.2,0.3l2.6-1.6l0.5-3.2l2.4-0.3l2.4,2.1l3.5,0.5l2.1-1.1l2.9,1.3z",
    center: [94, 295]
  },
  russia: {
    name: "Russia",
    d: "M340,45l5.3,0.8l4,2.6l-0.8,3.7l5.3,2.1l-1.6,3.2l4.5,2.9l-2.4,2.9l4,2.1l-1.1,3.5l6.1,1.6l-0.3,3.2l4.8,1.9l-2.9,2.6l3.5,3.7l5.6-0.5l3.2,2.4l-1.6,3.5l5.3,1.1l2.6,2.9l-3.5,1.9l2.9,3.2l-2.1,2.6l4.5,1.3l-0.8,3.7l3.7,2.4l-4,1.9l1.6,4l-4.8,0.8l1.1,3.5l-5.6,1.1l-0.3,4l-4.5-0.5l-2.4,3.5l-5.3-0.8l-1.9,3.2l-4.8-1.6l-3.2,2.1l-5.3-2.4l-2.9,2.4l-4.5-1.9l-4,1.6l-3.7-2.9l-4.8,0.5l-2.6-3.2l-5.3,0.3l-1.6-3.5l-4.5,1.1l-2.1-3.7l-4.8-0.3l-1.1-4l-5.6-0.8l0.5-3.5l-4.5-1.3l1.3-3.2l-5.3-1.9l2.1-2.6l-4-2.4l2.9-2.1l-3.5-3.2l4-1.6l-2.4-3.5l5.3-0.8l-0.8-4l4.5-1.3l0.3-4l5.6-0.3l2.1-3.2l5.3,0.5l2.9-2.6l4.5,1.3l3.5-2.1l3.7,2.1l4.5-1.6l2.6,2.9l5.3-0.3l1.1-3.7l4.8,0.5l1.9-2.9l4,1.6z",
    center: [380, 90]
  },
  china: {
    name: "China",
    d: "M380,160l3.2,2.4l-0.5,3.2l3.5,1.9l2.1,2.9l-1.3,3.5l2.9,2.6l-0.8,3.2l3.2,1.6l1.6,3.2l-2.4,2.4l2.1,3.5l-1.9,2.9l3.5,0.8l0.5,3.5l-2.6,2.1l1.3,3.2l-2.9,1.9l0.8,3.5l-3.5,0.5l-1.6,3.2l-3.2-0.3l-2.4,2.6l-3.5-1.3l-2.9,1.6l-3.2-2.1l-3.5,0.8l-2.1-2.9l-3.2,0.3l-2.6-2.4l-3.5,1.1l-2.4-1.9l-3.2,0.5l-2.9-2.6l-2.6,1.3l-3.5-1.6l-2.1,2.1l-3.2-2.4l-2.9,0.8l-2.4-3.2l-3.5,0.3l-1.3-3.5l2.9-2.1l-0.5-3.2l2.6-2.6l-1.9-2.9l2.4-2.4l-0.3-3.5l2.9-1.9l1.6-3.2l3.5,0.5l2.1-2.6l2.9,1.3l3.2-1.6l1.3-3.2l3.5,0.8l2.6-2.1l0.5-3.5l3.2-0.3l1.9-2.9l3.5,1.6l2.4-1.9l3.2,0.5l2.9,2.4l3.5-0.8l1.6,2.9z",
    center: [365, 195]
  },
  india: {
    name: "India",
    d: "M330,205l2.4,2.1l0.5,3.2l2.1,2.6l-0.8,3.5l2.6,1.9l0.3,3.2l-2.1,2.4l1.3,3.5l-1.6,2.9l2.4,2.1l-0.5,3.2l-2.6,1.6l0.8,3.5l-2.9,1.9l1.1,3.2l-2.4,2.4l-0.3,3.5l-2.9,0.8l-1.6,3.2l-2.6-1.3l-2.1,2.6l-3.2-0.5l-2.4,2.1l-2.9-1.9l-2.6,0.3l-1.9-2.9l-2.4,0.5l-2.1-2.6l0.8-3.2l-2.6-1.9l0.5-3.5l-2.1-2.4l1.3-2.9l-1.9-2.6l0.8-3.2l2.6-2.1l-0.5-3.5l2.1-2.4l2.9,0.8l2.4-2.1l-0.3-3.2l2.6-1.6l1.9,2.4l3.2-0.5l2.1-2.6l2.4,1.3l2.9-1.9l0.5-3.2l3.2,0.3l2.1,2.4z",
    center: [325, 240]
  },
  australia: {
    name: "Australia",
    d: "M410,310l2.9,1.3l2.1,2.6l-0.5,3.2l2.4,2.1l0.8,3.5l-1.6,2.9l2.1,2.4l-0.3,3.2l-2.4,1.9l0.5,3.5l-2.6,1.3l-1.9,2.9l-2.9-0.5l-2.4,2.1l-3.2-1.1l-2.6,0.8l-2.1-2.4l-2.9,0.3l-2.4-2.6l-3.2,0.5l-1.6-2.9l-2.6-0.8l0.3-3.2l-2.1-2.1l0.8-3.5l-2.4-1.6l0.5-2.9l2.6-2.1l-0.3-3.2l2.1-2.4l2.9,0.8l2.4-1.9l3.2,0.3l2.1-2.6l2.6,1.1l2.4-0.5l2.1,2.4l2.9-0.8l1.9,2.1z",
    center: [400, 340]
  },
  uk: {
    name: "United Kingdom",
    d: "M230,115l1.1,1.9l-0.5,2.1l1.6,1.3l-0.8,2.4l-2.1,0.5l-1.3,1.9l-1.9-0.3l-1.6-1.6l0.3-2.1l-1.1-1.9l0.8-1.6l2.1-0.3l0.8-1.9l1.9,0.3l0.7-0.7z",
    center: [227, 122]
  },
  germany: {
    name: "Germany",
    d: "M248,125l1.6,1.9l-0.3,2.4l1.9,1.6l0.5,2.6l-1.3,1.9l0.8,2.1l-1.6,1.3l-0.3,2.4l-2.1,0.8l-1.9-0.5l-1.6,1.3l-1.9-1.1l-0.8-2.4l-1.6-0.5l0.3-2.1l-1.1-1.9l0.8-1.6l1.9-0.8l0.5-2.1l1.6-1.3l2.1,0.5l1.3-1.6l1.2-1.9z",
    center: [245, 138]
  },
  france: {
    name: "France",
    d: "M232,138l1.6,1.3l0.5,2.4l-0.8,2.1l1.3,1.9l-1.1,2.6l0.5,2.1l-1.9,1.3l-2.4,0.3l-1.6,1.6l-2.1-0.5l-1.3-1.9l-1.9,0.3l-1.6-1.6l0.5-2.4l-1.3-1.9l0.8-2.1l1.9-1.3l0.3-2.4l2.1-0.8l1.6,1.1l2.4-0.5l1.3-1.6h1.2z",
    center: [225, 150]
  },
  japan: {
    name: "Japan",
    d: "M445,165l0.8,2.1l-1.3,1.6l1.1,2.4l-0.5,2.1l-1.9,1.3l-1.6-0.8l-0.3,2.6l-1.9,0.5l-1.1-2.1l0.8-2.4l-1.6-1.3l0.5-2.1l1.9-1.6l1.3,1.1l1.6-1.9l1.2-1.5z",
    center: [443, 175]
  },
  mexico: {
    name: "Mexico",
    d: "M55,185l2.1,1.9l3.2,0.5l1.6,2.4l-0.5,2.9l2.4,1.6l0.8,2.6l-1.3,2.4l2.1,1.9l-0.5,2.6l-1.9,1.3l-2.6,0.3l-1.3,2.1l-2.4-0.8l-1.9,1.6l-2.6-1.1l-1.1-2.4l-2.4,0.3l-1.6-1.9l0.5-2.6l-2.1-1.3l0.3-2.9l1.9-1.6l-0.8-2.4l1.6-2.1l2.6-0.5l0.8-2.6l2.1,0.3l1.1-2.1z",
    center: [60, 202]
  },
  southafrica: {
    name: "South Africa",
    d: "M275,335l2.1,1.6l0.8,2.9l-0.5,2.4l1.9,2.1l-1.3,2.6l0.5,2.1l-2.1,1.6l-2.6,0.3l-1.9,1.9l-2.4-0.5l-2.1,1.3l-2.6-1.1l-1.3-2.4l-2.4,0.3l-1.6-2.1l0.8-2.6l-1.9-1.6l0.5-2.4l2.1-1.9l1.3-2.6l2.6,0.5l2.1-1.3l2.4,0.8l2.6-0.3l1-2.1z",
    center: [268, 348]
  },
  indonesia: {
    name: "Indonesia",
    d: "M395,265l2.4,1.3l0.5,2.6l-1.6,1.9l2.1,1.6l-0.8,2.4l-2.4,0.5l-1.6,1.9l-2.1-1.3l-2.4,0.8l-1.9-1.9l-2.6,0.3l-0.8-2.4l-2.1-0.5l0.5-2.6l2.4-1.3l1.9,0.8l2.1-1.6l2.6,0.5l1.3-2.1l2.5,0.1z",
    center: [388, 275]
  },
  nigeria: {
    name: "Nigeria",
    d: "M258,235l1.9,1.6l0.5,2.4l-1.1,2.1l1.3,1.9l-0.8,2.6l-2.1,1.1l-1.6,1.9l-2.4-0.3l-1.9,1.3l-2.1-1.6l-0.5-2.4l-1.9-1.1l0.8-2.6l-1.3-1.9l1.1-2.1l2.4-0.5l1.6-1.9l2.1,0.8l1.9-1.3h2z",
    center: [252, 248]
  },
  egypt: {
    name: "Egypt",
    d: "M278,190l1.6,1.9l0.3,2.6l-1.3,2.1l0.8,2.4l-1.9,1.6l-0.5,2.4l-2.1,0.8l-1.9-1.3l-2.4,0.5l-1.1-2.1l-2.1-0.3l0.5-2.6l-1.6-1.6l1.1-2.4l1.9-0.8l0.8-2.4l2.4,0.3l1.6-1.6l2.1,0.5l1.8,0.5z",
    center: [270, 202]
  },
  argentina: {
    name: "Argentina",
    d: "M92,335l1.9,2.1l-0.5,2.9l2.1,1.6l-0.8,2.6l1.3,2.4l-1.6,2.1l0.5,2.9l-2.1,1.6l-0.3,2.6l-1.9,2.1l-2.4-0.5l-1.6,2.1l-2.1-1.3l-0.8-2.6l1.3-2.4l-1.9-1.9l0.5-2.6l-2.1-1.6l0.8-2.9l2.4-1.3l0.3-2.6l2.1-1.9l1.9,0.8l2.4-1.6l0.6-2.1z",
    center: [85, 358]
  },
  saudiarabia: {
    name: "Saudi Arabia",
    d: "M300,205l2.1,1.3l0.8,2.6l-0.5,2.4l1.6,1.9l-1.1,2.6l0.5,2.1l-1.9,1.6l-2.4,0.3l-1.6,1.9l-2.1-0.8l-1.9,1.3l-2.4-1.6l-0.3-2.6l-2.1-1.1l0.8-2.4l-1.3-2.1l1.1-2.4l2.4-0.5l1.3-2.1l2.6,0.5l1.9-1.3l2.5,0.4z",
    center: [293, 220]
  },
  southkorea: {
    name: "South Korea",
    d: "M425,170l1.1,1.6l-0.5,1.9l0.8,1.6l-1.3,1.3l-1.6-0.5l-1.1,1.3l-1.3-1.1l0.3-1.9l-0.8-1.6l1.1-1.3l1.6,0.3l0.8-1.1l0.9-0.5z",
    center: [422, 176]
  },
  italy: {
    name: "Italy",
    d: "M255,148l0.8,1.9l-0.5,2.1l1.3,1.6l-0.3,2.4l-1.6,1.3l0.5,2.1l-1.3,1.6l-1.6-0.5l-1.1-1.9l0.3-2.1l-1.3-1.6l0.5-2.4l1.9-0.8l0.5-2.1l1.9-1.6z",
    center: [257, 158]
  },
  spain: {
    name: "Spain",
    d: "M218,155l2.1,0.8l0.8,2.4l-0.5,2.1l1.3,1.9l-1.6,1.6l-2.4,0.3l-1.6,1.3l-2.1-0.8l-1.3,1.6l-1.9-1.3l-0.5-2.4l-1.6-0.8l0.8-2.1l-0.3-2.4l1.9-1.3l2.1,0.5l1.6-1.6l2.4,0.5l0.8-0.3z",
    center: [213, 162]
  },
  turkey: {
    name: "Turkey",
    d: "M285,155l2.4,1.1l0.8,2.4l-0.5,2.1l1.6,1.6l-1.1,2.4l-2.4,0.5l-1.6,1.6l-2.1-0.8l-1.9,1.3l-2.4-1.1l-0.5-2.4l-1.9-0.8l0.8-2.1l-1.3-1.9l1.6-1.6l2.4,0.3l1.3-1.6l2.1,0.5l1.6-1.5z",
    center: [278, 163]
  },
  thailand: {
    name: "Thailand",
    d: "M375,230l1.3,1.9l-0.5,2.4l1.6,1.6l-0.8,2.1l-1.9,1.3l0.3,2.6l-1.6,1.3l-1.9-1.1l-1.3,1.6l-1.6-1.6l0.5-2.4l-1.3-1.6l0.8-2.1l1.9-1.3l-0.3-2.4l1.6-1.6l1.6,0.8l1.6-1.5z",
    center: [372, 242]
  },
  vietnam: {
    name: "Vietnam",
    d: "M390,225l1.1,1.9l-0.3,2.1l1.3,1.6l-0.8,2.4l-1.6,1.1l0.5,2.4l-1.3,1.6l-1.6-0.8l-0.8-2.1l-1.3-0.5l0.5-2.4l-0.8-1.9l1.1-1.6l1.6,0.3l0.8-1.9l1.6-2.2z",
    center: [387, 238]
  },
  poland: {
    name: "Poland",
    d: "M262,118l1.9,1.3l0.5,2.4l-0.8,1.9l1.3,1.6l-1.1,2.1l-1.9,0.5l-1.6,1.3l-1.9-0.8l-1.3-1.9l-1.9,0.3l-0.8-2.1l0.5-1.9l1.6-1.3l0.3-2.1l1.9-0.8l1.6,1.1l1.7-1.6z",
    center: [258, 128]
  },
  ukraine: {
    name: "Ukraine",
    d: "M280,120l2.1,1.1l0.8,2.4l-0.5,2.1l1.6,1.6l-1.1,2.1l-1.9,0.8l-1.6,1.6l-2.1-0.5l-1.9,1.1l-1.6-1.6l-0.5-2.4l-1.9-0.8l0.8-2.1l-1.3-1.9l1.6-1.6l2.1,0.3l1.3-1.6l2.1,0.5l2-1z",
    center: [275, 130]
  },
  pakistan: {
    name: "Pakistan",
    d: "M320,185l1.9,1.6l0.5,2.6l-1.1,2.1l1.3,1.9l-1.6,2.1l-2.1,0.5l-1.6,1.9l-1.9-0.8l-1.6,1.3l-1.6-1.6l-0.3-2.6l-1.9-1.1l0.8-2.4l-1.1-1.9l1.6-1.6l2.1,0.3l1.3-1.9l2.4,0.5l1.9-1.3l1.1,0.4z",
    center: [313, 198]
  },
  bangladesh: {
    name: "Bangladesh",
    d: "M350,210l1.3,1.3l0.3,2.1l-0.8,1.6l0.8,1.6l-1.3,1.3l-1.6-0.5l-1.1,1.1l-1.3-1.3l0.3-1.9l-0.8-1.3l0.8-1.6l1.6,0.3l0.8-1.3l1.1-1.4z",
    center: [347, 218]
  },
  iran: {
    name: "Iran",
    d: "M305,170l2.1,1.3l0.8,2.6l-0.5,2.4l1.6,1.9l-1.1,2.4l-1.9,0.8l-1.6,1.9l-2.1-0.5l-1.9,1.3l-1.9-1.6l-0.5-2.6l-1.9-0.8l0.8-2.4l-1.1-1.9l1.6-1.9l2.1,0.3l1.3-1.9l2.4,0.5l1.8-1.9z",
    center: [300, 183]
  },
  philippines: {
    name: "Philippines",
    d: "M420,235l0.8,1.9l-0.3,2.1l0.8,1.6l-1.1,1.6l-1.6-0.3l-0.5,1.9l-1.3-1.3l0.3-2.1l-0.8-1.6l1.1-1.6l1.3,0.5l0.5-1.6l0.8-1.1z",
    center: [417, 245]
  },
  malaysia: {
    name: "Malaysia",
    d: "M385,258l1.6,1.1l0.5,2.1l-0.8,1.6l1.1,1.6l-1.3,1.3l-1.9-0.5l-1.3,1.1l-1.3-1.3l0.3-1.9l-0.8-1.6l1.1-1.3l1.6,0.3l0.5-1.3l0.7-1.2z",
    center: [382, 268]
  },
  singapore: {
    name: "Singapore",
    d: "M388,270l0.5,0.5l-0.3,0.8l-0.8,0.3l-0.5-0.5l0.3-0.8l0.8-0.3z",
    center: [388, 271]
  },
  newzealand: {
    name: "New Zealand",
    d: "M465,370l1.3,1.6l-0.5,1.9l0.8,1.3l-1.1,1.6l-1.6-0.5l-0.8,1.3l-1.1-1.3l0.3-1.9l-0.5-1.3l1.1-1.3l1.3,0.3l0.8-1.7zM458,378l0.8,1.1l-0.3,1.3l-1.1,0.8l-0.8-1.1l0.3-1.3l1.1-0.8z",
    center: [460, 378]
  },
  netherlands: {
    name: "Netherlands",
    d: "M240,118l0.8,1.1l-0.3,1.6l0.8,1.1l-0.8,1.3l-1.3-0.3l-0.8,0.8l-1.1-0.8l0.3-1.6l-0.5-1.1l0.8-1.3l1.3,0.3l0.8-0.8z",
    center: [238, 122]
  },
  belgium: {
    name: "Belgium",
    d: "M238,128l0.8,0.8l-0.3,1.3l0.5,1.1l-0.8,1.1l-1.3-0.3l-0.8,0.8l-0.8-1.1l0.3-1.3l-0.5-1.1l1.1-0.8l1.1,0.3l0.7-0.8z",
    center: [236, 132]
  },
  sweden: {
    name: "Sweden",
    d: "M260,80l1.3,2.1l-0.5,2.4l1.1,1.9l-0.8,2.6l-1.6,1.3l0.3,2.4l-1.9,1.1l-1.6-1.6l-0.3-2.4l-1.3-1.6l0.8-2.4l1.6-1.3l-0.3-2.1l1.9-1.3l1.3-1.1z",
    center: [258, 95]
  },
  norway: {
    name: "Norway",
    d: "M252,65l1.6,1.9l-0.5,2.6l1.3,1.6l-1.1,2.4l-1.9,0.8l-0.8,2.1l-1.6-1.3l-1.3,1.6l-1.3-1.9l0.5-2.4l-1.1-1.6l1.1-2.1l1.9-0.8l0.5-2.1l1.6,0.3l1.1-1.1z",
    center: [248, 78]
  },
  finland: {
    name: "Finland",
    d: "M275,70l1.3,1.9l-0.3,2.4l1.1,1.6l-0.8,2.4l-1.6,1.1l0.3,2.1l-1.9,1.3l-1.6-1.6l-0.5-2.4l-1.3-1.3l0.8-2.4l-1.1-1.6l1.3-2.1l1.9,0.5l1.3-1.3l1.1-0.6z",
    center: [273, 82]
  },
  denmark: {
    name: "Denmark",
    d: "M248,108l0.8,1.3l-0.3,1.6l0.5,1.3l-1.1,1.1l-1.3-0.5l-0.8,0.8l-0.8-1.3l0.3-1.6l-0.5-1.1l1.1-1.1l1.3,0.5l0.8-1z",
    center: [246, 114]
  },
  switzerland: {
    name: "Switzerland",
    d: "M245,140l0.8,0.8l-0.3,1.3l0.5,1.1l-0.8,1.1l-1.3-0.3l-0.8,0.8l-0.8-1.1l0.3-1.3l-0.5-0.8l1.1-0.8l1.1,0.3l0.7-1.1z",
    center: [243, 144]
  },
  austria: {
    name: "Austria",
    d: "M258,138l1.1,0.8l-0.3,1.6l0.8,1.3l-0.8,1.3l-1.6-0.3l-0.8,1.1l-1.3-0.8l0.3-1.6l-0.5-1.3l1.1-1.1l1.3,0.3l0.7-1.3z",
    center: [256, 143]
  },
  portugal: {
    name: "Portugal",
    d: "M205,158l0.8,1.6l-0.3,1.9l0.5,1.6l-0.8,1.3l-1.3-0.5l-0.5,1.3l-0.8-1.3l0.3-1.9l-0.5-1.6l0.8-1.3l1.1,0.3l0.7-1.4z",
    center: [203, 165]
  },
  greece: {
    name: "Greece",
    d: "M272,162l1.1,1.1l-0.3,1.9l0.8,1.3l-0.8,1.6l-1.3,0.5l-0.8,1.3l-1.1-0.8l0.3-1.9l-0.5-1.3l0.8-1.6l1.1-0.5l0.7-1.6z",
    center: [270, 170]
  },
  czechrepublic: {
    name: "Czech Republic",
    d: "M258,128l0.8,0.8l-0.3,1.3l0.5,1.1l-0.8,1.1l-1.3-0.3l-0.8,0.8l-0.8-1.1l0.3-1.3l-0.5-0.8l1.1-0.8l1.1,0.3l0.7-1.1z",
    center: [256, 133]
  },
  hungary: {
    name: "Hungary",
    d: "M268,138l0.8,0.8l-0.3,1.3l0.5,1.1l-0.8,1.1l-1.3-0.3l-0.8,0.8l-0.8-1.1l0.3-1.3l-0.5-0.8l1.1-0.8l1.1,0.3l0.7-1.1z",
    center: [266, 143]
  },
  romania: {
    name: "Romania",
    d: "M278,140l1.1,0.8l-0.3,1.6l0.8,1.3l-0.8,1.3l-1.6-0.3l-0.8,1.1l-1.3-0.8l0.3-1.6l-0.5-1.3l1.1-1.1l1.3,0.3l0.7-1.3z",
    center: [276, 148]
  },
  kenya: {
    name: "Kenya",
    d: "M295,262l1.3,1.3l0.3,2.1l-0.8,1.6l0.8,1.6l-1.1,1.3l-1.6-0.5l-1.1,1.1l-1.1-1.3l0.3-1.9l-0.8-1.3l0.8-1.6l1.6,0.3l0.8-1.3l0.6-1.4z",
    center: [292, 272]
  },
  morocco: {
    name: "Morocco",
    d: "M218,185l1.6,1.1l0.5,2.4l-0.8,1.9l1.1,1.6l-1.3,1.6l-1.9,0.3l-1.3,1.3l-1.6-0.8l-0.8-1.9l-1.3-0.5l0.5-2.1l-0.8-1.6l1.3-1.3l1.9,0.3l1.3-1.3l1.6-1z",
    center: [215, 195]
  },
  algeria: {
    name: "Algeria",
    d: "M235,185l1.6,1.3l0.5,2.4l-0.8,2.1l1.1,1.6l-1.1,2.1l-1.9,0.5l-1.3,1.6l-1.9-0.8l-0.8-2.1l-1.6-0.5l0.5-2.4l-1.1-1.6l1.3-1.9l1.9,0.3l1.3-1.6l2.3-1z",
    center: [232, 198]
  },
  colombia: {
    name: "Colombia",
    d: "M82,245l1.9,1.6l0.5,2.6l-0.8,2.1l1.3,1.9l-1.6,1.9l-2.1,0.5l-1.6,1.9l-1.9-0.8l-1.6,1.3l-1.6-1.9l-0.3-2.6l-1.9-1.1l0.8-2.4l-1.1-1.9l1.6-1.9l2.1,0.3l1.3-1.9l2.4,0.5l1.6-1.1l1-1z",
    center: [78, 260]
  },
  peru: {
    name: "Peru",
    d: "M72,280l1.6,1.9l0.3,2.6l-1.1,2.1l1.1,1.9l-1.3,2.4l-1.9,0.5l-1.6,1.9l-1.9-1.1l-1.3,1.6l-1.6-1.6l0.3-2.6l-1.6-1.3l1.1-2.4l-0.8-2.1l1.9-1.6l2.1,0.5l1.6-1.9l2.1,0.3l1.1-1.1z",
    center: [68, 295]
  },
  chile: {
    name: "Chile",
    d: "M78,320l1.3,2.1l-0.5,2.9l1.1,1.9l-0.8,2.6l-1.6,1.3l0.5,2.6l-1.3,1.9l-1.6-0.8l-0.8-2.4l1.1-2.1l-1.3-1.9l0.5-2.6l-1.1-1.9l0.8-2.6l1.6-0.8l1.1-1.1l1-1.1z",
    center: [75, 345]
  },
  venezuela: {
    name: "Venezuela",
    d: "M92,235l1.6,1.6l0.5,2.4l-0.8,2.1l1.3,1.6l-1.3,1.9l-1.9,0.5l-1.6,1.6l-1.9-0.8l-1.3,1.3l-1.6-1.6l-0.3-2.4l-1.6-0.8l0.8-2.1l-1.1-1.6l1.3-1.9l1.9,0.3l1.3-1.6l2.1,0.5l1.6-1z",
    center: [88, 248]
  },
  cuba: {
    name: "Cuba",
    d: "M78,195l1.6,0.8l0.5,1.6l-0.5,1.3l1.1,1.1l-0.8,1.3l-1.6,0.3l-1.3,0.8l-1.3-0.8l-0.8-1.3l-1.1-0.3l0.5-1.6l-0.8-1.1l1.1-1.1l1.6,0.3l1.1-0.8l0.7-0.5z",
    center: [75, 202]
  }
};

// Normalize country keys
const normalizeKey = (key) => {
  return key.toLowerCase().replace(/[\s_-]/g, '');
};

// Get value scale color
const getColorForValue = (value, min, max, colorScale) => {
  if (value === undefined || value === null) return colorScale.empty;
  const ratio = max === min ? 0.5 : (value - min) / (max - min);
  
  // Create gradient from low to high
  const r = Math.round(colorScale.low.r + (colorScale.high.r - colorScale.low.r) * ratio);
  const g = Math.round(colorScale.low.g + (colorScale.high.g - colorScale.low.g) * ratio);
  const b = Math.round(colorScale.low.b + (colorScale.high.b - colorScale.low.b) * ratio);
  
  return `rgb(${r}, ${g}, ${b})`;
};

const defaultColorScale = {
  empty: "#1a1a2e",
  low: { r: 45, g: 55, b: 72 },
  high: { r: 99, g: 179, b: 237 }
};

export default function WorldMap({ 
  data = {}, 
  title = "Global Analytics",
  colorScale = defaultColorScale,
  showLegend = true,
  showValues = true,
  onCountryClick = null,
  className = ""
}) {
  const [hoveredCountry, setHoveredCountry] = useState(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

  // Process data and get min/max
  const processedData = useMemo(() => {
    const normalized = {};
    Object.entries(data).forEach(([key, value]) => {
      normalized[normalizeKey(key)] = value;
    });
    return normalized;
  }, [data]);

  const { min, max, total } = useMemo(() => {
    const values = Object.values(processedData).filter(v => typeof v === 'number');
    if (values.length === 0) return { min: 0, max: 0, total: 0 };
    return {
      min: Math.min(...values),
      max: Math.max(...values),
      total: values.reduce((a, b) => a + b, 0)
    };
  }, [processedData]);

  const handleMouseMove = (e) => {
    setTooltipPos({ x: e.clientX, y: e.clientY });
  };

  const getCountryValue = (countryKey) => {
    return processedData[normalizeKey(countryKey)];
  };

  const countriesWithData = useMemo(() => {
    return Object.entries(countryPaths)
      .filter(([key]) => processedData[normalizeKey(key)] !== undefined)
      .sort((a, b) => (processedData[normalizeKey(b[0])] || 0) - (processedData[normalizeKey(a[0])] || 0));
  }, [processedData]);

  return (
    <div className={`worldmap-container ${className}`}>
      <div className="worldmap-header">
        <h2 className="worldmap-title">{title}</h2>
        {showValues && (
          <div className="worldmap-stats">
            <div className="stat-item">
              <span className="stat-label">Total</span>
              <span className="stat-value">{total.toLocaleString()}</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Countries</span>
              <span className="stat-value">{countriesWithData.length}</span>
            </div>
          </div>
        )}
      </div>

      <div className="worldmap-content">
        <div className="map-wrapper" onMouseMove={handleMouseMove}>
          <svg
            viewBox="0 0 500 400"
            className="worldmap-svg"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Background */}
            <rect x="0" y="0" width="500" height="400" fill="transparent" />
            
            {/* Grid lines for style */}
            <defs>
              <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="500" height="400" fill="url(#grid)" />
            
            {/* Countries */}
            {Object.entries(countryPaths).map(([key, country]) => {
              const value = getCountryValue(key);
              const hasData = value !== undefined;
              const fillColor = getColorForValue(value, min, max, colorScale);
              const isHovered = hoveredCountry === key;
              
              return (
                <motion.path
                  key={key}
                  d={country.d}
                  fill={fillColor}
                  stroke={isHovered ? "#63b3ed" : "rgba(255,255,255,0.15)"}
                  strokeWidth={isHovered ? 1.5 : 0.5}
                  className={`country-path ${hasData ? 'has-data' : ''}`}
                  onMouseEnter={() => setHoveredCountry(key)}
                  onMouseLeave={() => setHoveredCountry(null)}
                  onClick={() => onCountryClick && hasData && onCountryClick(key, value, country.name)}
                  initial={false}
                  animate={{
                    scale: isHovered ? 1.02 : 1,
                    filter: isHovered ? "brightness(1.3)" : "brightness(1)"
                  }}
                  transition={{ duration: 0.15 }}
                  style={{ 
                    cursor: hasData ? 'pointer' : 'default',
                    transformOrigin: `${country.center[0]}px ${country.center[1]}px`
                  }}
                />
              );
            })}

            {/* Data indicators */}
            {showValues && countriesWithData.map(([key, country]) => {
              const value = getCountryValue(key);
              const countryData = countryPaths[key];
              if (!countryData) return null;
              
              return (
                <g key={`indicator-${key}`} className="data-indicator">
                  <circle
                    cx={countryData.center[0]}
                    cy={countryData.center[1]}
                    r={Math.max(3, Math.min(8, (value / max) * 8 + 3))}
                    fill="rgba(99, 179, 237, 0.4)"
                    stroke="#63b3ed"
                    strokeWidth="1"
                  />
                </g>
              );
            })}
          </svg>

          {/* Tooltip */}
          {hoveredCountry && (
            <motion.div
              className="worldmap-tooltip"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{
                left: tooltipPos.x + 15,
                top: tooltipPos.y - 40,
              }}
            >
              <div className="tooltip-country">{countryPaths[hoveredCountry]?.name}</div>
              <div className="tooltip-value">
                {getCountryValue(hoveredCountry) !== undefined 
                  ? getCountryValue(hoveredCountry).toLocaleString()
                  : 'No data'}
              </div>
            </motion.div>
          )}
        </div>

        {/* Legend and Country List */}
        <div className="worldmap-sidebar">
          {showLegend && (
            <div className="legend-section">
              <div className="legend-title">Scale</div>
              <div className="legend-gradient">
                <div 
                  className="gradient-bar"
                  style={{
                    background: `linear-gradient(to right, rgb(${colorScale.low.r}, ${colorScale.low.g}, ${colorScale.low.b}), rgb(${colorScale.high.r}, ${colorScale.high.g}, ${colorScale.high.b}))`
                  }}
                />
                <div className="legend-labels">
                  <span>{min.toLocaleString()}</span>
                  <span>{max.toLocaleString()}</span>
                </div>
              </div>
            </div>
          )}

          <div className="country-list-section">
            <div className="country-list-title">Rankings</div>
            <div className="country-list">
              {countriesWithData.slice(0, 10).map(([key], index) => {
                const value = getCountryValue(key);
                const percentage = max > 0 ? (value / max) * 100 : 0;
                
                return (
                  <motion.div
                    key={key}
                    className={`country-list-item ${hoveredCountry === key ? 'active' : ''}`}
                    onMouseEnter={() => setHoveredCountry(key)}
                    onMouseLeave={() => setHoveredCountry(null)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <div className="country-rank">{index + 1}</div>
                    <div className="country-info">
                      <div className="country-name">{countryPaths[key]?.name}</div>
                      <div className="country-bar-container">
                        <motion.div 
                          className="country-bar"
                          initial={{ width: 0 }}
                          animate={{ width: `${percentage}%` }}
                          transition={{ duration: 0.5, delay: index * 0.05 }}
                        />
                      </div>
                    </div>
                    <div className="country-value">{value.toLocaleString()}</div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
