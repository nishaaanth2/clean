'use client'
// import styles from './style.module.css';
import { motion } from 'framer-motion';
import { useState } from 'react';
import './style.css';
import Projects from '../project';
import styles from './page.module.css'



export default function Points({ imgHeight }) {
    const projects = [
        {
            title1: "Aesthetic",
            title2: "Visuals",
            src: "jomor_design.jpeg"
        },
        {
            title1: "Fun-ctional",
            title2: "Design",
            src: "la_grange_cr.jpeg"
        },
        {
            title1: "Design ...",
            title2: "Strategy",
            src: "deux_huit_huit.jpeg"
        },
        {
            title1: "Hour",
            title2: "Friendly",
            src: "nothing_design_studio_cr.png"
        },
        {
            title1: "Pocket",
            title2: "Adjacent",
            src: "mambo_mambo_cr.jpeg"
        }
    ]

    return (
        <main>

            <div className=' bg-light '>
                <main className="  arial-font">
                    <div className=' grid grid-cols-2'>
                        <div className='col-span-1 px-20' >
                            <div style={{ height: imgHeight * 2 + 'px' }}>
                                <div className='h-full flex flex-col justify-end '>
                                    <h1 className='font-epi font-color-dark text-left text-7xl  single-line whitespace-nowrap'>
                                        <span className='font-cursive mr-8 text-8xl'>
                                            W
                                        </span >
                                        <span className='-ml-5'>
                                            ORK WITH US
                                        </span>
                                    </h1>
                                    <p>
                                        Right from forming a business idea, all the way to making it a mind blowing and appealing brand, we are here to help you all the way. At Midweek Social, you not only get a designer but also a visual planner and ideator. We focus on creatign a brand that satisfies your aesthetic desires and inspires you to work on it everyday.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-span-1 '>
                        </div>
                    </div>


                </main>
            </div>
            <div className={styles.mainx}>
                <div className={styles.gallery}>
                    {
                        projects.map((project, index) => (
                            <Projects key={index} project={project} />
                        )
                        )
                    }
                </div>
            </div>

            <div className=" flex items-center   bg-light">

                <div className="marquee border-t border-b border-slate-800 ">
                    <div className="track ">
                        <div className="content_new ">WEBSITE DESIGN&nbsp;&nbsp;*&nbsp;&nbsp;BRANDING&nbsp;&nbsp;*&nbsp;&nbsp;SOCIAL MEDIA&nbsp;&nbsp;*&nbsp;&nbsp;WEBSITE DESIGN&nbsp;&nbsp;*&nbsp;&nbsp;BRANDING&nbsp;&nbsp;*&nbsp;&nbsp;SOCIAL MEDIA&nbsp;&nbsp;*&nbsp;&nbsp;WEBSITE DESIGN&nbsp;&nbsp;*&nbsp;&nbsp;BRANDING&nbsp;&nbsp;*&nbsp;&nbsp;SOCIAL MEDIA&nbsp;&nbsp;*&nbsp;&nbsp;WEBSITE DESIGN&nbsp;&nbsp;*&nbsp;&nbsp;BRANDING&nbsp;&nbsp;*&nbsp;&nbsp;SOCIAL MEDIA&nbsp;&nbsp;*&nbsp;&nbsp;WEBSITE DESIGN&nbsp;&nbsp;*&nbsp;&nbsp;BRANDING&nbsp;&nbsp;*&nbsp;&nbsp;SOCIAL MEDIA&nbsp;&nbsp;*&nbsp;&nbsp;WEBSITE DESIGN&nbsp;&nbsp;*&nbsp;&nbsp;BRANDING&nbsp;&nbsp;*&nbsp;&nbsp;SOCIAL MEDIA&nbsp;&nbsp;*&nbsp;&nbsp;WEBSITE DESIGN&nbsp;&nbsp;*&nbsp;&nbsp;BRANDING&nbsp;&nbsp;*&nbsp;&nbsp;SOCIAL MEDIA&nbsp;&nbsp;*&nbsp;&nbsp;WEBSITE DESIGN&nbsp;&nbsp;*&nbsp;&nbsp;BRANDING&nbsp;&nbsp;*&nbsp;&nbsp;SOCIAL MEDIA&nbsp;&nbsp;*&nbsp;&nbsp; </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
