# arclab-kmu.github.io

국민대학교 **ARC Lab (Autonomous Robotics & Control Lab)** 공식 홈페이지입니다.
공개 주소: <https://arclab-kmu.github.io>

이 문서는 **홈페이지 내용을 수정·관리하는 방법**을 설명합니다. 코딩을 몰라도
아래 규칙만 따라 하면 구성원·사진·논문·소식 등을 직접 추가할 수 있습니다.

---

## 한눈에 보기

- 이 사이트는 **Jekyll**(GitHub Pages)로 만들어졌습니다.
- **거의 모든 내용은 `_data/` 폴더의 `.yml` 파일에서 관리**합니다. HTML을 건드릴 필요가 거의 없습니다.
- **`main` 브랜치에 올리면(push) 1~2분 뒤 자동으로 홈페이지에 반영**됩니다. 따로 배포 버튼은 없습니다.
- 홈페이지는 **영어(EN)/한국어(KO) 2개 언어**를 지원합니다. 오른쪽 위 `EN`/`KO` 버튼으로 전환합니다.
  → 그래서 대부분의 항목은 `_en`(영어)와 `_ko`(한국어) **두 개를 모두 채워야** 합니다.

### 꼭 지켜야 할 4가지

1. **내용은 `_data/*.yml`에서만 고친다.** (HTML/CSS는 디자인이 바뀔 때만)
2. **한/영 두 언어를 모두 채운다.** 한쪽을 비우면 그 언어로 볼 때 해당 부분이 **빈칸**으로 나옵니다.
3. **YAML 문법을 지킨다.** (아래 "YAML 주의사항" 참고 — 콜론·따옴표·들여쓰기)
4. **`main`에 올리면 바로 공개된다.** 커밋 메시지를 남기고 push 하면 끝.

### YAML 주의사항 (자주 하는 실수)

- 값 안에 **콜론 `:`, 큰따옴표 `"`, `#`** 등이 들어가면 값 전체를 큰따옴표로 감싸세요.
  예) `title_en: "Vision: from pixels to policy"`
- **들여쓰기는 스페이스(칸)로만** 합니다. **탭(Tab) 금지.** 기존 줄과 칸 수를 똑같이 맞추세요.
- 큰따옴표 안에서 큰따옴표를 쓰려면 `\"` 로 씁니다.
- 항목 순서는 **파일에 적힌 순서대로** 화면에 나옵니다.

---

## 저장소 지도 (어떤 파일이 무엇인지)

| 경로 | 내용 | 어떤 페이지에 나오나 |
| --- | --- | --- |
| `_data/members.yml` | **교수·구성원·졸업생** 명단 | People `/people/` |
| `assets/img/people/` | **구성원 프로필 사진** 이미지 파일 | People `/people/` |
| `_data/news.yml` | 연구실 소식 | News `/news/`, 홈 최신 5개 |
| `_data/publications.yml` | 논문(국제/국내/특허) | Publications `/publications/`, 홈 대표 5개 |
| `_data/research.yml` | 연구 분야 | Research `/research/`, 홈 카드 |
| `_data/gallery.yml` | 갤러리 사진 캡션 | Gallery `/gallery/` |
| `assets/gallery/` | 갤러리 사진 이미지 파일 (직접 만들어 사용) | Gallery `/gallery/` |
| `_config.yml` | 사이트 이름·주소·연락처·상단 메뉴 | 사이트 전체 |
| `*.html`, `_includes/`, `_layouts/`, `assets/css/`, `assets/js/` | 페이지 틀·디자인 | (내용 수정에는 손대지 않음) |
| `_site/` | 빌드 결과물 (자동 생성) | **직접 수정 금지** |

> `README.md`(이 파일)와 `assets/img/people/README.md`는 `_config.yml`의 `exclude`에 들어 있어
> 홈페이지에는 게시되지 않습니다. 안심하고 설명을 적어 두어도 됩니다.
>
> ⚠️ `assets/img/people/README.md`에는 이름↔파일명 목록이 손으로 적혀 있는데, **자동으로 갱신되지 않아
> 실제 명단과 어긋날 수 있습니다.** 정확한 기준은 항상 `_data/members.yml`(명단)과 아래 2장의 파일명 규칙입니다.

---

## 1. 구성원(People) 추가·수정 — `_data/members.yml`

People 페이지는 **교수(pi) → 현재 구성원(current) → 졸업생(alumni)** 세 부분으로 되어 있고,
모두 `_data/members.yml` 한 파일에서 관리합니다.

### 1-1. 현재 구성원(Current Members) 추가하기

`current:` 목록의 **원하는 위치**(화면에 나올 순서 그대로)에 아래 블록을 복사해서 붙여 넣고 값을 채웁니다.

```yaml
  - {
      name_en: "Gildong Hong",              # 영문 이름 (사진 파일명의 기준! 아래 3장 참고)
      name_ko: "홍길동",                     # 한글 이름
      role_en: "Undergraduate Student",     # 영문 직함
      role_ko: "학부연구생",                  # 한글 직함
      interest: "Sim-to-Real Robot Learning", # 연구 관심분야 (한 언어로만 표시, 보통 영어)
      email: "gildong@kookmin.ac.kr",       # 이메일 (봉투 아이콘으로 표시)
      homepage: "https://example.github.io", # 개인 홈페이지 (선택 — 없으면 이 줄 삭제)
    }
```

**필드 설명**

| 필드 | 필수? | 설명 |
| --- | --- | --- |
| `name_en` | 필수 | 영문 이름. **프로필 사진 파일명이 이 값에서 자동으로 정해집니다** (3장 참고). |
| `name_ko` | 필수 | 한글 이름. |
| `role_en` / `role_ko` | 필수 | 직함. 예: `Researcher`/`연구원`, `Graduate Student`/`대학원생`, `Undergraduate Student`/`학부연구생`. 랩장은 `Graduate Student (Lab Leader)`/`대학원생 (랩장)` 처럼 표기. |
| `interest` | 권장 | 연구 관심분야. **언어 전환과 무관하게 그대로** 표시되므로 보통 영어로 한 줄. 없으면 `""`. |
| `email` | 사실상 필수 | 이메일. 카드의 봉투 아이콘 링크가 됩니다. **비워 두면 현재 구성원 카드에는 빈 봉투 아이콘(깨진 `mailto:`)이 그대로 표시**되니(졸업생과 달리 자동으로 숨겨지지 않음) 꼭 채우세요. |
| `homepage` | 선택 | 개인 홈페이지 URL. 있으면 지구본 아이콘이 추가됩니다. **없으면 이 줄을 아예 지우세요.** |
| `photo` | 선택 | 사진 파일명을 직접 지정할 때만 사용 (3장 참고). 보통은 필요 없습니다. |

> 형식 팁: `name_en`처럼 이름과 값 사이에 콜론+공백(`: `)이 있고, 각 항목은 `- { ... }` 한 덩어리입니다.
> 여는 `{` 와 닫는 `}`, 그리고 각 줄 끝의 콤마 `,` 를 빠뜨리지 마세요. 기존 항목을 통째로 복사해서 고치는 게 가장 안전합니다.

### 1-2. 교수(PI) 정보 수정하기

파일 맨 위 `pi:` 블록을 고칩니다. 사람을 추가하는 게 아니라 **값만 바꾸면** 됩니다.

- `name_en` / `name_ko`, `title_en` / `title_ko`(직함), `email`, `office`(연구실), `phone`
- `scholar`: 구글 스칼라 주소 (있으면 버튼 표시, 없으면 줄 삭제)
- `bio_en` / `bio_ko`: 소개 문단 (한/영 각각)
- `education`: 학력 목록 — `- en: "..."` 와 `ko: "..."` 짝으로 여러 줄
- 교수 사진 교체는 3장 "교수님 사진 바꾸기" 참고

### 1-3. 구성원이 졸업했을 때 (current → alumni 이동)

1. `current:` 목록에서 해당 사람 블록을 **잘라냅니다.**
2. `alumni:` 목록의 **맨 위(가장 최근이 위로 오도록)** 에 아래 형식으로 붙여 넣습니다.

```yaml
  - {
      name_en: "Gildong Hong",
      name_ko: "홍길동",
      year: 2027,                                    # 졸업연도 (숫자). 이 값으로 연도별 묶여서 표시됨
      dest_en: "Grad school, KAIST",                 # 진로 (선택 — 없으면 "" 로 비움)
      dest_ko: "대학원 (KAIST)",
      email: "gildong@kookmin.ac.kr",                # 선택
    }
```

**졸업생 필드**

| 필드 | 설명 |
| --- | --- |
| `year` | 졸업연도(숫자). **연도별로 자동 그룹화**되고, 최신 연도가 위에 옵니다. |
| `dest_en` / `dest_ko` | 진로(대학원·회사 등). **표시 여부는 `dest_en` 값으로만 결정**됩니다 — `dest_en`이 비어 있으면(`""`) 한국어 화면에서도 진로 줄이 나오지 않습니다. 진로를 표시하려면 `dest_en`을 반드시 채우고 한글 진로도 `dest_ko`에 함께 넣으세요. 진로를 숨기려면 `dest_en`을 `""`로 두면 됩니다. |
| `email`, `homepage` | 선택. 있으면 아이콘 링크로 표시. 없으면 줄 삭제. |

> 졸업생은 관심분야(`interest`)·직함(`role`)이 없고 대신 `year`·`dest`가 있습니다. current 형식과 다르니 주의하세요.
> 같은 연도 안에서는 **파일에 적힌 순서대로** 나옵니다.

### 1-4. 구성원 삭제하기 (졸업이 아닌 경우)

잘못 넣었거나, 졸업이 아니라 명단에서 완전히 빼야 할 때는 해당 사람의 `- { ... }` 블록 **전체를 삭제**합니다
(`current:` 든 `alumni:` 든 동일). 사진 파일(`assets/img/people/이름.jpg`)도 더 이상 필요 없으면 함께 지웁니다.

> 졸업(§1-3)은 블록을 **`current:`에서 `alumni:`로 옮기는** 것이고, 삭제는 블록을 **아예 없애는** 것입니다. 헷갈리지 마세요.

---

## 2. 프로필 사진은 어디에, 어떤 이름으로 넣나 ★

> 구성원을 `members.yml`에 추가하는 것과 **사진 파일을 넣는 것은 별개**입니다.
> 둘 다 해야 사진이 보입니다. 사진을 안 넣으면 회색 실루엣 기본 아이콘이 표시됩니다(오류 아님).

### 2-1. 넣는 위치

```
assets/img/people/
```

이 폴더에 이미지 파일을 넣습니다. **HTML은 고칠 필요 없습니다** — 파일명만 규칙에 맞으면 자동으로 연결됩니다.

### 2-2. 파일명 규칙 (가장 중요)

`members.yml`의 **`name_en`(영문 이름)** 을 기준으로 파일명이 자동 결정됩니다:

> **① 영문 이름 → ② 전부 소문자 → ③ 띄어쓰기(공백)를 하이픈 `-` 으로 → ④ 확장자 `.jpg`**
> (`.jpg` 가 없으면 `.jpeg`, 그것도 없으면 `.png` 순서로 자동으로 찾습니다.)

**예시**

| `name_en` | 넣어야 할 파일명 |
| --- | --- |
| `Sueon Chae` | `sueon-chae.jpg` |
| `Byeonghyeon Kim` | `byeonghyeon-kim.jpg` |
| `Hojin Kim` | `hojin-kim.jpg` |
| `Ju-Young Jung` (이름에 이미 하이픈) | `ju-young-jung.jpg` |
| `HyungMin Sung` (대소문자 섞임) | `hyungmin-sung.jpg` (전부 소문자로). ※ 이 사람 실제 사진은 `.jpeg`로 저장돼 있음 — `.jpg`가 없으면 자동으로 `.jpeg`를 찾는 예 |
| `DoHyeon Lee` | `dohyeon-lee.jpg` |

즉, **띄어쓰기를 하이픈으로 바꾸고 전부 소문자로 만든 뒤 `.jpg`** 를 붙이면 됩니다.

> ⚠️ 나중에 `name_en`을 바꾸면 **연결되는 파일명도 바뀝니다.** 이름을 수정하면 사진 파일명도 같이 바꿔 주세요
> (또는 아래 `photo:` 방식을 쓰세요).

### 2-3. 권장 사양

- **정사각형(1:1)**, 최소 400×400px 이상 (권장 600×600px)
- 형식: **JPG / JPEG / PNG** (`.jpg`, `.jpeg`, `.png`)
- 얼굴이 가운데 오도록 크롭 (카드에서 정사각형으로 표시됨)
- 파일 용량은 가능하면 몇백 KB 이하로 (너무 큰 원본 사진은 줄여서 넣기)

### 2-4. 파일명이 규칙과 다르거나 확장자가 특이할 때 (`photo:` 지정)

이름 규칙대로 맞추기 어렵거나(예: WebP 사용, 특수 파일명), 파일명을 직접 정하고 싶으면
`members.yml`의 해당 인물에 **`photo:` 한 줄**을 추가합니다. 이러면 규칙을 무시하고 그 파일을 씁니다.

```yaml
  - {
      name_en: "Gildong Hong",
      name_ko: "홍길동",
      role_en: "Undergraduate Student",
      role_ko: "학부연구생",
      interest: "...",
      email: "...",
      photo: "hong-gildong-2027.png",   # assets/img/people/ 안의 실제 파일명
    }
```

`photo:` 에는 `assets/img/people/` 안에 있는 **실제 파일명**을 확장자까지 정확히 적습니다.

### 2-5. 사진이 없으면?

아무 파일도 없으면 **회색 사람 실루엣 아이콘**이 자동으로 표시됩니다. 오류가 아니라 정상 동작이니,
사진을 준비하기 전까지 그대로 두어도 됩니다. 파일을 나중에 규칙대로 넣으면 자동으로 바뀝니다.

### 2-6. 교수님(PI) 사진 바꾸기

교수님 사진도 같은 규칙을 따릅니다. `pi.name_en`이 `Hyung-Tae Seo` 이므로 파일명은 **`hyung-tae-seo.jpg`** 입니다.
→ `assets/img/people/hyung-tae-seo.jpg` 를 **같은 이름의 새 파일로 교체**하면 됩니다.
(다른 파일명을 쓰고 싶으면 `pi:` 블록에 `photo:` 한 줄을 추가하세요.)

---

## 3. 소식(News) 추가 — `_data/news.yml`

**최신 소식이 맨 위**로 오도록, 파일 위쪽에 새 항목을 추가합니다.
News 페이지에는 전체가, 홈 화면에는 **위에서 5개**만 표시됩니다.

```yaml
- date: "2026.09"
  en: "ARC Lab presented <b>two papers</b> at ICROS 2026."
  ko: "ARC 연구실이 ICROS 2026에서 <b>논문 2편</b>을 발표했습니다."
```

- `date`: 화면에 그대로 보이는 문자열입니다(예: `"2026.09"`). 자동 정렬되지 않으니 **직접 위쪽에** 넣으세요.
- `en` / `ko`: 소식 내용(한/영 모두 필수). `<b>...</b>` 로 굵게 등 간단한 HTML 태그를 쓸 수 있습니다.

---

## 4. 논문(Publications) 추가 — `_data/publications.yml`

세 종류가 있습니다: **`international`(국제), `domestic`(국내), `patents`(특허).**
각 목록에서 **연도 내림차순(최신이 위)** 을 유지하며 알맞은 곳에 추가하세요.
홈 화면 "대표 논문"에는 `international`의 **위에서 5개**가 표시됩니다.

**국제 논문 (`international`)**

```yaml
  - year: 2026
    note_en: "Under Review"          # 선택: 상태 표기 (없으면 note_en/note_ko 두 줄 삭제)
    note_ko: "심사 중"
    authors: "Gildong Hong, Hyung-Tae Seo*, and Kyung-Soo Kim*"
    title: "A Robust Controller for ..."
    venue: "IEEE Transactions on ..."
```

**국내 논문 (`domestic`)** — 한 줄 형식

```yaml
  - { year: 2026, authors: "홍길동, 서형태*", title: "강인 제어기 설계", venue: "2026 제어·로봇·시스템학회 (ICROS), 서울" }
```

**특허 (`patents`)**

```yaml
  - { year: 2026, title: "발명의 명칭", no: "10-2026-1234567 (출원 / pending)" }
```

- `authors`, `title`, `venue`, `no` 는 **언어 전환과 무관하게 그대로** 표시됩니다(입력한 한 언어로).
- 교신저자는 이름 뒤에 `*` 로 표기합니다(`Hyung-Tae Seo*`, `서형태*`).
- 저자 목록의 **`Hyung-Tae Seo`(국제)·`서형태`(국내)** 는 자동으로 **굵게** 강조되므로, 철자를 정확히 이 형태로 적어야 합니다.

---

## 5. 연구분야(Research) 수정 — `_data/research.yml`

연구 카드(홈)와 Research 페이지에 함께 쓰입니다. 항목마다:

```yaml
- key: newarea                 # 내부 식별용 (짧은 영문, 겹치지 않게)
  icon: robot                  # 아이콘: wave / robot / flask 중 하나만 가능
  title_en: "Area Title"
  title_ko: "분야 제목"
  desc_en: "One-paragraph description."
  desc_ko: "한 문단 설명."
  topics:                      # 세부 주제 목록 (Research 페이지에 불릿으로)
    - en: "Topic one"
      ko: "세부 주제 1"
    - en: "Topic two"
      ko: "세부 주제 2"
```

- `icon` 에 쓸 수 있는 값은 **`wave`, `robot`, `flask` 세 가지뿐**입니다. 다른 값을 넣으면 아이콘이 안 나옵니다.
- `title_*`, `desc_*`, `topics`의 `en`/`ko` 는 모두 한/영 짝으로 채웁니다.

---

## 6. 갤러리(Gallery) 사진 추가 — `_data/gallery.yml`

기본은 캡션만 있는 자리표시(placeholder) 타일입니다. 실제 사진을 넣으려면:

1. 이미지 파일을 **`assets/gallery/`** 폴더에 넣습니다. (폴더가 없으면 새로 만드세요.)
2. `_data/gallery.yml`에서 해당 항목의 `img:` 에 경로를 적습니다.

```yaml
- { caption_en: "ARC Lab summer workshop 2024", caption_ko: "ARC Lab 하계 워크샵 2024", img: "/assets/gallery/workshop-2024.jpg" }
```

- `img: ""` (빈 값)이면 사진 아이콘 자리표시가 표시됩니다.
- `caption_en` / `caption_ko` 는 한/영 모두 채웁니다.

---

## 7. 사이트 공통 정보 — `_config.yml`

연구실 이름, 소속, 주소, 대표 이메일, 상단 메뉴 등 **사이트 전체에 공통으로 쓰이는 값**입니다.

- 이름/소속: `lab_name_en/ko`, `lab_short`, `university_en/ko`, `department_en/ko`
- 연락처/주소: `email`, `phone`, `office_en/ko`, `lab_room_en/ko`, `address_en/ko`
- 외부 링크: `github_url`
- 상단 메뉴: `nav:` 목록 (각 항목 `key`, `en`, `ko`, `url`)

> ⚠️ **`_config.yml`을 고치면 로컬 서버는 재시작해야 반영됩니다.** (GitHub Pages는 push 시 자동 재빌드)

---

## 8. 자주 하는 작업 모음 (요약)

| 하고 싶은 것 | 할 일 |
| --- | --- |
| **새 학부연구생/구성원 추가** | ① `members.yml`의 `current:`에 블록 추가 → ② `assets/img/people/`에 `이름.jpg`(규칙대로) 넣기 |
| **구성원이 졸업함** | `members.yml`에서 해당 블록을 `current:` → `alumni:` 맨 위로 이동, `year`·`dest` 추가 |
| **구성원을 명단에서 삭제** | `members.yml`에서 해당 `- { ... }` 블록 전체 삭제 (+ 필요 없으면 사진 파일도 삭제) |
| **사진만 교체** | `assets/img/people/`의 해당 파일을 **같은 이름**의 새 파일로 덮어쓰기 |
| **교수 사진 교체** | `assets/img/people/hyung-tae-seo.jpg` 교체 |
| **소식 추가** | `news.yml` 맨 위에 항목 추가 |
| **논문 추가** | `publications.yml`의 `international`/`domestic`/`patents` 중 해당 목록 위쪽에 추가 |
| **연구실 이름·주소 변경** | `_config.yml` |

---

## 9. 로컬에서 미리보기 (선택 사항)

올리기 전에 내 컴퓨터에서 확인하고 싶다면 (Ruby/Bundler 필요):

```bash
bundle install          # 처음 한 번
bundle exec jekyll serve # http://127.0.0.1:4000 에서 미리보기
```

- 파일을 저장하면 대부분 자동으로 새로고침됩니다. 단 **`_config.yml`을 바꾸면 서버를 껐다 켜야** 합니다.
- 로컬 확인 없이 곧바로 push해도 됩니다(GitHub이 알아서 빌드). 미리보기는 실수 방지용입니다.

---

## 10. 변경사항 공개하기 (배포)

이 저장소의 **`main` 브랜치에 push하면 GitHub Pages가 자동으로 빌드·게시**합니다.

```bash
git add -A
git commit -m "docs: 구성원 추가 — 홍길동"
git push origin main
```

- 반영까지 보통 **1~2분** 걸립니다. 바로 안 보이면 브라우저 새로고침(캐시 강제 새로고침: Ctrl/Cmd+Shift+R).
- `_site/` 폴더는 빌드 결과물이라 커밋할 필요가 없습니다(`.gitignore`에 포함됨).

---

## 11. 문제 해결 (Troubleshooting)

| 증상 | 원인·해결 |
| --- | --- |
| **사진이 안 보이고 회색 아이콘만 나온다** | 파일명이 규칙과 다름. `name_en`을 소문자+하이픈으로 바꾼 이름과 **정확히 일치**하는지, 확장자가 `.jpg/.jpeg/.png`인지 확인. 파일이 `assets/img/people/`에 있는지 확인. |
| **한국어(KO)로 보면 특정 항목이 빈칸이다** | 해당 `_ko` 값을 안 채웠기 때문. 두 언어 모두 입력. |
| **빌드가 깨지거나 페이지가 안 뜬다** | YAML 문법 오류일 가능성(들여쓰기에 탭 사용, 콜론/따옴표 누락, `- { }`의 콤마 누락). 방금 고친 부분을 되돌려 확인. |
| **논문 저자에서 교수 이름이 굵게 안 나온다** | 저자 문자열의 철자가 국제=`Hyung-Tae Seo`, 국내=`서형태` 와 정확히 같아야 자동 강조됨. |
| **연구 카드 아이콘이 안 나온다** | `icon:` 값이 `wave`/`robot`/`flask` 중 하나인지 확인. |
| **변경했는데 홈페이지에 안 보인다** | push 후 1~2분 대기 + 강력 새로고침. `main` 브랜치에 올렸는지 확인. |

---

문의: 서형태 교수 · <htseo@kookmin.ac.kr>
