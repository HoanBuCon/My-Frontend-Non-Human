const username = document.getElementById("username");
const password = document.getElementById("password");
const loginForm = document.querySelector(".login-form");
const errorClass = "login-form__input--error";

// Xóa trạng thái lỗi khi user bắt đầu nhập lại
const clearError = (input) => input.classList.remove(errorClass);

username.addEventListener("input", () => clearError(username));
password.addEventListener("input", () => clearError(password));

loginForm.addEventListener("submit", (event) => {
    const isUsernameEmpty = !username.value.trim(); // Sử dụng trim() để loại bỏ space
    const isPasswordEmpty = !password.value;

    if (isUsernameEmpty || isPasswordEmpty) {
        event.preventDefault(); // Chặn submit

        if (isUsernameEmpty) {
            username.classList.add(errorClass);
        }
        if (isPasswordEmpty) {
            password.classList.add(errorClass);
        }

        // Focus vào input bị lỗi
        if (isUsernameEmpty) {
            username.focus();
        }
        if (isPasswordEmpty) {
            password.focus();
        }
        return;
    }

    // Sau đó gửi lên server
    console.log("Submitting login information:", { username: username.value });
});