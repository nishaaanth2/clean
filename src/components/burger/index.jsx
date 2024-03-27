"use client";

import React, { useEffect, useState } from "react";
import "./styles.css"; // Import your CSS file
import { cn } from "@/lib/utils";

const Burger = () => {
  const [isActive, setIsActive] = useState(false);
 // Add useEffect to handle scroll behavior
 useEffect(() => {
    if (isActive) {
      // Disable scroll
      document.body.style.overflow = "hidden";
    } else {
      // Enable scroll
      document.body.style.overflow = "auto";
    }

    // Cleanup function to re-enable scroll when the component is unmounted
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isActive]);

  return (
    <div className=" absolute z-50 h-screen">
      <div
        onClick={() => setIsActive(!isActive)}
        className=" absolute z-[51] top-0 right-4 cursor-pointer"
      >
        <div className={`burger pt-5 pb-5 ${isActive ? "burgerActive" : ""}`} />
      </div>
      <div
        className={cn(
          " flex flex-col md:flex-row h-screen bg-slate-700 opacity-100 pointer-events-none transition ease-in-out delay-500",
          !isActive && "opacity-0"
        )}
      >
        <div className="w-full h-[40vh] md:w-[53vw] md:h-full order-1 md:order-0 relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1809.2393 590.4667"
            style={{ width: "30%" }}
            className=" absolute left-0 right-0 top-0 bottom-0 m-auto w-screen "
          >
            <defs></defs>
            <g id="Layer_2" data-name="Layer 2">
              <g id="Layer_1-2" data-name="Layer 1">
                <path
                  class="clz-1"
                  d="M198.3311,0H312.4756V279.6729H248.1982V37.7324l1.1377.7578L200.417,279.6729h-87.22L63.14,37.9219l1.1377-.5694v242.32H0V0H114.1445L159.082,251.042h-6.2568Z"
                />
                <path
                  class="clz-1"
                  d="M367.6484,279.6729V0h66.7422V279.6729Z"
                />
                <path
                  class="clz-1"
                  d="M487.2881,279.6729V0h97.27q28.0591,0,51.2891,10.2383a117.1231,117.1231,0,0,1,40.1025,28.916A130.5117,130.5117,0,0,1,701.9258,83.333q9.1011,25.5043,9.1015,56.0293,0,30.3384-9.1015,56.0293A132.2161,132.2161,0,0,1,675.9492,239.95a118.0751,118.0751,0,0,1-40.1025,29.2939q-23.2281,10.43-51.2891,10.4288Zm67.8808-19.9092-30.5273-31.2852H575.457a56.4059,56.4059,0,0,0,33.6553-10.8076q15.0732-10.8076,24.1748-30.8115t9.1016-47.4971q0-27.6812-9.1016-47.4023-9.1011-19.7182-24.1748-30.2422A57.4456,57.4456,0,0,0,575.457,51.1943H524.6416l30.5273-31.2851Z"
                />
                <path
                  class="clz-1"
                  d="M773.7881,279.6729,733.97,0h69.5869l26.9248,267.3486-9.48-.5693L864.2314,0h83.4278L990.7,266.7793l-9.4805.5693L1008.1445,0h69.586l-39.8174,279.6729H934.3867L902.5322,45.127h6.8262L877.5039,279.6729Z"
                />
                <path
                  class="clz-1"
                  d="M1158.3135,51.1943l30.5273-31.2851V132.3467l-15.1689-18.5811h101.82V164.96h-101.82l15.1689-18.3926V259.7637l-30.5273-31.2852h138.2246v51.1944H1120.7705V0h175.7676V51.1943Z"
                />
                <path
                  class="clz-1"
                  d="M1387.55,51.1943l30.5273-31.2851V132.3467l-15.1689-18.5811h101.82V164.96h-101.82l15.1689-18.3926V259.7637L1387.55,228.4785h138.2246v51.1944H1350.0068V0h175.7676V51.1943Z"
                />
                <path
                  class="clz-1"
                  d="M1695.2842,145.999l2.0859-51.7636,111.8692,185.4375h-73.7579L1660.207,145.999l29.5782,3.9815-48.35,65.6045,5.4981-42.2823v106.37h-67.69V0h67.69V142.3965l-12.5137-5.8779L1732.6367,0h71.293Z"
                />
                <path
                  class="clz-2"
                  d="M520.49,426.06q7.1806-4.4854,12.128-4.4922c3.2851,0,4.9414,2.1055,4.9414,6.289v1.7969a1613.2911,1613.2911,0,0,1-145.99,109.6045q-76.8133,51.21-97.4765,51.209-20.6778,0-34.5889-7.6357-13.94-7.6435-13.9248-17.52,0-9.8745,5.3906-16.62,5.3892-6.7383,9.8819-6.7383,4.4853,0,14.8242,13.9258,10.3168,13.9395,20.2138,13.9248,20.6559,0,32.3428-44.0215,11.6646-44.0082,11.6787-60.6426,0-16.6127-2.2461-16.62a5.5884,5.5884,0,0,0-4.0429,1.7969l-26.0537,20.6631-3.5928-13.4756q56.5986-44.9136,65.583-60.1934,5.3906-14.36,15.2725-14.374c4.1835,0,6.289,1.502,6.289,4.4922q0,4.5058-6.289,19.3154-6.296,14.8228-16.62,66.9307-10.3388,52.1148-10.332,60.1934c0,5.39,1.4883,8.0849,4.4922,8.0849q62.874-38.6162,132.9639-96.1289Z"
                />
                <path
                  class="clz-2"
                  d="M590.5567,497.9315q50.3043,0,120.3858-56.6l15.2734,4.4922q-88.0577,73.6758-151.83,73.669a47.5129,47.5129,0,0,1-10.7812-.8985q-24.2563,29.647-53.0059,48.0645-28.7622,18.4042-50.31,18.4179-34.1529,0-34.1387-38.1826,0-38.1753,63.7861-101.9687a141.8855,141.8855,0,0,1-10.78-54.8028q0-28.7417,20.6631-46.7168a71.0012,71.0012,0,0,1,48.0644-17.9677q27.394,0,46.2676,17.9677,18.8672,17.9825,18.8662,51.209,0,51.21-33.24,102.418A47.4981,47.4981,0,0,0,590.5567,497.9315ZM462.9835,541.953q0,17.9824,23.3584,17.9688,23.3526,0,59.2949-47.6153-24.2563-12.5712-43.123-44.0224Q462.97,511.4076,462.9835,541.953Zm98.8242-53.0058q27.8364-46.7022,27.8506-79.5078,0-32.7847-16.1709-48.5137-16.1718-15.7091-31.4443-15.7227-31.4575,0-31.4444,32.3428,0,32.3423,14.375,64.2353Q539.3337,473.6825,561.8077,488.9472Z"
                />
                <path
                  class="clz-2"
                  d="M946.3126,426.06q7.1807-4.4854,12.1289-4.4922c3.2842,0,4.9414,2.1055,4.9414,6.289v1.7969a1130.708,1130.708,0,0,1-146.44,110.5029q-75.4659,47.6295-125.7764,47.6153-39.5435,0-39.5293-47.166,0-47.1651,57.0488-102.8672,57.0411-55.6934,123.53-55.7,19.75,1.81,24.7061,6.2881c3.2842,3.0049,4.9414,7.1875,4.9414,12.5781s-5.5449,15.1328-16.6211,29.1982q-16.6333,21.1187-30.0957,21.1123Q799.86,448.52,799.8731,440.4335q0-3.5785,8.086-11.6787,15.265-13.4766,15.2724-19.7647c0-4.1836-3.2988-6.289-9.8818-6.289q-31.4589.9053-79.06,51.6582-47.6294,50.767-47.6152,84,0,25.1631,32.791,25.1552,32.7847,0,70.5254-23.3584,66.4746-40.4282,133.8613-96.1289Z"
                />
                <path
                  class="clz-2"
                  d="M1118.795,425.161q7.1807-4.4853,11.23-4.4922,4.043,0,4.043,5.3907v2.6953q3.5785,0-48.0655,39.5293-51.6708,39.5435-110.5029,79.06-58.8531,39.5436-74.1182,39.53-26.0683,0-26.0537-21.5625,0-26.0463,44.92-98.375,44.9136-72.3077,65.5831-72.3213,15.2666,0,15.2734,11.68,0,11.6865-41.3262,63.7862-41.3349,52.1146-41.3271,74.5673,0,12.5919,9.4336,12.5782,9.4335,0,47.166-25.1553,67.38-44.9136,123.98-90.7393Zm-74.1181-121.2841q8.5283,0,13.4765,5.3906,4.9263,5.3892,4.94,15.2724,0,9.8966-13.4755,25.1553-13.4766,15.2871-23.3584,15.2725-9.8966,0-14.375-5.8389a21.4192,21.4192,0,0,1-4.4912-13.4766q0-7.6215,14.374-24.706Q1036.1275,303.8911,1044.6769,303.8769Z"
                />
                <path
                  class="clz-2"
                  d="M1209.5226,467.3856q-5.3907,0-5.3907-4.0429t6.2891-9.4326q29.6469-24.2579,29.6475-44.0215,0-12.5713-22.46-14.375-40.4283.9053-96.5781,58.3965-56.1578,57.5039-56.15,86.246,0,9.8965,11.23,9.8829,11.2221,0,30.0957-15.2725,17.0565-10.7812,63.7871-53.9043,10.7813-10.7812,20.663-10.7812,12.5713,0,12.5782,11.68a9.6964,9.6964,0,0,1-2.6953,7.1866q-2.6954,2.6952-9.8829,11.23-7.2011,8.5489-12.5771,15.7217-16.1718,23.373-16.1719,30.5459,0,17.9824,14.375,17.9678,18.8658,0,70.9737-34.5879,52.0928-34.5747,95.23-69.626l43.1231-34.14c4.1836-2.99,8.0859-4.4922,11.68-4.4922s5.3906,2.1055,5.3906,6.289v1.7969a1613.431,1613.431,0,0,1-145.9912,109.6045q-76.8135,51.21-101.07,51.209-28.7622,0-28.7481-30.5449a33.8952,33.8952,0,0,1,2.6944-13.4766c1.7968-4.1826,2.6953-7.1875,2.6953-8.9834s-.6036-2.99-1.7969-3.5937q-2.6939,0-34.5879,24.2568-31.9,24.2563-55.7012,24.2568-23.8139,0-23.8076-25.1552,0-25.1412,33.69-67.83,33.69-42.6592,90.2891-77.711,56.6-35.039,110.5039-35.038,12.57,0,21.1123,6.289,8.5269,6.296,8.5342,19.3155,0,13.0341-26.0537,39.08Q1228.3757,467.4,1209.5226,467.3856Z"
                />
                <path
                  class="clz-2"
                  d="M1603.0118,426.06c4.1836-2.99,8.086-4.4922,11.68-4.4922s5.3906,2.1055,5.3906,6.289v1.7969q-93.4482,77.2764-141.9482,107.8086-62.8946,47.628-106.0108,47.6152-37.7328,0-37.7334-44.9209,0-60.1787,77.712-178.332Q1489.8,243.6976,1586.8409,149.3515q97.0269-94.3315,146.44-94.3321,22.4457,0,22.46,19.7647,0,49.4195-118.14,163.06Q1519.4537,351.5067,1405.3634,431.45q-33.2477,63.8-33.24,97.0273,0,33.2477,23.3584,33.2412,23.3511,0,61.0909-26.9521a854.1252,854.1252,0,0,0,123.9795-89.8408ZM1710.82,83.7685q-37.733,0-133.8623,108.706-96.1421,108.7149-159.0166,217.4141,103.3023-73.6553,202.1406-180.13,98.817-106.46,98.8242-137.9053Q1718.9063,83.769,1710.82,83.7685Z"
                />
              </g>
            </g>
          </svg>
            <div className="h-screen w-10 rotate-180  absolute border-l border-r border-mwwhite right-5 opacity-90">
          <div className="marquee absolute  h-screen right-0 overflow-hidden text-mwwhite  ">
                        <div className="track ">
                            <div className="contentx">WEBSITE DESIGN&nbsp;&nbsp;✶&nbsp;&nbsp;INVITATION CARD&nbsp;&nbsp;✶&nbsp;&nbsp;WEB INVITE&nbsp;&nbsp;✶&nbsp;&nbsp;WEBSITE DESIGN&nbsp;&nbsp;✶&nbsp;&nbsp;INVITATION CARD&nbsp;&nbsp;✶&nbsp;&nbsp;WEB INVITE&nbsp;&nbsp;✶&nbsp;&nbsp;WEBSITE DESIGN&nbsp;&nbsp;✶&nbsp;&nbsp;INVITATION CARD&nbsp;&nbsp;✶&nbsp;&nbsp;WEB INVITE&nbsp;&nbsp;✶&nbsp;&nbsp;WEBSITE DESIGN&nbsp;&nbsp;✶&nbsp;&nbsp;INVITATION CARD&nbsp;&nbsp;✶&nbsp;&nbsp;WEB INVITE&nbsp;&nbsp;✶&nbsp;&nbsp;WEBSITE DESIGN&nbsp;&nbsp;✶&nbsp;&nbsp;INVITATION CARD&nbsp;&nbsp;✶&nbsp;&nbsp;WEB INVITE&nbsp;&nbsp;✶&nbsp;&nbsp;WEBSITE DESIGN&nbsp;&nbsp;✶&nbsp;&nbsp;INVITATION CARD&nbsp;&nbsp;✶&nbsp;&nbsp;WEB INVITE&nbsp;&nbsp;✶&nbsp;&nbsp;WEBSITE DESIGN&nbsp;&nbsp;✶&nbsp;&nbsp;INVITATION CARD&nbsp;&nbsp;✶&nbsp;&nbsp;WEB INVITE&nbsp;&nbsp;✶&nbsp;&nbsp;WEBSITE DESIGN&nbsp;&nbsp;✶&nbsp;&nbsp;INVITATION CARD&nbsp;&nbsp;✶&nbsp;&nbsp;WEB INVITE&nbsp;&nbsp;✶&nbsp;&nbsp; 
                            </div>
                        </div>
                    </div>
            </div>
          <img
            src="screenav/menu.jpg"
            alt="Image"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text on right (40% width on md and larger, 60% width on sm) */}
        <div className="w-full  h-[60vh] md:w-[47vw] md:h-full order-0 md:order-1 md:bg-mwwhite md:text-mwblack bg-mwblack text-mwwhite">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 151.8856 136.4364"
            className="w-20 h-20 absolute bottom-[44px] right-10"
          >
            <g id="Layer_2" data-name="Layer 2">
              <g id="Layer_1-2" data-name="Layer 1">
                <path
                  class="cls-1"
                  d="M30.6092,55.4245a2.1468,2.1468,0,0,1,.9219-.9258c.3418-.1523.6035-.0273.7813.3711l.0761.17a175.4471,175.4471,0,0,1-8.5742,15.7412L11.6678,89.5544,9.6883,99.3727Q4.8969,121.738,5.47,123.0241q-.0308,3.605-1.3145,4.1807-1.6245.7266-2.583-1.4141-.955-2.14-.4648-6.6709a36.7423,36.7423,0,0,1,1.5508-7.6738L6.9657,99.2536q.3-2.0859,1.5166-7.8643T10.076,83.696l1.2334-7.1231.0186-.4179a.1672.1672,0,0,0-.2481-.0957Q7.9041,82.51,4.5663,84.0007T.367,83.5671q-.86-1.9278.293-6.2393a48.0137,48.0137,0,0,1,3.4522-8.9355A45.6576,45.6576,0,0,1,9.8446,59.62a19.7029,19.7029,0,0,1,6.8125-5.6621q3.3809-1.51,4.4521.8867.7647,1.7139-1.375,5.541-2.1372,3.8321-2.8652,4.1563c-.4863.2168-.7793.2119-.8809-.0176a1.2876,1.2876,0,0,1,.2637-1.2471q1.9921-3.3559,1.1709-5.1943-.8217-1.8413-2.3633-1.1523-3.7675,1.683-7.6357,11.06-3.87,9.378-2.6846,12.0313.3443.77,1.585.2158,1.2392-.5551,3.3379-3.9053a22.8653,22.8653,0,0,0,2.7968-5.92L13.47,66.47a1.4348,1.4348,0,0,1,.8447-1.0957,1.988,1.988,0,0,1,1.3887-.1074,1.2819,1.2819,0,0,1,.8965.626L12.6678,84.9l9.1114-13.62a96.36,96.36,0,0,0,7.6269-13.2637Z"
                />
                <path
                  class="cls-1"
                  d="M52.6053,45.5983a2.1445,2.1445,0,0,1,.9219-.9267c.3418-.1524.6035-.0283.7813.37l.0761.1709a158.3978,158.3978,0,0,1-9.874,17.6562q-4.2612,6.3223-9.0537,8.461-3.8526,1.7211-5.5352-2.0449-2.4843-5.5635.545-13.95,3.0292-8.3848,6.8808-10.1075,2.1387-.9551,3.211,1.4414,1.6728,4.8986-7.8643,18.7081l.3818.8554q1.2627,2.8257,4.2149,1.5059a14.145,14.145,0,0,0,5.497-4.8174,92.4389,92.4389,0,0,0,8.4805-14.57ZM36.3075,48.8747q-1.8838.8423-3.4209,5.3271a17.9014,17.9014,0,0,0-.7676,8.9688,40.82,40.82,0,0,0,4.58-8.3613q1.582-4.0445,1.0664-5.1993T36.3075,48.8747Z"
                />
                <path
                  class="cls-1"
                  d="M88.9569,2.8669,76.451,7.735Q68.9188,11.1013,61.74,15.027l1.1934,1.5205q.4218.9435-2.3711,9.6329-2.7921,8.6924-5.084,18.4941-2.297,9.8042-.7266,13.3115.6123,1.3712,1.5957.93.983-.438,3.4229-4.4033,4.5923-7.185,8.0341-13.96L69,38.1706a2.0568,2.0568,0,0,1,.8359-.8867q.4278-.192.6572.3222l.1143.2569q.3428-.1524-2.8955,5.8115-3.24,5.9662-7.1631,12.2354-3.9228,6.2724-5.3789,6.92-2.483,1.11-3.4756-1.1162-1.4532-3.2505-.3779-10.6114a106.19,106.19,0,0,1,3.123-14.3838q2.0465-7.0224,3.9141-13.3,1.8677-6.2739,1.7519-7.456a120.62,120.62,0,0,0-13.5468,8.5166L45,25.5866q-.6475.394-.1114,1.59.2286.5141-.9687,1.0488a11.0352,11.0352,0,0,1-3.2012.7627q-2.0039.2285-2.4629-.8-.4584-1.0254,1.1-2.1348,11.672-7.8809,16.77-10.7246,5.0976-2.84,6.7939-3.7539,1.6948-.9111,5.3818-2.6611,3.6856-1.7476,4.9688-2.3223,3.7749-1.8925,8.9531-4.2061Q87.3993.0739,88.7049.0036a1.7585,1.7585,0,0,1,1.8389,1.1289Q90.9261,1.9895,88.9569,2.8669Z"
                />
                <path
                  class="cls-1"
                  d="M102.2069,23.3347a2.5139,2.5139,0,0,1,.8789-.9063c.2568-.1152.4609-.001.6152.3418l.1143.2568q.3413-.1523-2.8955,5.8116-3.24,5.9663-7.1631,12.2353-3.9243,6.2726-5.3789,6.92-2.483,1.11-3.3994-.9443-1.1089-2.4815.0918-11.2842,1.2012-8.8008,3.17-9.6816,1.4531-.6489,1.9521.4629.4967,1.1133-1.2216,7.8359-1.72,6.7236-.7637,8.8623.5361,1.2,1.4336.7969.8994-.4014,3.4228-4.4043,4.5074-7.1455,7.9493-13.9209Zm-12.2227-8.4a1.8153,1.8153,0,0,1,1.5127-.0606,2.2843,2.2843,0,0,1,1.1211,1.2451,4.4968,4.4968,0,0,1-.2138,2.97Q91.7729,21.12,90.83,21.5378a1.769,1.769,0,0,1-1.6181.0566,2.23,2.23,0,0,1-1.001-1.0927,5.2614,5.2614,0,0,1,.3174-2.9659Q89.1713,15.299,89.9842,14.9343Z"
                />
                <path
                  class="cls-1"
                  d="M136.9374,8.2292Q125.6067,31.362,121.328,33.2722q-2.4829,1.11-3.4-.9444a10.2848,10.2848,0,0,1-.3379-5.7011,55.3417,55.3417,0,0,1,1.4424-6.65q.8643-3.0045.6738-3.4327c-.1269-.2851-.2764-.3906-.4482-.3144q-5.5869,8.8652-6.5508,10.7314-.9624,1.8692-3.1192,6.1162-2.1591,4.251-2.8789,5.3926a4.3167,4.3167,0,0,1-1.92,1.68q-1.1982.5348-1.6562-.4922-.5362-1.1967,1.4277-9.6728,1.793-8.3981,1.4473-9.169c-.0508-.1133-.1758-.1269-.376-.0371s-1.89,2.9326-5.0693,8.5274l-.9161-1.1309q3.895-7.5922,5.4239-9.918a7.7257,7.7257,0,0,1,2.8554-2.9179,1.2639,1.2639,0,0,1,1.9.6914q.3822.8554-1.72,9.1357t-1.8906,8.75c.1406.3145.3086.4268.51.3369q.2988-.1332,6.6787-11.249,6.3779-11.1138,8.4336-12.0322a1.9556,1.9556,0,0,1,1.3662-.0459,1.3866,1.3866,0,0,1,.957.6513q.46,1.0254-1.4961,8.83T121.0526,28.98q.3458.77,1.4141.2929t3.5468-4.3564a143.955,143.955,0,0,0,7.9492-13.9219l1.1944-2.3818a2.1486,2.1486,0,0,1,.9219-.9248.4969.4969,0,0,1,.7431.2842Z"
                />
                <path
                  class="cls-1"
                  d="M77.119,76.1042,64.6112,80.9733q-7.5322,3.3648-14.709,7.29l1.1924,1.52q.42.9433-2.37,9.6328-2.7921,8.6923-5.086,18.4941-2.294,9.8043-.7256,13.3125.6123,1.3712,1.5967.93.9815-.4395,3.4219-4.4043,4.5923-7.1835,8.0352-13.959l1.1943-2.3818a2.0665,2.0665,0,0,1,.8359-.8877c.2842-.1269.5049-.02.6573.3223l.1152.2568q.34-.1524-2.8965,5.8125-3.24,5.9663-7.1621,12.2344-3.9243,6.2739-5.3789,6.9219-2.4844,1.1088-3.4766-1.1172-1.453-3.252-.3769-10.6123A106.3225,106.3225,0,0,1,42.6,109.9558q2.0465-7.0211,3.9151-13.2989,1.8661-6.2754,1.75-7.457A120.53,120.53,0,0,0,34.72,97.7165l-1.56,1.1074q-.646.3926-.11,1.59.23.5127-.9688,1.0478a11.0564,11.0564,0,0,1-3.2012.7637q-2.0038.2284-2.4619-.8-.46-1.0269,1.1-2.1338,11.6719-7.8839,16.77-10.7256,5.0948-2.84,6.7929-3.7549,1.6963-.91,5.3828-2.66,3.6857-1.7476,4.9678-2.3233,3.7749-1.8911,8.9541-4.2051,5.1768-2.3128,6.48-2.3828a1.76,1.76,0,0,1,1.84,1.13Q79.0873,75.2253,77.119,76.1042Z"
                />
                <path
                  class="cls-1"
                  d="M66.6776,115.4733q4.793-2.1415,9.06-10.5175l1.6455-.2217q-5.2515,10.7666-11.3282,13.4814a4.9042,4.9042,0,0,1-1.0654.3731,23.6659,23.6659,0,0,1-3.0049,6.8339,10.1449,10.1449,0,0,1-4.0078,3.8965q-3.2548,1.4532-4.8779-2.1845-1.6245-3.6359,1.7373-12.4287a14.8,14.8,0,0,1-3.3594-4.7618,6.1548,6.1548,0,0,1-.02-5.331,7.4156,7.4156,0,0,1,3.8135-3.7578,6.75,6.75,0,0,1,5.1738-.2569,7.0348,7.0348,0,0,1,3.9766,4.0762,19.5016,19.5016,0,0,1,1.1914,11.1719A4.996,4.996,0,0,0,66.6776,115.4733Zm-3.1221.3672q.6636-5.6337-.73-8.76-1.3961-3.1231-3.6055-3.9336a4.8463,4.8463,0,0,0-3.6651-.1592q-2.997,1.3389-1.6191,4.4189a16.16,16.16,0,0,0,4.1035,5.5078A11.4152,11.4152,0,0,0,63.5555,115.8405Zm-7.1592,9.2559q.7677,1.7139,2.9913.7168,2.2251-.9931,3.622-7.0586a11.7758,11.7758,0,0,1-5.9824-2.3594Q55.0965,122.1887,56.3963,125.0964Z"
                />
                <path
                  class="cls-1"
                  d="M84.36,115.0681a7.7045,7.7045,0,0,1-.251-3.8936,19.7334,19.7334,0,0,0,.2569-2.9883c-.0459-.2519-.1534-.3428-.3252-.2656s-.3438.3428-.5157.7959q-.2622.6812-3.6152,5.9268t-5.1523,6.0488q-1.2.5361-1.8867-1.0059-.6885-1.5395,1.2373-10.1,1.9233-8.562,3.8935-9.44a1.2565,1.2565,0,0,1,.9844.0215q.5582.2138.6533.4267a72.5485,72.5485,0,0,1-2.0557,7.2344q-2.1532,7.02-1.5019,8.4727a.33.33,0,0,0,.4951.1894q1.6245-.7251,5.0684-7.5A93.6059,93.6059,0,0,0,86.284,98.8063q1.1968-3.4071,2.4815-3.9824,1.2846-.5727,1.7812.5381a2.4876,2.4876,0,0,1,.0977,1.6q-.2066.9141-.8359,3.3-.627,2.3862-1.1377,4.461-1.4253,5.7714-.9483,6.8408t1.377.6679q.8994-.4013,3.3369-4.3652,4.5922-7.185,8.0351-13.96l1.1944-2.3818a2.0517,2.0517,0,0,1,.8359-.8867c.2842-.1279.5039-.0195.6563.3223l.1152.2568q.3412-.1524-2.8965,5.8115-3.2388,5.9677-7.1621,12.2354-3.9228,6.2724-5.3789,6.9209Q85.3528,117.2946,84.36,115.0681Z"
                />
                <path
                  class="cls-1"
                  d="M122.244,82.4323a2.55,2.55,0,0,1,.9648-.9433c.3125-.14.56-.01.7383.3886l.0762.1719a118.0077,118.0077,0,0,1-9.2481,16.76q-5.1621,7.749-9.955,9.89-3.7675,1.6831-5.7735-2.8115Q97.04,101.3963,100.1034,93.66q3.0644-7.7329,9.3965-10.5645a5.15,5.15,0,0,1,2.623-.4521,1.6945,1.6945,0,0,1,1.0059.9882q.3427.7706-.3418,3.4883-.6857,2.7217-1.9678,3.292-1.5718.394-1.9141-.376a2.426,2.426,0,0,1,.2725-1.457q.8819-1.9336.6133-2.5332c-.1778-.3975-.58-.459-1.2071-.1777q-2.9589,1.4238-5.3339,8.2851-2.376,6.8643-.961,10.0293,1.0724,2.3994,4.1944,1.002a14.138,14.138,0,0,0,5.7246-5.2285A119.0447,119.0447,0,0,0,120.869,85.1Z"
                />
                <path
                  class="cls-1"
                  d="M150.1063,69.8825a2.15,2.15,0,0,1,.9209-.9258.4983.4983,0,0,1,.7441.2842l.1143.2568q-4.2393,8.6719-8.7549,16.0264-4.2861,7.8721-6.81,8.999-2.5269,1.13-3.4434-.9267-.9932-2.2236-.1113-8.9844.8789-6.7573.708-7.1445c-.1143-.2578-.2861-.334-.5147-.2325q-1.1131.4981-4.6054,7.961-3.4923,7.4677-5.8985,13.57-.9756,2.1812-1.6172,2.4687c-.4277.1905-.7832-.0283-1.0625-.6552a4.7912,4.7912,0,0,1,.0411-2.8936l9.5283-58.8769a3.1548,3.1548,0,0,1,1.874-2.584q1.5836-.706,2.043.3193a2.5307,2.5307,0,0,1,.1015,1.4932q-.1639.8979-2.125,10.7558-1.96,9.8615-2.1611,11.5928-.2035,1.7329-2.3994,14.625t-2.334,13.62a1.9288,1.9288,0,0,0,.0176,1.07c.1015.2286.251.2989.4512.209s.3154-.1748.3476-.2578a84.5452,84.5452,0,0,1,4.6406-9.7236q3.1245-5.7568,4.9219-6.5615a1.8833,1.8833,0,0,1,1.4082-.0645,2.1944,2.1944,0,0,1,1.2022,1.3106q.4789,1.0707-.7373,7.3115t-.585,7.6533q.6313,1.4121,1.5293,1.0107t3.4228-4.4043q4.5074-7.1469,7.9493-13.9209Z"
                />
              </g>
            </g>
          </svg>
          <div className="flex items-center justify-center h-full">
            <div className="text-center text-lg font-medium tracking-wider space-y-11 font-syne">
              <p className="">HOME</p>
              <p className="">WEBSITE</p>
              <p className="">INVITATION</p>
              <p className="">BRAND SHOP</p>
              <p className="">ABOUT US</p>
              <p className="">CONTACT</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Burger;