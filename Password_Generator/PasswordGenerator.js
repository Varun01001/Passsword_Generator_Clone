const passwordBox = document.getElementById("password");
const generatebtn = document.getElementById("generate");
const CopyPass = document.getElementById("copyPassword");

const togglePassword = document.getElementById("togglePassword");

const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxys";
const number = "0123456789";
const symbols = "@#$%^&*()_+~|]{[]></-=";

const allChars = upperCase + lowerCase + symbols + number;





function CreatePassword() {
    let password = "";

    //// password += upperCase[Math.floor(Math.random() * upperCase.length)];
    //// password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    //// password += number[Math.floor(Math.random() * number.length)];
    //// password += symbols[Math.floor(Math.random() * symbols.length)];

    while (length > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
        //// password += upperCase[Math.floor(Math.random() * upperCase.length)];
        //// password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
        //// password += number[Math.floor(Math.random() * number.length)];
        //// password += symbols[Math.floor(Math.random() * symbols.length)];
    }

    passwordBox.value = password;
    passwordBox.type = "password";
    togglePassword.classList.remove("fa-eye");
    togglePassword.classList.add("fa-eye-slash");

    // passwordBox.type = "text";
    // togglePassword.classList.remove("fa-eye-slash");
    // togglePassword.classList.add("fa-eye");

}

generatebtn.addEventListener("click", CreatePassword);

function copyPassword() {
    passwordBox.select();
    document.execCommand("copy");
}

CopyPass.addEventListener("click", copyPassword);



togglePassword.addEventListener("click", () => {
    if (password.type === "password") {
        password.type = "text";
        togglePassword.classList.remove("fa-eye-slash");
        togglePassword.classList.add("fa-eye");
    }
    else {
        password.type = "password";
        togglePassword.classList.remove("fa-eye");
        togglePassword.classList.add("fa-eye-slash");
    }
});