$(document).ready(function () {
    if (window.location.pathname === '/account') {
        const userName = sessionStorage.getItem('userName');
        const userEmail = sessionStorage.getItem('userEmail');
        const userPassword = sessionStorage.getItem('userPassword');

        if (userName && userEmail && userPassword) {
            $('#welcome-message').html(`Welcome, ${userName}!`);
            $('#user-name').html(`Name: ${userName}`);
            $('#user-email').html(`Email: ${userEmail}`);
            $('#user-password').html(`Password: ${userPassword}`);
        } else {
            console.log("One or more user details are missing from sessionStorage.");
        }
    }
});
