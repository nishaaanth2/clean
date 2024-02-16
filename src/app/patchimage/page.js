"use client";
import Project from '@/components/project';
import Banner from '@/components/banner';
import Service from '@/components/service';
import { useRef, useEffect, useState } from 'react';
import Points from '@/components/points';
import Contact from '@/components/contact';

export default function Home() {
  const imgRef = useRef(null);
  const [imgHeight, setImgHeight] = useState(0);

  
  useEffect(() => {
    const updateImgHeight = () => {
      if (imgRef.current) {
        const newImgHeight = imgRef.current.clientHeight / 3; // Get the image height
        setImgHeight(newImgHeight);
        imgRef.current.style.marginTop = `-${newImgHeight}px`; // Apply negative margin-top
      }
    };

    // Initial setup
    updateImgHeight();

    // Update on window resize
    window.addEventListener('resize', updateImgHeight);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener('resize', updateImgHeight);
    };
  }, []);



  return (
    <main>
      <div>
        <Banner />
      </div>
      <Service imgHeight={imgHeight} />
      {/* <img ref={imgRef} className=' w-2/5 h-4/5 absolute  object-cover end-24' src='laptop.jpeg' /> */}
      <img ref={imgRef} className='w-1/2 h-3/5 absolute  object-cover pl-20 pr-24 right-0' src='laptop.jpeg' />

      <Points imgHeight={imgHeight} />
      <Contact />
      
    </main>
  )
}
