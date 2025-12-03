"use client"
import "./style.css";
import { useState } from "react";

export default function TypeWritingPage() {
  const [activeTab, setActiveTab] = useState("HTML");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Side - Preview */}
      <div className="flex-1 flex items-center justify-center bg-gray-900 text-white py-40 md:py-0 p-4 ">
        <div className="typewriter">Hello World!..</div>
      </div>

      {/* Right Side - Code Display */}
      <div className="flex-1 flex flex-col items-center justify-center bg-gray-800 text-green-400 p-6 overflow-y-auto">
        <div className="tabs mb-4 bg-white ">
          <button 
            className={`tab-button py-2 px-4 ${activeTab === "HTML" ? "active bg-red-400" : ""}`} 
            onClick={() => handleTabClick("HTML")}
          >
            HTML
          </button>
          <button 
            className={`tab-button py-2 px-4 ${activeTab === "CSS" ? "active bg-red-400" : ""}`} 
            onClick={() => handleTabClick("CSS")}
          >
            CSS
          </button>
        </div>
        <pre className={`text-sm whitespace-pre-wrap ${activeTab === "HTML" ? "" : "hidden"}`}>
          {`
**index.html**

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Typing Animation</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h2>Hello World!..</h2>
</body>
</html>
`}
        </pre>
        <pre className={`text-sm whitespace-pre-wrap ${activeTab === "CSS" ? "" : "hidden"}`}>
          {`
**style.css**

h2 {
\twidth: 20ch;             
  
\ttext-wrap: nowrap;
\toverflow: hidden;        
\tanimation: typing 2s steps(20) infinite alternate-reverse;
}

@keyframes typing {
\tfrom {
\t\twidth: 0ch;  
\t}
\tto {
\t\twidth: 20ch; 
\t}
}
`}
        </pre>
      </div>
    </div>
  );
}
