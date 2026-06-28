# CORE ROBOTICS 홈페이지

코어로보틱스 공식 홈페이지 저장소입니다.

실제 Next.js 애플리케이션은 [web](./web) 디렉터리에 있습니다. 회사 소개, 사업 영역, 제품 상세, 인증 현황, 오시는 길, 뉴스 페이지를 한국어와 영어 정적 페이지로 제공합니다.

## 기술 스택

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- 정적 배포: `output: "export"`
- Vercel `vercel.json` 기반 리다이렉트
- Web3Forms 기반 문의폼

## 프로젝트 구조

```text
.
+-- web/                 # Next.js 홈페이지 애플리케이션
+-- mockups/             # 디자인 목업 및 시안
+-- build-plan.md        # 구현 계획 및 작업 메모
+-- site-audit.md        # 기존 사이트 평가 문서
`-- spec.md              # 사이트 기획/명세 문서
```

## 개발 실행

```bash
cd web
npm install
npm run dev
```

로컬 기본 주소는 `http://localhost:3000`입니다.

## 검증 명령

```bash
cd web
npm run lint
npx tsc --noEmit
npm run build
```

최근 확인 결과:

- `npm run lint`: 통과
- `npx tsc --noEmit`: 통과
- `npm run build`: 통과

## 환경 변수

문의폼과 사이트 기준 URL에 아래 환경 변수를 사용합니다.

```env
NEXT_PUBLIC_WEB3FORMS_KEY=web3forms_access_key
NEXT_PUBLIC_SITE_URL=https://homepage-re.vercel.app
```

- `NEXT_PUBLIC_WEB3FORMS_KEY`가 없으면 문의폼은 API로 전송하지 않고 설정 오류 메시지를 보여줍니다.
- `NEXT_PUBLIC_SITE_URL`은 canonical, sitemap, Open Graph 이미지 URL의 기준 도메인입니다.
- 공식 도메인 연결 후에는 `NEXT_PUBLIC_SITE_URL=https://www.core-robotics.kr`로 설정합니다.

## 배포 메모

- `web/next.config.ts`에서 정적 export를 사용합니다.
- 정적 export 특성상 Next 이미지 최적화 서버는 비활성화되어 있습니다.
- `web/vercel.json`에서 기존 PHP URL을 새 정적 URL로 301 리다이렉트합니다.
- 루트 `/`는 Vercel에서 `/ko/`로 302 리다이렉트합니다.
- `/ko/`와 `/en/` 사이의 언어 전환은 각 언어 경로로 직접 이동하므로 루트 리다이렉트와 충돌하지 않습니다.

## SEO 구성

현재 반영된 항목:

- `/ko/`, `/en/` 기반 다국어 라우팅
- 페이지별 metadata
- canonical URL
- `hreflang` 대체 언어 URL
- `sitemap.xml`
- `robots.txt`
- 기존 PHP URL 301 리다이렉트
- 1200x630 Open Graph/Twitter 공유 이미지

## 성능 메모

- 초기 스플래시 화면은 제거했습니다.
- 홈 hero 영역의 초기 `Reveal` 애니메이션은 제거해 첫 화면 텍스트가 즉시 렌더링되도록 했습니다.
- Google 웹폰트 2종은 제거했고, Pretendard 로컬 폰트와 시스템 폰트를 사용합니다.
- Lighthouse 성능 점수는 측정 환경과 Vercel 캐시 상태에 따라 변동됩니다. 배포 직후에는 동일 URL로 2회 이상 측정해 비교하는 편이 정확합니다.

## 운영 전 체크리스트

- Vercel Production 환경 변수 `NEXT_PUBLIC_WEB3FORMS_KEY` 설정
- 공식 도메인 사용 시 `NEXT_PUBLIC_SITE_URL=https://www.core-robotics.kr` 설정
- 배포 후 `/`, `/ko/`, `/en/`, `/sitemap.xml`, `/robots.txt` 접속 확인
- 카카오톡, Slack, Facebook 등에서 공유 이미지 미리보기 확인
- Lighthouse는 모바일/데스크톱 각각 측정하고 FCP, LCP, CLS, TBT를 별도로 기록
