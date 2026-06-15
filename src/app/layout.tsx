import type { Metadata } from "next";
import Script from "next/script";
import { Playfair_Display, Merriweather } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeToggle } from "@/components/ThemeToggle";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://barnaba-research.vercel.app"),
  title:
    "Nghệ Thuật Nhìn Ra Viên Ngọc Quý Nơi Tha Nhân Qua Nguyên Mẫu Thánh Barnaba",
  description:
    "Báo cáo phân tích chuyên sâu đa ngành kết hợp Thần học, Tâm lý học nhận thức, Phân tâm học nhân văn và Khoa học quản trị lãnh đạo, giải mã nguyên mẫu Thánh Barnaba, 'Con của sự an ủi'.",
  keywords: [
    "Thánh Barnaba",
    "Imago Dei",
    "Tâm lý học nhận thức",
    "Hiệu ứng Pygmalion",
    "Carl Rogers",
    "Lãnh đạo",
  ],
  authors: [{ name: "Nhóm Nghiên Cứu" }],
  creator: "Nhóm Nghiên Cứu",
  publisher: "Nhóm Nghiên Cứu",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Nghệ Thuật Nhìn Ra Viên Ngọc Quý Nơi Tha Nhân Qua Nguyên Mẫu Thánh Barnaba",
    description:
      "Báo cáo phân tích chuyên sâu đa ngành kết hợp Thần học, Tâm lý học nhận thức, Phân tâm học nhân văn và Khoa học quản trị lãnh đạo, giải mã nguyên mẫu Thánh Barnaba.",
    url: "https://barnaba-research.vercel.app",
    siteName: "Nghiên cứu Thánh Barnaba",
    locale: "vi_VN",
    type: "article",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nghệ Thuật Nhìn Ra Viên Ngọc Quý Nơi Tha Nhân Qua Nguyên Mẫu Thánh Barnaba",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nghệ Thuật Nhìn Ra Viên Ngọc Quý Nơi Tha Nhân Qua Nguyên Mẫu Thánh Barnaba",
    description: "Báo cáo phân tích chuyên sâu đa ngành giải mã nguyên mẫu Thánh Barnaba.",
    images: ["/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ScholarlyArticle",
  headline: "Nghệ Thuật Nhìn Ra Viên Ngọc Quý Nơi Tha Nhân Qua Nguyên Mẫu Thánh Barnaba",
  description: "Báo cáo phân tích chuyên sâu đa ngành kết hợp Thần học, Tâm lý học nhận thức, Phân tâm học nhân văn và Khoa học quản trị lãnh đạo, giải mã nguyên mẫu Thánh Barnaba.",
  author: {
    "@type": "Organization",
    name: "Nhóm Nghiên Cứu",
  },
  inLanguage: "vi-VN",
  datePublished: "2026-06-15T12:50:00+07:00",
  dateModified: "2026-06-15T12:50:00+07:00",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      suppressHydrationWarning
      className={`${playfairDisplay.variable} ${merriweather.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-parchment text-charcoal transition-colors duration-300">
        <Script
          id="schema-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange={false}>
          <ThemeToggle />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
