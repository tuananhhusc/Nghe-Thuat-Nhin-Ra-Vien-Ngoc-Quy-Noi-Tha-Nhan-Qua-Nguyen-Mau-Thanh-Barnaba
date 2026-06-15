import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/Nghe-Thuat-Nhin-Ra-Vien-Ngoc-Quy-Noi-Tha-Nhan-Qua-Nguyen-Mau-Thanh-Barnaba" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
