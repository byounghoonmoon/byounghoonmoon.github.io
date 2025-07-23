# VuePress Starter

개발 이력 및 학습 노트를 정리하는 VuePress 사이트입니다.

## 🚀 로컬 개발

### 설치
```bash
npm install
```

### 개발 서버 실행
```bash
npm run docs:dev
```

### 빌드
```bash
npm run docs:build
```

## 📦 GitHub Pages 배포

이 프로젝트는 GitHub Actions를 통해 자동으로 GitHub Pages에 배포됩니다.

### 배포 설정

1. **GitHub 리포지토리 설정**
   - `docs/.vuepress/config.ts` 파일에서 `repo` 필드를 실제 GitHub 리포지토리 URL로 수정
   - `base` 필드를 리포지토리 이름에 맞게 설정:
     - 리포지토리 이름이 `vuepress-starter`인 경우: `'/vuepress-starter/'`
     - 리포지토리 이름이 `your-username.github.io`인 경우: `'/'`

2. **GitHub Pages 활성화**
   - GitHub 리포지토리 설정 → Pages
   - Source를 "GitHub Actions"로 설정

3. **자동 배포**
   - `main` 브랜치에 푸시하면 자동으로 배포됩니다
   - 배포 상태는 Actions 탭에서 확인 가능

### 수동 배포
GitHub Actions 탭에서 "Deploy VuePress site to Pages" 워크플로우를 수동으로 실행할 수 있습니다.

## 📁 프로젝트 구조

```
vuepress-starter/
├── docs/
│   ├── .vuepress/
│   │   └── config.ts          # VuePress 설정
│   ├── career/                # 경력 관련 문서
│   ├── portfolio/             # 포트폴리오
│   ├── notes/                 # 학습 노트
│   └── README.md              # 메인 페이지
├── .github/
│   └── workflows/
│       └── deploy.yml         # GitHub Actions 배포 워크플로우
└── package.json
```

## 🛠️ 기술 스택

- VuePress 2.0
- Vue 3
- Vite
- GitHub Pages
- GitHub Actions 