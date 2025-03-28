import { setUserInfo } from "../../utils";
import { navigateTo } from "../../app/router";

function LoginPage() {
  return `
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
  `;
}

export function setUpLoginEvents() {
  const form = document.getElementById("login-form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username && password) {
      setUserInfo({ username, email: "", bio: "" });
      navigateTo("/");
    }
  });
}
export default LoginPage;
