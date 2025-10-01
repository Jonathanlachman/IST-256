document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault(); // prevent form submission

    let isValid = true;

    document.querySelectorAll(".form-control").forEach(input => {
        input.classList.remove("error");
    });
    document.querySelectorAll(".error-message").forEach(msg => {
        msg.textContent = "";
    });

    // Username check
    let username = document.getElementById("username");
    if (username.value.trim() === "") {
        isValid = false;
        username.classList.add("error");
        document.getElementById("usernameError").textContent = "Username is required.";
    }

    // Email check
    let email = document.getElementById("email");
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email.value.trim())) {
        isValid = false;
        email.classList.add("error");
        document.getElementById("emailError").textContent = "Please enter a valid email (e.g. joe@test.com).";
    }

    // Password check
    let password = document.getElementById("password");
    if (password.value.trim() === "") {
        isValid = false;
        password.classList.add("error");
        document.getElementById("passwordError").textContent = "Password is required.";
    }

    // Confirm password check
    let confirmPassword = document.getElementById("confirmPassword");
    if (password.value !== confirmPassword.value) {
        isValid = false;
        confirmPassword.classList.add("error");
        document.getElementById("confirmPasswordError").textContent = "Passwords do not match.";
    }

    if (isValid) {
        alert("Form submitted successfully!");
        document.getElementById("signupForm").reset();
    }
});
