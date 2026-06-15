import React from "react";

export function CrossIcon({ className = "", style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg
      className={className}
      style={style}
      viewBox="0 0 24 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="10" y="0" width="4" height="36" fill="currentColor" />
      <rect x="2" y="8" width="20" height="4" fill="currentColor" />
    </svg>
  );
}
