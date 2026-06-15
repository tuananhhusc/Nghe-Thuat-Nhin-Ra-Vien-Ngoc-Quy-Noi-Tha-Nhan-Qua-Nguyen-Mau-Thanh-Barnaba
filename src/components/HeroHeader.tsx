import React from "react";
import { CrossIcon } from "./ui/CrossIcon";
import { Clock } from "lucide-react";

interface HeroHeaderProps {
  readingTime: number;
}

export function HeroHeader({ readingTime }: HeroHeaderProps) {
  return (
    <header className="hero-section relative py-20 md:py-32 px-6 text-center">
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="flex justify-center mb-6">
          <CrossIcon className="w-6 h-12 text-gold-muted opacity-60" />
        </div>
        <p
          className="text-sm md:text-base tracking-[0.35em] uppercase mb-6"
          style={{ color: "rgba(201, 168, 76, 0.8)", fontFamily: "var(--font-body)" }}
        >
          Báo Cáo Phân Tích Chuyên Sâu
        </p>
        <h1
          className="text-3xl md:text-5xl lg:text-[3.2rem] font-bold leading-tight md:leading-[1.2] mb-8"
          style={{
            fontFamily: "var(--font-display)",
            color: "#FFF8EE",
            textShadow: "0 2px 20px rgba(0,0,0,0.3)",
          }}
        >
          Nghệ Thuật Nhìn Ra
          <br />
          <span className="italic" style={{ color: "var(--color-gold-light)" }}>
            Viên Ngọc Quý
          </span>{" "}
          Nơi Tha Nhân
          <br />
          Qua Nguyên Mẫu Thánh Barnaba
        </h1>
        <div className="shimmer-line max-w-xs mx-auto mb-8" />
        <p
          className="text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-8"
          style={{ color: "rgba(253, 251, 247, 0.6)", fontFamily: "var(--font-body)" }}
        >
          Một cuộc phân tích đa ngành kết hợp Thần học hiện đại, Tâm lý học nhận thức,
          <br className="hidden md:inline" /> Phân tâm học nhân văn và Khoa học quản trị lãnh đạo
        </p>
        
        <div className="flex items-center justify-center gap-2 text-sm uppercase tracking-widest" style={{ color: "var(--color-gold-muted)" }}>
          <Clock className="w-4 h-4" />
          <span>~ {readingTime} Phút Đọc</span>
        </div>

        <div className="mt-8 text-xl tracking-[0.8em]" style={{ color: "rgba(201, 168, 76, 0.35)" }}>
          ☩ ✦ ☩
        </div>
      </div>
    </header>
  );
}
