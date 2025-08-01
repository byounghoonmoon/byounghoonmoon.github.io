---
title: AI 의료 진단 서비스(25.06~25.07)
# description: 이 프로젝트에 대한 간략한 설명
---

# AI를 활용한 의료진단 서비스

> 💡 **AI와 함께하는 스마트한 진료과 추천 서비스**  
> 사용자의 증상을 AI가 분석하여 적절한 진료과를 추천하고, 주변 병원까지 찾아주는 원스톱 의료 서비스

## 📋 프로젝트 정보
* **기간**: 2025.06 ~ 2025.07 (2개월)
* **주요 활용 도구**
  - Claude: AI 페어 프로그래밍 및 코드 리뷰
  - Cursor: AI 기반 코드 에디터

## 💡 프로젝트 개요
이 프로젝트는 현대 기술의 두 가지 큰 트렌드인 AI와 최신 웹 프레임워크를 실제로 경험해보고자 시작된 실험적인 토이 프로젝트입니다. 특히 Cursor AI를 활용한 페어 프로그래밍 방식의 개발과 Svelte Kit이라는 새로운 프론트엔드 프레임워크를 학습하면서, Google의 Gemini AI를 활용하여 의료 진단 서비스를 구현해보았습니다.

> **주요 특징**
> - 🤖 AI 기반 진료과 추천
> - 💬 대화형/단일입력 듀얼 모드
> - 🌍 6개 언어 지원
> - 🗺 위치 기반 병원 찾기

육아휴직 중에 진행한 이 프로젝트는 단순한 기술 검증을 넘어, 클라우드 배포 경험을 쌓고 최신 기술 스택을 실제로 다뤄보는 값진 학습 기회가 되었습니다. 상업적인 목적보다는 개인의 기술적 성장과 현대 기술 트렌드를 따라가보는 것에 초점을 맞추었습니다.

## 🚀 기술 스택

### 프론트엔드
[![Svelte](https://img.shields.io/badge/Svelte-FF3E00?style=for-the-badge&logo=svelte&logoColor=white)](https://svelte.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![i18n](https://img.shields.io/badge/i18n-26A69A?style=for-the-badge&logo=i18next&logoColor=white)](https://www.i18next.com/)
[![Web Speech API](https://img.shields.io/badge/Web_Speech_API-4285F4?style=for-the-badge&logo=google&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API)

> **Svelte Kit 기반의 모던 웹 애플리케이션**
* 타입 안정성을 위한 TypeScript 적용
* i18n을 통한 다국어 지원 (6개 언어)
* Web Speech API 활용 음성 인터페이스
* 반응형 디자인 및 모바일 최적화

### 백엔드
[![Spring Boot](https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white)](https://spring.io/projects/spring-boot)
[![Java](https://img.shields.io/badge/Java_21-007396?style=for-the-badge&logo=java&logoColor=white)](https://www.java.com/)
[![JPA](https://img.shields.io/badge/JPA-59666C?style=for-the-badge&logo=hibernate&logoColor=white)](https://spring.io/projects/spring-data-jpa)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=json-web-tokens&logoColor=white)](https://jwt.io/)
[![Swagger](https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=black)](https://swagger.io/)

> **Spring Boot 기반 서버 아키텍처**
* **핵심 프레임워크**
  - Spring Boot Web & Security
  - Spring Data JPA
  - Spring Validation
  - Spring Actuator 모니터링
  - Spring Retry 장애 복구

* **데이터베이스 & 캐싱**
  - PostgreSQL 프로덕션 DB
  - H2 Database 테스트 환경
  - Caffeine Cache 성능 최적화

* **보안 & 인증**
  - Spring Security 기반 보안
  - JWT 토큰 인증 (JJWT 0.12.5)

* **데이터 처리**
  - Apache POI Excel 처리
  - Jackson JSON 처리
  - Lombok 코드 간소화

* **API 문서화**
  - OpenAPI(Swagger) 문서 자동화
  - Spring REST Docs

* **개발 도구**
  - Spring Boot Actuator 모니터링
  - 테스트 자동화 도구

### AI & 외부 서비스
[![Google Gemini](https://img.shields.io/badge/Google_Gemini-4285F4?style=for-the-badge&logo=google&logoColor=white)](https://cloud.google.com/)
[![Naver Maps](https://img.shields.io/badge/Naver_Maps-03C75A?style=for-the-badge&logo=naver&logoColor=white)](https://navermaps.github.io/maps.js/)

> **AI 및 외부 API 통합**
* Google Gemini AI 모델 활용
* Naver Maps API 연동
* 건강보험심사평가원 공공데이터 활용

### 인프라 & 클라우드
[![Azure](https://img.shields.io/badge/Azure-0089D6?style=for-the-badge&logo=microsoft-azure&logoColor=white)](https://azure.microsoft.com/)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)
[![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)

> **클라우드 네이티브 아키텍처**
* Azure Cloud 기반 백엔드 호스팅
* Vercel을 통한 프론트엔드 배포
* Docker 컨테이너화
* Railway, Supabase 활용 경험

## 💭 개발 과정에서의 인사이트
### AI 도구와 개발자의 역할
> **AI와 함께하는 새로운 개발 패러다임**

이 프로젝트를 통해 현대 개발 환경에서 AI 도구의 역할과 개발자의 정체성에 대해 깊이 고민하게 되었습니다. AI가 코드 작성을 주도하는 경험은 때로는 개발자로서의 정체성에 대한 의문을 불러일으켰지만, 동시에 AI를 하나의 강력한 도구로 바라보는 새로운 관점을 갖게 되었습니다.

특히 이 경험은 미래의 개발 환경에서 1인 개발자/기업의 가능성을 엿볼 수 있는 기회였습니다. **AI는 개발자의 능력을 대체하는 것이 아닌, 증폭시키는 도구**로서의 가치를 보여주었습니다.

## 🎯 내가 기여한 부분
### 시스템 설계 및 아키텍처
> **클라우드 네이티브 아키텍처 설계**
* 클라우드 인프라 구축
  - **Azure** 기반의 확장 가능한 백엔드
  - 다양한 클라우드 플랫폼 검토
* 데이터 파이프라인 구축
  - 공공데이터 배치 처리 시스템
  - 대용량 데이터 처리 최적화

### 기술적 도전과 해결
> **최신 기술 스택 활용**
* **Java 21 최신 기능**
  - 함수형 프로그래밍 적용
  - 효율적 데이터 처리
* **외부 서비스 통합**
  - Naver Maps API 연동
  - 공공데이터(심평원) 연동

### AI 도구 활용 전략
> **효율적인 AI 활용 전략 수립**
* **LLM 기반 개발**
  - AI 코드 생성 최적화
  - 개발 생산성 향상
* **AI 응답 품질 관리**
  - Temperature 파라미터 튜닝
  - 사용자 경험 최적화

## 🔗 데모 및 GitHub 링크
> **서비스 체험하기**
* [서비스 데모](https://checkout-doctor-bh.vercel.app/) - Vercel을 통해 배포된 프로덕션 환경

## 📸 프로젝트 스크린샷
### 메인 화면
<img src="/portfolio/images/checkout_doctor/main.png" alt="메인 화면" width="300"/>

> **핵심 기능**
* 모드 선택 및 설정
  - **채팅 모드** / **단일 증상 입력 모드** 전환
  - **다국어 지원** (한국어/영어/일본어/중국어/베트남어/태국어)
* 사용자 편의 기능
  - 이전 진단 이력 확인
  - 위치 기반 병원 찾기
  - 설정 초기화

### 단일 증상 입력 모드
<img src="/portfolio/images/checkout_doctor/form.png" alt="증상 입력" width="300"/>

> **빠른 진단을 위한 간편 입력 방식**
* ⚡ 증상만 입력하면 바로 진료과 추천
* 🎯 정확한 진단을 위한 직관적 UI
* 📝 간단하고 명확한 사용자 경험

### 대화형 진단 모드
<img src="/portfolio/images/checkout_doctor/chat.png" alt="AI 채팅" width="300"/>

> **AI와 자연스러운 대화를 통한 정밀 진단**
* 💬 자연어 기반 상세 상담
* 🎙 음성 대화 지원
* 🔄 실시간 진료과 추천 업데이트
  - **정확도 향상**: 대화 맥락 기반 분석
  - **다중 추천**: 정형외과, 신경외과, 재활의학과 등

### 진단 결과 및 신뢰도
<img src="/portfolio/images/checkout_doctor/diagnosis.png" alt="진단 결과" width="300"/>

> **신뢰할 수 있는 AI 진단 결과**
* ✨ **최적 진료과** 추천 (예: 소아청소년과)
* 📊 **신뢰도 지표** 제공 (예: 95.0%)
* 🏥 원클릭 주변 병원 찾기

### 주변 병원 찾기
<img src="/portfolio/images/checkout_doctor/hospital.png" alt="병원 정보" width="300"/>

> **네이버 지도 기반 스마트 병원 찾기**
* 📍 실시간 위치 기반 검색
* 📱 모바일 최적화 UI
* ℹ️ 상세 정보 제공
  - **진료과목** 정보
  - **연락처** 및 위치
  - **거리** 정보 