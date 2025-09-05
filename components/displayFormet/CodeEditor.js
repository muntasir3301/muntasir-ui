"use client";

import { useState } from "react";
// import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
// import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function CodeEditor({ code, language = "javascript" }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code); // Copy code to clipboard
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset "Copied" state
    } catch (error) {
      console.error("Failed to copy code:", error);
    }
  };

  return (
    <div className="relative bg-gray-900 p-4 rounded-md text-white shadow-md text-xs">
      {/* Copy Button */}
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 bg-blue-600 hover:bg-blue-500 text-white px-3 py-1 rounded"
      >
        {copied ? "Copied!" : "Copy"}
      </button>

      {/* Syntax Highlighter with Code Wrapping */}
      {/* <SyntaxHighlighter
        language={language}
        style={dracula}
        showLineNumbers={true}
        wrapLines={true} // Enables wrapping for long lines
        lineProps={{
          style: { whiteSpace: "pre-wrap", wordBreak: "break-word" }, // CSS for wrapping
        }}
      > */}
        {code.trim()}
      {/* </SyntaxHighlighter> */}
    </div>
  );
}
