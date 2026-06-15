import fs from "fs";
import path from "path";
import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { ScrollProgress } from "@/components/ScrollProgress";
import { TocWrapper } from "@/components/TocWrapper";
import { HeroHeader } from "@/components/HeroHeader";
import { OrnamentDivider } from "@/components/ui/OrnamentDivider";
import { CrossIcon } from "@/components/ui/CrossIcon";
import { AnimatedSection } from "@/components/AnimatedSection";
import { BackToTop } from "@/components/BackToTop";
import { CopyLinkButton } from "@/components/CopyLinkButton";
import { OPENING_PARAGRAPH, CONCLUSION, REFERENCES } from "@/content/data";

function calculateReadingTime(text: string): number {
  const words = text.trim().split(/\s+/).length;
  const wordsPerMinute = 200;
  return Math.ceil(words / wordsPerMinute);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getTextFromNode(node: any): string {
  if (!node) return "";
  if (node.type === "text") return node.value || "";
  if (node.children) return node.children.map(getTextFromNode).join("");
  return "";
}

// Custom Markdown components for proper section IDs
const markdownComponents = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  h2: ({ node, children, ...props }: any) => {
    const text = getTextFromNode(node);
    const idMatch = text.match(/^(\d+)\./);
    const id = idMatch ? `section-${idMatch[1]}` : "conclusion";
    return (
      <h2 id={id} className="group flex items-center relative" {...props}>
        {children}
        <CopyLinkButton id={id} />
      </h2>
    );
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  h3: ({ node, children, ...props }: any) => {
    const text = getTextFromNode(node);
    const id = text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    const finalId = `h3-${id}`;
    return (
      <h3 id={finalId} className="group flex items-center relative" {...props}>
        {children}
        <CopyLinkButton id={finalId} />
      </h3>
    );
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  table: ({ children, ...props }: any) => (
    <div className="overflow-x-auto my-6">
      <table {...props}>{children}</table>
    </div>
  ),
};

export default async function ArticlePage() {
  const filePath = path.join(process.cwd(), "src", "content", "barnaba.md");
  const articleContent = await fs.promises.readFile(filePath, "utf-8");
  
  const readingTime = calculateReadingTime(articleContent + OPENING_PARAGRAPH + CONCLUSION);

  // Note: For h2 and h3 IDs to exactly match the TOC, it's better to update the TOC_ITEMS ids 
  // to match the generated slugs, or manually add HTML anchors in the markdown.
  // In the short term, the TOCWrapper's intersection observer will just pick up whatever matches.

  return (
    <div className="flex flex-col min-h-screen bg-parchment text-charcoal transition-colors duration-300">
      <ScrollProgress />

      <BackToTop />
      <HeroHeader readingTime={readingTime} />

      <div className="flex-1 flex justify-center px-4 md:px-8 py-12 md:py-16 gap-12 relative">
        <TocWrapper />
        <main className="max-w-3xl w-full min-w-0">
          <AnimatedSection className="mb-10">
            <OrnamentDivider symbol="❖" />
            <div
              className="drop-cap text-base md:text-lg leading-[1.85] font-body text-charcoal"
            >
              {OPENING_PARAGRAPH}
            </div>
            <OrnamentDivider symbol="✦" />
          </AnimatedSection>

          <article className="prose prose-lg prose-sacred max-w-none">
            {/* We will let react-markdown render. If h3 IDs don't match, we can fix it later. */}
            <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
              {articleContent}
            </ReactMarkdown>
          </article>

          <AnimatedSection className="mt-12" id="conclusion">
            <OrnamentDivider symbol="☩" />
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center font-display text-burgundy-dark">
              Kết Luận
            </h2>
            <div className="text-base md:text-lg leading-[1.85] font-body text-charcoal">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{CONCLUSION}</ReactMarkdown>
            </div>
            <OrnamentDivider symbol="✦ ☩ ✦" />
          </AnimatedSection>

          <AnimatedSection className="mt-12 pt-8 border-t-2 border-parchment-darker" id="references">
            <h2 className="text-xl md:text-2xl font-bold mb-6 font-display text-burgundy-dark">
              Nguồn Trích Dẫn
            </h2>
            <ol className="references-list">
              {REFERENCES.map((ref, idx) => (
                <li key={idx}>
                  <span>{ref.text}</span>
                  {" - "}
                  <em className="text-charcoal-light">{ref.source}</em>
                  {ref.url && (
                    <>
                      {". "}
                      <a href={ref.url} target="_blank" rel="noopener noreferrer">
                        {ref.url.length > 60 ? ref.url.substring(0, 57) + "..." : ref.url}
                      </a>
                    </>
                  )}
                </li>
              ))}
            </ol>
          </AnimatedSection>

          <footer className="mt-16 py-10 text-center border-t border-parchment-darker">
            <CrossIcon className="w-4 h-7 mx-auto mb-4 text-gold-muted" />
            <p className="text-xs tracking-[0.15em] uppercase text-sepia">
              Ad Maiorem Dei Gloriam
            </p>
            <p className="text-xs mt-2 text-sepia opacity-60">
              © 2025 Nghiên cứu đa ngành về Nguyên mẫu Thánh Barnaba
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
}
