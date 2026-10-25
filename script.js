// مدیریت صفحه ورود
const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const username = document.getElementById("username").value;

        localStorage.setItem("username", username);

        window.location.href = "dashboard.html";
    });
}

// نمایش نام کاربر در داشبورد
const mainContent = document.querySelector(".main-content");

if (mainContent) {
    const username = localStorage.getItem("username");

    if (username) {
        mainContent.querySelector("p").textContent =
            "خوش آمدی " + username + "!";
    }
}

// خروج از حساب
function logout() {
    localStorage.removeItem("username");
    window.location.href = "index.html";
}