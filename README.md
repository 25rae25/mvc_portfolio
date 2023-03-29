<img width="1676" alt="스크린샷 2022-10-18 오후 10 05 09" src="https://user-images.githubusercontent.com/64051267/196437718-3e310649-5e94-4406-ab32-c28dfd9689b4.png">

<div>개인 프로젝트입니다.</div>
<h4 style="border-top:2px solid gray; margin: 30px 0;">각종 운동 용병모집 정보를 한곳에서 볼 수 있고 모임을 쉽게 찾을 수 있는 운동사이트입니다.</h4>
<h4 style="margin-top: 20px 0">배포주소: http://sportsyoungrae.shop</h4>

<div style="border-top:2px solid gray; margin: 30px 0;"></div>

<h2 style="border-bottom:2px solid gray; margin: 30px 0;">폴더 구조</h2>

```bash 
src
 ┣ apis
 ┃ ┣ auth
 ┃ ┃ ┣ auth.controller.ts
 ┃ ┃ ┣ auth.module.ts
 ┃ ┃ ┗ auth.service.ts
 ┃ ┣ detail
 ┃ ┃ ┣ detail.controller.ts
 ┃ ┃ ┣ detail.module.ts
 ┃ ┃ ┗ detail.service.ts
 ┃ ┣ health
 ┃ ┃ ┣ dto
 ┃ ┃ ┃ ┗ createHealth.input.ts
 ┃ ┃ ┣ entities
 ┃ ┃ ┃ ┗ health.entity.ts
 ┃ ┃ ┣ health.controller.ts
 ┃ ┃ ┣ health.module.ts
 ┃ ┃ ┗ health.service.ts
 ┃ ┣ home
 ┃ ┃ ┣ entities
 ┃ ┃ ┃ ┗ home.entity.ts
 ┃ ┃ ┣ home.controller.ts
 ┃ ┃ ┣ home.module.ts
 ┃ ┃ ┗ home.service.ts
 ┃ ┣ update
 ┃ ┃ ┣ update.controller.ts
 ┃ ┃ ┣ update.module.ts
 ┃ ┃ ┗ update.service.ts
 ┃ ┗ user
 ┃ ┃ ┣ dto
 ┃ ┃ ┃ ┗ createUserInput.ts
 ┃ ┃ ┣ entities
 ┃ ┃ ┃ ┗ user.entity.ts
 ┃ ┃ ┣ user.controller.ts
 ┃ ┃ ┣ user.module.ts
 ┃ ┃ ┗ user.service.ts
 ┣ commons
 ┃ ┗ auth
 ┃ ┃ ┣ jwt-key.strategy.ts
 ┃ ┃ ┣ jwt-social-google.strategy.ts
 ┃ ┃ ┣ jwt-social-kakao.strategy.ts
 ┃ ┃ ┗ jwt-social-naver.strategy.ts
 ┣ public
 ┃ ┣ css
 ┃ ┃ ┣ about.css
 ┃ ┃ ┣ common.css
 ┃ ┃ ┣ detail.css
 ┃ ┃ ┣ health.css
 ┃ ┃ ┣ home.css
 ┃ ┃ ┣ login.css
 ┃ ┃ ┣ signUp.css
 ┃ ┃ ┗ write.css
 ┃ ┣ fonts
 ┃ ┃ ┣ Fredoka-VariableFont_wdth,wght.ttf
 ┃ ┃ ┣ NotoSansKR-Bold.otf
 ┃ ┃ ┣ NotoSansKR-Medium.otf
 ┃ ┃ ┗ NotoSansKR-Regular.otf
 ┃ ┣ images
 ┃ ┃ ┣ .DS_Store
 ┃ ┃ ┣ background.jpg
 ┃ ┃ ┣ background1.jpg
 ┃ ┃ ┣ badminton.jpg
 ┃ ┃ ┣ bascketball.jpg
 ┃ ┃ ┣ baseball.jpg
 ┃ ┃ ┣ favicon.ico
 ┃ ┃ ┣ favicon.png
 ┃ ┃ ┣ google.svg
 ┃ ┃ ┣ kakao.svg
 ┃ ┃ ┣ login.jpg
 ┃ ┃ ┣ naver.jpg
 ┃ ┃ ┣ naver.svg
 ┃ ┃ ┣ soccer.jpg
 ┃ ┃ ┣ soccer1.jpg
 ┃ ┃ ┣ soccer_back.jpg
 ┃ ┃ ┣ tennis.jpg
 ┃ ┃ ┗ town.jpg
 ┃ ┣ js
 ┃ ┃ ┣ cancel.js
 ┃ ┃ ┣ delete.js
 ┃ ┃ ┣ detail.js
 ┃ ┃ ┣ health.js
 ┃ ┃ ┣ login.js
 ┃ ┃ ┣ page.js
 ┃ ┃ ┣ signUp.js
 ┃ ┃ ┣ update.js
 ┃ ┃ ┗ write.js
 ┃ ┗ .DS_Store
 ┣ views
 ┃ ┣ about.ejs
 ┃ ┣ detail.ejs
 ┃ ┣ health.ejs
 ┃ ┣ home.ejs
 ┃ ┣ login.ejs
 ┃ ┣ logout.ejs
 ┃ ┣ signUp.ejs
 ┃ ┣ update.ejs
 ┃ ┗ write.ejs
 ┣ .DS_Store
 ┣ app.controller.ts
 ┣ app.module.ts
 ┣ app.service.ts
 ┗ main.ts
```



<h2 style="border-bottom:2px solid gray; margin: 400px 0;">기술 스택</h2>

<div style="margin-top: 20px 0">
  <li>TypeScript</li>
  <li>NodeJS</li>
  <li>NestJS</li>
  <li>TypeORM</li>
  <li>Redis</li>
  <li>Mysql</li>
  <li>Docker</li>
  <li>Git, Github</li>
  <li>Kubernetes</li>
  <li>GCP</li>
</div>


<h2 style="border-bottom:2px solid gray; margin: 30px 0;">.env설정</h2>
<div style="margin-top: 20px 0">
  <li>GOOGLE_CLIENT_ID</li>
  <li>GOOGLE_CLIENT_SECRET</li>
  <li>NAVER_CLIENT_ID</li>
  <li>NAVER_CLIENT_SECRET</li>
  <li>KAKAO_CLIENT_ID</li>
  <li>KEY</li>
</div>
