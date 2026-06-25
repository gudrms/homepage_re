# CORE Robotics 홈페이지 리뉴얼 — 구현 계획 & 체크리스트

작성일: 2026-06-25
관련 문서: [site-audit.md](site-audit.md) (원본 사이트 조사), [bak/README.md](bak/README.md) (원본 백업)

---

## 0. 확정된 결정사항 (Decisions)

| # | 항목 | 결정 | 비고 |
|---|------|------|------|
| 1 | 다국어 | **국문 + 영문 2개 언어** | 원본에 `/en` 전문 번역본 존재 → 백업에서 재활용 (번역 비용 0) |
| 2 | 구 URL 처리 | **301 리다이렉트 적용** | 옛 `/sub/*.php` → 새 URL 매핑. SEO 순위·외부 링크 보존 |
| 3 | 문의 폼 | **UI만 구성, 기능은 비움** | 폼 화면은 만들되 전송 백엔드 미연결(추후 결정) |
| 4 | 법적/실무 | **기존 사이트에 있던 것만** | 원본은 별도 개인정보처리방침 페이지 없음 → 최소 구성 (아래 4번 주의 참고) |
| 5 | 운영(애널리틱스 등) | **구성함** | GA4, 파비콘, OG 태그, sitemap/robots |
| - | 호스팅 | **무료 티어로 테스트 → 결정 후 업글** | Vercel `*.vercel.app`, 도메인은 나중에 연결 |
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

### Phase 0 — 준비 ✅ 일부 완료
- [x] 원본 사이트 전체 백업 (`bak/`)
- [x] 국문/영문 콘텐츠 확보
- [ ] **디자인 무드 결정** (← 진행 전 필요)
- [ ] 콘텐츠 추출: 이미지 속 텍스트 → 페이지별 텍스트 데이터화 (`content/` JSON 또는 MDX)
- [ ] PDF 브로슈어(AIDE_br, Filterbot_br)에서 스펙 텍스트 추출
- [ ] 이미지 최적화 (s1.jpg 2.7MB 등 대용량 → WebP 변환/리사이즈)

### Phase 1 — 프로젝트 셋업 ✅ 완료
- [x] Next.js 16 + React 19 + TS + Tailwind v4 스캐폴딩 (`web/`)
- [x] `output: 'export'` 정적 빌드 설정 (next.config.ts)
- [x] i18n 라우팅 구조(`app/[lang]`, ko/en) + `content/site.ts` 번역 리소스 분리
- [x] 공통 레이아웃: 헤더(스크롤스파이+진행률바+모바일메뉴)·푸터·KOR/ENG 토글
- [x] 디자인 토큰(B+ 팔레트/Archivo+IBM Plex Mono+Pretendard) → globals.css

### Phase 2 — 페이지 구현 (위 사이트맵 순서)
- [x] 메인 `/[lang]` — 히어로+스펙패널 / 협력기관 트러스트 / 사업영역 3카드(실제 이미지) / 비전밴드 / 문의 — 빌드·렌더 검증 완료
- [ ] 회사: about / location(지도) / history / certifications
- [ ] 제품 `/products`
- [x] 로보틱스 — 카테고리 `/robotics` + 4종(automation/decommissioning/master-slave/vr-training). `content/products.ts` 데이터 기반, 백업 이미지·KO/EN 스펙 투입, 렌더 검증 완료
- [ ] AI 3종 (diagnostic-equipment / startup-shutdown / sensor-monitoring)
- [ ] 엔지니어링 4종 (pov / inleakage / movids / acsentt)
- [ ] 뉴스 `/news` — 정적 목록 (게시판 관리 X)
- [ ] 문의 `/contact` — **폼 UI만, 전송 미연결**

### Phase 3 — SEO / i18n 마감
- [ ] 페이지별 고유 `<title>` / `meta description` / `h1` (ko·en 각각)
- [ ] OG/트위터 카드 태그 (카톡·링크 공유 미리보기)
- [ ] `sitemap.xml`, `robots.txt`
- [ ] `hreflang` 태그 (ko/en 상호 연결)
- [ ] 모든 이미지 `alt` 텍스트
- [ ] **구 URL → 신 URL 301 리다이렉트 설정**

### Phase 4 — 운영(5번)
- [ ] 파비콘 / 앱 아이콘
- [ ] GA4 (또는 동의 불필요한 가벼운 애널리틱스 검토)
- [ ] 404 페이지
- [ ] 반응형 최종 점검 (모바일/태블릿/데스크탑)
- [ ] 접근성 기본 점검 (대비, 키보드 포커스)

### Phase 5 — 배포
- [ ] Vercel 무료 배포 (`*.vercel.app`)
- [ ] 회사 검토
- [ ] (결정 시) 도메인 `core-robotics.kr` 연결 + 플랜 업글

---

## 4. ⚠️ 주의 / 보류 사항

- **문의 폼 (#3)**: 화면만 만들고 전송 미연결. 나중에 살릴 때 ① 서버리스 폼(Formspree/Web3Forms) 또는 Vercel Function 중 택, ② **국내법상 폼이 실제 개인정보(이름·이메일)를 수집·전송하면 개인정보 수집·이용 동의 + 처리방침이 필요**. 지금은 폼이 비어있어(전송 안 됨) 법적 의무 미발생 → 폼 활성화 시점에 함께 처리.
- **법적 (#4)**: 원본 사이트엔 별도 개인정보처리방침 페이지가 없었음. "기존에 있던 것만" 방침에 따라 1차엔 추가 안 함. 단 위 폼 활성화 시 필수가 되므로 그때 재검토.
- **뉴스**: 1차는 정적. 회사가 직접 글 올리고 싶어하면 → 2차에서 헤드리스 CMS(Notion API / Sanity / Supabase) 도입.
- **지도**: location 페이지는 카카오/네이버 지도 임베드 (원본은 다음 지도 사용).

---

## 5. 다음 액션

진행하려면 **디자인 무드 1개만 정하면** 바로 Phase 0(콘텐츠 추출) + Phase 1(스캐폴딩) 들어갈 수 있음.
무드 후보: ⓐ 다크·하이테크(원자력/로보틱스 톤) / ⓑ 클린·미니멀 화이트(기업형) / ⓒ 블루·신뢰감 전통 B2B.
