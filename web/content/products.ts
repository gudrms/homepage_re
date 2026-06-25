import type { Lang } from "@/lib/i18n";

type L = Record<Lang, string>;

export type Feature = { title: string; points: L[] };
export type Product = {
  slug: string;
  oldUrl: string; // 구 URL (301 매핑용)
  name: string; // 영문 제품/시스템명
  korName: L; // 한글 표기 (있으면)
  tags: string[]; // 상단 하이라이트 칩
  summary: L;
  image: string;
  features: Feature[];
  functions: L[];
  applications: L[];
  brochure?: string;
};

export type Category = {
  slug: string;
  no: string;
  eyebrow: string;
  title: L;
  intro: L;
  image: string;
  products: Product[];
};

export const robotics: Category = {
  slug: "robotics",
  no: "01",
  eyebrow: "Special Purpose Robotics",
  title: { ko: "특수목적용 로봇 개발", en: "Special Purpose Robotics" },
  intro: {
    ko: "작업자의 감각을 대신하는 힘 제어 기술, 시야를 대신하는 비전 기술 등을 통해 접근이 어렵고 위험이 높은 작업을 대신할 수 있는 로보틱스 제품을 개발합니다.",
    en: "Through force-control technology that replaces the worker's senses and vision technology that replaces human sight, we develop robotics products that perform tasks that are hard to access and pose high risk to workers.",
  },
  image: "/images/robot_img1.png",
  products: [
    {
      slug: "automation",
      oldUrl: "/sub/robot1.php",
      name: "Automation Robotics for O&M",
      korName: { ko: "정비 자동화 로봇", en: "" },
      tags: ["Reliability", "Low-Dose Exposure", "Customized Design"],
      summary: {
        ko: "원전 내 고방사선 구역에서의 작업에 대한 운영 및 유지보수를 수행하는 자동화 로봇입니다.",
        en: "An automated robot that performs operation and maintenance for work in high-radiation areas within nuclear power plants.",
      },
      image: "/images/robot1_big_img.png",
      features: [
        {
          title: "Precision Robot Control",
          points: [
            { ko: "반복정밀도 : ±0.1mm", en: "Repeatability : ±0.1mm" },
            { ko: "실시간(1ms) 제어", en: "Real-time (1ms) Control" },
          ],
        },
        {
          title: "Force Feedback Control",
          points: [
            { ko: "6축 힘/토크 센서", en: "6-Axis Force/Torque Sensor" },
            { ko: "정밀한 볼트 체결력 (±1%)", en: "Precise bolt tightening force (±1%)" },
            { ko: "힘 기반 필터 교체 기능", en: "Force-based filter replacement" },
          ],
        },
        {
          title: "Vision-Based Recognition",
          points: [
            { ko: "필터룸 환경 전용 스테레오 카메라", en: "Stereo camera for filter-room environments" },
            { ko: "스테레오 카메라 기반 위치 인식", en: "Stereo camera-based position recognition" },
          ],
        },
      ],
      functions: [
        { ko: "볼트 자동 체결/풀기", en: "Automatic bolt tightening/loosening" },
        { ko: "필터 하우징 자동 개/폐", en: "Automatic filter-housing opening/closing" },
        { ko: "필터 자동 인출/삽입", en: "Automatic filter extraction/insertion" },
        { ko: "3D 형상 인식", en: "3D shape recognition" },
        { ko: "원터치 툴 체인저", en: "One-touch tool changer" },
      ],
      applications: [
        { ko: "원자력발전소 1차 계통 필터 교체 작업", en: "Primary-system filter replacement at nuclear power plants" },
      ],
      brochure: "/files/Filterbot_br.pdf",
    },
    {
      slug: "decommissioning",
      oldUrl: "/sub/robot2.php",
      name: "Facility Decommissioning",
      korName: { ko: "원격 해체 로봇", en: "" },
      tags: ["Remote Control", "Multi Purpose", "Force Feedback", "7-DOF Mobile Robot"],
      summary: {
        ko: "원전 및 위험설비 해체 시 원격으로 조종하여 해체작업(절단 및 이송)을 수행하는 원격해체 로봇입니다.",
        en: "A remote dismantling robot, remotely controlled to perform dismantling work (cutting and transport) of nuclear power plants and hazardous facilities.",
      },
      image: "/images/robot2_big_img.png",
      features: [
        {
          title: "7-DOF Dual-arm Manipulator",
          points: [
            { ko: "7 자유도 (7 Degrees of Freedom)", en: "7 Degrees of Freedom" },
            { ko: "양팔 협동 작업", en: "Dual-arm Collaboration" },
            { ko: "100kg 가반하중", en: "100kg Payload" },
          ],
        },
        {
          title: "Precision Robot Control",
          points: [
            { ko: "반복정밀도 : ±0.1mm", en: "Repeatability : ±0.1mm" },
            { ko: "실시간(1ms) 제어", en: "Real-time (1ms) Control" },
          ],
        },
        {
          title: "Optimization of Work Environment",
          points: [
            { ko: "컴팩트 모바일 플랫폼", en: "Compact Mobile Platform" },
            { ko: "자동 툴 체인징 시스템", en: "Auto Tool Changing System" },
            { ko: "휠 메커니즘 기반 자유로운 이동성", en: "Free mobility based on wheel mechanism" },
          ],
        },
      ],
      functions: [
        { ko: "디스크 쏘 절단", en: "Disc-saw cutting" },
        { ko: "플라즈마 커터 절단", en: "Plasma-cutter cutting" },
        { ko: "배관 및 용기 취급 그리퍼", en: "Pipe and vessel handling gripper" },
        { ko: "원격작업 감시", en: "Remote work monitoring" },
      ],
      applications: [
        { ko: "고방사선 구역 구조물 절단 및 해체, 핫셀 원격 작업", en: "Cutting/dismantling of structures in high-radiation areas, hot-cell remote work" },
      ],
    },
    {
      slug: "master-slave",
      oldUrl: "/sub/robot3.php",
      name: "Master-Slave Remote Control System",
      korName: { ko: "원격제어 마스터 시스템", en: "" },
      tags: ["Easy Control", "Force Feedback", "Simulation"],
      summary: {
        ko: "다양한 산업용 및 특수목적 로봇시스템에 적용성이 확보된 6-DOF 원격제어 마스터 시스템입니다.",
        en: "A 6-DOF remote-control master system with proven applicability to various industrial and special-purpose robot systems.",
      },
      image: "/images/robot3_big_img.png",
      features: [
        {
          title: "6-DOF Master-arm",
          points: [{ ko: "3차원 공간상의 모든 위치 및 자세 표현", en: "Expression of all positions and postures in 3D space" }],
        },
        {
          title: "Force Feedback Reaction",
          points: [{ ko: "슬레이브 로봇의 충격 및 작업 상황 감지", en: "Detection of shock and work conditions on the slave robot" }],
        },
        {
          title: "Real-Scale Control",
          points: [{ ko: "실제 스케일 기반 정밀 원격 제어", en: "Precise remote control at real scale" }],
        },
      ],
      functions: [
        { ko: "다양한 로봇과 연동", en: "Integration with various robots" },
        { ko: "가상환경 연동 작업 시뮬레이션", en: "Virtual-environment work simulation" },
      ],
      applications: [
        { ko: "매니퓰레이터에 연결하여 원격 제어 (Master-Slave)", en: "Remote control (Master-Slave) by connecting to a manipulator" },
        { ko: "VR 기반 실제 현장 작업 모의 시뮬레이터", en: "VR-based real-field work simulator" },
      ],
    },
    {
      slug: "vr-training",
      oldUrl: "/sub/robot4.php",
      name: "VR Simulation & Training System",
      korName: { ko: "VR 시뮬레이션·훈련 시스템", en: "" },
      tags: ["Virtual Reality", "Remote Training", "Optimization"],
      summary: {
        ko: "원격제어 마스터와 특수목적용 로봇의 운용 정확도와 숙련도를 향상시키기 위한 가상현실 기반 원격 트레이닝 시스템입니다.",
        en: "A virtual-reality-based remote training system to improve the operating accuracy and proficiency of remote-control masters and special-purpose robots.",
      },
      image: "/images/robot4_slide_img1.png",
      features: [
        {
          title: "Virtual Physical Environment",
          points: [{ ko: "물리적 가상현실과 기구학적 3D 모델을 이용한 공정 최적화", en: "Process optimization using physical VR and kinematic 3D models" }],
        },
        {
          title: "Real-time Connection",
          points: [{ ko: "원격작업 환경 실시간 감시 시스템", en: "Real-time monitoring system for the remote work environment" }],
        },
        {
          title: "Kinematic 3D Model",
          points: [{ ko: "기구학 3D 모델 기반 경로 계획", en: "Path planning based on a kinematic 3D model" }],
        },
      ],
      functions: [
        { ko: "Master 시스템과 가상로봇 간 원격 제어", en: "Remote control between the master system and a virtual robot" },
        { ko: "가상로봇과 환경을 이용한 경로계획 및 시뮬레이션", en: "Path planning and simulation using virtual robots and environments" },
      ],
      applications: [
        { ko: "VR 기반 실제 현장 작업 모델 설계 및 모의 시뮬레이터", en: "VR-based real-field work model design and simulator" },
      ],
    },
  ],
};

export const categories: Category[] = [robotics];

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export const productLabels = {
  breadcrumbHome: { ko: "홈", en: "Home" } as L,
  features: { ko: "주요 특징", en: "Features" } as L,
  functionT: { ko: "기능", en: "Function" } as L,
  application: { ko: "적용 분야", en: "Application" } as L,
  brochure: { ko: "제품 브로슈어 다운로드", en: "Download Brochure" } as L,
  backToCategory: { ko: "사업영역으로 돌아가기", en: "Back to business area" } as L,
  viewDetail: { ko: "자세히 보기", en: "View detail" } as L,
};
