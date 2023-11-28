document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');

    // Function to toggle between forms
    window.toggleForms = function() {
        loginForm.style.display = loginForm.style.display === 'none' ? 'block' : 'none';
        signupForm.style.display = signupForm.style.display === 'none' ? 'block' : 'none';
    };

    // Check if the user is already registered
    if (localStorage.getItem('isRegistered')) {
        // If registered, show the login form
        loginForm.style.display = 'block';
        signupForm.style.display = 'none';
    } else {
        // If not registered, show the signup form
        loginForm.style.display = 'none';
        signupForm.style.display = 'block';
    }

    // Add more logic here for form submissions, setting localStorage, etc.
});
