document.getElementById("signupForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let fullName = document.getElementById("fullname").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let age = document.getElementById("age").value;

    // Full Name Validation
    if (fullName === "" || fullName.split(" ").length < 2) {
        alert("Please enter your full name");
        return;
    }

    // Email Validation
    if (!email.includes("@") || !email.includes(".")) {
        alert("Please enter a valid email address");
        return;
    }

    // Password Length Validation
    if (password.length < 6) {
        alert("Password must be at least 6 characters");
        return;
    }

    // Confirm Password Validation
    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
    }

    // Age Validation
    if (age < 18) {
        alert("You must be at least 18 years old");
        return;
    }

    // Success Message
    alert("Registration Successful!");

});