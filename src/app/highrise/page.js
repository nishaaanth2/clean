"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import localFont from "next/font/local";
import "./styles.css";
import { useRouter } from "next/navigation";
import Burger from "@/components/burger";
import Scrolling from "@/components/scrolling";

// Define local fonts
const myFont1 = localFont({ src: "../../../public/Karla-Regular.ttf" });

export default function High() {
  const router = useRouter();

  return (
    <main className="">
      <Burger />
      <hr className="h-12" />
      <main className="bg-[#133b54] h-[calc(100vh-3rem)]  flex flex-col items-center justify-center">
        {/* style={{ width: "37%" }} className='self-center my-20 ' */}

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 724.3369 397.1441"
          style={{ fill: "#cfc2ae" }}
          className="my-24  w-[23rem] 2xl:w-[25rem]"
        >
          <g id="Layer_2" data-name="Layer 2">
            <g id="Layer_1-2" data-name="Layer 1">
              <path d="M89.5864,233.2832V312.67H79.4971V275.3047H10.2007V312.67H0V233.2832H10.2007v32.8189H79.4971V233.2832Z" />
              <path d="M121.1855,233.2832V312.67h-10.09V233.2832Z" />
              <path d="M234.7207,241.71l-4.8784,8.7588a61.6821,61.6821,0,0,0-17.9063-7.65,85.7958,85.7958,0,0,0-22.7846-2.9937q-16.7432,0-27.4971,8.9253-10.7556,8.9261-10.7544,24.2261,0,15.4124,10.4219,24.3369,10.4208,8.9261,27.2754,8.9253a81.2,81.2,0,0,0,21.3984-2.6055q9.5348-2.6037,13.7485-6.0429V280.294H196.3579v-8.5371h37.5864v31.4883q-5.3217,4.6567-17.2407,8.3154t-28.772,3.6592q-20.6227,0-34.0385-11.31t-13.4156-30.9336a39.1267,39.1267,0,0,1,6.708-22.73A41.481,41.481,0,0,1,164.87,235.6119a59.1334,59.1334,0,0,1,24.2818-4.8785,104.4041,104.4041,0,0,1,27.3305,3.5479Q229.62,237.8314,234.7207,241.71Z" />
              <path d="M342.2681,233.2832V312.67H332.1787V275.3047H262.8823V312.67H252.6816V233.2832h10.2007v32.8189h69.2964V233.2832Z" />
              <path d="M457.4653,282.5118,486.9575,312.67H472.7656l-28.2729-30.0469H406.02V312.67H395.8188V233.2832H457.687q14.4118,0,21.8975,6.542,7.4838,6.5428,7.4839,18.1831,0,11.2-8.2046,17.5181Q470.6578,281.8465,457.4653,282.5118Zm.1109-40.0259H406.02v30.7124h48.0083q22.3953,0,22.397-15.4116,0-7.4268-4.7676-11.3648Q466.8884,242.4882,457.5762,242.4859Z" />
              <path d="M514.6748,233.2832V312.67h-10.09V233.2832Z" />
              <path d="M620.1157,254.793l-10.2007.4434a19.1665,19.1665,0,0,0-9.646-12.2515q-7.3176-3.9345-21.0659-3.936-33.2622,0-33.2627,14.8574a12.3055,12.3055,0,0,0,2.0513,7.3174,11.3471,11.3471,0,0,0,5.8765,4.1577,38.2779,38.2779,0,0,0,7.373,1.7187,70.0211,70.0211,0,0,0,8.5376.4434q2.2162,0,7.9829-.0552,5.7635-.0549,11.7525-.0556a76.9884,76.9884,0,0,1,13.1386.998,35.9472,35.9472,0,0,1,10.2559,3.3262,16.7257,16.7257,0,0,1,6.9853,6.4863,19.5106,19.5106,0,0,1,2.439,10.0337q0,26.8338-44.1279,26.832-19.848,0-28.8272-3.9917-7.6509-3.435-11.42-8.6479-3.7705-5.2105-4.5454-13.6377H544.5q1.7718,17.7407,34.4819,17.74,32.7057,0,32.7076-17.1855a11.835,11.835,0,0,0-1.7183-6.0425,11.7047,11.7047,0,0,0-4.6016-4.4907q-4.4355-2.2164-22.6181-2.2173-2.7731,0-7.4287.0557t-6.8741.0551q-33.2622,0-33.2622-22.6181,0-23.3928,43.9063-23.3946,13.4136,0,22.0083,2.772,8.5912,2.7723,12.9722,7.9273A29.1944,29.1944,0,0,1,620.1157,254.793Z" />
              <path d="M722.7847,233.2832v8.7593h-73.399v25.39h65.5269v8.7592H649.3857v26.9424h74.9512V312.67H639.1851V233.2832Z" />
              <path d="M291.8608,360.0752h29.9761q5.4873,0,8.5684,2.64a8.81,8.81,0,0,1,3.08,7.041,9.2776,9.2776,0,0,1-1.3979,4.8926,7.2551,7.2551,0,0,1-3.9346,3.1841,9.3188,9.3188,0,0,1,5.2808,3.1323,8.2042,8.2042,0,0,1,2.019,5.41,9.7749,9.7749,0,0,1-3.4687,7.7915q-3.4695,2.9781-10.1475,2.9771H291.8608Zm29.355,4.2452H296.6235V376.021h26.6631a5.16,5.16,0,0,0,3.9346-1.6567,5.4323,5.4323,0,0,0,1.5532-3.8311,5.5468,5.5468,0,0,0-2.0449-4.5561A8.5112,8.5112,0,0,0,321.2158,364.32Zm2.0708,15.7387H296.6235v12.6841h24.5923q4.2964,0,6.5488-1.812a6.087,6.087,0,0,0,2.2525-5.0215,5.2954,5.2954,0,0,0-1.9678-4.1421A7.0165,7.0165,0,0,0,323.2866,380.0591Z" />
              <path d="M363.6689,360.0752l20.709,37.0689H378.89l-5.2807-9.3706H347.7231l-5.1772,9.3706H337.42l20.2427-37.0689Zm-3.0546,4.1416-11.0274,19.6216h22.21Z" />
              <path d="M418.65,383.0621l13.7715,14.082h-6.627l-13.2016-14.03H394.6279v14.03h-4.7627V360.0752h28.8887q6.7295,0,10.2251,3.0542a10.6847,10.6847,0,0,1,3.4946,8.4908,9.7467,9.7467,0,0,1-3.831,8.18A17.422,17.422,0,0,1,418.65,383.0621Zm.0517-18.69H394.6279v14.3408h22.4175q10.4576,0,10.458-7.1963a6.4911,6.4911,0,0,0-2.2261-5.3066Q423.0509,364.3731,418.7021,364.3721Z" />
              <rect
                x="322.7513"
                y="14.6382"
                width="3.4443"
                height="165.6121"
                rx="1.0814"
              />
              <rect
                x="362.6474"
                y="52.2381"
                width="3.4443"
                height="122.2717"
                rx="1.0814"
              />
              <rect
                x="375.2764"
                y="52.8122"
                width="3.4443"
                height="129.7342"
                rx="1.0814"
              />
              <rect
                x="410.5802"
                y="51.9511"
                width="3.4443"
                height="124.5678"
                rx="1.0814"
              />
              <rect
                x="366.5222"
                y="8.4672"
                width="3.4443"
                height="90.9862"
                rx="1.0814"
                transform="translate(314.2841 422.2046) rotate(-90)"
              />
              <rect
                x="362.6474"
                y="5.1664"
                width="3.4443"
                height="35.8778"
                rx="1.0814"
              />
              <rect
                x="325.0474"
                y="2.2962"
                width="56.2564"
                height="14.3511"
                rx="4.5058"
              />
              <polygon points="325.334 126.003 363.228 122.194 375.352 122.194 413.065 124.099 377.916 127.67 363.228 127.67 325.334 126.003" />
              <rect x="315.2887" width="24.971" height="16.6473" rx="5.2267" />
            </g>
          </g>
        </svg>
      </main>

      <div className="py-14 my-[10vh]   w-full text-center  px-72 ">
        <h3 className="text-4xl  text-center font-medum font-epi ">High Rise Bar </h3>
        <p className="text-center pt-5 pb-12 text-sm">PURCHASE - BRAND NAME, LOGO, WEBSITE, TEMPLATES</p>
        <p className="uppercase ">
          {/* Shop - Logo, Branding, Template and Website */}
        </p>

        <p >
          High Rise Bar can be a Mocktail or Cocktail Luxury Bar created with
          having the concepts of high ceiling and high stools. This brand is
          designed for anyone who is interested in starting a drink or juice bar
          business in any part of the world. The pre-designed logos and branding
          makes it easier in getting the business started. The name, logo and
          all pre-designed materials are semi-customiseable and can be tailored
          to desired output.
        </p>
      </div>
      <main
        className={`flex flex-col md:flex-row md:px-24 ${myFont1.className}`}
      >
        <div className="w-full md:w-1/2 md:aspect-w-1 md:aspect-h-1 overflow-hidden">
          <Image
            className="w-full object-cover aspect-w-1 aspect-h-1"
            src={`/hrr.jpg`}
            width={500}
            height={500}
            alt={`Image high rise`}
          />
        </div>
        <div className="w-full md:w-1/2 md:aspect-w-1 md:aspect-h-1">
          <Image
            className="w-full object-cover aspect-w-1 aspect-h-1"
            src={`/hr.jpg`}
            width={500}
            height={500}
            alt={`Image high rise`}
          />
        </div>
      </main>
      <hr className="bg-transparent h-32 w-screen border border-transparent" />
      <Scrolling />

      <div className="h-[550px] flex flex-col justify-center items-center text-center bg-mwblack text-mwwhite">
        <div className="font-cursive text-4xl tracking-wider pb-4">Own this brand</div>
        <div className="font-epi text-4xl pb-4">
          Pre-made brands help you start your
          <br />
          business confidently in a day
        </div>
        <div className="text-xs tracking-widest">
          THIS SEMI-CUSTOM SOLUTION IS YOUR FAST TRACK <br />
          TO BECOMING A BRAND OWNER
        </div>
      </div>

      <div className="h-screen flex flex-col justify-center items-center text-center bg-mwwhite"></div>

      <div></div>
    </main>
  );
}
