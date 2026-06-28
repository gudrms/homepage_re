# CORE ROBOTICS Web App

코어로보틱스 공식 홈페이지의 Next.js 애플리케이션입니다.

## 명령어

```bash
npm install
npm run dev
npm run lint
npx tsc --noEmit
npm run build
```

## 주요 라우트

- `/`: Vercel에서 `/ko/`로 리다이렉트
- `/ko/`, `/en/`: 홈
- `/ko/company`, `/en/company`: 회사 소개
- `/ko/company/history`, `/en/company/history`: 연혁
- `/ko/company/certifications`, `/en/company/certifications`: 인증 현황
- `/ko/company/location`, `/en/company/location`: 오시는 길
- `/ko/robotics`, `/en/robotics`: Robotics 사업 영역
- `/ko/ai`, `/en/ai`: AI 사업 영역
- `/ko/engineering`, `/en/engineering`: Engineering 사업 영역
- `/ko/{category}/{slug}`, `/en/{category}/{slug}`: 제품 상세
- `/ko/news`, `/en/news`: 뉴스 목록
- `/ko/news/{id}`, `/en/news/{id}`: 뉴스 상세

## 주요 파일

```text
app/                  # Next.js App Router 페이지
components/           # 공통 UI 컴포넌트
content/              # 사이트 문구, 제품, 뉴스, 회사 정보
lib/i18n.ts           # 언어 설정
lib/seo.ts            # 사이트 URL 및 SEO 헬퍼
public/images/        # webp 이미지 자산
public/files/         # PDF 다운로드 파일
public/og-image.png   # SNS 공유용 Open Graph 이미지
vercel.json           # 기존 URL 및 루트 리다이렉트
next.config.ts        # 정적 export 설정
```

## 콘텐츠 수정 위치

- `content/site.ts`: 홈, 내비게이션, 푸터 문구
- `content/products.ts`: 사업 영역 및 제품 상세
- `content/news.ts`: 뉴스 목록 및 상세 본문
- `content/company.ts`: 회사 정보, 주소, 인증 현황, 회사 소개 문구

## 문의폼

문의폼은 Web3Forms API로 전송합니다.

`.env.local` 또는 Vercel 환경 변수에 아래 값을 설정합니다.

```env
NEXT_PUBLIC_WEB3FORMS_KEY=web3forms_access_key
NEXT_PUBLIC_SITE_URL=https://homepage-re.vercel.app
```

- `NEXT_PUBLIC_WEB3FORMS_KEY`가 없으면 사용자가 제출 버튼을 눌러도 외부 API로 전송하지 않고 설정 오류 메시지를 표시합니다.
- `NEXT_PUBLIC_SITE_URL`은 canonical, sitemap, Open Graph 이미지 URL의 기준 도메인입니다.
- 공식 도메인 연결 후에는 `https://www.core-robotics.kr`로 설정합니다.

## SEO

구성 항목:

- 알려진 한국어/영어 경로 정적 생성
- canonical 및 `hreflang` metadata
- `sitemap.xml`
- `robots.txt`
- `public/og-image.png` 기반 Open Graph/Twitter 공유 이미지
- 기존 PHP URL에서 새 URL로 이동하는 Vercel 301 리다이렉트
- `/`에서 `/ko/`로 이동하는 Vercel 302 리다이렉트

사이트 기준 URL은 `lib/seo.ts`의 `SITE_URL`에서 관리하며, `NEXT_PUBLIC_SITE_URL` 환경 변수로 덮어쓸 수 있습니다.

## 성능 관련 구현

- `Splash` 컴포넌트는 제거되어 첫 화면을 가리지 않습니다.
- 홈 hero 영역은 `Reveal` 지연 없이 서버 렌더링된 텍스트가 바로 보입니다.
- 하단 카드, 제품 상세, 인증 갤러리 등에는 `Reveal` 애니메이션이 남아 있습니다.
- Pretendard는 로컬 폰트로 사용하되 `preload: false`입니다.
- 추가 Google 웹폰트는 사용하지 않습니다.
- 정적 export 환경이라 `next/image` 최적화 서버는 사용하지 않고 일반 이미지 자산을 직접 제공합니다.

## 배포 후 확인

- `/ko/`와 `/en/` 접속
- 언어 전환 링크 동작
- `/sitemap.xml`, `/robots.txt` 응답
- 기존 PHP URL 301 리다이렉트
- `/`에서 `/ko/` 302 리다이렉트
- 문의폼 성공/실패 메시지
- 카카오톡 등 메신저 공유 이미지 미리보기
- Lighthouse 모바일/데스크톱 성능 재측정
