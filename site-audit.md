# CORE Robotics 홈페이지 리뉴얼 사전 정리

작성일: 2026-06-25

## 목적

기존 CORE Robotics 관련 사이트를 확인해 Next.js 기반의 서버 없는 정적 프론트엔드로 이전할 수 있는지 판단하기 위한 1차 정리 문서입니다.

확인 대상:

- https://www.core-robotics.kr/
- https://e-mnd.com/sub/robot2.php
- https://e-mnd.com/

## 현재 사이트 상태

### 1. 신규 도메인: core-robotics.kr

`https://www.core-robotics.kr/`는 현재 실질적인 회사 홈페이지라기보다 안내용 단일 페이지에 가깝습니다.

확인된 주요 내용:

- 페이지 제목: `코어로보틱스 | CORE-ROBOTICS`
- 핵심 문구:
  - `새로운 이름으로 미래 산업의 문을 엽니다.`
  - `저희는 코어로보틱스로 사명을 변경하고, 디지털 혁신 기술을 기반으로 차세대 원자력 및 스마트 조선 분야로 사업을 확장합니다.`
  - `데이터가 에너지가 되고, 기술이 바다를 움직이는 시대, 코어로보틱스가 바로 그 미래의 중심에 있겠습니다.`
- 기존 홈페이지 링크: `https://e-mnd.com/`
- 이미지:
  - `https://www.core-robotics.kr/img/parking.png`

판단:

- 새 도메인은 현재 리뉴얼 전 임시 안내 페이지로 보입니다.
- Next.js 리뉴얼 시 이 페이지보다는 기존 `e-mnd.com` 사이트의 콘텐츠가 실제 본문 자료입니다.

## 기존 사이트 상태

### 2. 기존 도메인: e-mnd.com

`https://e-mnd.com/`가 기존 홈페이지 본체입니다.

주의 사항:

- SSL 인증서가 만료되어 일반 HTTP 클라이언트에서는 인증서 검증 실패가 발생합니다.
- 브라우저나 인증서 검증을 끈 수집 방식으로는 HTML 확인이 가능합니다.
- 공개 HTML 기준으로 메뉴, 텍스트, 이미지 경로는 대부분 직접 접근 가능합니다.

## 확인된 사이트맵

현재 HTML에서 확인한 주요 메뉴 구조는 다음과 같습니다.

```text
/
회사
- /sub/about.php
- /sub/coming.php
- /sub/history.php
- /sub/certi.php

제품
- /sub/product.php

특수목적용 로봇 개발
- /sub/robot.php
- /sub/robot1.php
- /sub/robot2.php
- /sub/robot3.php
- /sub/robot4.php

AI기반 예측/진단 시스템
- /sub/ai.php
- /sub/ai1.php
- /sub/ai2.php
- /sub/ai3.php

엔지니어링 및 진단장비
- /sub/engine.php
- /sub/engine1.php
- /sub/engine2.php
- /sub/engine3.php
- /sub/engine4.php

뉴스
- /bbs/board.php?bo_table=news
```

## 주요 메뉴명

상단/하단 내비게이션에서 확인된 메뉴명:

- 기업소개
- About us
- 찾아오시는길
- 연혁
- 인증현황
- 제품
- 필터 교체 자동화 로봇
- AI기반 진단 장비
- POV 상태 진단 장비
- 뉴스
- Business Issues
- CONTACT US

사업 카테고리:

- 특수목적용 로봇 개발
- Automation Robotics for O&M
- Facility Decommissioning
- Master-Slave Remote Control System
- VR Simulation & Training System
- AI기반 예측/진단 시스템
- Artificial Intelligence Diagnostic Equipment
- AI-Based Startup and Shutdown System
- Online Monitoring System of Sensors
- 엔지니어링 및 진단장비
- POV Diagnostic Service
- Inleakage Test Service
- MOVIDS A+ v2.5
- ACSENTT

## 대표 텍스트

기존 메인 페이지에서 확인된 주요 문구:

```text
㈜코어로보틱스는 인공지능 기반의 예측 진단시스템, 정비 자동화와 원전 해체 등의 특수목적용 로봇,
플랜트의 안전성과 효율성을 위한 다양한 엔지니어링서비스를 제공합니다.
```

```text
작업자의 감각을 대신하는 힘 제어 기술, 시야를 대신하는 비전 기술 등을 통해
접근이 어렵고 작업자의 위험이 높은 작업을 대신할 수 있는 로보틱스 제품을 개발합니다.
```

```text
4차 산업혁명을 주도하는 인공지능 기술 및 빅데이터 분석기술을 기반으로
플랜트 상태감시 기술, 회전기기 예측진단 시스템 등을 개발하였고,
특히 상태진단을 넘어 미래의 고장을 예측하는 예측진단분야에 앞서 나가고 있습니다.
```

```text
동력구동밸브의 성능 평가와 주기적 상태 감시를 위한 진단장비 및 센서 개발,
동력구동밸브 진단서비스, 건물 환기성능시험, 원자력발전소 주기적안전성평가 등의 서비스를 제공합니다.
```

## 회사 정보

기존 사이트 하단에서 확인된 정보:

```text
㈜코어로보틱스
대표자 : 이명진
사업자등록번호 : 124-81-71983
대표전화 : 02-525-8660
팩스 : 02-525-8662
본사 : 서울특별시 서초구 효령로34길 4, 2층 202호 (방배동, 프린스효령빌딩)
공장 : 부산광역시 기장군 장안읍 의과학6로 17
Copyright ⓒCORE ROBOTICS All rights reserved.
```

찾아오시는 길 페이지에서 추가 확인된 연락처:

```text
이메일 : COREROBOTICS@CORE-ROBOTICS.KR
부산 공장 대표번호 : 051-723-5021
부산 공장 팩스번호 : 051-723-5022
```

## 이미지 수집 가능 여부

이미지는 대부분 다음 경로 아래에 있습니다.

```text
https://e-mnd.com:443/theme/basic/img/
```

확인된 예시 이미지:

```text
logo.png
top_logo1.png
top_logo2.png
top_logo3.png
main_img1.png
main_img2.png
main_img3.png
mid01_img1.png
mid01_img2.png
mid01_img3.png
robot_img1.png
robot_img2.png
robot_img3.png
robot_img4.png
robot1_big_img.png
robot2_big_img.png
ai1_img1.png
ai1_img2.png
ai2_big_img.png
ai3_big_img.png
engine3_big_img.png
certi_img1.png
certi_img2.png
certi_img3.png
certi_img4.png
```

판단:

- 이미지 파일 자체는 가져올 수 있습니다.
- 이미지 안에 포함된 글자는 이미지를 그대로 쓰면 화면에는 보입니다.
- 다만 이미지 안의 글자는 HTML 텍스트가 아니므로 SEO, 검색, 접근성, 반응형 편집에는 불리합니다.

## 이미지 안의 글자 처리 기준

이미지 안에 박힌 글자는 이미지를 가져오면 시각적으로 같이 따라옵니다.

하지만 다음 경우에는 OCR 또는 수동 재입력이 필요합니다.

- 검색엔진에 노출되어야 하는 문구
- 모바일에서 줄바꿈/크기 조정이 필요한 문구
- 제품 설명, 주요 기능, 스펙 등 텍스트로 관리해야 하는 정보
- 접근성 대응이 필요한 정보

현실적인 이전 방식:

1. 제품 사진, 인증서, 장비 이미지, 다이어그램은 이미지 그대로 사용
2. 제목, 설명, 기능, 스펙, 회사 소개 문구는 HTML 텍스트로 분리
3. 이미지 안에만 존재하는 중요한 문구는 OCR 또는 수동 입력으로 추출

## 페이지별 확인 예시

### Facility Decommissioning

URL:

```text
https://e-mnd.com/sub/robot2.php
```

확인된 주요 문구:

```text
원전 및 위험설비 해체 시 원격으로 조종하여
해체작업(절단 및 이송)을 수행하는 원격해체 로봇
```

```text
Remote Control
Multi Purpose
Force Feedback
7-DOF Mobile Robot
```

```text
Features
7-DOF Dual-arm Manipulator
- 7 Degrees of Freedom
- Dual-arm Collaboration
- 100kg Payload

Precision Robot Control
- 반복정밀도 : ±0.1mm
- Real-time(1ms) Control

Optimization of Work Environment
- Compact Mobile Platform
- Auto Tool Changing System
- Wheel Mechanism 기반 자유로운 이동성
```

```text
Function
디스크 쏘 절단
플라즈마 커터 절단
배관 및 용기 취급 그리퍼
원격작업 감시

Application
고방사선 구역 구조물 절단 및 해체, 핫셀 원격 작업
```

확인된 이미지:

```text
robot2_icon1.png
robot2_icon2.png
robot2_icon3.png
robot2_big_img.png
```

### Automation Robotics for O&M

URL:

```text
https://e-mnd.com/sub/robot1.php
```

확인된 주요 문구:

```text
원전 내 고방사선 구역에서의 작업에 대한
운영 및 유지보수를 수행하는 자동화 로봇
```

```text
FilterBot_HB
필터 교체 시연
```

```text
Features
Precision Robot Control
- 반복정밀도 : ±0.1mm
- Real-time(1ms) Control

Force Feedback Control
- 6-Axis Force/Torque Sensor
- 정밀한 볼트 체결력(±1%)
- 힘 기반 필터 교체 기능

Vision-Based Recognition
- 필터룸 환경 전용 스테레오 카메라
- 스테레오 카메라 기반 위치 인식
```

### Artificial Intelligence Diagnostic Equipment

URL:

```text
https://e-mnd.com/sub/ai1.php
```

확인된 주요 문구:

```text
AIDE(Artificial Intelligence Diagnostic Equipment)
머신러닝과 인공지능 기술을 통해 전문가의 분석 없이도 고장 원인을
스스로 진단하여 원인별 심각도 및 설비의 계속 운전여부를 판단하는 진단 장비
```

```text
Features
AI-Based Diagnosis
- 머신러닝을 통한 고장 원인 검출

Sensor Location Compensation
- 진동 신호의 구조적 노이즈 최소화 알고리즘

Accuracy
- 진동&초음파 진단 장비의 통합
```

### MOVIDS A+ v2.5

URL:

```text
https://e-mnd.com/sub/engine3.php
```

확인된 주요 문구:

```text
동력구동밸브(MOV/AOV)진단에 사용되는 장비로써
신호 취득 기능, 성능변수 추출 기능 등 밸브 진단을 위한 모든 기능 탑재
```

```text
Function
신호 취득 및 분석
데이터 수집
진단변수 연산
성능평가 및 상태감시
원격 진단
```

## Next.js 정적 사이트 전환 제안

서버 없이 프론트만 운영하려면 다음 구조가 적합합니다.

```text
app/
- page.tsx
- company/page.tsx
- company/location/page.tsx
- company/history/page.tsx
- company/certifications/page.tsx
- products/page.tsx
- robotics/page.tsx
- robotics/automation/page.tsx
- robotics/decommissioning/page.tsx
- robotics/master-slave/page.tsx
- robotics/vr-training/page.tsx
- ai/page.tsx
- ai/diagnostic-equipment/page.tsx
- ai/startup-shutdown/page.tsx
- ai/sensor-monitoring/page.tsx
- engineering/page.tsx
- engineering/pov/page.tsx
- engineering/inleakage/page.tsx
- engineering/movids/page.tsx
- engineering/acsentt/page.tsx
- news/page.tsx
```

정적 export 전제:

- `next.config.js`에서 `output: 'export'` 사용 가능
- 뉴스는 관리자 기능 없이 정적 목록으로 시작 가능
- 문의 폼이 필요하면 서버리스 폼 서비스 또는 외부 폼 서비스 필요
- 지도는 카카오/네이버/구글 지도 임베드 방식으로 처리 가능

## 리뉴얼 시 우선순위

1. 기존 이미지와 텍스트를 먼저 로컬에 백업
2. 사이트맵을 새 URL 구조로 재설계
3. 회사 소개, 사업 영역, 제품 페이지를 정적 데이터로 구성
4. 이미지 안의 중요 텍스트만 HTML 텍스트로 분리
5. 뉴스는 1차 버전에서 정적 게시글 목록으로 처리
6. 문의/지도/브로슈어 다운로드 등 외부 연동이 필요한 기능은 별도 결정

## 객관적 판단

- 기존 사이트는 구조와 디자인 모두 레거시입니다.
- 하지만 콘텐츠는 대부분 정적이라 Next.js 정적 사이트로 이전하기에 적합합니다.
- 별도 백엔드 없이도 회사 소개, 제품 소개, 사업 영역, 인증 현황, 뉴스 목록까지는 구현 가능합니다.
- 다만 게시판 관리, 문의 저장, 파일 업로드 같은 기능을 원하면 별도 백엔드나 외부 서비스가 필요합니다.
- 현재 가장 큰 기술 리스크는 기존 `e-mnd.com` SSL 인증서 만료와 이미지 안 텍스트의 재사용 품질입니다.
