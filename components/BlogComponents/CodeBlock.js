"use client";

import { useEffect, useRef } from "react";
import Prism from "prismjs";

import "prismjs/components/prism-java";

export default function CodeBlock({ code, language}) {
  const codeRef = useRef(null);

  useEffect(() => {
    if (codeRef.current) {
      Prism.highlightElement(codeRef.current);
    }
  }, [code, language]);

  return (
    <pre 
    style={{marginTop: "calc(var(--spacing) * 4)", borderRadius: "10px"}}
    >
      <code ref={codeRef} className={`language-${language}`}>
        {code}
      </code>
    </pre>
  );
}
