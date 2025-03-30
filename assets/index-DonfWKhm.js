(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();const p=(e,t)=>{if(!t)return;localStorage.setItem(e,JSON.stringify(t));const n=new Event("storage");window.dispatchEvent(n)},b=e=>{const t=localStorage.getItem(e);return t?JSON.parse(t):null},g=e=>{localStorage.removeItem(e);const t=new Event("storage");window.dispatchEvent(t)},u="user",m=e=>p(u,e),a=()=>b(u),h=()=>g(u);function v(){return`
      <main class="bg-gray-100 flex items-center justify-center min-h-screen">
        <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h1 class="text-2xl font-bold text-center text-blue-600 mb-8">항해플러스</h1>
          <form id="login-form">
            <div class="mb-4">
              <input id="username" type="text" placeholder="이메일 또는 전화번호" class="w-full p-2 border rounded">
            </div>
            <div class="mb-6">
              <input id="password" type="password" placeholder="비밀번호" class="w-full p-2 border rounded">
            </div>
            <button id="login-button" type="submit" class="w-full bg-blue-600 text-white p-2 rounded font-bold">로그인</button>
          </form>
          <div class="mt-4 text-center">
            <a href="#" class="text-blue-600 text-sm">비밀번호를 잊으셨나요?</a>
          </div>
          <hr class="my-6">
          <div class="text-center">
            <button class="bg-green-500 text-white px-4 py-2 rounded font-bold" >새 계정 만들기</button>
          </div>
        </div>
      </main>
  `}function x(){document.getElementById("login-form").addEventListener("submit",t=>{t.preventDefault();const n=document.getElementById("username").value,s=document.getElementById("password").value;n&&s&&(m({username:n,email:"",bio:""}),d("/"))})}function y(){return`
    <div class="mb-4 bg-white rounded-lg shadow p-4">
      <textarea id="idea" class="w-full p-2 border rounded" placeholder="무슨 생각을 하고 계신가요?"></textarea>
      <button class="mt-2 bg-blue-600 text-white px-4 py-2 rounded post-button">게시</button>
    </div>

    <div class="space-y-4">
      ${l("홍길동","5분 전","오늘 날씨가 정말 좋네요. 다들 좋은 하루 보내세요!")}
      ${l("김철수","15분 전","새로운 프로젝트를 시작했어요. 열심히 코딩 중입니다!")}
      ${l("이영희","30분 전","오늘 점심 메뉴 추천 받습니다. 뭐가 좋을까요?")}
      ${l("박민수","1시간 전","주말에 등산 가실 분 계신가요? 함께 가요!")}
      ${l("정수연","2시간 전","새로 나온 영화 재미있대요. 같이 보러 갈 사람?")}
    </div>
`}function l(e,t,n){return`
    <div class="bg-white rounded-lg shadow p-4">
      <div class="flex items-center mb-2">
        <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
          <div>
            <p class="font-bold">${e}</p>
            <p class="text-sm text-gray-500">${t}</p>
          </div>
      </div>
      <p>${n}</p>
      <div class="mt-2 flex justify-between text-gray-500">
        <button>좋아요</button>
        <button>댓글</button>
        <button>공유</button>
      </div>
    </div>
  `}function f(){return`
  <main class="bg-gray-100 flex items-center justify-center min-h-screen">
    <div class="bg-white p-8 rounded-lg shadow-md w-full text-center" style="max-width: 480px">
      <h1 class="text-2xl font-bold text-blue-600 mb-4">항해플러스</h1>
      <p class="text-4xl font-bold text-gray-800 mb-4">404</p>
      <p class="text-xl text-gray-600 mb-8">페이지를 찾을 수 없습니다</p>
      <p class="text-gray-600 mb-8">
        요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
      </p>
      <a href="/" class="bg-blue-600 text-white px-4 py-2 rounded font-bold">
        홈으로 돌아가기
      </a>
    </div>
  </main>
`}function w(){const e=a();return`
    <div class="bg-white p-8 rounded-lg shadow-md">
      <h2 class="text-2xl font-bold text-center text-blue-600 mb-8">
        내 프로필
      </h2>
      <form id="profile-form">
        <div class="mb-4">
          <label
            for="username"
            class="block text-gray-700 text-sm font-bold mb-2"
            >사용자 이름</label>
          <input
            type="text"
            id="username"
            name="username"
            value="${(e==null?void 0:e.username)??""}"
            class="w-full p-2 border rounded"
          />
        </div>
        <div class="mb-4">
          <label
            for="email"
            class="block text-gray-700 text-sm font-bold mb-2"
            >이메일</label>
          <input
            type="email"
            id="email"
            name="email"
            value="${(e==null?void 0:e.email)??""}"
            class="w-full p-2 border rounded"
          />
        </div>
        <div class="mb-6">
          <label
            for="bio"
            class="block text-gray-700 text-sm font-bold mb-2"
            >자기소개</label>
          <textarea
            id="bio"
            name="bio"
            rows="4"
            class="w-full p-2 border rounded"
          >${(e==null?void 0:e.bio)??""}</textarea>
        </div>
        <button
          type="submit"
          id="submit-button"
          class="w-full bg-blue-600 text-white p-2 rounded font-bold"
        >
          프로필 업데이트
        </button>
      </form>
    </div>
`}function E(){const e=a(),t=document.getElementById("profile-form");document.getElementById("username").value=e.username,document.getElementById("email").value=e.email,document.getElementById("bio").value=e.bio,t.addEventListener("submit",n=>{n.preventDefault();const s=document.getElementById("username").value,o=document.getElementById("email").value,r=document.getElementById("bio").value;m({...e,username:s,email:o,bio:r}),alert("프로필 변경이 완료되었습니다")})}function _(){const e=!!a();return`
     <header class="bg-blue-600 text-white p-4 sticky top-0">
        <h1 class="text-2xl font-bold">항해플러스</h1> 
     </header>
     <nav class="bg-white shadow-md p-2 sticky top-14">
        <ul class="flex justify-around">
          <li><a href="/" class="${location.pathname==="/front_5th_chapter1-1/"?"text-blue-600":"text-gray-600"}" data-link>홈</a></li>
          ${e?`<li><a href="/front_5th_chapter1-1/profile" class="${location.pathname==="/front_5th_chapter1-1/profile"?"text-blue-600":"text-gray-600"}" data-link>프로필</a></li>`:""}
          <li><a href="#" class="text-gray-600" id="logout" data-userinfo>${e?"로그아웃":"로그인"}</a></li>
        </ul>
     </nav>
  `}function I(){document.querySelector("nav").addEventListener("click",n=>{const s=n.target.closest("[data-link]");if(s){n.preventDefault();const o=s.getAttribute("href");d(o)}});const t=document.getElementById("logout");t&&t.addEventListener("click",n=>{n.preventDefault(),!!a()?(h(),localStorage.removeItem("user"),d("/front_5th_chapter1-1/")):d("/front_5th_chapter1-1/login")})}function L(){return`
    <footer class="bg-gray-200 p-4 text-center">
      <p>&copy; 2024 항해플러스. All rights reserved.</p>
    </footer>
  `}function $(e){return`
    <div class="bg-gray-100 min-h-screen flex justify-center">
       <div class="max-w-md w-full">
         ${_()}
          <main class="p-4">${e}</main>   
          ${L()}
        </div>  
      </div>
  `}const B={"/front_5th_chapter1-1/":y,"/front_5th_chapter1-1/login":v,"/front_5th_chapter1-1/profile":w,"/front_5th_chapter1-1/not-found":f},i=()=>{let e=location.pathname;e==="/front_5th_chapter1-1/profile"&&!a()&&(e="/front_5th_chapter1-1/login",window.history.replaceState({},"",e));const t=B[e]||f;e==="/front_5th_chapter1-1/"||e==="/front_5th_chapter1-1/profile"?(document.getElementById("root").innerHTML=$(t()),I(),e==="/front_5th_chapter1-1/profile"&&E()):(document.getElementById("root").innerHTML=t(),e==="/front_5th_chapter1-1/login"&&x())},d=e=>{window.history.pushState({},"",e),i()};window.addEventListener("popstate",i);window.addEventListener("load",i);window.addEventListener("storage",i);document.addEventListener("DOMContentLoaded",()=>{i()});
