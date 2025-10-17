# Git SSH 통신 정리

## 1. SSH 인증서란?

SSH(Secure Shell)는 원격 서버와 **암호화된 통신**을 가능하게 하는
프로토콜입니다.\
Git은 HTTPS 외에도 SSH를 이용해 원격 저장소와 안전하게 통신할 수
있습니다.

SSH 인증은 **공개키/개인키(Public/Private Key)** 기반으로 작동합니다.

- **Private Key (개인키)**: 본인만 보관해야 함 (절대 외부 노출 금지)
- **Public Key (공개키)**: 서버(GitHub 등)에 등록하는 키
- 인증 과정:\
    클라이언트가 개인키로 서명 → 서버가 등록된 공개키로 검증 → 비밀번호
    없이 신뢰 기반 로그인

------------------------------------------------------------------------

## 2️. Git SSH 키 생성 및 등록

### 키 생성

``` bash
# 기본 RSA 키 (비추천, 구버전)
ssh-keygen -t rsa -b 4096 -m PEM -C "your_email@example.com"

# 권장: ED25519 (보안성 높고, 키 사이즈 작음)
ssh-keygen -t ed25519 -C "your_email@example.com"

# (참고) 호환성을 위해 PEM 형태로 저장하고 싶다면
ssh-keygen -t ed25519 -m PEM -C "your_email@example.com"
```

명령 실행 후 예시 경로:\
    /home/user/.ssh/id_ed25519\
    /home/user/.ssh/id_ed25519.pub

### GitHub에 공개키 등록

1. GitHub → **Settings → SSH and GPG keys → New SSH key**
2. `id_ed25519.pub` 내용 전체 복사 후 붙여넣기 `(cat ~/.ssh/id_ed25519.pub)`
3. 이름(예: "My Laptop SSH") 입력 → 저장

### 연결 테스트

``` bash
ssh -T git@github.com
```

정상이라면 아래 메시지가 나옵니다.\
    Hi yourname! You've successfully authenticated, but GitHub does not provide shell access.

------------------------------------------------------------------------

## 3️. SSH 알고리즘 비교 요약

  알고리즘|보안성|속도|특징|비고
  --|--|--|--|--
  **RSA**|중간|느림|오래된 표준|SHA-1 기반 RSA는 폐기추세
  **ECDSA**|높음|빠름|타원곡선 기반|PEM 호환성 제한 기능
  **ED25519**|매우 높음|매우 빠름|최신 표준, 짜릅은 키 길이| 가장 권장

> 🔒 **정리:**
>
> - RSA: 호환성은 좋지만 보안상 취약 (SHA-1 기반은 GitHub에서 차단됨)\
> - ECDSA: 보안/성능 우수하지만 PEM 형식 미지원 환경 주의\
> - ED25519: 현재 **GitHub 공식 권장 알고리즘**

------------------------------------------------------------------------

## 4️. 여러 SSH 키 사용하기 (`~/.ssh/config`)

여러 GitHub 계정이나 저장소를 동시에 사용할 경우, `~/.ssh/config` 파일에
호스트 별 설정을 추가합니다.

``` bash
# 기본 GitHub 계정
Host github.com
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_ed25519
    IdentitiesOnly yes

# 회사 계정 (다른 SSH 키 사용)
Host github-company
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_ed25519_company
    IdentitiesOnly yes
```

> ✅ 사용 예시:

``` bash
# 개인 계정 저장소
git clone git@github.com:yourname/personal-repo.git

# 회사 계정 저장소
git clone git@github-company:yourcompany/work-repo.git
```

Git은 `remote` URL의 Host 이름(`github-company`)을 기반으로 자동으로
올바른 SSH 키를 선택합니다.

------------------------------------------------------------------------

## 5️. 참고 명령어

``` bash
# SSH 키 목록 확인
ls ~/.ssh

# SSH 에이전트에 키 추가
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519

# 연결 확인 (디버그 모드)
ssh -vT git@github.com
```

------------------------------------------------------------------------

## 요약 정리

항목|요약
--|--
인증 방식|공개키 / 개인키 기반
권장 알고리즘|**ED25519**
RSA 주의|SHA-1 기반 RSA는 GitHub에서 차단됨
여러 계정|`~/.ssh/config`로 구분 가능
테스트|`ssh -T git@github.com`

------------------------------------------------------------------------

## 마무리

> SSH는 단순한 로그인 수단이 아니라, **보안성과 편의성**을 동시에
> 제공하는 핵심 도구입니다.\
> 특히 GitHub, GitLab, Bitbucket 등 대부분의 플랫폼이 SSH 인증을
> 권장하며,\
> **ED25519 + config 관리** 조합은 현재 가장 이상적인 설정임
