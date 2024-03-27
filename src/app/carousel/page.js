"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import localFont from 'next/font/local';
import './styles.css';
import { useRouter } from 'next/navigation';

// Define local fonts
const myFont1 = localFont({ src: '../../../public/Karla-Regular.ttf' });

const images = ['carousel/b1.jpg', 'carousel/b2.jpg', 'carousel/b3.jpg', 'carousel/b4.jpg', 'carousel/b5.jpg'];

const dataArray = [
  ['Branding (3 Options)', 'Rs 5000'],
  ['Website Design & Development', 'Rs 15,000>'],
  ['Social Media Post / Story', 'Rs 500>'],
  ['B Card & Letterhead', 'Rs 600'],
  ['Poster & Flyer', 'Rs 1200'],
  ['Invitation Design', 'Rs 1500'],
  ['Website Invite', 'Rs 6000>'],
  ['Art Direction (Ads / Films)', 'Enquire'],
];

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const router = useRouter()

  useEffect(() => {
    const interval = setInterval(() => {
      // Change image every 2 seconds
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className={`flex md:h-screen flex-col-reverse md:flex-row ${myFont1.className}`}>
      {/* Blue screen on the left */}
      <div className="md:w-1/2 w-full flex-col justify-between md:p-20 p-8 flex">
        {/* Left content goes here */}
        <div className='text-xl tracking-wide md:mb-0 mb-12'>
        <svg onClick={() => router.push('/')} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27.311 27.0777" className='w-4 mb-2 cursor-pointer'><defs></defs><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><polyline class="fasd" points="14.414 0.707 1.414 13.707 14.078 26.371"/><line class="fasd" x1="27.311" y1="13.5388" x2="1.4142" y2="13.5388"/></g></g>
        </svg>
           PRICE LIST
        </div>

        {/* Mapping array items */}
        <div className='text-2xl tex'>
        {dataArray.map((item, index) => (
          <div key={index} className={`border-b border-black flex justify-between text-sm ${index === dataArray.length - 1 ? 'mb-0' : 'mb-6'}`}>
            <div className=" flex mb-0.5">{item[0]}</div>
            <div className=" flex">{item[1]}</div>
          </div>
        ))}
        </div>
      </div>

      {/* Image on the right */}
      <div className="w-full h-[50vh] md:h-auto md:w-1/2 ">
        <Image
          className='w-full h-full object-cover'
          src={`/${images[currentImageIndex]}`}
          width={500}
          height={500}
          alt={`Image ${currentImageIndex + 1}`}
        />
      </div>
    </main>
  );
}
