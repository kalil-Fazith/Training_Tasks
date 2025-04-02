function submit() {
    var userInput = document.getElementById("userInput").value.toLowerCase().trim();
    var errorMsg = document.getElementById("errors");
    var result = document.getElementById("result");
    errorMsg.innerHTML = "";
    result.innerHTML = "";
    if (/[0-9]/.test(userInput)){
        errorMsg.innerHTML = "Numbers are not allowed";
        return;
    }
    else if (/[^a-zA-Z\s]/.test(userInput)) {
        errorMsg.innerHTML = "Special Characters are not allowed";
        return;
    }
    else if (userInput.length === 0) {
        errorMsg.innerHTML = "Please enter the sentence";
        return;
    }
    else if (userInput.length < 2) {
        errorMsg.innerHTML = "Please enter more than one character";
        return;
    }
    else{
        var firstCharacter = userInput.charAt(0);
        var lastCharacter = userInput.charAt(userInput.length - 1);
        if (firstCharacter === lastCharacter){
            result.innerHTML = "first and last characters are equal";
        } 
        else{
            result.innerHTML = "first and last characters are not equal";
        }   
    }
}