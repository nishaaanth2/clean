'use client'
// import styles from './style.module.css';
import { motion } from 'framer-motion';
import './style.css';
import { useRef, useEffect, useState } from 'react';



export default function Contact() {

    const imgRef = useRef(null);
    const divRef = useRef(null);
    const [imgHeight, setImgHeight] = useState(0);


    useEffect(() => {
        const updateImgHeight = () => {
            if (imgRef.current) {
                const newImgHeight = imgRef.current.clientWidth / 2; // Get the image height
                setImgHeight(newImgHeight);
                imgRef.current.style.marginLeft = `${newImgHeight}px`; // Apply negative margin-top
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
        <main className='five-sixths-height flex '>
            <div ref={imgRef} className='w-1/2 h-2/3 py-24 absolute object-cover self-center ' >
                <div className='w-full h-full bg-dark p-8'>
                    <div className='h-2/3 bg-light'>


                    </div>
                    <div className='h-1/3'>
                        

                    </div>
                </div>
            </div>
            <div className='h-full w-1/2 bg-good-green'>
                <div className='h-full flex flex-col pt-20 px-20 '>
                    <h1 className='font-epi font-color-dark text-left text-7xl  single-line whitespace-nowrap '>
                        <span className='font-cursive mr-8 text-8xl'>
                            C
                        </span >
                        <span className='-ml-5 '>
                            ONTACT
                        </span>
                    </h1>
                    <p>
                        +91 986751234
                    </p>

                    <p>
                        adsjhaskdfh@gmail.com
                    </p>
                </div>
            </div>



            <div className='h-full w-1/2 flex flex-col justify-end align-end pb-10'>
                <p className='w-96 pl-20 pr-24 ml-auto'>
                    If you would like to talk over phone, don&apos;t hesitate to give us a call anytime!
                </p>
            </div>

        </main>
    )
}
