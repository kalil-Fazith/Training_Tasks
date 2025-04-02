function submit() {
    var userInput = document.getElementById("userInput").value.trim();
    var errorMsg = document.getElementById("errors");
    var result = document.getElementById("result");
    errorMsg.innerHTML = "";
    result.innerHTML = "";
    var input = userInput.replace(/\s+/,"");
    var aLength = input.split(",").filter(Boolean);
    var one = aLength[0]
    var two = aLength[1]
    if(/[^A-Za-z0-9,\s+]/.test(userInput)){
        errorMsg.innerHTML = "special characters are not allowed";
        return;
    }
    else if(/[a-zA-Z]/.test(userInput)){
        errorMsg.innerHTML = "letters are not allowed";
        return;
    }
    else if (aLength.length !== 2) {
        errorMsg.innerHTML = "Please enter two number";
        return;
    }
    else if(one === two){
        errorMsg.innerHTML = "Both the numbers are equal";
        return;
    }
    else if(/[0-9,]/.test(userInput)){
        var largestNumber = Math.max(...aLength);
        result.innerHTML = "largest Number is : "+largestNumber;
        return;
    }
}