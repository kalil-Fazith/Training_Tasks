function show(){
    var firstName = document.getElementById("fName").value.trim();
    var lastName = document.getElementById("lName").value.trim();
    var eMail = document.getElementById("email").value.trim();
    var phone = document.getElementById("phone").value;
    var zipCode = document.getElementById("zipCode").value.trim();
    var address = document.getElementById("address").value.trim();
    var fNameError = document.getElementById("fNameError");
    var lNameError = document.getElementById("lNameError");
    var eMailError = document.getElementById("eMailError");
    var phoneError = document.getElementById("phoneError");
    var zipError = document.getElementById("zipError");
    var addressError = document.getElementById("addressError");
    var result = document.getElementById("result");
    var mailFormat = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    fNameError.innerHTML = "";
    lNameError.innerHTML ="";
    eMailError.innerHTML ="";
    phoneError.innerHTML ="";
    zipError.innerHTML = "";
    addressError.innerHTML = "";
    result.innerHTML = "";
    if(/[^a-zA-Z]/.test(firstName)){
        fNameError.innerHTML = "only letters are allowed in first name";
    } else if (firstName.length<1){
        fNameError.innerHTML = "please enter the First name";
    } else if(/[^a-zA-Z]/.test(lastName)){
        lNameError.innerHTML = "only letters are allowed in last name";
    } else if (lastName.length<1){
        lNameError.innerHTML = "please enter the last name";
    } else if(!mailFormat.test(eMail)){
        eMailError.innerHTML = "please enter a valid mail";
    } else if (eMail.length<1){
        eMailError.innerHTML = "please enter the email";
    } else if (/[^0-9]/.test(phone)){
        phoneError.innerHTML = "only numbers are allowed in phone number";
    } else if (phone.length<1){
        phoneError.innerHTML = "please enter the phone number";
    } else if(/[^0-9]/.test(zipCode)){
        zipError.innerHTML = "only numbers are allowed in zip code";
    } else if (/[^A-Za-z0-9,-/.\s]/.test(address)){
        addressError.innerHTML = "special characters are not allowed in address";
    } 
    else {
        if(phone.length != 10){
            phoneError.innerHTML = "please enter 10 numbers"
        } else if (zipCode.length > 0 && zipCode.length != 6){
            zipError.innerHTML = "please enter a valid zip code"
        } else {
            result.innerHTML = "Form submitted successfully";
            document.getElementById("fName").value = "";
            document.getElementById("lName").value = "";
            document.getElementById("email").value = "";
            document.getElementById("phone").value = "";
            document.getElementById("zipCode").value = "";
            document.getElementById("address").value = "";
        }
    }
    return false;
}