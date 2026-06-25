import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 서버리스/CDN 정적 배포 (cold start 없음)
  output: "export",
  // 정적 export에서는 이미지 최적화 서버를 못 쓰므로 비활성화
  images: { unoptimized: true },
  // 정적 호스팅 라우팅 안정화 (/me -> /me/index.html)
  trailingSlash: true,
};

export default nextConfig;
