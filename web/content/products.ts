import type { L } from "@/lib/i18n";

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
  image: "/images/robot_img1.webp",
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
      image: "/images/robot1_big_img.webp",
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
      image: "/images/robot2_big_img.webp",
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
      image: "/images/robot3_big_img.webp",
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
      image: "/images/robot4_slide_img1.webp",
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

export const ai: Category = {
  slug: "ai",
  no: "02",
  eyebrow: "AI Predictive Diagnostics",
  title: { ko: "AI기반 예측·진단 시스템", en: "AI-based Prediction / Diagnosis" },
  intro: {
    ko: "4차 산업혁명을 주도하는 인공지능 기술 및 빅데이터 분석기술을 기반으로 플랜트 상태감시 기술, 회전기기 예측진단 시스템 등을 개발하였고, 상태진단을 넘어 미래의 고장을 예측하는 예측진단 분야에 앞서 나가고 있습니다.",
    en: "Based on AI and big-data analysis technology leading the 4th industrial revolution, we have developed plant condition-monitoring and rotating-machinery predictive-diagnosis systems, leading the field of predictive diagnosis that goes beyond condition diagnosis to predict future failures.",
  },
  image: "/images/ai_img1.webp",
  products: [
    {
      slug: "diagnostic-equipment",
      oldUrl: "/sub/ai1.php",
      name: "AIDE",
      korName: { ko: "AI 진단장비 (Artificial Intelligence Diagnostic Equipment)", en: "Artificial Intelligence Diagnostic Equipment" },
      tags: ["All in one", "Decision Making", "Easy & Simple"],
      summary: {
        ko: "머신러닝과 인공지능 기술을 통해 전문가의 분석 없이도 고장 원인을 스스로 진단하여, 원인별 심각도 및 설비의 계속 운전 여부를 판단하는 진단 장비입니다.",
        en: "Equipment that self-diagnoses the cause of failure without expert analysis through machine learning and AI, determining the severity of each cause and whether the facility can continue operating.",
      },
      image: "/images/ai111_big_img.webp",
      features: [
        { title: "AI-Based Diagnosis", points: [{ ko: "머신러닝을 통한 고장 원인 검출", en: "Detection of failure causes through machine learning" }] },
        { title: "Sensor Location Compensation", points: [{ ko: "진동 신호의 구조적 노이즈 최소화 알고리즘", en: "Structural-noise minimization algorithm for vibration signals" }] },
        { title: "Accuracy", points: [{ ko: "진동 & 초음파 진단 장비의 통합", en: "Integration of vibration & ultrasound diagnostic equipment" }] },
      ],
      functions: [
        { ko: "인공지능 진단 기능으로 누구나 전문가 수준 진단 가능", en: "Expert-level diagnosis for anyone via the AI diagnosis function" },
        { ko: "초음파·진동 신호를 이용한 기계적·전기적 결함 진단", en: "Diagnosis of mechanical/electrical defects using ultrasound and vibration signals" },
        { ko: "헤테로다인 기술을 통한 초음파의 청각화·시각화", en: "Audibilization and visualization of ultrasound via heterodyne technology" },
        { ko: "자체 개발 알고리즘으로 시스템의 현재·향후 상태 평가", en: "Assessment of current/future system state via self-developed algorithms" },
      ],
      applications: [
        { ko: "ISO 10816 기준에 따른 설비 상태 평가 및 결함 원인 분석", en: "Equipment condition assessment and defect-cause analysis per ISO 10816" },
      ],
      brochure: "/files/AIDE_br.pdf",
    },
    {
      slug: "startup-shutdown",
      oldUrl: "/sub/ai2.php",
      name: "AI-Based Startup and Shutdown System",
      korName: { ko: "AI 기동·정지 진단 시스템", en: "" },
      tags: ["Machine Learning", "Early Detection", "Diagnosis"],
      summary: {
        ko: "플랜트 상태감시 기술과 규칙기반 전문가 시스템을 결합하여 조기경보 발령 및 원인을 자동으로 진단하는 시스템입니다.",
        en: "A system that combines plant condition-monitoring technology with a rule-based expert system to issue early warnings and automatically diagnose their causes.",
      },
      image: "/images/ai2_big_img.webp",
      features: [
        { title: "Condition Monitoring", points: [{ ko: "기동/정지 전 출력 운전 상태 감시", en: "Output-operation monitoring before start/stop" }, { ko: "출력 변동에 무관한 감시 성능", en: "Monitoring performance independent of output fluctuation" }] },
        { title: "Reliability", points: [{ ko: "오경보율 최소화", en: "Minimized false-alarm rate" }] },
        { title: "Expert System", points: [{ ko: "이상 원인 판단", en: "Determination of abnormality causes" }] },
      ],
      functions: [
        { ko: "물리·통계·머신러닝 융합 모델로 이상 징후 감시", en: "Anomaly monitoring via a fusion of physical, statistical and ML models" },
        { ko: "센서·시스템 결함 분리로 오경보율 감소 및 진단 정확도 향상", en: "Separation of sensor/system faults to reduce false alarms and improve accuracy" },
        { ko: "전문가 시스템을 통한 기기·계통 결함 원인 진단", en: "Diagnosis of device/system defect causes via the expert system" },
        { ko: "자체 알고리즘으로 시스템의 현재·향후 상태 평가", en: "Assessment of current/future system state via in-house algorithms" },
      ],
      applications: [
        { ko: "원전 내 전체 변수 시각화 및 과거 운전 패턴 기반 이상 감지", en: "Visualization of all plant variables and anomaly detection based on past operating patterns" },
      ],
    },
    {
      slug: "sensor-monitoring",
      oldUrl: "/sub/ai3.php",
      name: "Online Monitoring System of Sensors",
      korName: { ko: "센서 온라인 감시 시스템", en: "" },
      tags: ["Sensor Reliability", "Uncertainty Evaluation", "Online Monitoring"],
      summary: {
        ko: "플랜트에서 측정되는 신호의 건전성과 불확도를 평가하여 계측센서의 성능을 감시하는 시스템입니다.",
        en: "A system that monitors the performance of measurement sensors by evaluating the integrity and uncertainty of signals measured in the plant.",
      },
      image: "/images/ai3_big_img.webp",
      features: [
        { title: "Reliability", points: [{ ko: "계측기 신뢰도 향상", en: "Improved instrument reliability" }, { ko: "드리프트 실시간 감지", en: "Real-time drift detection" }] },
        { title: "Improvement", points: [{ ko: "발전소 운전여유도 개선", en: "Improved plant operating margin" }, { ko: "드리프트 감지 민감도·정확도 향상", en: "Improved drift-detection sensitivity and accuracy" }] },
        { title: "Cost-Cutting", points: [{ ko: "유지보수 비용 감소", en: "Reduced maintenance costs" }, { ko: "불필요한 교정 감소", en: "Reduced unnecessary calibration" }] },
      ],
      functions: [
        { ko: "원자력발전소 안전성 향상 및 경제성 제고", en: "Improved nuclear plant safety and economic efficiency" },
        { ko: "물리·데이터·통계 모델을 통합한 융합 모델 적용", en: "Application of a fusion model integrating physical, data and statistical models" },
        { ko: "온라인 성능 감시로 계측기 교정 주기 최적화", en: "Optimization of instrument calibration cycles via online monitoring" },
        { ko: "교정 비용 감소 및 운전원 피폭 저감", en: "Reduced calibration cost and operator radiation exposure" },
      ],
      applications: [
        { ko: "다중·비다중 센서 드리프트 감시 및 불확도 산출 (터빈·CV배기 계통 등)", en: "Redundant/non-redundant sensor-drift monitoring and uncertainty calculation (turbine, CV exhaust systems, etc.)" },
      ],
    },
  ],
};

export const engineering: Category = {
  slug: "engineering",
  no: "03",
  eyebrow: "Engineering & Diagnostic Equipment",
  title: { ko: "엔지니어링 및 진단장비", en: "Engineering & Diagnostic Equipment" },
  intro: {
    ko: "원자력발전소 및 산업 플랜트의 안전성과 신뢰성을 확보하기 위한 밸브 진단, 공기누설 시험, 측정 센서 등 다양한 엔지니어링 서비스 및 진단 장비를 제공합니다.",
    en: "We provide a range of engineering services and diagnostic equipment — including valve diagnostics, air in-leakage testing, and measurement sensors — to ensure the safety and reliability of nuclear power plants and industrial plants.",
  },
  image: "/images/engine2_big_img.webp",
  products: [
    {
      slug: "pov",
      oldUrl: "/sub/engine1.php",
      name: "POV Diagnostic Service",
      korName: { ko: "동력 작동 밸브 진단 서비스", en: "" },
      tags: ["Diagnosis", "Monitoring", "Evaluation"],
      summary: {
        ko: "동력 작동 밸브(MOV/AOV)의 정기적인 성능 평가를 통해 밸브 운전 신뢰성을 확보하고, 시간에 따른 취약도 변화를 감시·평가하여 플랜트 안전성을 향상시키는 진단 서비스입니다.",
        en: "A diagnostic service that secures valve operation reliability through periodic performance evaluation of power-operated valves (MOV/AOV) and improves plant safety by monitoring and evaluating the degree of vulnerability over time.",
      },
      image: "/images/engine2_big_img.webp",
      features: [
        {
          title: "Technology",
          points: [
            { ko: "밸브 진단 및 신호 분석 기술", en: "Valve diagnosis and signal analysis technology" },
            { ko: "원격 진단 기술 (MCC)", en: "Remote diagnosis technology (MCC)" },
          ],
        },
        {
          title: "Qualification",
          points: [
            { ko: "한국수력원자력 'Q'급 공급자 등록", en: "Registered on KHNP's 'Q' class qualified supplier for POV diagnostic service" },
          ],
        },
        {
          title: "Experience",
          points: [
            { ko: "APR1400, OPR1000 적용 실적", en: "APR1400, OPR1000" },
            { ko: "Westinghouse, Framatome 호환", en: "Westinghouse, Framatome" },
          ],
        },
      ],
      functions: [
        { ko: "밸브 기능 수행 여부 성능 평가 (Function performance evaluation)", en: "Function performance evaluation — whether the valve can successfully perform its function in the installed environment" },
        { ko: "밸브 성능에 영향을 미치는 주요 인자 감시 및 예방 정비 주기 결정", en: "Monitoring of key factors affecting valve performance and determination of preventive maintenance cycles" },
      ],
      applications: [
        { ko: "원자력발전소 MOV/AOV 성능 시험 및 취약도 감시", en: "MOV/AOV performance testing and vulnerability monitoring at nuclear power plants" },
      ],
    },
    {
      slug: "inleakage",
      oldUrl: "/sub/engine2.php",
      name: "Inleakage Test Service",
      korName: { ko: "공기누설 시험 서비스", en: "" },
      tags: ["KOLAS", "Ventilation", "Measurement"],
      summary: {
        ko: "산업용 건축물의 환기 성능을 시험하고 원자력발전소 제어실의 운전원 거주성을 평가하는 공기누설 시험 서비스입니다.",
        en: "A service for testing the ventilation performance of industrial buildings and evaluating operator habitability in the control room of nuclear power plants.",
      },
      image: "/images/engine2_big_img.webp",
      features: [
        {
          title: "KOLAS Recognition",
          points: [
            { ko: "SF6 : (0.06~88.10) mg/m³ 인정 범위", en: "SF6 : (0.06~88.10) mg/m³ recognition range" },
          ],
        },
        {
          title: "Test Method",
          points: [
            { ko: "ASTM E 741-11 : 추적가스를 이용한 내부 시설 시험 방법", en: "ASTM E 741-11 : Testing method using tracer gas for internal facilities" },
            { ko: "ASTM E 2029-11 : 추적가스 희석법을 이용한 유량 측정", en: "ASTM E 2029-11 : Flow measurement using tracer gas dilution method" },
            { ko: "KS L ISO 12569:2006 건물 내 환기량 측정", en: "KS L ISO 12569:2006 ventilation measurement in buildings" },
          ],
        },
        {
          title: "Measuring Equipment",
          points: [
            { ko: "광음향 분광법을 이용한 측정 장비 사용", en: "Measurement equipment using photoacoustic spectroscopy" },
          ],
        },
      ],
      functions: [
        { ko: "시료 부피 계산 → 추적가스 주입 유량 결정 → 농도 균질화 → 농도 샘플링 → 공기 교환율 계산 → 측정 불확도 산출", en: "Sample volume calculation → Tracer gas injection flow rate determination → Concentration homogenization → Concentration sampling → Air exchange rate calculation → Measurement uncertainty calculation" },
        { ko: "격리 모드(화학 사고) 및 가압 모드(방사선 사고) 시험", en: "Isolation mode (chemical accident) and pressurized mode (radiation accident) tests" },
      ],
      applications: [
        { ko: "원자력발전소 제어실 운전원 거주성 평가", en: "Operator habitability evaluation in nuclear plant control rooms" },
        { ko: "산업용 건축물 환기 성능 시험", en: "Ventilation performance testing for industrial buildings" },
      ],
    },
    {
      slug: "movids",
      oldUrl: "/sub/engine3.php",
      name: "MOVIDS A+ v2.5",
      korName: { ko: "동력 작동 밸브 진단 장비", en: "" },
      tags: ["Monitoring", "Diagnosis", "Accuracy"],
      summary: {
        ko: "동력 작동 밸브(MOV/AOV)를 진단하는 장비로 신호 취득, 성능 변수 추출, 진단 등 밸브 진단에 필요한 모든 기능을 갖추고 있습니다.",
        en: "Equipment for diagnosing power-operated valves (MOV/AOV), equipped with all functions necessary for valve diagnosis including signal acquisition, performance variable extraction, and diagnosis.",
      },
      image: "/images/engine3_big_img.webp",
      features: [
        {
          title: "Convenience",
          points: [
            { ko: "직관적 인터페이스", en: "Intuitive interface" },
            { ko: "간편한 센서 설치", en: "Easy sensor installation" },
          ],
        },
        {
          title: "Integration",
          points: [
            { ko: "MOV·AOV 진단 장비 통합", en: "Integration of MOV and AOV diagnostic equipment" },
          ],
        },
        {
          title: "Compatibility",
          points: [
            { ko: "기존 외산 장비와의 호환성 유지", en: "Maintain compatibility with existing foreign equipment" },
          ],
        },
      ],
      functions: [
        { ko: "신호 취득 및 분석", en: "Signal acquisition and analysis" },
        { ko: "데이터 수집 및 진단 변수 계산", en: "Data collection and diagnostic variable calculation" },
        { ko: "성능 평가 및 상태 감시", en: "Performance evaluation and status monitoring" },
        { ko: "원격 진단", en: "Remote diagnostics" },
      ],
      applications: [
        { ko: "Motor-Operated Valve (MOV) 성능 시험", en: "Motor-Operated Valve (MOV) performance test" },
        { ko: "Air-Operated Valve (AOV) 성능 시험", en: "Air-Operated Valve (AOV) performance test" },
      ],
    },
    {
      slug: "acsentt",
      oldUrl: "/sub/engine4.php",
      name: "ACSENTT",
      korName: { ko: "밸브 추력·토크 측정 센서 (ACcurate SENsor for Thrust and Torque)", en: "ACcurate SENsor for Thrust and Torque" },
      tags: ["Accuracy", "Convenience", "Localization"],
      summary: {
        ko: "밸브 스템의 추력과 토크를 측정하는 스트레인 게이지 방식의 센서로, 밸브의 상태를 감시·진단하기 위해 개발된 국산화 제품입니다.",
        en: "A strain gauge-type sensor that measures the thrust and torque of valve stems for monitoring and diagnosing valve condition — a domestically developed product.",
      },
      image: "/images/engine2_big_img.webp",
      features: [
        {
          title: "Precision",
          points: [
            { ko: "우수한 정확도", en: "Excellent accuracy" },
            { ko: "다양한 크기의 밸브 스템 적용 가능", en: "Applicable to valve stems of various sizes" },
          ],
        },
        {
          title: "Specifications",
          points: [
            { ko: "추력 불확도 : ±7.83 % RD", en: "Thrust uncertainty : ±7.83 % RD" },
            { ko: "토크 불확도 : ±7.77 % RD", en: "Torque uncertainty : ±7.77 % RD" },
            { ko: "스템 온도 : -20 ~ 170 ℃", en: "Stem temperature : -20 ~ 170 ℃" },
            { ko: "최대 여기 전원 : 10 VDC", en: "Maximum excitation power : 10 VDC" },
          ],
        },
        {
          title: "Type",
          points: [
            { ko: "탄성 밴드 타입 / 보호판 타입", en: "Elastic band type / Protection plate type" },
          ],
        },
      ],
      functions: [
        { ko: "밸브 스템 추력·토크 측정", en: "Measurement of valve stem thrust and torque" },
        { ko: "MOV 액추에이터 장착 운용", en: "Operation mounted on MOV actuator" },
      ],
      applications: [
        { ko: "Motor-Operated Valve (MOV) 성능 시험", en: "Motor-Operated Valve (MOV) performance test" },
        { ko: "Air-Operated Valve (AOV) 성능 시험", en: "Air-Operated Valve (AOV) performance test" },
        { ko: "원형 축에 작용하는 인장력 측정", en: "Measurement of tension acting on circular axes" },
      ],
    },
  ],
};

export const categories: Category[] = [robotics, ai, engineering];

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
