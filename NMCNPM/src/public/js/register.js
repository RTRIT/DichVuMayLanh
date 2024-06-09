

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("registration-form").addEventListener('submit', function(event){
        var pass = document.getElementById('password').value;
        var re_pass = document.getElementById('repassword').value;
        if (pass !== re_pass) {
            alert('Passwords do not match.');
            event.preventDefault();
        }
    })
})