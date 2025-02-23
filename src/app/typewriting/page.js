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
          {`Here's the updated markdown with the \`<pre>\` tag wrapped around the code block in JSX:

\`\`\`md
Below is a simple example of the "typewriting" animation you saw in the reel. It uses pure CSS to animate the text from zero width up to its full length, giving the effect of typing. You can copy/paste these two files into a folder and open \`index.html\` in your browser.

---

### **index.html**
\`\`\`html
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
\`\`\`

### **style.css**
\`\`\`css
/* Style the text element */
h2 {
  width: 20ch;             
  font-family: monospace;  
  text-wrap: nowrap;
  overflow: hidden;        
  
  /* Apply the typing animation */
  animation: typing 2s steps(20) infinite alternate-reverse;
}

/* Define the typing keyframes */
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
