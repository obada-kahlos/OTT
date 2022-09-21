$("body").on('click', '.toggle-password', function() {
    $(this).toggleClass("fa-eye fa-eye-slash");
    var input = $("#pass_log_id");
    if (input.attr("type") === "password") {    
        input.attr("type", "text");
    } else {
        input.attr("type", "password");
    }
});

function matchpass(){  
    var firstpassword = document.form.passone.value;  
    var secondpassword = document.form.passtow.value;  
    
    if(firstpassword===secondpassword){  
        return true;  
    }  
    else{  
        alert("password must be same!");  
        return false;  
    }  
}  