"use client";

import React, { useState } from "react";
import { Link as LinkIcon, Check } from "lucide-react";

export function CopyLinkButton({ id }: { id: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    const url = window.location.origin + window.location.pathname + "#" + id;
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <a
      href={`#${id}`}
      onClick={handleCopy}
      className="ml-2 inline-flex items-center justify-center w-6 h-6 opacity-40 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-200 hover:opacity-100 active:opacity-100 focus:opacity-100 text-burgundy-light hover:text-burgundy focus:outline-none"
      aria-label="Sao chép liên kết"
      title="Sao chép liên kết"
    >
      {copied ? <Check className="w-4 h-4 text-green-600" /> : <LinkIcon className="w-4 h-4" />}
    </a>
  );
}
