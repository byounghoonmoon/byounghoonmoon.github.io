---
layout: about
image: /assets/img/blog/hydejack-9.jpg
description: >
  A boutique Jekyll theme for hackers, nerds, and academics,
  with a focus on personal sites that are meant to impress.
hide_description: true
redirect_from:
  - /download/
---

# About
<!--author-->
---

## Personal Data
---
> 1989.03.01 대한민국, 경상남도 진주시 출생  
>
> 연락처: passion.mbh@gmail.com  
>
> Github : [https://github.com/byounghoonmoon](https://github.com/byounghoonmoon)

## Career History
---
<span style="font-size:120%;font-weight:bold;color:red">*SK (2019.03 ~ 현재 )*</span>
- **메트라이프생명 One PPX (2021.05 ~ 2021.12)**
  > 개요: 모바일 창구 포탈(전자정부 프레임워크) → MSA 및 React 전환 (Metlife Global Framework으로 전환)  
  > 
  > **주요역할**
  >   1. 공통 개발 업무  
  >       - Spring Cloud 기술 이용(Zuul, Eureka, Config Server)
  >       - 금융인증서(신규서비스) 개발 및 생체인증 연동
  >       - 공통 유틸 개발 (ARS, SMS 등)
  >   2. **CI/CD 파이프 라인 구축**
  >       - Bamboo를 이용한 소스 빌드 & 배포 스크립트 작성
  >       - 서버 기동 및 중지 Shell Script 작성
  >   3. Apache Web 설치 및 관리
  >       - KENNA 보완 취약점 조치
  >       - Apache Proxy설정 및 CSP 설정 (httpd.conf, httpd-vhost.conf) 
  >   4. 인프라 관련 업무
  >       - L4-Web-Api Gateway-Application 서비스 Flow 방화벽 정책 이해
  >       - 대외기관(금결원 및 녹십자 등) 전용선 및 VPN 구축
  >       - Jennifer를 이용한 서버 별 자원현황 및 모니터링
  >       - 서버 자원 모니터링 Shell Script 작성 (시스템 간의 연결 소켓 수 등) 


- **메트라이프생명 시스템 어플리케이션 운영 (2019.03 ~ 2021.05)**
  >  개요: 메트라이프생명 시스템 운영 및 유지보수  
  >  
  >  **주요역할** 
  >    1. 공통 SA 및 신계약 업무 담당
  >        - Proframe, NCRM (개발 Tool) 문제 발생시 응대
  >        - CI/CD 관련 솔루션 (jira, bamboo, bitbucket, SonarQube) 운영
  >        - 운영 조직 내 Software Architecture
  >        - 타 팀 Trouble Shooting 발생시 지원
  >        - 개발자를 위한 배포 확인 웹서비스 제작
  >        - 업무별 주요 비즈니스 지표 제공을 위한 웹서비스 제작
  >    2. 신계약 업무 담당자
  >        - 청약, 고지, 심사, 수납 프로세스 이해 
  >        - 금융소비자 보호법 관련 대응 및 개발 (청약서류 및 약관 다운로드 수행 여부 수집)
  >        - 신용정보평가원 데이터 운영(재집중) 및 이행 실태 점검 대응  

<span style="font-size:120%;font-weight:bold;color:blue">*미라콤아이앤씨 (2013.02 ~ 2019.03 )*</span>
- **삼성화재 시스템 어플리케이션 운영 (2013.02 ~ 2019.03)**
  > 개요: 삼성화재 시스템 운영 및 유지보수  
  > 
  > **주요역할**
  >   1. 계정/권한 관리 솔루션(OIM) 운영 및 담당  
  >       - 임직원,설계사,협력사 인사정보 연동 프로세스 설계 및 개발
  >       - 동적권한 맵핑 규칙 정의 및 관리  
  >       - 인사별 원장 및 LDAP 등 SubSystem 인사정보 연동 스케줄러 개발 및 관리  
  >       - 금융감독원 감사대응 (계정 Life Cycle , 권한 부여 및 회수 이력 )  
  >   2. 메일, 메신저, 결재, 전자회의 등 협업 솔루션 운영   
  >       - 서버 정기 PM 관리 및 모니터링
  > 
  > **개선사항**  
  >   1. 계정관리솔루션(OIM) 서버 기동 시간 단축 (20분→5분)
  >       - Thread Dump 분석을 통한 Stuck Thread 분석 ( *Stuck부분: BLOBZip Inflate* )
  >       - 배포 구성 변경으로 인한 해결
  >   2. LDAP Provisioning 시간 단축
  >       - Ldap 계정 Life Cycle 재정의로 인한 프로세스 단계 축소
  >       - Legacy 업무 및 코드 분석 후 Ldap Connection Pool 사용하도록 Refactoring 
  >   3. 서버 자원 모니터링 분석을 통한 CPU Core 증설 
  >       - DB AWR Report 및 Weblogic Diagnostic Log 분석  

- **삼성화재 생명/보험 ERP 프로젝트 지원 (2016.10 ~ 2017.10)**
    > 개요: 삼성화재/생명 ERP 프로젝트 
    >
    > **주요역할**
    >   1. 사용자 데이터 플로우 프로세스 정의 (*연관 ERP 모듈: MDG*) 
    >   2. ERP 모듈 계정, 권한 연동 인터페이스 개발 (*SAP JCO , SPML 통신*)
    >   3. Refactoring을 통한 LDAP Provisioning 배포 성능 향상 
    >   4. 계정/권한 관리 솔루션 인하우스 개발 (*Quartz Library 이용*)  

- **금융 망분리/암호화/SSO 프로젝트 (2015.05 ~ 2016.03)**
    > 개요 : 삼성화재 보안 취약점 개선 프로젝트 (망분리, 암호화, SSO)
    > 
    > **주요역할** 
    >   1. 삼성화재 포탈 시스템 구성도 작성 (SSO, GSLB, L4, WEB)
    >   2. Legacy 암호화 모듈 변경 영향도 분석 (SafeDB D’Amo)
    >   3. 신규 SSO LDAP Repository 데이터 연동 스케줄러 개발

---



## Education
---
> 명지대학교 (2008.03~2013.02)
>
> 정보통신공학과 (Information & Communication ENGINEERING)  
  
## Skills and Certification
---
- Language : Java, Python, React  
- FrameWork: Spring, Next  
- Solution: Bitbucket, Bamboo, Splunk
- Certification : 정보처리기사, SQLD, 리눅스마스터
