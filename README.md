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

## 제작 보고서

- **목적**: GitHub Pages로 개인 프로필/블로그 페이지를 만들어보는 학습용 프로젝트. 다른 GitHub Pages 프로필 페이지를 벤치마킹해서 나에게 맞는 구성을 찾는 것이 목표였음
- **과정**:
  1. 벤치마킹 사례 조사 (GitHub Topics 상위 포트폴리오 저장소, `Template-Website-v1.0`, Dribbble)
  2. Claude Artifact로 목업을 먼저 만들어서 레이아웃/색상을 미리보기하며 반복 조정
  3. 확정된 디자인을 `index.html` + `css/style.css` + `js/main.js` + `data/*.json` 구조로 실제 파일에 옮김
  4. GitHub 저장소 생성 후 GitHub Pages로 배포
- **배운 점**:
  - 색을 고를 때 배경/버튼용 색과 글자용 색은 대비(contrast) 기준이 달라서, 같은 색을 글자에 그대로 쓰면 안 보일 수 있다는 것
  - 배치는 대부분 Flexbox로 충분하고, Grid는 여러 항목을 격자로 늘어놓아야 할 때만 쓰면 된다는 것
  - 색이 여러 개보다 적은 색을 일관되게 쓰는 쪽이 더 깔끔해 보인다는 것 (3색 → 2색으로 정리)
- **배포 결과**: https://parkjongbin0520-spec.github.io/
