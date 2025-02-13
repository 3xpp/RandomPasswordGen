document.getElementById("generate-btn").addEventListener("click", function() {
    document.getElementById("password1").value = generatePassword();
    document.getElementById("password2").value = generatePassword();
});

function generatePassword() {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
    let password = "";
    for (let i = 0; i < 12; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return password;
}
