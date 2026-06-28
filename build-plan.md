
1# CORE Robotics 홈페이지 리뉴얼 — 구현 계획 & 체크리스트

작성일: 2026-06-25 · 최종 업데이트: 2026-06-27
관련 문서: [site-audit.md](site-audit.md) (원본 사이트 조사), [bak/README.md](bak/README.md) (원본 백업)

> **현재 상태: Vercel 배포 완료.** 전 페이지(회사소개·로보틱스/AI/엔지니어링·뉴스·문의)·SEO·301 리다이렉트 구현 완료. 남은 일은 ① Web3Forms 키 발급(문의 메일 활성화) ② 커스텀 도메인 연결 두 가지.

---

## 0. 확정된 결정사항 (Decisions)

| # | 항목 | 결정 | 비고 |
|---|------|------|------|
| 1 | 다국어 | **국문 + 영문 2개 언어** | 원본에 `/en` 전문 번역본 존재 → 백업에서 재활용 (번역 비용 0) |
| 2 | 구 URL 처리 | **301 리다이렉트 적용** | 옛 `/sub/*.php` → 새 URL 매핑. SEO 순위·외부 링크 보존 |
| 3 | 문의 폼 | **✅ 구현 (Web3Forms)** | 홈 #contact 섹션에 폼 통합, 백엔드 없이 메일 전송. `NEXT_PUBLIC_WEB3FORMS_KEY` 발급·설정만 남음 |
| 4 | 법적/실무 | **기존 사이트에 있던 것만** | ⚠️ 폼이 곧 실가동 → 개인정보 동의·처리방침 필요(아래 4번 주의 참고) |
| 5 | 운영(애널리틱스 등) | **부분 구성** | ✅ 파비콘·OG·sitemap·robots / ⬜ GA4 미적용 |
| - | 호스팅 | **✅ Vercel 배포 완료** | GitHub 연동(Root=`web/`) 자동배포. 커스텀 도메인 `core-robotics.kr` 연결만 남음 |
| - | 디자인 무드 | **시안 B+ (Refined / B2G Corporate)** | 라이트·블루·신뢰 기반 + 기술적 산세리프(Archivo)+모노 라벨. 브랜드 블루 적용, 실제 로고 사용. `mockups/option-b2-refined.html` |
| - | 메인 인터랙션 | **하이브리드 스크롤** | 메인=원페이지 스크롤스파이(메뉴 자동 하이라이트)+진행률 바. 제품/상세=별도 URL 페이지(SEO·딥링크·301 유지) |
| - | 협력기관 노출 | **🔲 회사 확인 필요** | 한수원·중부발전 등 기관명/로고 게시 가능 여부(허가) 확인 후 확정 |

---

## 1. 기술 스택

- **Next.js (App Router) + TypeScript**
- **Tailwind CSS** — 스타일링
- **Framer Motion** — 스크롤/전환 애니메이션 (interactive)
- **next-intl** 또는 App Router `[locale]` 세그먼트 — 국/영문 i18n
- **출력 방식**: `output: 'export'` 정적 빌드 (서버리스/CDN, cold start 없음)
- 호스팅: Vercel 무료 → (필요 시 Cloudflare Pages / Vercel Pro)

---

## 2. 사이트맵 + 구 URL 301 매핑

i18n 라우팅: `/(ko)` 기본, `/en/...` 영문. (구조는 `app/[locale]/...`)

| 새 URL | 구 URL (301 from) | 콘텐츠 출처(백업) |
|--------|-------------------|------------------|
| `/` | `/` , `/index.php` | index.html |
| `/company` | `/sub/about.php` | sub/about |
| `/company/location` | `/sub/coming.php` | sub/coming (찾아오시는길+지도) |
| `/company/history` | `/sub/history.php` | sub/history |
| `/company/certifications` | `/sub/certi.php` | sub/certi |
| `/products` | `/sub/product.php` | sub/product |
| `/robotics` | `/sub/robot.php` | sub/robot |
| `/robotics/automation` | `/sub/robot1.php` | sub/robot1 (필터 교체 자동화) |
| `/robotics/decommissioning` | `/sub/robot2.php` | sub/robot2 (해체 로봇) |
| `/robotics/master-slave` | `/sub/robot3.php` | sub/robot3 |
| `/robotics/vr-training` | `/sub/robot4.php` | sub/robot4 |
| `/ai` | `/sub/ai.php` | sub/ai |
| `/ai/diagnostic-equipment` | `/sub/ai1.php` | sub/ai1 (AIDE) |
| `/ai/startup-shutdown` | `/sub/ai2.php` | sub/ai2 |
| `/ai/sensor-monitoring` | `/sub/ai3.php` | sub/ai3 |
| `/engineering` | `/sub/engine.php` | sub/engine |
| `/engineering/pov` | `/sub/engine1.php` | sub/engine1 |
| `/engineering/inleakage` | `/sub/engine2.php` | sub/engine2 |
| `/engineering/movids` | `/sub/engine3.php` | sub/engine3 (MOVIDS A+ v2.5) |
| `/engineering/acsentt` | `/sub/engine4.php` | sub/engine4 (ACSENTT) |
| `/news` | `/bbs/board.php?bo_table=news` | bbs/news |
| `/contact` | (신규) | 회사정보+폼(비움) |

> 정적 export에서는 호스팅측 리다이렉트 설정(`vercel.json` redirects 또는 Cloudflare `_redirects`)으로 301 처리.

---

## 3. 구현 체크리스트 (단계별)

### Phase 0 — 준비 ✅ 완료
- [x] 원본 사이트 전체 백업 (`bak/`)
- [x] 국문/영문 콘텐츠 확보
- [x] **디자인 무드 결정** (시안 B+ Refined/B2G 확정)
- [x] 콘텐츠 추출: 페이지별 텍스트 데이터화 (`content/{site,products,company,news}.ts`)
- [x] 브로슈어 연결 (AIDE_br·Filterbot_br PDF 링크 제공, 스펙은 products.ts에 정리)
- [ ] 이미지 최적화 (대용량 WebP 변환) — 정적 export라 `images.unoptimized`, 추후 선택 과제

### Phase 1 — 프로젝트 셋업 ✅ 완료
- [x] Next.js 16 + React 19 + TS + Tailwind v4 스캐폴딩 (`web/`)
- [x] `output: 'export'` 정적 빌드 설정 (next.config.ts)
- [x] i18n 라우팅 구조(`app/[lang]`, ko/en) + `content/site.ts` 번역 리소스 분리
- [x] 공통 레이아웃: 헤더(스크롤스파이+진행률바+모바일메뉴)·푸터·KOR/ENG 토글
- [x] 디자인 토큰(B+ 팔레트/Archivo+IBM Plex Mono+Pretendard) → globals.css

### Phase 2 — 페이지 구현 ✅ 완료
- [x] 메인 `/[lang]` — 히어로+스펙패널 / 협력기관 트러스트 / 사업영역 3카드 / 비전밴드(→회사소개 버튼) / 문의 폼
- [x] 회사: about / location(서울·부산 탭+지도) / history / certifications — 공통 다크 `CompanyHeader`
- [~] 제품 `/products` — 별도 인덱스 대신 **카테고리 페이지(`/robotics`·`/ai`·`/engineering`)로 대체**
- [x] 로보틱스 — `/robotics` + 4종(automation/decommissioning/master-slave/vr-training)
- [x] AI 3종 (diagnostic-equipment / startup-shutdown / sensor-monitoring)
- [x] 엔지니어링 4종 (pov / inleakage / movids / acsentt)
- [x] 뉴스 `/news` — **목록 + 상세 페이지**. 구 게시판 15건의 본문·이미지(25장)를 라이브 사이트에서 마이그레이션(계획의 "정적 목록"보다 확장), ko 원문+en 번역
- [x] 문의 — 홈 `#contact` 섹션에 폼 통합(Web3Forms). 별도 `/contact` 페이지 대신 통합

**계획 외 추가 구현**
- [x] 첫 진입 로고 인트로 스플래시(세션 1회)
- [x] 코드 정리: 회사정보 `companyInfo` 단일화, `L` 타입·`SITE_URL` 공유, 죽은 코드 제거

### Phase 3 — SEO / i18n 마감 ✅ 완료
- [x] 페이지별 고유 `<title>` / `meta description` (generateMetadata, ko·en)
- [x] OG/트위터 카드 태그 (루트 레이아웃 기본값)
- [x] `sitemap.xml`(70 URL), `robots.txt` (app/sitemap.ts·robots.ts)
- [x] `hreflang` 태그 (전 페이지 ko/en/x-default + canonical, `lib/seo.ts`)
- [x] 이미지 `alt` 텍스트
- [x] **구 URL → 신 URL 301 리다이렉트** (`web/vercel.json`)

### Phase 4 — 운영(5번)
- [x] 파비콘 (`app/favicon.ico`)
- [ ] GA4 (또는 동의 불필요한 가벼운 애널리틱스 검토) — 미적용
- [x] 404 페이지 (Next `not-found` 기본 제공)
- [x] 반응형 (작업 중 모바일/태블릿/데스크탑 점검)
- [~] 접근성 기본 (대비·포커스 — 추가 점검 권장)

### Phase 5 — 배포 ✅ 완료
- [x] Vercel 배포 (GitHub 연동, Root=`web/`, 자동배포)
- [ ] 회사 검토
- [ ] 도메인 `core-robotics.kr` 연결 (+ `e-mnd.com` 연결 시 301 동작)

---

## 4. ⚠️ 주의 / 보류 사항

- **문의 폼 (#3)**: ✅ Web3Forms로 구현 완료(홈 #contact). **`NEXT_PUBLIC_WEB3FORMS_KEY`만 발급·설정하면 즉시 메일 전송 활성화.** ⚠️ 키를 넣어 폼이 실가동되면 이름·이메일을 수집·전송하므로 **개인정보 수집·이용 동의 체크박스 + 처리방침이 그 시점부터 필수** → 키 적용과 함께 처리할 것.
- **법적 (#4)**: 원본엔 처리방침 페이지 없었음. 현재 폼은 키 미설정으로 미전송 상태 → 법적 의무 미발생. **Web3Forms 키 적용 시 처리방침 페이지 + 동의 체크박스 동시 추가 필요.**
- **뉴스**: 1차는 정적. 회사가 직접 글 올리고 싶어하면 → 2차에서 헤드리스 CMS(Notion API / Sanity / Supabase) 도입.
- **지도**: location 페이지는 카카오/네이버 지도 임베드 (원본은 다음 지도 사용).

---

## 5. 다음 액션 (배포 후 남은 것)

1. **Web3Forms 키 발급** — web3forms.com에서 `COREROBOTICS@CORE-ROBOTICS.KR`로 access key 발급 → `NEXT_PUBLIC_WEB3FORMS_KEY` 설정 → 문의 메일 활성화 + (동시에) 개인정보 처리방침·동의 추가
2. **커스텀 도메인 연결** — Vercel Settings → Domains에서 `core-robotics.kr` 연결 (canonical/sitemap이 이미 이 도메인 기준). 구 SEO 보존하려면 `e-mnd.com`도 이 배포로 연결해야 301 동작
3. (선택) GA4/애널리틱스, 이미지 WebP 최적화, 접근성 추가 점검
