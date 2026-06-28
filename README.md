# CORE ROBOTICS 홈페이지

코어로보틱스 공식 홈페이지 저장소입니다.

실제 서비스 앱은 [`web`](./web) 디렉터리에 있습니다. 회사소개, 사업영역, 제품 상세, 인증현황, 오시는 길, 뉴스 페이지를 제공하는 한국어/영어 정적 Next.js 사이트입니다.

## 기술 스택

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- 정적 배포: `output: "export"`
- Vercel `vercel.json` 기반 구 PHP URL 리다이렉트

## 프로젝트 구조

```text
.
+-- web/                 # Next.js 애플리케이션
+-- mockups/             # 디자인 목업 및 시안
+-- build-plan.md        # 구현 계획 및 작업 메모
+-- site-audit.md        # 기존 사이트 점검 문서
`-- spec.md              # 사이트 기획/명세 문서
```

## 개발 실행

```bash
cd web
npm install
npm run dev
```

로컬 주소:

```text
http://localhost:3000
```

## 검증 명령

```bash
cd web
npm run lint
npx tsc --noEmit
npm run build
```

현재 기준 검증 결과:

- `npm run build`: 통과
- `npx tsc --noEmit`: 통과
- `npx eslint app components content lib`: 통과

## 환경 변수

문의폼은 Web3Forms를 사용합니다.

```env
NEXT_PUBLIC_WEB3FORMS_KEY=web3forms_access_key
NEXT_PUBLIC_SITE_URL=https://homepage-re.vercel.app
```

이 값이 없으면 사이트는 빌드되지만 문의폼은 전송하지 않고 설정 오류 메시지를 보여줍니다. 운영 배포 전 반드시 실제 키를 설정해야 합니다.
`NEXT_PUBLIC_SITE_URL`은 canonical, sitemap, Open Graph 이미지 URL에 사용됩니다. 공식 도메인 연결 전에는 Vercel 배포 주소를 사용하고, 운영 도메인 연결 후 `https://www.core-robotics.kr`로 바꾸면 됩니다.

## 배포 메모

- `next.config.ts`에서 정적 export를 사용합니다.
- 정적 export 특성상 Next 이미지 최적화는 비활성화되어 있습니다.
- `web/vercel.json`에 기존 PHP 주소에서 새 URL로 이동하는 301 리다이렉트가 있습니다.
- 루트 `/`는 Vercel에서 `/ko/`로 302 리다이렉트됩니다.
- 기본 사이트 URL은 `web/lib/seo.ts`에 정의되어 있고, Vercel 환경 변수 `NEXT_PUBLIC_SITE_URL`로 덮어쓸 수 있습니다.

```text
https://www.core-robotics.kr
```

## SEO 구성

구현된 항목:

- `/ko/`, `/en/` 기반 다국어 라우팅
- 페이지별 메타데이터
- canonical URL
- `hreflang` 대체 언어 URL
- `sitemap.xml`
- `robots.txt`
- 구 사이트 PHP URL 301 리다이렉트
- 1200x630 Open Graph 공유 이미지

## 운영 전 체크리스트

- Vercel 환경 변수 `NEXT_PUBLIC_WEB3FORMS_KEY` 설정
- GitHub 기본 브랜치가 `main`인지 확인
- 배포 후 `/`, `/ko/`, `/en/`, `/sitemap.xml`, `/robots.txt` 접속 확인
- 카카오톡/슬랙 등에서 공유 이미지 미리보기 확인
