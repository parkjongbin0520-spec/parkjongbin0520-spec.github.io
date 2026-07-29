# 박종빈 — Build Log

**바로가기: https://parkjongbin0520-spec.github.io/**

명지전문대 학생의 개인 프로필 & 블로그 페이지입니다. 프레임워크 없이 순수 HTML/CSS/JS로 만들었고, GitHub Pages로 배포합니다.

## 구성

| 섹션 | 내용 |
|---|---|
| 소개 | 자기소개 |
| 기술 | 사용 가능한 기술 스택 |
| 프로젝트 | 진행한 프로젝트 카드 |
| 기록 | 개발 블로그/로그 |
| 연락처 | 이메일, GitHub |

## 구조

```
index.html          # 페이지 골격
css/style.css        # 스타일
js/main.js           # 데이터 fetch, 카드 렌더링, 테마 토글
data/
  projects.json      # 프로젝트 카드 데이터
  posts.json         # 기록(블로그) 목록 데이터
posts/               # 본문이 긴 글이 있을 때 개별 HTML 파일 추가
```

## 콘텐츠 추가하는 법

- **새 프로젝트**: `data/projects.json`에 객체 하나 추가
- **새 기록**: `data/posts.json`에 객체 하나 추가 (본문이 길면 `posts/`에 HTML 파일을 만들고 `url` 필드로 연결)
