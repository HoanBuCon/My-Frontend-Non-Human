const passwordInput = document.getElementById("password");
const togglePasswordButton = document.querySelector(".login-form__password-toggle");

togglePasswordButton.addEventListener("click", () => {
    const icon = togglePasswordButton.querySelector("[data-lucide]");
    const isPassword = passwordInput.type === "password";

    if (isPassword) {
        passwordInput.type = "text";
        icon.setAttribute("data-lucide", "eye-off");
        togglePasswordButton.setAttribute("aria-label", "Ẩn mật khẩu");
    } else {
        passwordInput.type = "password";
        icon.setAttribute("data-lucide", "eye");
        togglePasswordButton.setAttribute("aria-label", "Hiển thị mật khẩu");
    }

    lucide.createIcons(); // Render lại icon
});