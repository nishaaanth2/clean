import "./style.css";

export default function TypeWritingPage() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Side - Preview */}
      <div className="flex-1 flex items-center justify-center bg-gray-900 text-white py-40 md:py-0 p-4 ">
        <div className="typewriter">Hello World!..</div>
      </div>

      {/* Right Side - Code Display */}
      <div className="flex-1 flex items-center justify-center bg-gray-800 text-green-400 p-6 overflow-y-auto">
        <pre className="text-sm whitespace-pre-wrap">
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

--------------------------------------------

**style.css**

h2 {
  width: 20ch;             
  font-family: monospace;  
  text-wrap: nowrap;
  overflow: hidden;        
  animation: typing 2s steps(20) infinite alternate-reverse;
}

@keyframes typing {
  from {
    width: 0ch;  
  }
  to {
    width: 20ch; 
  }
}
`}
        </pre>
      </div>
    </div>
  );
}
