# 프로필 사진 넣는 곳 (Profile photos)

이 폴더에 구성원 프로필 사진을 넣습니다. 파일명만 규칙에 맞추면 코드 수정 없이 자동으로 표시됩니다.
사진이 없는 사람은 자동으로 기본 아이콘(회색 실루엣)이 표시됩니다.

## 파일명 규칙
`영문 이름` → 모두 소문자 → 공백을 `-`(하이픈)으로 → 확장자 `.jpg`, `.jpeg`, 또는 `.png`

예) `Sueon Chae` → `sueon-chae.jpg`

## 권장 사양
- 정사각형(1:1), 최소 400×400px 이상 (권장 600×600px)
- 형식: **JPG/JPEG/PNG** (`.jpg`, `.jpeg`, `.png`). WebP를 꼭 써야 하면 `_data/members.yml`의 해당 인물에 `photo: "이름.webp"` 한 줄을 추가하세요.
- 얼굴이 가운데 오도록 정사각형으로 크롭 (원형으로 잘려 표시됨)

## 파일명 목록

### PI
| 이름 | 파일명 |
| --- | --- |
| 서형태 Hyung-Tae Seo | `hyung-tae-seo.jpg` |

### 현재 구성원 (Current)
| 이름 | 파일명 |
| --- | --- |
| 채수언 Sueon Chae | `sueon-chae.jpg` |
| 김병현 Byeonghyeon Kim | `byeonghyeon-kim.jpg` |
| 이준우 Junu Lee | `junu-lee.jpg` |
| 이준호 Junho Lee | `junho-lee.jpg` |
| 강병화 Beoung Hwa Kang | `beoung-hwa-kang.jpg` |
| 황솔 Sol Hwang | `sol-hwang.jpg` |
| 김세범 Sebeom Kim | `sebeom-kim.jpg` |
| 김태현 Taehyun Kim | `taehyun-kim.jpg` |
| 김호진 Hojin Kim | `hojin-kim.jpg` |
| 강민구 Mingu Kang | `mingu-kang.jpg` |
| 조영기 Younggi Cho | `younggi-cho.jpg` |
| 정주영 Ju-Young Jung | `ju-young-jung.jpg` |
| 성형민 HyungMin Sung | `hyungmin-sung.jpg` 또는 `hyungmin-sung.jpeg` |
| 최동석 Dongsuk Choi | `dongsuk-choi.jpg` 또는 `dongsuk-choi.png` |
| 안진환 JinHwan Ahn | `jinhwan-ahn.jpg` |
| 정민규 Mingue Jung | `mingue-jung.jpg` |

### 졸업생 (Alumni)
| 이름 | 파일명 |
| --- | --- |
| 김경재 Gyungjae Kim | `gyungjae-kim.jpg` |
| 이연재 Yeon Jae Lee | `yeon-jae-lee.jpg` |
| 양재명 JaeMyeong Yang | `jaemyeong-yang.jpg` |
| 구덕헌 Duckheon Koo | `duckheon-koo.jpg` |
| 이채원 Chae Won Lee | `chae-won-lee.jpg` |
| 이정훈 Jeonghun Lee | `jeonghun-lee.jpg` |
| 이형진 Hyeongjin Lee | `hyeongjin-lee.jpg` |
| 이용빈 Yongbeen Lee | `yongbeen-lee.jpg` |
| 김차훈 ChaHun Kim | `chahun-kim.jpg` |
| 신동윤 Dong Yun Shin | `dong-yun-shin.jpg` |
| 윤동건 Donggeon Yoon | `donggeon-yoon.jpg` |
| 안성진 SeongJin An | `seongjin-an.jpg` |
| 신태양 Tae Yang Shin | `tae-yang-shin.jpg` |
| 이용훈 Yonghoon Lee | `yonghoon-lee.jpg` 또는 `yonghoon-lee.png` |
| 이산하 Sanha Lee | `sanha-lee.jpg` |
| 김동혁 Dong Hyeok Kim | `dong-hyeok-kim.jpg` |
| 이도현 DoHyeon Lee | `dohyeon-lee.jpg` |

> 새 구성원을 추가할 때도 규칙은 같습니다: `_data/members.yml`에 영문 이름을 넣고, 그 이름을 소문자+하이픈으로 바꾼 `.jpg`, `.jpeg`, 또는 `.png` 파일을 이 폴더에 넣으면 됩니다.
