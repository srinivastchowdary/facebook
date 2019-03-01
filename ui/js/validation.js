function validateEmail() {
        var email = document.getElementById('txtEmail');
        var mailFormat = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})|([0-9]{10})+$/;
        if (email.value == "") {
            alert( "  Please enter your Email or Phone Number  ");
        }
        else if (!mailFormat.test(email.value)) {
            alert style="color:red;" ( "  Email Address / Phone number is not valid, Please provide a valid Email or phone number ");
            return false;
        }
        else {
            alert(" Success ");
        }
}