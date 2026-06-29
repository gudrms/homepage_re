# CORE Robotics 홈페이지 — 기술 명세 (spec)

작성일: 2026-06-25
관련 문서: [site-audit.md](site-audit.md)(원본 조사) · [build-plan.md](build-plan.md)(계획·체크리스트) · [bak/README.md](bak/README.md)(원본 백업)

> 이 문서는 **기술 구조/아키텍처**를 다룹니다. 일정·우선순위·진행률은 build-plan.md 참고.

---

## 1. 기술 스택

| 영역 | 선택 | 비고 |
|------|------|------|
| 프레임워크 | **Next.js 16 (App Router)** | `output: 'export'` 정적 빌드 |
| 언어 | **TypeScript** | |
| 런타임/UI | **React 19** | |
| 스타일 | **Tailwind CSS v4** + `globals.css` 커스텀 토큰 | v4는 CSS `@theme` 기반 |
| 폰트 | Archivo(디스플레이) · IBM Plex Mono(라벨) · Pretendard(한글, CDN) | `next/font/google` + CDN |
| 인터랙션 | IntersectionObserver (스크롤스파이·reveal) | 라이브러리 無 |
| 배포 | Vercel 무료 → (Pro/Cloudflare Pages) | 정적/CDN, cold start 없음 |

원칙: 백엔드/DB 없음(1차). 모든 페이지 빌드타임 정적 생성. 동적 기능(문의 전송 등)은 추후 외부 서비스/서버리스 함수로 분리.

---

## 2. 디자인 시스템 (시안 B+)

- 무드: 라이트·블루·신뢰형(B2G/원자력·발전 적합)
- 컬러 토큰 (`app/globals.css :root`)
  - `--navy #0b2344` · `--blue #0e6fb3` · `--blue-bright #1f97d4`
  - `--bg #f5f8fc` · `--surface #fff` · `--ink #0c2340` · `--line #dbe3ee`
- 타이포: 제목 Archivo(800) / 기술 라벨 IBM Plex Mono / 본문·한글 Pretendard
- 로고: `public/logo.png` (브랜드 컬러 스워시 + 워드마크). 다크 배경엔 화이트 단색 처리.

---

## 3. 디렉토리 구조 (`web/`)

```
web/
├─ app/
│  ├─ layout.tsx            # 루트 레이아웃 (html lang=ko, 폰트, 기본 metadata)
│  ├─ page.tsx              # 루트 / → /ko/ 클라이언트 리다이렉트
│  ├─ globals.css           # 디자인 토큰 + 컴포넌트 스타일
│  └─ [lang]/               # ko · en (generateStaticParams, dynamicParams=false)
│     ├─ layout.tsx         # Header + main + Footer + HtmlLang
│     ├─ page.tsx           # 홈 (히어로/트러스트/사업영역/비전/문의)
│     └─ (이후) robotics/ ai/ engineering/ company/ news/ contact/
├─ components/
│  ├─ Header.tsx            # 'use client' — 스크롤스파이·진행률바·모바일메뉴·언어전환
│  ├─ Footer.tsx
│  ├─ Reveal.tsx            # 'use client' — 스크롤 진입 애니메이션 래퍼
│  └─ HtmlLang.tsx          # 'use client' — /en 의 <html lang> 보정
├─ content/
│  └─ site.ts               # ★ 모든 카피/데이터 (ko·en 구조화) — 단일 소스
├─ lib/
│  └─ i18n.ts               # locales, Lang 타입, isLang()
├─ public/
│  ├─ logo.png
│  └─ images/               # 백업에서 선별한 제품·다이어그램 이미지
└─ next.config.ts           # output:export, images.unoptimized, trailingSlash
```

---

## 4. 라우팅 & i18n

- **언어**: `ko`(기본) / `en`. `app/[lang]/` 동적 세그먼트 + `generateStaticParams()`로 `/ko/`, `/en/` 정적 생성.
- **루트 `/`**: 정적 export라 서버 리다이렉트 불가 → `app/page.tsx`에서 클라이언트 `/ko/` 리다이렉트.
- **`<html lang>`**: 루트는 `ko` 고정, `/en`은 `HtmlLang` 컴포넌트가 클라이언트에서 보정. (SEO용 `hreflang`은 `alternates.languages`로 별도 제공)
- **콘텐츠**: 컴포넌트는 `content/site.ts`에서 `obj[lang]`로 문자열 조회. 번역 추가는 이 파일만 수정.

### 사이트맵 (구 URL → 신 URL, 301 매핑)
전체 표는 build-plan.md §2 참고. 요약:
```
/[lang]/                      (홈)
/[lang]/company , /company/{location,history,certifications}
/[lang]/products
/[lang]/robotics , /robotics/{automation,decommissioning,master-slave,vr-training}
/[lang]/ai , /ai/{diagnostic-equipment,startup-shutdown,sensor-monitoring}
/[lang]/engineering , /engineering/{pov,inleakage,movids,acsentt}
/[lang]/news
/[lang]/privacy
```
301 리다이렉트(`/sub/*.php` → 신 URL)는 **배포 단계**에서 `vercel.json`(redirects) 또는 Cloudflare `_redirects`로 처리. (정적 export는 next.config redirects 미지원)

---

## 5. 데이터 모델 (`content/site.ts`)

- `company` — 사업자번호/전화/팩스/이메일 (언어 무관)
- `companyName`, `ceoName`, `addresses` — `Record<Lang,string>`
- `nav: NavItem[]` — 스크롤스파이 대상 섹션(id/href/label)
- `businessAreas: BusinessArea[]` — 3개 사업영역(번호·태그·이미지·국영문 제목·설명·항목·상세 href)
- `specs`, `trustOrgs`, `home` — 홈 화면 카피/수치

향후 제품 상세는 `content/products.ts`(가칭)에 같은 패턴으로 카테고리/제품 데이터 추가 → 페이지는 데이터 기반 렌더.

---

## 6. 빌드 & 배포

```bash
cd web
npm run dev      # 개발 (localhost:3000)
npm run build    # 정적 빌드 → web/out/
```
- 산출물 `web/out/` 을 Vercel/Cloudflare Pages에 배포. (Vercel은 Root Directory = `web`)
- 이미지: `output:export` + `images.unoptimized` (정적 호스팅엔 최적화 서버 없음). 대용량 원본은 빌드 전 WebP/리사이즈 권장.

---

## 7. 미결 / 주의

- **문의 폼**: Web3Forms 전송 연동, 개인정보 수집·이용 동의 체크박스 및 `/[lang]/privacy` 처리방침 적용. 실제 운영 전 수신 메일과 처리방침 문구는 회사 검토 필요.
- **협력기관 표기**(한수원·중부발전): 회사 게시 허가 확인 후 확정.
- **Next 16 주의**: `web/AGENTS.md` 안내대로 `node_modules/next/dist/docs/` 참고. `params`는 `Promise`(await 필요).
- **이미지 속 텍스트**: 스펙/기능은 HTML 텍스트로 분리(SEO·접근성). site-audit.md §이미지 처리 기준 참고.

## 8. 향후 확장: 채용/복지 페이지

채용 관련 콘텐츠는 1차 운영 안정화 후 별도 개발한다. 초기 범위는 채용 공고 관리 시스템이 아니라 정적 안내 페이지로 제한한다.

### 권장 라우트

```
/[lang]/careers
```

### 초기 페이지 구성

- 인재상: 원자력·발전·로보틱스·AI 진단 분야에 맞는 문제 해결 역량과 안전 중심 태도
- 주요 직무 분야: Robotics, AI Diagnostics, Engineering, Software/Control
- 근무 환경 및 복지: 확정된 제도만 기재하고, 내용이 부족하면 채용 페이지 내부 섹션으로 처리
- 채용/상시 지원 문의: 별도 이력서 업로드 없이 기존 문의 채널 또는 회사 이메일로 유도

### 보류할 기능

- 이력서/포트폴리오 파일 업로드: 개인정보·파일 보관·보안·스팸 대응 범위가 커지므로 초기 버전에서는 제외
- 채용 공고 상세(`/careers/{slug}`): 실제 공고 운영이 시작될 때 확장
- 지원자 DB/관리자 기능: 백엔드 도입 시 별도 설계

### 개인정보 영향

채용 문의가 이름, 이메일, 연락처, 경력 정보까지 포함하면 개인정보 처리방침에 채용 목적, 보유 기간, 수집 항목을 별도로 추가해야 한다. 이력서 파일을 받는 경우 민감 정보 포함 가능성이 있으므로 동의 문구와 보관 정책을 재검토한다.
