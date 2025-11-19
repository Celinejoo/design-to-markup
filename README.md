# 과제 제출

## 저장소 URL
https://github.com/Celinejoo/design-to-markup

## 구현의도

### 반응형
PC 화면을 기준으로 레이아웃을 먼저 구축한 뒤 Mobile 환경으로 축소하는 반응형을 구현했습니다.
PC 레이아웃으로 구조를 잡고 모바일에서는 폰트 크기, 여백 조정을 하여 단순화하는 방향으로 설계했습니다.


### 공통컴포넌트
-  UI 요소의 일관성과 유지보수를 높이기 위해 공통컴포넌트를 우선적으로 구축했습니다. 공통 컴포넌트의 대표적으로는 Typography, Button, Section, Tag 가 있습니다. 각 컴포넌트에서 반응형 규칙을 적용하여 공통적으로 처리할 수 있도록 구성했습니다. 
- 공통으로 사용하는 색상과 텍스트 스타일을 하나의 시스템으로 통합하여 관리하고자 했습니다. 프로젝트의 색상과 폰트 스타일을 각각 하나의 파일에서 관리하여 수정이 용이할 수 있게 했으며 피그마에서 정의한 폰트 시스템과 동일한 이름을 적용하여 개발과 디자인의 간극을 최소화 하고자 했습니다.


## 주요 선택 사항

### breakpoint
breakpoint는 레이아웃 변화가 크지 않은 디자인이었기 때문에 단일 포인트로 960px 을 선택했습니다.
960px의 선택 이유는 데스크탑에서 태블릿으로 전화했을 때의 경계점이기 때문에 선택을 했습니다.

### Swiper를 슬라이드 구현에 사용
반응형 breakpoint 옵션, 강력한 터치 제스처 지원, 다양한 기본 기능(autoplay, loop 등)을 제공하는 점을 고려하여 슬라이드는 Swiper로 제작했습니다.
960px 기준의 PC/Mobile 슬라이드 설정을 옵션 기반으로 반응형 화면 구현을 쉽게 할 수 있는 장점이 있습니다.

### react-intersection-observer
스크롤 이벤트가 필요한 컴포넌트에는 react-intersection-observer를 적용했습니다.
`useInView` hook을 제공하여 선언적이고 간결하게 구성할 수 있습니다.


### 폴더 구조
`pages/index.tsx ` 
    - 각 섹션 컴포넌트를 조합해 하나의 페이지를 구성하는 엔트리
`pages/components`  
    -  페이지를 구성하는 개별 섹션들
`pages/shared`  
    - 여러 페이지에서 재사용되는 공통 컴포넌트 모음  
    - 버튼, 카드, 언어 드롭다운 등 공통 UI 요소 관리

### 접근성(A11y)
aria-label을 적용하여 스크린리더 접근성을 유지했습니다. 
[대한민국 정부 디자인 시스템](https://www.krds.go.kr/html/site/index.html)을 참고하여 접근성 기준을 맞추고자 했습니다. 


## 오류사항
### Storybook 폰트 미적용 
Storybook의 preview.tsx 에서 font가 불려와지지 않고 있는 상황
@font-face 경로가 Storybook의 정적 파일 환경에서는 올바르게 resolve되지 않을 가능성이  있습니다. (실제 페이지에서는 정상적으로 커스텀 폰트가 적용됨)


## 기술 스택
- Framework: [Next.js 14](https://nextjs.org/)
- Language: [TypeScript](https://www.typescriptlang.org/)
- Styling: [Sass](https://sass-lang.com/) / [CSS Modules](https://github.com/css-modules/css-modules)
- UI Components: [Storybook](https://storybook.js.org/)
- Linting: [ESLint](https://eslint.org/)
- Formatting [Prettier](https://prettier.io/)
- Package Manager [Yarn](https://yarnpkg.com/)

## 시작하기

### 전제 조건

- [Node.js](https://nodejs.org/en/) (v20.x 이상 권장)
- [Yarn](https://yarnpkg.com/getting-started/install)

### 설치

1.  프로젝트 디렉토리로 이동합니다.
    ```bash
    cd design-to-markup
    ```
2.  의존성을 설치합니다.
    ```bash
    yarn install
    ```

### 사용 가능한 스크립트

-   `yarn storybook`: Storybook을 실행합니다. (http://localhost:6006)
-   `yarn storybook:build`: Storybook을 정적 파일로 빌드합니다.
-   `yarn dev`: 로컬에서 프로젝트를 실행합니다.