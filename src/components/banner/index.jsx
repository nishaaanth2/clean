'use client'
// import styles from './style.module.css';
import { motion } from 'framer-motion';
import { useState } from 'react';
import './style.css';



export default function Banner() {


    return (
        <main>

                <div className='five-sixths-height bg-light '>
                    <main className="h-full  arial-font">
                        <div className='h-full grid grid-cols-9'>
                            <div className='col-span-2 m-16 ' >
                                <div className='h-full flex flex-col justify-between p-4'>

                                    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 419.5372 286.4419"
                                        className=''
                                        style={{
                                            width: 160,
                                            fill: "#1f1f1f"
                                        }}><defs>

                                        </defs>
                                        <path  d="M10.1266,205.9712A15.5654,15.5654,0,0,0,21.61,200.8686,17.5843,17.5843,0,0,0,26.571,188.11V29.6225q0-7.9335-4.961-12.8994a15.7811,15.7811,0,0,0-11.4834-4.9619v-1.418H45.5671l56.9873,168.6944L159.5417,10.3432h35.4394v1.418A15.9381,15.9381,0,0,0,183.64,16.7231a17.195,17.195,0,0,0-5.1035,12.8994V188.11a17.3107,17.3107,0,0,0,5.1035,12.7588q5.1034,5.1021,11.3408,5.1026v1.4179H143.0973v-1.4179a15.5637,15.5637,0,0,0,11.4825-5.1026,17.5854,17.5854,0,0,0,4.9619-12.7588V19.4165L96.0329,207.3891h-2.835L29.69,19.4165V188.11a17.5684,17.5684,0,0,0,4.9609,12.7588,15.5512,15.5512,0,0,0,11.4825,5.1026v1.4179H10.1266Z" /><path  d="M265.0075,205.9712a15.5656,15.5656,0,0,0,11.4834-5.1026,17.5842,17.5842,0,0,0,4.9609-12.7588V29.6225q0-7.9335-4.9609-12.8994a15.7812,15.7812,0,0,0-11.4834-4.9619v-1.418h16.4443q4.2525,0,20.8389-1.5586,16.5864-1.5556,23.3906-1.5595a77.98,77.98,0,0,1,44.37,13.6084q20.2677,13.61,32.0381,36.999a111.69,111.69,0,0,1,11.7656,50.8926q0,28.0678-11.0566,51.1748a90.2876,90.2876,0,0,1-31.6123,36.8574q-20.56,13.7549-46.3555,13.751-3.6885,0-18.7129-1.56-15.0307-1.5615-24.666-1.56H265.0075ZM394.86,108.7251q0-27.4981-7.9394-49.6162-7.94-22.1148-23.9571-35.4395a56.553,56.553,0,0,0-37.2822-13.3262q-8.792,0-25.2334,1.418V205.4048q21.2637,1.9863,24.3828,1.9843,22.6788,0,38.8418-13.4668,16.16-13.4633,23.6739-35.2988Q394.8551,136.796,394.86,108.7251Z" />
                                        <path  d="M241.2065,14.7691l14.694.7a19.6681,19.6681,0,0,1-5.41,14.9145c-3.2366,3.4636-7.15,6.3175-10.8954,9.2748-3.1823,2.5127-6.7706,4.5417-9.79,7.2235-5.21,4.6283-5.0211,10.4926.282,15.0469,2.2049,1.8936,4.6707,3.4868,7.0438,5.18,2.7118,1.9353,5.533,3.7257,8.1671,5.76,14.3457,11.0776,14.54,29.1356.3953,40.5817-2.9068,2.3524-6.1455,4.2906-9.1835,6.4858a74.4932,74.4932,0,0,0-6.9368,5.3126c-4.7929,4.4079-4.7628,9.683.1189,14.0307,2.4784,2.2073,5.3108,4.0159,7.9765,6.0137,3.1646,2.3716,6.5517,4.5038,9.4428,7.173,12.74,11.7617,11.9807,28.8088-1.7291,39.4092-4.1141,3.181-8.5578,5.9322-12.7918,8.9626-3.373,2.4141-6.313,5.1926-6.63,9.5509H211.1776c.0185-6.5111,2.0391-11.8637,6.2816-15.9366,3.95-3.7925,8.5814-6.8763,12.9183-10.2649a89.65,89.65,0,0,0,7.8328-6.1749c3.8952-3.8184,4.0143-8.8539.2964-12.8575a53.7121,53.7121,0,0,0-7.1761-5.9782c-3.24-2.4469-6.7048-4.6031-9.8805-7.1267-13.9395-11.0772-13.9317-28.7091.0716-39.7835,3.9952-3.16,8.368-5.8374,12.4953-8.8358a29.7068,29.7068,0,0,0,4.6988-4.093c3.2883-3.6691,3.3286-8.6377-.1348-12.1355a68.2934,68.2934,0,0,0-7.7684-6.2431c-3.497-2.6214-7.3185-4.86-10.5723-7.7468-12.7876-11.3438-12.2079-28.6459,1.2632-39.1238,4.1041-3.1921,8.5518-5.9387,12.7834-8.9713C237.8054,22.5958,241.0418,19.8161,241.2065,14.7691Z" />
                                        <path  d="M57.359,245.1264l-9.99,29.63H44.068l-8.6777-25.27-8.72,25.27H23.4118l-9.9893-29.63h3.2168l8.55,25.4815,8.8467-25.4815h2.9209l8.72,25.6084,8.6768-25.6084Z" />
                                        <path  d="M92.49,272.0473v2.709H71.5378v-29.63H91.8551v2.709H74.6706v10.54H89.9928v2.667H74.6706v11.0048Z" />
                                        <path  d="M129.2721,272.0473v2.709H108.32v-29.63h20.3174v2.709H111.4528v10.54h15.3223v2.667H111.4528v11.0048Z" />
                                        <path  d="M154.2878,260.83l-6.0528,6.1377v7.7881h-3.1328v-29.63h3.1328v17.9053l17.3965-17.9053h3.5977l-12.8252,13.418,13.7138,16.2119h-3.7246Z" />
                                        <path  d="M200.3815,271.1587l1.2275-2.4131a14.55,14.55,0,0,0,9.7784,3.5976c5.5449,0,7.957-2.3271,7.957-5.248,0-8.127-18.2432-3.1328-18.2432-14.0957,0-4.3594,3.3868-8.127,10.9209-8.127a16.7193,16.7193,0,0,1,9.1846,2.625l-1.0576,2.4971a15.26,15.26,0,0,0-8.127-2.4551c-5.4179,0-7.831,2.4131-7.831,5.376,0,8.127,18.2431,3.2168,18.2431,14.01,0,4.36-3.4707,8.0849-11.0468,8.0849C206.9421,275.01,202.5827,273.4438,200.3815,271.1587Z" />
                                        <path  d="M235.0905,259.9419c0-8.6348,6.6025-15.0694,15.5762-15.0694,8.89,0,15.5351,6.3916,15.5351,15.0694S259.5563,275.01,250.6667,275.01C241.693,275.01,235.0905,268.5766,235.0905,259.9419Zm27.9785,0a12.0027,12.0027,0,0,0-12.4023-12.2754c-7.1534,0-12.4864,5.206-12.4864,12.2754s5.333,12.2744,12.4864,12.2744A12.0026,12.0026,0,0,0,263.069,259.9419Z" />
                                        <path  d="M279.068,259.9419c0-8.6778,6.6035-15.0694,15.5342-15.0694a14.3477,14.3477,0,0,1,10.836,4.3174l-1.9893,1.99a11.7438,11.7438,0,0,0-8.7617-3.5137c-7.1533,0-12.5293,5.249-12.5293,12.2754s5.376,12.2744,12.5293,12.2744a11.6212,11.6212,0,0,0,8.7617-3.5557l1.9893,1.99A14.4084,14.4084,0,0,1,294.56,275.01C285.6715,275.01,279.068,268.6186,279.068,259.9419Z" />
                                        <path  d="M320.5905,245.1264h3.1328v29.63h-3.1328Z" />
                                        <path  d="M360.4206,266.8413H343.9128l-3.5557,7.915h-3.2588l13.5449-29.63h3.09l13.5449,29.63h-3.3018Zm-1.1426-2.54-7.1113-15.915-7.1114,15.915Z" />
                                        <path  d="M380.653,245.1264h3.1328v26.9209h16.5918v2.709H380.653Z" />
                                    </svg>

                                    <div className=' text-left text-sm font-epi'>
                                        <h1>
                                            Feeling lost in the depth<br />
                                            of the digital ocean?
                                        </h1>
                                        <h1>
                                            We&apos;re here, making Brands Social
                                        </h1>
                                    </div>
                                </div>
                            </div>
                            <div className='col-span-7 overflow-hidden my-16 ml-16 mr-20'>
                                <img className='h-full w-full object object-cover object-top ' src="homebanner3.jpeg" alt="Description of the image" />
                            </div>
                        </div>

                    </main>
                </div>
                
            <div className=" h-32 flex items-center   bg-dark">

                    <div className="marquee border-t border-b ">
                        <div className="track ">
                            <div className="content ">WEBSITE DESIGN&nbsp;&nbsp;*&nbsp;&nbsp;BRANDING&nbsp;&nbsp;*&nbsp;&nbsp;SOCIAL MEDIA&nbsp;&nbsp;*&nbsp;&nbsp;WEBSITE DESIGN&nbsp;&nbsp;*&nbsp;&nbsp;BRANDING&nbsp;&nbsp;*&nbsp;&nbsp;SOCIAL MEDIA&nbsp;&nbsp;*&nbsp;&nbsp;WEBSITE DESIGN&nbsp;&nbsp;*&nbsp;&nbsp;BRANDING&nbsp;&nbsp;*&nbsp;&nbsp;SOCIAL MEDIA&nbsp;&nbsp;*&nbsp;&nbsp;WEBSITE DESIGN&nbsp;&nbsp;*&nbsp;&nbsp;BRANDING&nbsp;&nbsp;*&nbsp;&nbsp;SOCIAL MEDIA&nbsp;&nbsp;*&nbsp;&nbsp;WEBSITE DESIGN&nbsp;&nbsp;*&nbsp;&nbsp;BRANDING&nbsp;&nbsp;*&nbsp;&nbsp;SOCIAL MEDIA&nbsp;&nbsp;*&nbsp;&nbsp;WEBSITE DESIGN&nbsp;&nbsp;*&nbsp;&nbsp;BRANDING&nbsp;&nbsp;*&nbsp;&nbsp;SOCIAL MEDIA&nbsp;&nbsp;*&nbsp;&nbsp;WEBSITE DESIGN&nbsp;&nbsp;*&nbsp;&nbsp;BRANDING&nbsp;&nbsp;*&nbsp;&nbsp;SOCIAL MEDIA&nbsp;&nbsp;*&nbsp;&nbsp;WEBSITE DESIGN&nbsp;&nbsp;*&nbsp;&nbsp;BRANDING&nbsp;&nbsp;*&nbsp;&nbsp;SOCIAL MEDIA&nbsp;&nbsp;*&nbsp;&nbsp; 
                            </div>
                        </div>
                    </div>
                </div>
        </main>
                )
}
