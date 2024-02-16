'use client'
// import styles from './style.module.css';
import { motion } from 'framer-motion';
import { useState } from 'react';
import './style.css';



export default function Service({ imgHeight }) {


    return (
        <main>

            <div className=' bg-dark '>
                <main className="h-full arial-font">
                    <div className='h-full grid grid-cols-2'>
                        <div className='h-full col-span-1 ' >
                            <div className='h-full flex flex-col  justify-between'>


                                <div className=' pt-10 pb-16 px-20 font-epi font-color-light text-left text-8xl '>
                                    <h1 >
                                        WHAT
                                    </h1>
                                    <h1 className='mt-2'>
                                        <span className='font-cursive mr-8 text-9xl'>
                                            W
                                        </span>

                                        E DO
                                    </h1>
                                </div>
                                {/* <div className='relative -ml-28  items-center justify-center flex-grow flex -mb-20'> */}
                                {/* <p className="absolute w-2/4 font-color-light text-sm text-justify">Right from forming a business idea, all the way to making it a mind blowing and appealing brand, we are here to help you all the way. At Midweek Social, you not only get a designer but also a visual planner and ideator. We focus on creatign a brand that satisfies your aesthetic desires and inspires you to work on it everyday.</p> */}
                                <div style={{ height: imgHeight + 'px' }} className=' mt-12'>
                                <div  className='h-full pl-20 pr-28 font-color-light font-epi text-sm flex flex-col justify-between'>
                                    <p className="text-justify">Right from forming a business idea, all the way to making it a mind blowing and appealing brand, we are here to help you all the way. At Midweek Social, you not only get a designer but also a visual planner and ideator. We focus on creatign a brand that satisfies your aesthetic desires and inspires you to work on it everyday.</p>
                                    <div className='h-full flex flex-col justify-center'>
                                        <a href="/netty" className="flex mb-10 items-center">
                                        <p className="border-b italic">view our services</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 32" className="h-3 ml-3">
                                            <polyline class="cls-1" fill="none" stroke="#e0ded1" stroke-miterlimit="20" stroke-width="2" points="51.042,5 61.996,15.943 51.076,27" />
                                            <line class="cls-1" fill="none" stroke="#e0ded1" stroke-miterlimit="10" stroke-width="2" x1="1.9774" y1="16" x2="62.0226" y2="16" />
                                        </svg>
                                    </a>
                                    </div>
                                    </div>
                                </div>
                                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1676 670" className=''> */}
                                {/* <ellipse cx="838" cy="334.8333" rx="802.5" ry="310" fill="none" stroke="#e0ded1" stroke-miterlimit="10" stroke-width="4" /> */}
                                {/* </svg> */}
                                {/* </div> */}
                            </div>
                        </div>
                        <div className='col-span-1 my-16 ml-16 mr-20'>
                            <div className='font-perfect-size font-epi'>
                                <h1 className='mb-11'>
                                    <span className='px-6 pt-4 pb-3 m-2 border font-color-light rounded-full whitespace-nowrap'>BRANDING</span>
                                    <span className='px-6 pt-4 pb-3 m-2 border font-color-light rounded-full whitespace-nowrap'>CODING</span>
                                </h1>
                                <h1 className='mb-11'>
                                    <span className='px-6 pt-4 pb-3 m-2 bg-light font-color-dark rounded-full whitespace-nowrap'>WEBSITE DEVELOPMENT</span>
                                    <span className='px-7 pt-4 pb-3 m-2 bg-light font-color-dark rounded-full whitespace-nowrap'>PRINT</span>
                                </h1>
                                <h1 className='mb-11'>
                                    <span className='px-6 pt-4 pb-3 m-2 bg-good-green font-color-dark rounded-full whitespace-nowrap'>DESIGN</span>
                                    <span className='px-6 pt-4 pb-3 m-2 bg-light font-color-dark rounded-full whitespace-nowrap'>WORDPRESS</span>
                                </h1>
                                <span className='px-6 pt-4 pb-3 m-2 bg-light font-color-dark rounded-full whitespace-nowrap'>SOCIAL MEDIA POST</span>
                                <span className='px-6 pt-4 pb-3 m-2 bg-light font-color-dark rounded-full whitespace-nowrap'>SHOPIFY</span>
                                <div style={{ height: imgHeight + 'px' }} className='mt-12'>
                                </div>
                            </div>

                            {/* <img className='w-3/12 absolute object-cover' src='laptop.jpeg'/> */}
                        </div>



                    </div>
                    {/* <div className="relative h-screen">
      <div className="h-1/2 bg-blue-500">
      </div>
      <div className="h-1/2 bg-green-500">
      </div>
      <img
        src="laptop.jpeg"
        alt="Your Image"
        className="absolute inset-0 w-1/2 h-full object-cover"
      />
    </div> */}
                    {/* <div id="container">
                    <div id="one">
                    </div>
                    <div id="two">
                    </div>
                    <div id="picture">
                    </div>
                    </div> */}

                </main>
            </div>

        </main>
    )
}
