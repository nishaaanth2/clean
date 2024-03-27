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
      <main className="bg-[#133b54]  flex flex-col items-center justify-center">
        {/* style={{ width: "37%" }} className='self-center my-20 ' */}

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 724.3369 397.1441"
          style={{ fill: "#cfc2ae" }}
          className="my-24 w-72"
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

      <div className="py-14 space-y-9  w-full text-justify  px-40 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 887.3082 207.3517"
          className="h-24 mx-auto"
        >
          <g id="Layer_2" data-name="Layer 2">
            <g id="Layer_1-2" data-name="Layer 1">
              <path
                class="adf-1"
                d="M187.23,90.8331a8.2646,8.2646,0,0,1-5.1875-1.6866,5.5013,5.5013,0,0,1-2.1958-4.6142,5.44,5.44,0,0,1,2.1958-4.5518A8.2765,8.2765,0,0,1,187.23,78.294a8.147,8.147,0,0,1,5.1557,1.6865,5.4716,5.4716,0,0,1,2.1641,4.5518,5.5337,5.5337,0,0,1-2.1641,4.6142A8.1353,8.1353,0,0,1,187.23,90.8331Zm-5.41,83.1269V106.3633h10.6934V173.96Z"
              />
              <path
                class="adf-1"
                d="M255.8438,169.8223a35.8539,35.8539,0,0,1,9.6431,2.0059,14.4481,14.4481,0,0,1,6.5239,4.582,12.5353,12.5353,0,0,1,2.355,7.9248,14.0309,14.0309,0,0,1-3.6914,9.5791q-3.6921,4.169-11.2026,6.5244T240.568,202.793q-16.1039,0-24.3145-4.6777t-8.2109-12.7617a15.0785,15.0785,0,0,1,.605-4.4873,13.42,13.42,0,0,1,1.3681-3.1514l10.3115,1.5283a8.0624,8.0624,0,0,0-.9868,2.1318,10.593,10.593,0,0,0-.477,3.3418q0,5.0919,5.792,7.16t16.4218,2.0693a64.67,64.67,0,0,0,13.0479-1.082,17.8686,17.8686,0,0,0,7.5747-3.1191,6.038,6.038,0,0,0,2.4824-4.7735q0-4.1382-3.4692-5.124a43.7384,43.7384,0,0,0-8.561-1.3682l-25.7144-1.91a17.7649,17.7649,0,0,1-10.47-3.9776,10.7209,10.7209,0,0,1-4.042-8.4336,11.8943,11.8943,0,0,1,1.4956-5.7919,18.2267,18.2267,0,0,1,3.501-4.6153,8.6054,8.6054,0,0,1,3.5962-2.26l8.5293,3.8828a8.9554,8.9554,0,0,0-3.9146,2.1963,5.786,5.786,0,0,0-2.3232,4.5507,4.7293,4.7293,0,0,0,1.8457,3.8506q1.8456,1.4971,7.32,1.9414Zm9.3565-63.459h10.1841L271.1837,132.97a36.5374,36.5374,0,0,1-4.7739,13.4619,26.57,26.57,0,0,1-9.8975,9.5469q-6.27,3.5331-15.499,3.5332a35.5464,35.5464,0,0,1-16.4214-3.501,25.2613,25.2613,0,0,1-10.439-9.5791,27.7052,27.7052,0,0,1,.1592-27.6885,26.8566,26.8566,0,0,1,10.5342-9.8017,35.4787,35.4787,0,0,1,29.1518-.8907,26.0837,26.0837,0,0,1,9.2608,6.7783,15.0408,15.0408,0,0,1,3.7876,8.211l-4.0737.2549ZM240.95,149.837A25.18,25.18,0,0,0,251.5475,147.8a15.2546,15.2546,0,0,0,6.81-5.9189,17.6516,17.6516,0,0,0,2.3867-9.4209,17.4388,17.4388,0,0,0-2.3867-9.2607,15.7835,15.7835,0,0,0-6.81-6.0469,24.06,24.06,0,0,0-10.5342-2.1318,23.2451,23.2451,0,0,0-10.3428,2.1953,16.383,16.383,0,0,0-9.5156,15.4355,17.23,17.23,0,0,0,2.3867,9.2608,15.3046,15.3046,0,0,0,6.8105,5.8876A25.1735,25.1735,0,0,0,240.95,149.837Z"
              />
              <path
                class="adf-1"
                d="M290.214,173.96V74.4756h10.8208V173.96Zm48.438,0V135.3243q0-9.7383-4.1695-14.7032t-13.207-4.9648a22.7548,22.7548,0,0,0-10.5982,2.3555,17.8252,17.8252,0,0,0-7.0966,6.4287,17.0467,17.0467,0,0,0-2.5459,9.2295l-6.8745-2.1006a24.0978,24.0978,0,0,1,3.7871-13.208,27.3433,27.3433,0,0,1,10.375-9.4834,31.0768,31.0768,0,0,1,14.9262-3.5323q12.156,0,19.19,7.3194,7.0319,7.32,7.0332,20.24V173.96Z"
              />
              <path
                class="adf-1"
                d="M399.3731,173.96V80.0762H431.962q12.9207,0,19.668,6.11,6.7455,6.1113,6.7466,18.6494a26.5669,26.5669,0,0,1-2.8326,12.7617,23.5033,23.5033,0,0,1-6.81,8.1152,16.0286,16.0286,0,0,1-7.3516,3.2461,18.5847,18.5847,0,0,1,6.7788,1.878,13.9285,13.9285,0,0,1,5.5694,4.997q2.2272,3.3736,2.228,9.0381v21.3867a23.9362,23.9362,0,0,0,.4453,4.8692,7.2112,7.2112,0,0,0,1.0186,2.832H446.4742a12.0436,12.0436,0,0,1-.8911-2.8643,22.8727,22.8727,0,0,1-.4458-4.8369v-20.05q0-6.2373-3.9463-9.2929T430.0523,133.86H406.9474l3.0551-4.1367V173.96Zm10.6294-45.1279-3.0551-4.5186H430.18a16.256,16.256,0,0,0,8.561-2.3232,17.1649,17.1649,0,0,0,6.1738-6.4932,19.7465,19.7465,0,0,0,2.3233-9.77q0-8.72-4.5825-12.4121-4.5836-3.69-13.2393-3.6914H406.693l3.31-4.71Z"
              />
              <path
                class="adf-1"
                d="M481.9254,90.8331a8.2646,8.2646,0,0,1-5.1875-1.6866,5.5013,5.5013,0,0,1-2.1958-4.6142,5.44,5.44,0,0,1,2.1958-4.5518,8.2765,8.2765,0,0,1,5.1875-1.6865,8.147,8.147,0,0,1,5.1557,1.6865,5.4716,5.4716,0,0,1,2.1641,4.5518,5.5337,5.5337,0,0,1-2.1641,4.6142A8.1353,8.1353,0,0,1,481.9254,90.8331Zm-5.41,83.1269V106.3633h10.6934V173.96Z"
              />
              <path
                class="adf-1"
                d="M533.2267,175.2334a46.286,46.286,0,0,1-11.2979-1.3056,29.57,29.57,0,0,1-9.0381-3.8184,18.3214,18.3214,0,0,1-5.9829-6.206,16.6093,16.6093,0,0,1-2.1323-8.4659v-1.9726h10.8838v1.4a8.5667,8.5667,0,0,0,4.7739,7.86q4.7739,2.7071,13.0483,2.7051a37.0468,37.0468,0,0,0,9.1021-1.0185,14.6484,14.6484,0,0,0,6.333-3.1182,6.8214,6.8214,0,0,0,2.3232-5.2832,7.7471,7.7471,0,0,0-4.9331-7.543q-4.9328-2.2574-14.7348-3.914a78.7069,78.7069,0,0,1-9.8018-2.3233,33.7676,33.7676,0,0,1-8.2427-3.7236,17.4821,17.4821,0,0,1-5.665-5.6963,16.9726,16.9726,0,0,1,1.5913-18.6494,22.9231,22.9231,0,0,1,9.8975-6.5567,40.54,40.54,0,0,1,13.8755-2.2588A38.2814,38.2814,0,0,1,546.8478,107.7a23.806,23.806,0,0,1,10.0249,6.8428,16.541,16.541,0,0,1,3.7876,11.043v1.2734H549.84v-.9551a8.2948,8.2948,0,0,0-2.355-6.0781,14.4879,14.4879,0,0,0-6.11-3.5644,26.6615,26.6615,0,0,0-8.02-1.1778,36.3913,36.3913,0,0,0-7.8926.8594,15.9839,15.9839,0,0,0-6.4287,2.832,6.4705,6.4705,0,0,0-2.5459,5.41,6.9222,6.9222,0,0,0,2.3867,5.5059,18.1844,18.1844,0,0,0,6.7471,3.373A97.0746,97.0746,0,0,0,535.9,135.4522a88.1684,88.1684,0,0,1,9.9932,2.3867,35.0987,35.0987,0,0,1,8.3061,3.6592,16.95,16.95,0,0,1,5.6651,5.6338,15.7231,15.7231,0,0,1,2.0688,8.3056,16.25,16.25,0,0,1-2.26,8.6563,18.8793,18.8793,0,0,1-6.2378,6.1748,30.6943,30.6943,0,0,1-9.1655,3.7236A47.3618,47.3618,0,0,1,533.2267,175.2334Z"
              />
              <path
                class="adf-1"
                d="M582.3,144.49v-9.6748h52.2563l-1.9091,3.1826v-1.4a23.5309,23.5309,0,0,0-2.4507-10.7256,18.9423,18.9423,0,0,0-7.2881-7.7969,22.7431,22.7431,0,0,0-11.9658-2.9277,25.56,25.56,0,0,0-12.6665,3.0547,21.53,21.53,0,0,0-8.5293,8.625,27.2057,27.2057,0,0,0-3.0552,13.2715,28.782,28.782,0,0,0,2.96,13.4931,20.7651,20.7651,0,0,0,8.4336,8.7207,26.2348,26.2348,0,0,0,12.9843,3.0547,34.4031,34.4031,0,0,0,9.293-1.1142,20.4113,20.4113,0,0,0,6.5244-2.9912,14.1961,14.1961,0,0,0,3.9141-4.1055,11.09,11.09,0,0,0,1.5913-4.4551H643.213a19.7369,19.7369,0,0,1-2.5464,8.083,24.9561,24.9561,0,0,1-6.3013,7.2881,31.7852,31.7852,0,0,1-9.9926,5.251,43.0477,43.0477,0,0,1-13.6211,1.9736,35.42,35.42,0,0,1-17.95-4.456,31.9986,31.9986,0,0,1-12.189-12.3477,36.4577,36.4577,0,0,1-4.4234-18.1406,36.3436,36.3436,0,0,1,4.4556-18.2354,32.1649,32.1649,0,0,1,12.2842-12.3164,35.5234,35.5234,0,0,1,17.8857-4.4551,34.1748,34.1748,0,0,1,17.7583,4.4551,30.37,30.37,0,0,1,11.5845,12.19,37.196,37.196,0,0,1,4.0733,17.5986q0,1.02-.0635,2.6738a15.2856,15.2856,0,0,1-.1909,2.2276Z"
              />
              <path
                class="adf-1"
                d="M723.3478,80.0762a40.5979,40.5979,0,0,1,14.7988,2.3867,18.9491,18.9491,0,0,1,9.2925,7.3516q3.2137,4.9658,3.2143,12.6025a22.9737,22.9737,0,0,1-2.96,12.126,20.0343,20.0343,0,0,1-7.5742,7.3828,22.1979,22.1979,0,0,1-9.58,2.77,26.5822,26.5822,0,0,1,10.5025,2.45,19.5565,19.5565,0,0,1,8.37,7.3837q3.2776,5.06,3.2783,13.462a28.1948,28.1948,0,0,1-3.2783,14.0341,21.1155,21.1155,0,0,1-9.8975,8.8789q-6.62,3.0558-16.6762,3.0557H692.1593V80.0762Zm-20.6861,43.919-3.6919-3.6924H718.256q10.1828,0,15.8486-4.1055t5.665-12.125q0-5.3466-2.355-8.4971a13.086,13.086,0,0,0-6.6518-4.5507,32.4005,32.4005,0,0,0-10.0249-1.4H697.76l4.9014-6.1739Zm18.0762,40.417q9.6746,0,15.2764-4.2647,5.6-4.2627,5.601-12.73a17.8239,17.8239,0,0,0-1.8457-8.5605,14.1279,14.1279,0,0,0-5.0283-5.3789,22.4428,22.4428,0,0,0-7.2881-2.8321,41.9929,41.9929,0,0,0-8.6245-.8593H698.97l3.6919-3.6924V170.587l-4.9014-6.1748Z"
              />
              <path
                class="adf-1"
                d="M793.8077,175.2334a34.5812,34.5812,0,0,1-13.4619-2.4189,20.0605,20.0605,0,0,1-8.9429-6.97,18.5606,18.5606,0,0,1-3.1826-10.916,17.4585,17.4585,0,0,1,3.437-11.043,22.3731,22.3731,0,0,1,9.6748-6.9063,53.6989,53.6989,0,0,1,14.5122-3.31,158.3772,158.3772,0,0,0,17.7583-2.5147q5.283-1.2407,5.2832-4.042v-.19a9.5616,9.5616,0,0,0-4.7739-8.752q-4.7731-2.8959-13.812-2.8964-9.42,0-14.6392,3.2783t-5.22,10.5976H769.7481a21.2488,21.2488,0,0,1,3.8829-12.8886,24.2651,24.2651,0,0,1,10.7885-8.1162,46.197,46.197,0,0,1,30.87-.2862,23.9453,23.9453,0,0,1,10.566,7.4473,18.9971,18.9971,0,0,1,3.9145,12.1885V161.23q0,2.23.1909,4.3291a20.7054,20.7054,0,0,0,.6363,3.6914,13.9621,13.9621,0,0,0,1.2729,3.087,8.8211,8.8211,0,0,0,1.146,1.623H822.1319a7.5085,7.5085,0,0,1-.9546-1.4961,20.1857,20.1857,0,0,1-1.2094-2.7685,16.2532,16.2532,0,0,1-.7-3.2139,31.045,31.045,0,0,1-.2544-4.042l1.7822,1.209a18.7162,18.7162,0,0,1-5.7607,6.0469,29.868,29.868,0,0,1-9.1333,4.0732A45.8248,45.8248,0,0,1,793.8077,175.2334Zm1.7188-9.7392a33.1546,33.1546,0,0,0,11.8388-2.0049,19.0236,19.0236,0,0,0,8.4019-5.9512,15.32,15.32,0,0,0,3.1186-9.8017V134.3057l2.4185,4.0742a50.5786,50.5786,0,0,1-10.1519,2.5772q-6.079.9888-12.6982,1.623-9.6115.8921-14.4805,3.374t-4.8691,8.3379q0,5.5371,4.01,8.37T795.5265,165.4942Z"
              />
              <path
                class="adf-1"
                d="M847.7179,173.96V106.3633h10.8208v20.75l-3.5645-1.2724a26.0089,26.0089,0,0,1,1.9092-7.4151,22.7051,22.7051,0,0,1,4.2329-6.62,19.4271,19.4271,0,0,1,6.7788-4.71,24.0343,24.0343,0,0,1,9.5474-1.75,27.24,27.24,0,0,1,6.6513.668,15.9718,15.9718,0,0,1,3.2144,1.05l-2.8,10.63a12.875,12.875,0,0,0-2.5781-1.1455,16.9248,16.9248,0,0,0-5.5059-.7,17.9955,17.9955,0,0,0-8.7514,1.9092,14.8182,14.8182,0,0,0-5.4742,5.0605,21.3451,21.3451,0,0,0-2.8325,6.8418,33.39,33.39,0,0,0-.8271,7.32V173.96Z"
              />
              <path
                class="adf-2"
                d="M241.4859,4.3916q.0338,10.11-18.977,26.4786-19.0144,16.374-54.0767,39.917a530.0368,530.0368,0,0,0-35.9951,55.0185q-14.7289,26.2339-14.6953,36.3418.0338,10.11,5.7764,10.0869,4.1345-.0132,11.3554-4.4013a89.6009,89.6009,0,0,0,12.26-8.77l5.0386-4.3808a3.6938,3.6938,0,0,1,2.5215-1.6162c.7641-.003,1.1494.3046,1.1513.915q.02,5.9751-14.6518,14.749-14.6727,8.7759-22.0215,8.8018-14.0134.0468-14.0484-10.8633-.0358-10.9073,10.917-32.77a392.5776,392.5776,0,0,1,28.3267-46.9532q-37.8179,24.7076-56.6113,37.4a515.9413,515.9413,0,0,1-48.2744,57.93Q15.4436,206.82,5.796,206.8516.5145,206.8692.5,202.9649.4569,190.0978,20.0353,171.43t54.4106-43.1338a546.1389,546.1389,0,0,0,35.9829-58.5781q14.4924-27.7266,14.4522-40.36-.0477-14.4712-14.53-17.64A98.7188,98.7188,0,0,0,86.7984,9.04Q74.5077,9.081,67.276,9.794a130.8385,130.8385,0,0,0-15.9551,2.6943,33.9355,33.9355,0,0,0-14.105,6.3643q-5.3854,4.3829-5.3633,10.584.0236,7.122,12.5557,11.2129,12.53,4.0927,28.0508,8.1757,15.5185,4.0825,19.9023,10.0411,1.8422,2.061,2.5518,7.5712.0051,1.61-1.0283,1.6123c-.689.002-1.3443-.5312-1.9576-1.6025Q89.8444,61.631,78.691,57.878a161.2628,161.2628,0,0,0-23.22-5.8955A79.2059,79.2059,0,0,1,33.627,44.9336Q23.8449,40.0309,23.8243,32.68a18.51,18.51,0,0,1,4.7813-12.7656,31.4843,31.4843,0,0,1,11.3427-8.1914,73.2367,73.2367,0,0,1,16.6387-4.42A266.2744,266.2744,0,0,1,92.068,5.1172q20.3291-.0674,31.7207,6.5567,11.392,6.6269,11.4316,18.5683.085,25.4942-40.6074,84.2051,11.0018-7.3857,31.1709-20.6621Q145.95,80.5123,151.6832,76.586q23.548-32.2339,47.2534-54.1358Q222.6378.5508,237.3385.5,241.4729.487,241.4859,4.3916ZM8.5348,201.56q6.4284-.0219,23.0254-18.1084,16.5915-18.0849,36.0273-45.2558Q6.858,181.1211,6.92,199.4971C6.9249,200.876,7.4654,201.5625,8.5348,201.56ZM231.8434,5.8018q-6.4336.022-21.5415,15.1182-15.1107,15.0966-33.4073,38.8144,56.3767-38.7772,56.3316-52.56A1.2181,1.2181,0,0,0,231.8434,5.8018Z"
              />
            </g>
          </g>
        </svg>
        <p className="uppercase ">
          {/* Shop - Logo, Branding, Template and Website */}
        </p>

        <p>
          High Rise Bar can be a Mocktail or Cocktail Luxury Bar created with
          having the concepts of high ceiling and high stools. This brand is
          designed for anyone who is interested in starting a drink or juice bar
          business in any part of the world. The pre designed logos and branding
          makes it easier in getting the business started. The name, logo and
          all pre designed materials are semi-customiseable and can be tailored
          to your desired output.
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
