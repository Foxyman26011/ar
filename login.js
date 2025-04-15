document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const correctUsername = "admin";
    const correctPassword = "yourpassword";

    if (username === correctUsername && password === correctPassword) {
        window.location.href = "admin.html"; 
    } else {
        document.getElementById("error-message").textContent = "Incorrect username or password.";
    }
});
