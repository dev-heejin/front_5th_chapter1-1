(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))l(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function o(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(n){if(n.ep)return;n.ep=!0;const s=o(n);fetch(n.href,s)}})();const b=(e,t)=>{if(!t)return;localStorage.setItem(e,JSON.stringify(t));const o=new Event("storage");window.dispatchEvent(o)},p=e=>{const t=localStorage.getItem(e);return t?JSON.parse(t):null},g=e=>{localStorage.removeItem(e);const t=new Event("storage");window.dispatchEvent(t)},u="user",m=e=>b(u,e),i=()=>p(u),v=()=>g(u);function x(){return`
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
  `}function y(){document.getElementById("login-form").addEventListener("submit",t=>{t.preventDefault();const o=document.getElementById("username").value,l=document.getElementById("password").value;o&&l&&(m({username:o,email:"",bio:""}),a("/"))})}function h(){return`
    <div class="mb-4 bg-white rounded-lg shadow p-4">
      <textarea id="idea" class="w-full p-2 border rounded" placeholder="무슨 생각을 하고 계신가요?"></textarea>
      <button class="mt-2 bg-blue-600 text-white px-4 py-2 rounded post-button">게시</button>
    </div>

    <div class="space-y-4">
      ${r("홍길동","5분 전","오늘 날씨가 정말 좋네요. 다들 좋은 하루 보내세요!")}
      ${r("김철수","15분 전","새로운 프로젝트를 시작했어요. 열심히 코딩 중입니다!")}
      ${r("이영희","30분 전","오늘 점심 메뉴 추천 받습니다. 뭐가 좋을까요?")}
      ${r("박민수","1시간 전","주말에 등산 가실 분 계신가요? 함께 가요!")}
      ${r("정수연","2시간 전","새로 나온 영화 재미있대요. 같이 보러 갈 사람?")}
    </div>
`}function r(e,t,o){return`
    <div class="bg-white rounded-lg shadow p-4">
      <div class="flex items-center mb-2">
        <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
          <div>
            <p class="font-bold">${e}</p>
            <p class="text-sm text-gray-500">${t}</p>
          </div>
      </div>
      <p>${o}</p>
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
`}function w(){const e=i();return`
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
`}function E(){const e=i(),t=document.getElementById("profile-form");document.getElementById("username").value=e.username,document.getElementById("email").value=e.email,document.getElementById("bio").value=e.bio,t.addEventListener("submit",o=>{o.preventDefault();const l=document.getElementById("username").value,n=document.getElementById("email").value,s=document.getElementById("bio").value;m({...e,username:l,email:n,bio:s}),alert("프로필 변경이 완료되었습니다")})}function I(){const e=!!i();return`
     <header class="bg-blue-600 text-white p-4 sticky top-0">
        <h1 class="text-2xl font-bold">항해플러스</h1> 
     </header>
     <nav class="bg-white shadow-md p-2 sticky top-14">
        <ul class="flex justify-around">
          <li><a href="/" class="${location.pathname==="/"?"text-blue-600":"text-gray-600"}" data-link>홈</a></li>
          ${e?`<li><a href="/profile" class="${location.pathname==="/profile"?"text-blue-600":"text-gray-600"}" data-link>프로필</a></li>`:""}
          <li><a href="#" class="text-gray-600" id="logout" data-userinfo>${e?"로그아웃":"로그인"}</a></li>
        </ul>
     </nav>
  `}function L(){const e=document.getElementById("logout");e&&e.addEventListener("click",o=>{o.preventDefault(),!!i()?(v(),localStorage.removeItem("user"),a("/")):a("/login")}),document.querySelector("nav").addEventListener("click",o=>{const l=o.target.closest("[data-link]");if(l){o.preventDefault();const n=l.getAttribute("href");a(n)}})}function $(){return`
    <footer class="bg-gray-200 p-4 text-center">
      <p>&copy; 2024 항해플러스. All rights reserved.</p>
    </footer>
  `}function B(e){return`
    <div class="bg-gray-100 min-h-screen flex justify-center">
       <div class="max-w-md w-full">
         ${I()}
          <main class="p-4">${e}</main>   
          ${$()}
        </div>  
      </div>
  `}const P={"/":h,"/login":x,"/profile":w,"/not-found":f},d=()=>{let e=location.pathname;e==="/profile"&&!i()&&(e="/login",window.history.replaceState({},"",e));const t=P[e]||f;e==="/"||e==="/profile"?(document.getElementById("root").innerHTML=B(t()),L(),e==="/profile"&&E()):(document.getElementById("root").innerHTML=t(),e==="/login"&&y())},a=e=>{window.history.pushState({},"",e),d()};window.addEventListener("popstate",d);window.addEventListener("load",d);window.addEventListener("storage",d);document.addEventListener("DOMContentLoaded",()=>{d(),document.body.addEventListener("click",e=>{const t=e.target;if(t.matches("[data-link]")){e.preventDefault();const o=t.dataset.link;a(o)}})});
