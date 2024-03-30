"use client";
import Image from "next/image";
import localFont from "next/font/local";
import "./styles.css";
import Link from "next/link";
const myFont = localFont({ src: "../../../public/termi.otf" });
const myFont1 = localFont({ src: "../../../public/Karla-Regular.ttf" });

export default function Home() {
  return (
    <>
     <head>
    {/* Primary Meta Tags  */}
<title>KJ Portfolio</title>
<meta name="title" content="KJ Portfolio" />
<meta name="description" content="A Desginer's Portfolio" />

{/* <!-- Open Graph / Facebook --> */}
<meta property="og:type" content="website" />
<meta property="og:url" content="https://clean.nishaanth.com/kj" />
<meta property="og:title" content="KJ Portfolio" />
<meta property="og:description" content="A Desginer's Portfolio" />
<meta property="og:image" content="https://clean.nishaanth.com/homebanner2.jpeg" />

{/* <!-- Twitter --> */}
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:url" content="https://clean.nishaanth.com/kj" />
<meta property="twitter:title" content="KJ Portfolio" />
<meta property="twitter:description" content="A Desginer's Portfolio" />
<meta property="twitter:image" content="https://clean.nishaanth.com/homebanner2.jpeg" />
</head>
    <div>
      <main
        className={`flex md:h-[calc(100vh-50px)] bg-[#eae8db]  flex-col items-center justify-between md:px-14  py-6  ${myFont1.className}`}
      >
        <div className="grid w-full h-full  md:grid-cols-9  my-6 2xl:my-0 ">
          <div className="col-span-3  md:px-5  cursor-default 2xl:my-20 md:mb-0 mb-10">
            <div className="flex-col flex justify-between h-full">
              <div className="px-8 md:px-0">
                
              <h2 className={`mb-3 text-lg font-semibold tracking-wider hidden md:block`}>
                  KARYL JACOB{" "}
                </h2>
                <h1
                  className={` text-3xl md:text-4-5xl ${myFont.className} uppercase `}
                >
                  
                  Visual
                  <br />
                  designer /
                  <br />
                  Art director
                </h1>
                <h2 className={`mb-5 mt-1 text-lg font-semibold tracking-wide md:hidden`}>
                  KARYL JACOB{" "}
                </h2>
                <p className={`mt-4  text-sm text-[#252525] text-justify`}>
                  Hey there! I&apos;m someone who loves turning ideas into
                  visuals that just make sense. From digital layouts to tangible
                  sets, I&apos;m all about making things visually appealing without
                  the fuss. Creating random visuals has also become something of
                  a leisure and not just a profession.
                </p>
                <p className={`mt-4 text-sm tracking-tight`}>
                  For enquiry, write to me at{" "}
                  <span className="font-black">hello@midweeksocial.com</span>
                </p>
              </div>
              <div className="flex px-8 md:px-0 md:mt-0 mt-10">
                <svg
                  onClick={() =>
                    window.open(
                      "https://www.instagram.com/karylljacob/",
                      "_blank"
                    )
                  }
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 260.4347 68"
                  className=" self-center mr-4 cursor-pointer"
                  width={130}
                >
                  <defs></defs>
                  <g id="Layer_2" data-name="Layer 2">
                    <g id="Layer_1-2" data-name="Layer 1">
                      <ellipse
                        class="strk-1"
                        cx="130.2174"
                        cy="34"
                        rx="129.2174"
                        ry="33"
                      />
                      <path d="M57.5666,47.5586a18.0868,18.0868,0,0,1-5.8731-.9,13.4075,13.4075,0,0,1-4.5224-2.543,11.2163,11.2163,0,0,1-2.9024-3.8769A11.7521,11.7521,0,0,1,43.256,35.333a12.0957,12.0957,0,0,1,.9824-4.89,11.8805,11.8805,0,0,1,2.753-3.9229,12.6456,12.6456,0,0,1,4.1777-2.6025,14.4648,14.4648,0,0,1,5.2568-.93,13.5969,13.5969,0,0,1,4.7852.7949,10.8121,10.8121,0,0,1,3.6523,2.22,9.7832,9.7832,0,0,1,2.333,3.3076,10.1166,10.1166,0,0,1,.81,4.043,9.4031,9.4031,0,0,1-.54,3.2774,7.9246,7.9246,0,0,1-1.4619,2.5127,6.6131,6.6131,0,0,1-2.0782,1.6123,5.3828,5.3828,0,0,1-2.3847.5625,3.4249,3.4249,0,0,1-2.0254-.5625,2.1937,2.1937,0,0,1-.93-1.5674l-.09-.45a5.5128,5.5128,0,0,1-1.41,1.8144,3.5294,3.5294,0,0,1-2.37.7657,4.62,4.62,0,0,1-2.377-.6455,4.8388,4.8388,0,0,1-1.7773-1.83,5.5992,5.5992,0,0,1-.6758-2.8194,6.7385,6.7385,0,0,1,.54-2.6923,7.1507,7.1507,0,0,1,1.4776-2.2051,6.9484,6.9484,0,0,1,2.13-1.4854,6.1025,6.1025,0,0,1,2.5127-.5322,3.79,3.79,0,0,1,2.85,1.08,4.5261,4.5261,0,0,1,1.05,3.2695v4.5606a2.0031,2.0031,0,0,0,.2774,1.1845,1.0191,1.0191,0,0,0,.8779.375,2.92,2.92,0,0,0,1.7842-.7353,5.6816,5.6816,0,0,0,1.5752-2.13,7.9625,7.9625,0,0,0,.6455-3.3594A8.3054,8.3054,0,0,0,64.5109,29.07a7.6954,7.6954,0,0,0-3.127-2.9394,10.2711,10.2711,0,0,0-4.8525-1.0723,11.6158,11.6158,0,0,0-4.4629.8242,10.13,10.13,0,0,0-5.64,5.6475,10.8379,10.8379,0,0,0-.7725,4.1025,9.2806,9.2806,0,0,0,5.5352,8.7608,14.6764,14.6764,0,0,0,6.375,1.2744Zm-2.52-8.1309a2.7985,2.7985,0,0,0,1.9726-.7265A7.0954,7.0954,0,0,0,58.466,36.668v-3.21a3.3569,3.3569,0,0,0-.4346-1.875,1.6264,1.6264,0,0,0-1.4551-.6445,3.942,3.942,0,0,0-2.04.622,5.1051,5.1051,0,0,0-2.43,4.4776,3.5075,3.5075,0,0,0,.832,2.52A2.7911,2.7911,0,0,0,55.0461,39.4277Z" />
                      <path d="M72.4308,42.1582v-20.46h2.34v20.46Zm1.98-8.22,7.32-6.12H85L74.41,36.4277Zm8.04,8.22-6.8095-9.06,2.37-.4209L85.33,42.1582Z" />
                      <path d="M93.3244,42.5186a6.0654,6.0654,0,0,1-2.9248-.63,4.2739,4.2739,0,0,1-1.7246-1.6358,4.2251,4.2251,0,0,1-.57-2.1142,3.6882,3.6882,0,0,1,.7276-2.37A4.18,4.18,0,0,1,90.82,34.4258a8.7913,8.7913,0,0,1,2.835-.4278,11.5326,11.5326,0,0,1,2.2578.2256,15.2435,15.2435,0,0,1,2.2129.6143v1.4707a10.7376,10.7376,0,0,0-2.0332-.57,11.4886,11.4886,0,0,0-2.0772-.21,4.6493,4.6493,0,0,0-2.43.5928,2.1594,2.1594,0,0,0-.99,2.0176,2.4405,2.4405,0,0,0,.7578,1.8,3.3384,3.3384,0,0,0,2.4219.75,4.0976,4.0976,0,0,0,2.1074-.5479,4.4256,4.4256,0,0,0,1.4853-1.372,2.9656,2.9656,0,0,0,.5479-1.65h.5693a5.8256,5.8256,0,0,1-.622,2.67,5.0311,5.0311,0,0,1-1.7774,1.98A4.959,4.959,0,0,1,93.3244,42.5186Zm4.8906-.36-.3-3.15V32.8584a3.8959,3.8959,0,0,0-.8252-2.7822,3.3053,3.3053,0,0,0-2.4756-.8477,5.0084,5.0084,0,0,0-1.6875.27,2.5865,2.5865,0,0,0-1.1992.8331,2.2654,2.2654,0,0,0-.4424,1.4472h-2.61a3.8933,3.8933,0,0,1,.7646-2.5127,4.2921,4.2921,0,0,1,2.1074-1.38,10.1056,10.1056,0,0,1,3.0674-.4277,7.2693,7.2693,0,0,1,2.9258.5557,4.2437,4.2437,0,0,1,1.9951,1.7617,6.0859,6.0859,0,0,1,.72,3.1426v9.24Z" />
                      <path d="M105.85,42.1582v-14.37h2.34v14.37Zm1.62-6.48a16.5765,16.5765,0,0,1,.5244-4.5371,5.5777,5.5777,0,0,1,1.5381-2.7,3.6,3.6,0,0,1,2.4668-.8925,5.2784,5.2784,0,0,1,.8779.0673,5.5494,5.5494,0,0,1,.8027.2032l-.15,2.31a8.2726,8.2726,0,0,0-.9151-.2324,4.6821,4.6821,0,0,0-.8848-.0976,2.8918,2.8918,0,0,0-2.0546.7275,4.2021,4.2021,0,0,0-1.1329,2.0478,12.1054,12.1054,0,0,0-.3525,3.1045Z" />
                      <path d="M114.3244,27.8184h2.6093l4.6807,12.3h-.54l3.63-12.3h2.4l-5.4,17.22a8.3168,8.3168,0,0,1-1.8,3.33,3.82,3.82,0,0,1-2.88,1.17,5.8878,5.8878,0,0,1-1.793-.27,9.3047,9.3047,0,0,1-1.7471-.78v-2.16a5.6043,5.6043,0,0,0,1.5371.9,4.5163,4.5163,0,0,0,1.5528.27,2.117,2.117,0,0,0,1.5078-.57,4.5549,4.5549,0,0,0,1.0117-1.4619,14.0553,14.0553,0,0,0,.69-1.8672l.42-1.44Z" />
                      <path d="M130.6593,42.1582v-20.46h2.34v20.46Z" />
                      <path d="M139.06,42.1582v-20.46h2.34v20.46Z" />
                      <path d="M145.87,49.5381a7.327,7.327,0,0,1-2.0108-.2774,10.1978,10.1978,0,0,1-2.01-.833l.12-2.039a11.9171,11.9171,0,0,0,1.7324.8017,5.0841,5.0841,0,0,0,1.7471.3076,2.4205,2.4205,0,0,0,1.95-.8095,3.8319,3.8319,0,0,0,.69-2.52v-16.41h2.31v16.44a5.6137,5.6137,0,0,1-1.252,4.0948A4.4471,4.4471,0,0,1,145.87,49.5381Zm3.3593-25.11a1.5047,1.5047,0,0,1-1.125-.4121,1.4872,1.4872,0,0,1-.4052-1.0879,1.3934,1.3934,0,0,1,.4052-1.05,1.5578,1.5578,0,0,1,1.125-.39,1.612,1.612,0,0,1,1.1407.39,1.3676,1.3676,0,0,1,.42,1.05,1.4582,1.4582,0,0,1-.42,1.0879A1.5559,1.5559,0,0,1,149.23,24.4277Z" />
                      <path d="M160.8537,42.5186a6.0654,6.0654,0,0,1-2.9248-.63,4.2739,4.2739,0,0,1-1.7246-1.6358,4.2251,4.2251,0,0,1-.57-2.1142,3.6882,3.6882,0,0,1,.7276-2.37,4.18,4.18,0,0,1,1.9873-1.3428,8.7911,8.7911,0,0,1,2.8349-.4278,11.5336,11.5336,0,0,1,2.2579.2256,15.247,15.247,0,0,1,2.2129.6143v1.4707a10.7366,10.7366,0,0,0-2.0333-.57,11.4867,11.4867,0,0,0-2.0771-.21,4.6493,4.6493,0,0,0-2.43.5928,2.1594,2.1594,0,0,0-.99,2.0176,2.4405,2.4405,0,0,0,.7578,1.8,3.3384,3.3384,0,0,0,2.4219.75,4.0976,4.0976,0,0,0,2.1074-.5479,4.4256,4.4256,0,0,0,1.4853-1.372,2.9656,2.9656,0,0,0,.5479-1.65h.5693a5.8256,5.8256,0,0,1-.622,2.67,5.0311,5.0311,0,0,1-1.7774,1.98A4.959,4.959,0,0,1,160.8537,42.5186Zm4.8906-.36-.3-3.15V32.8584a3.8959,3.8959,0,0,0-.8252-2.7822,3.3053,3.3053,0,0,0-2.4756-.8477,5.0084,5.0084,0,0,0-1.6875.27,2.5865,2.5865,0,0,0-1.1992.8331,2.2654,2.2654,0,0,0-.4424,1.4472h-2.61a3.8933,3.8933,0,0,1,.7646-2.5127,4.2921,4.2921,0,0,1,2.1074-1.38,10.1056,10.1056,0,0,1,3.0674-.4277,7.2693,7.2693,0,0,1,2.9258.5557,4.2437,4.2437,0,0,1,1.9951,1.7617,6.0859,6.0859,0,0,1,.72,3.1426v9.24Z" />
                      <path d="M178.4191,42.5186a5.9743,5.9743,0,0,1-3.2178-.9307,6.8241,6.8241,0,0,1-2.4072-2.625,8.3058,8.3058,0,0,1-.915-4.0049,8.3516,8.3516,0,0,1,.915-4.05,6.5277,6.5277,0,0,1,2.4072-2.5654,6.2006,6.2006,0,0,1,3.2178-.8848,6.1118,6.1118,0,0,1,2.1826.3682,5.3617,5.3617,0,0,1,1.6875,1.0117,5.993,5.993,0,0,1,1.1924,1.4629,6.6548,6.6548,0,0,1,.6973,1.7178l-2.4.21a3.9741,3.9741,0,0,0-1.252-1.9726,3.2371,3.2371,0,0,0-2.1377-.7276,3.6174,3.6174,0,0,0-2.0029.6074,4.3559,4.3559,0,0,0-1.5225,1.8155,6.8762,6.8762,0,0,0-.5849,3.0068,7.1791,7.1791,0,0,0,.5332,2.8877,4.4886,4.4886,0,0,0,1.4619,1.8975,3.988,3.988,0,0,0,4.6426-.1426,2.98,2.98,0,0,0,.8623-2.2725h2.4a5.0742,5.0742,0,0,1-.7051,2.67,4.9266,4.9266,0,0,1-2.0029,1.8448A6.5213,6.5213,0,0,1,178.4191,42.5186Z" />
                      <path d="M194.048,42.5186a6.8514,6.8514,0,0,1-3.4424-.8555,5.9881,5.9881,0,0,1-2.3769-2.5352,8.9248,8.9248,0,0,1-.87-4.14,8.9175,8.9175,0,0,1,.87-4.1475,5.99,5.99,0,0,1,2.3769-2.5273,7.324,7.324,0,0,1,6.87,0,5.952,5.952,0,0,1,2.37,2.5273,8.9815,8.9815,0,0,1,.8623,4.1475,8.9889,8.9889,0,0,1-.8623,4.14,5.95,5.95,0,0,1-2.37,2.5352A6.8212,6.8212,0,0,1,194.048,42.5186Zm-.06-2.04a3.9009,3.9009,0,0,0,3.8477-2.5654,7.7121,7.7121,0,0,0,.5019-2.9248,6.7965,6.7965,0,0,0-1.0644-4.043,3.6528,3.6528,0,0,0-3.165-1.4775,4.0854,4.0854,0,0,0-2.378.6679,4.1307,4.1307,0,0,0-1.47,1.9053,7.815,7.815,0,0,0-.5029,2.9473,6.6965,6.6965,0,0,0,1.0732,4.0127A3.6539,3.6539,0,0,0,193.9884,40.4785Z" />
                      <path d="M205.2531,42.1582v-20.46h2.34v17.1l-.69,3.36Zm6.5693.36a4.6993,4.6993,0,0,1-2.6025-.75,5.14,5.14,0,0,1-1.8447-2.1983,8.2372,8.2372,0,0,1-.6827-3.5322h.9a4.6193,4.6193,0,0,0,.5772,2.3779,3.9588,3.9588,0,0,0,1.4931,1.4922,3.8858,3.8858,0,0,0,1.92.51,3.6479,3.6479,0,0,0,2.1142-.66,4.591,4.591,0,0,0,1.5381-1.89,6.869,6.869,0,0,0,.5772-2.94,6.6989,6.6989,0,0,0-.57-2.8867,4.4824,4.4824,0,0,0-1.5371-1.86,3.7661,3.7661,0,0,0-2.1523-.6524,3.9186,3.9186,0,0,0-1.9277.502,3.8357,3.8357,0,0,0-1.47,1.4775,4.7372,4.7372,0,0,0-.5625,2.4h-.9a8.2329,8.2329,0,0,1,.668-3.48,5.0848,5.0848,0,0,1,1.8525-2.2041,4.97,4.97,0,0,1,2.76-.7656,5.659,5.659,0,0,1,3.1123.9072,6.4676,6.4676,0,0,1,2.2725,2.5879,8.6589,8.6589,0,0,1,.8554,3.9746,8.7067,8.7067,0,0,1-.87,4.0127,6.6634,6.6634,0,0,1-2.3252,2.6407A5.788,5.788,0,0,1,211.8224,42.5186Z" />
                    </g>
                  </g>
                </svg>

                <Link
                  className="self-center text-sm  border-mwblack border-b "
                  href="/pricelist"
                >
                  VIEW PRICE LIST
                </Link>
              </div>
              <div className=" md:hidden items-center mt-8   bg-dark flex ">
                <div className={`marqueew text-mwwhite ${myFont1.className}`}>
                  <div className="trackw ">
                    <div className="contentw ">
                      WEBSITE
                      DESIGN&nbsp;&nbsp;*&nbsp;&nbsp;BRANDING&nbsp;&nbsp;*&nbsp;&nbsp;SOCIAL
                      MEDIA&nbsp;&nbsp;*&nbsp;&nbsp;WEBSITE
                      DESIGN&nbsp;&nbsp;*&nbsp;&nbsp;BRANDING&nbsp;&nbsp;*&nbsp;&nbsp;SOCIAL
                      MEDIA&nbsp;&nbsp;*&nbsp;&nbsp;WEBSITE
                      DESIGN&nbsp;&nbsp;*&nbsp;&nbsp;BRANDING&nbsp;&nbsp;*&nbsp;&nbsp;SOCIAL
                      MEDIA&nbsp;&nbsp;*&nbsp;&nbsp;WEBSITE
                      DESIGN&nbsp;&nbsp;*&nbsp;&nbsp;BRANDING&nbsp;&nbsp;*&nbsp;&nbsp;SOCIAL
                      MEDIA&nbsp;&nbsp;*&nbsp;&nbsp;WEBSITE
                      DESIGN&nbsp;&nbsp;*&nbsp;&nbsp;BRANDING&nbsp;&nbsp;*&nbsp;&nbsp;SOCIAL
                      MEDIA&nbsp;&nbsp;*&nbsp;&nbsp;WEBSITE
                      DESIGN&nbsp;&nbsp;*&nbsp;&nbsp;BRANDING&nbsp;&nbsp;*&nbsp;&nbsp;SOCIAL
                      MEDIA&nbsp;&nbsp;*&nbsp;&nbsp;WEBSITE
                      DESIGN&nbsp;&nbsp;*&nbsp;&nbsp;BRANDING&nbsp;&nbsp;*&nbsp;&nbsp;SOCIAL
                      MEDIA&nbsp;&nbsp;*&nbsp;&nbsp;WEBSITE
                      DESIGN&nbsp;&nbsp;*&nbsp;&nbsp;BRANDING&nbsp;&nbsp;*&nbsp;&nbsp;SOCIAL
                      MEDIA&nbsp;&nbsp;*&nbsp;&nbsp;
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Link
            className="col-span-3 mx-8 md:mx-0 pl-[4vw] pr-[3vw] flex flex-col 2xl:my-20 "
            href="https://midweeksocial.com"
            target="_blank"
          >
            {/* <h2 className={`mb-3 text-base`}>WORKS</h2> */}
            <div className="flex-grow">
              <Image
                className="w-full h-full rounded-t-full object-center object-cover md:aspect-auto aspect-[5/6]"
                src="/pc.jpg"
                width={200}
                height={200}
                alt="Midweek Social Image"
              />
            </div>
            <p className={`m-0 text-xl md:text-2xl mt-6 mb-4 ${myFont.className}`}>
              Midweek Social
            </p>
            <p className={`m-0 text-sm opacity-70 text-justify`}>
              Right from forming a business idea, all the way to making it a
              mind-blowing and appealing brand, we are here to help you all the
              way.
            </p>
            <p className={`m-0 text-lg mt-2`}>www.midweeksocial.com</p>
          </Link>

          <Link
            className="col-span-3 mx-8 md:mx-0 pl-[3vw] pr-[3vw] flex flex-col pt-10 md:pt-20 2xl:my-28"
            href="https://karycature.com"
            target="_blank"
          >
            {/* <h2 className={`mb-3 text-base`}>WORKS</h2> */}
            <div className="flex-grow">
              <Image
                className="w-full h-full  rounded-lg object-center object-cover md:aspect-auto aspect-[5/6]"
                src="/box.jpg"
                width={200}
                height={200}
                alt="Midweek Social Image"
              />
            </div>
            <p className={`m-0 text-xl md:text-2xl mt-6 mb-4 ${myFont.className}`}>
              Karycature
            </p>
            <p className={`m-0 text-sm opacity-70 text-justify`}>
              Originally focused on designing and printing custom designs, we
              have evolved into an online store offering small batch goodness.
            </p>
            <p className={`m-0 text-lg mt-2`}>www.karycature.com</p>
          </Link>
        </div>
      </main>
      <div className=" md:flex items-center   bg-dark hidden ">
        <div className={`marqueew text-mwwhite ${myFont1.className}`}>
          <div className="trackw ">
            <div className="contentw ">
              WEBSITE
              DESIGN&nbsp;&nbsp;*&nbsp;&nbsp;BRANDING&nbsp;&nbsp;*&nbsp;&nbsp;SOCIAL
              MEDIA&nbsp;&nbsp;*&nbsp;&nbsp;WEBSITE
              DESIGN&nbsp;&nbsp;*&nbsp;&nbsp;BRANDING&nbsp;&nbsp;*&nbsp;&nbsp;SOCIAL
              MEDIA&nbsp;&nbsp;*&nbsp;&nbsp;WEBSITE
              DESIGN&nbsp;&nbsp;*&nbsp;&nbsp;BRANDING&nbsp;&nbsp;*&nbsp;&nbsp;SOCIAL
              MEDIA&nbsp;&nbsp;*&nbsp;&nbsp;WEBSITE
              DESIGN&nbsp;&nbsp;*&nbsp;&nbsp;BRANDING&nbsp;&nbsp;*&nbsp;&nbsp;SOCIAL
              MEDIA&nbsp;&nbsp;*&nbsp;&nbsp;WEBSITE
              DESIGN&nbsp;&nbsp;*&nbsp;&nbsp;BRANDING&nbsp;&nbsp;*&nbsp;&nbsp;SOCIAL
              MEDIA&nbsp;&nbsp;*&nbsp;&nbsp;WEBSITE
              DESIGN&nbsp;&nbsp;*&nbsp;&nbsp;BRANDING&nbsp;&nbsp;*&nbsp;&nbsp;SOCIAL
              MEDIA&nbsp;&nbsp;*&nbsp;&nbsp;WEBSITE
              DESIGN&nbsp;&nbsp;*&nbsp;&nbsp;BRANDING&nbsp;&nbsp;*&nbsp;&nbsp;SOCIAL
              MEDIA&nbsp;&nbsp;*&nbsp;&nbsp;WEBSITE
              DESIGN&nbsp;&nbsp;*&nbsp;&nbsp;BRANDING&nbsp;&nbsp;*&nbsp;&nbsp;SOCIAL
              MEDIA&nbsp;&nbsp;*&nbsp;&nbsp;
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
