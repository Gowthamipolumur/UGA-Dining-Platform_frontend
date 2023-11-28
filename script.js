document.addEventListener("DOMContentLoaded", function() {
    // Function to generate a simple token
    function generateToken(name) {
        return btoa(name + Date.now()); // Base64 encoding of the name and current timestamp
    }

    // Handle Registration Form Submission
    const registrationForm = document.getElementById('registrationForm');
    registrationForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const regData = {
            firstname: document.getElementById('regFirstname').value,
            lastname: document.getElementById('regLastname').value,
            email: document.getElementById('regEmail').value,
            password: document.getElementById('regPassword').value
        };

        registerUser(regData)
            .then(response => {
                console.log("Registration Response:", response);

                // Generate token using firstname
                const token = generateToken(regData.firstname);

                // Set cookies
                setCookie('firstname', regData.firstname);
                setCookie('token', token);
            })
            .catch(error => console.error("Registration Error:", error));
    });

    // Handle Login Form Submission
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const loginData = {
            email: document.getElementById('loginEmail').value,
            password: document.getElementById('loginPassword').value
        };

        loginUser(loginData)
            .then(response => {
                console.log("Login Response:", response);

                // Generate token using firstname
                const token = generateToken(response.firstname);

                // Set cookies
                setCookie('firstname', response.firstname);
                setCookie('token', token);
            })
            .catch(error => console.error("Login Error:", error));
    });
});

// Existing setCookie, registerUser, loginUser functions...
