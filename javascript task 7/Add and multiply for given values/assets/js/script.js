function validateInput() {
    var userInput = document.getElementById("userInput").value.trim();
    var errorMsg = document.getElementById("errors");
    var result = document.getElementById("result");
    var input = userInput.replace(/[\s]+/g,"").replace(/^,|,+$/g, '').replace(/,+/g, ',').replace(/\.{2,}/g, ".").replace(/\-{2,}/g, "-");
    var aLength = input.split(",")
    errorMsg.innerHTML = "";
    result.value = "";
    if (/[^A-Za-z0-9,.-\s]/.test(userInput)) {
        errorMsg.innerHTML = "Special characters are not allowed";
        return;
    } else if (/[a-zA-Z]/.test(userInput)) {
        errorMsg.innerHTML = "Letters are not allowed";
        return;
    } else if (aLength.length == 0){
        errorMsg.innerHTML = "Please enter a number";
        return;
    } 
    else if (aLength.length > 0 && aLength.length < 2) {
        errorMsg.innerHTML = "Please enter two or more numbers";
        return;
    } else {
        return aLength;
    }
}
function add() {
    var numbers = validateInput();
    if (numbers) {
        var sum = 0;
        for (var i = 0; i < numbers.length; i++) {
            sum = sum + Number(numbers[i]);
        }
        result.value = sum;
        return;
    }
}
function multiply() {
    var numbers = validateInput();
    if (numbers) {
        var product = 1;
        for (var i = 0; i < numbers.length; i++) {
            product = product * Number(numbers[i]);
        }
        result.value = product;
        return;
    }
}