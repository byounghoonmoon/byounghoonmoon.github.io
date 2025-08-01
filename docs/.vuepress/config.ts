import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { mdEnhancePlugin } from 'vuepress-plugin-md-enhance'
import { searchPlugin } from '@vuepress/plugin-search'

export default defineUserConfig({
  lang: 'ko-KR', // 한국어로 설정
  title: '나의 개발 이력 및 학습 노트', // 브라우저 탭에 표시될 사이트 제목
  description: '경력, 포트폴리오, 그리고 꾸준한 학습 기록', // 사이트 설명 (SEO 목적)
  
  // GitHub Pages 배포를 위한 base 설정
  // 리포지토리 이름이 'vuepress-starter'인 경우: '/vuepress-starter/'
  // 리포지토리 이름이 'your-username.github.io'인 경우: '/'
  base: '/',

  // Vite를 번들러로 사용
  bundler: viteBundler(),

  // 마크다운 설정 (기본 설정 사용)

  // 기본 테마 사용 및 설정
  theme: defaultTheme({
    // 로고 설정 (docs/.vuepress/public/images/logo.png 경로에 파일이 있어야 함)
    // logo: '/images/logo.png',

    // 상단 네비게이션 바 설정
    navbar: [
      {
        text: '홈',
        link: '/',
      },
      {
        text: '경력',
        link: '/career/',
      },
      {
        text: '포트폴리오',
        link: '/portfolio/',
      },
      {
        text: '학습 노트',
        link: '/notes/',
      }
    ],

    // 사이드바 설정 (자동 생성)
    sidebar: {
      '/career/': [
        {
          text: '경력 사항',
          children: ['/career/README.md'], // career 폴더의 README.md를 링크
        },
      ],
      '/portfolio/': [
        {
          text: '나의 포트폴리오',
          children: [
            '/portfolio/checkout-doctor.md', // 실제 파일 이름에 맞게 수정
          ],
        },
      ],
      '/notes/': [
        {
          text: '🧑‍💻 알고리즘',
          collapsible: true,
          children: [
            '/notes/algorithm/dfs.md',
            '/notes/algorithm/bfs.md',
          ],
        },
        {
          text: '🤖 AI',
          collapsible: true,
          children: [
            // '/notes/ai/ml-dl-ai.md',
            // '/notes/ai/tensorflow-basics.md',
            // '/notes/ai/understanding-gpt.md',
            // '/notes/ai/prompt-engineering.md',
            // '/notes/ai/ai-dev-tools.md',
          ],
        },
        {
          text: '🏗️ 아키텍처',
          collapsible: true,
          children: [
            // '/notes/architecture/metlife-msa-transformation.md',
            // '/notes/architecture/multi-auth-strategy-pattern.md',
            // '/notes/architecture/high-traffic-architecture.md',
            // '/notes/architecture/cicd-pipeline-architecture.md',
          ],
        },
        {
          text: '🍃 Spring',
          collapsible: true,
          children: [
            // '/notes/spring/ioc-di-production.md',
            // '/notes/spring/spring-boot-template.md',
            // '/notes/spring/financial-msa-architecture.md',
            // '/notes/spring/multi-auth-system.md',
            // '/notes/spring/jpa-performance-tuning.md',
          ],
        },
        {
          text: '☁️ 인프라',
          collapsible: true,
          children: [
            // '/notes/infra/aws-services.md',
            // '/notes/infra/docker-basics.md',
            // '/notes/infra/kubernetes-operations.md',
            // '/notes/infra/cicd-pipeline-setup.md',
          ],
        },
        {
          text: '🛠️ Tools',
          collapsible: true,
          children: [
            // '/notes/tools/ide-setup-plugins.md',
            // '/notes/tools/git-workflow.md',
            // '/notes/tools/build-tools.md',
            // '/notes/tools/code-quality-tools.md',
          ],
        }
      ],
    },
    // 언어 토글 활성화 (다국어 지원 시)
    // toggleColorMode: true,

    // Git 리포지토리 정보 (페이지 하단에 "이 페이지 수정 제안" 링크 생성)
    repo: 'https://github.com/byounghoonmoon/vuepress-starter', // 자신의 깃헙 레포지토리 주소
    docsBranch: 'main', // 문서가 있는 브랜치
    docsDir: 'docs', // 문서 폴더 (기본값)

    // 마지막 업데이트 타임스탬프 표시
    lastUpdated: true,
    lastUpdatedText: '최근 업데이트', // 'Last Updated' 텍스트 변경
    contributors: true, // 기여자 표시 여부
    contributorsText: '기여자', // 'Contributors' 텍스트 변경
  }),

  // 플러그인 설정
  plugins: [
    // Markdown 확장 기능
    mdEnhancePlugin({
      // 코드 데모 지원
      demo: true,
    }),
    // Mermaid, Chart, Flowchart 지원
    // markdownChartPlugin({
    //   mermaid: true,
    //   chartjs: true,
    //   flowchart: true,
    // }),
    // 검색 플러그인 추가
    searchPlugin({
      locales: {
        '/': {
          placeholder: '검색',
        },
      },
    }),
    // 추가 플러그인들
    // '@vuepress/plugin-google-analytics', { id: 'G-XXXXX' }
  ],
})