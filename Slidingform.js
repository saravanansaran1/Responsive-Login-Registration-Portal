// Theme Toggle Logic
const themeBtn = document.getElementById("theme-btn");
const body = document.body;
const themeIcon = themeBtn.querySelector("i");

themeBtn.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    if(body.classList.contains("dark-mode")){
        themeIcon.classList.replace("fa-moon", "fa-sun");
    } else {
        themeIcon.classList.replace("fa-sun", "fa-moon");
    }
});

// Show/Hide Password
const pwShowHideIcons = document.querySelectorAll(".show-hide");
pwShowHideIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let pwInput = icon.previousElementSibling;
        if(pwInput.type === "password"){
            pwInput.type = "text";
            icon.classList.replace("fa-eye", "fa-eye-slash");
        } else {
            pwInput.type = "password";
            icon.classList.replace("fa-eye-slash", "fa-eye");
        }
    });
});

// Form Validation & Redirection
const signupForm = document.querySelector(".signup-form");
const signupError = document.getElementById("signup-error");
const pass1 = document.getElementById("signup-pass");
const pass2 = document.getElementById("signup-cpass");

signupForm.addEventListener("submit", (e) => {
    e.preventDefault(); 
    if(pass1.value.length < 6) {
        signupError.style.display = "block";
        signupError.innerText = "Password must be at least 6 characters!";
    } else if(pass1.value !== pass2.value) {
        signupError.style.display = "block";
        signupError.innerText = "Passwords do not match!";
    } else {
        signupError.style.display = "none";
        window.location.href = "welcome.html";
    }
});

const loginForm = document.querySelector(".login-form");
const loginError = document.getElementById("login-error");

loginForm.addEventListener("submit", (e) => {
    e.preventDefault(); 
    loginError.style.display = "none";
    window.location.href = "welcome.html";
});

// Modal Logics
const forgotPassLink = document.getElementById("forgot-pass-link");
const forgotModal = document.getElementById("forgot-modal");
const forgotCancel = document.getElementById("forgot-cancel");
const forgotSend = document.getElementById("forgot-send");
const forgotEmailInput = document.getElementById("forgot-email-input");
const forgotError = document.getElementById("forgot-error");

const modalOverlay = document.getElementById("custom-modal");
const modalMsg = document.getElementById("modal-msg");
const modalClose = document.getElementById("modal-close");
const modalIcon = document.getElementById("modal-icon");

forgotPassLink.addEventListener("click", (e) => {
    e.preventDefault();
    forgotEmailInput.value = "";
    forgotError.style.display = "none";
    forgotModal.classList.add("active");
});

forgotCancel.addEventListener("click", () => {
    forgotModal.classList.remove("active");
});

forgotSend.addEventListener("click", () => {
    let emailValue = forgotEmailInput.value.trim();
    if(emailValue === "" || !emailValue.includes("@")) {
        forgotError.style.display = "block";
    } else {
        forgotError.style.display = "none";
        forgotModal.classList.remove("active");
        modalIcon.className = "fas fa-check-circle";
        modalIcon.style.color = "#4CAF50";
        modalMsg.innerHTML = "Password recovery link has been sent to <b>" + emailValue + "</b>!";
        modalOverlay.classList.add("active");
    }
});

const dummyLinks = document.querySelectorAll(".dummy-link");
dummyLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault(); 
        let message = link.getAttribute("data-msg");
        modalIcon.className = "fas fa-info-circle";
        modalIcon.style.color = "#b84c2a";
        modalMsg.innerText = message;
        modalOverlay.classList.add("active");
    });
});

modalClose.addEventListener("click", () => {
    modalOverlay.classList.remove("active");
});