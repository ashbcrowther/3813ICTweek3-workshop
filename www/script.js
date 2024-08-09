$(document).ready(function() {
    console.log("Page Ready");

    $("#loginform").submit(function(event) {
        event.preventDefault(); 
        ajaxPost(); 
    });
});

function ajaxPost() {
    // Prepare Form Data from the web form
    var formData = {
        email: $("#email").val(),
        password: $("#upwd").val() 
    };

    // AJAX POST request
    $.ajax({
        type: "POST",
        contentType: "application/json",
        url: "/check", //handle the login
        data: JSON.stringify(formData), // Convert the form data to JSON
        dataType: 'json',
        success: function(customer) {
            if (customer.ok) { // Check if the login successful
                // Store the user's details in sessionStorage
                sessionStorage.setItem('userName', customer.name);
                sessionStorage.setItem('userEmail', formData.email);
                sessionStorage.setItem('userPassword', formData.password);

                // Redirect to the account page
                window.location.href = '/account';
            } else {
                // Display error message
                $("#loginform").after('<p class="error-message">Invalid email or password. Please try again.</p>');
            }
        },
        error: function(e) {
            alert("Error!");
            console.log("ERROR: ", e);
        }
    });
}
