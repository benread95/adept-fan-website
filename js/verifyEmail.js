function validate(){
    var email = $('form').serializeArray()[0]["value"];
    if (email != null && validateEmail(email)){
        // addToMailingList(email);
        return true;
    }
    validationMessage();
    return false;
}
function validateEmail(email){
    var reg = new RegExp(/\S+@\S+[.]\S+/);
    return reg.test(email);
}
function validationMessage(){
    $(".validation-text").show();
    $(".validation-text").fadeOut(3000);
}
