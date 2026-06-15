import React from "react";

export function OrnamentDivider({ symbol = "✦" }: { symbol?: string }) {
  return <div className="ornament my-8">{symbol}</div>;
}
