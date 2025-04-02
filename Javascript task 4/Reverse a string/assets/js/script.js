function submit() {
    var userInput = document.getElementById("userInput").value.toLowerCase().trim();
    var errorMsg = document.getElementById("errors");
    var result = document.getElementById("result");
    errorMsg.innerHTML = "";
    result.innerHTML = "";
    if (/[^a-zA-Z0-9\s]/.test(userInput)) {
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
        var word = "";
        for(var i = userInput.length-1; i>=0 ; i--){
            word = word + userInput[i];
        }
        result.innerHTML = "The reverse of a string is : " +word;
    }
}