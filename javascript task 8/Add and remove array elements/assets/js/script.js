function validate() {
    var userInput = document.getElementById("userInput").value.trim();
    var positions = document.getElementById("position").value;
    var array = document.getElementById("array").value.trim();
    var errorMsg = document.getElementById("errors");
    var result = document.getElementById("result");
    var input = userInput.replace(/[\s]+/g, "").replace(/^,|,+$/g, '').replace(/,+/g, ',');
    var aLength = input.split(",");
    var position = positions.split(",")
    var arrays = array.split(",");
    errorMsg.innerHTML = "";
    result.innerHTML = ""; 
    if (/[^A-Za-z0-9,-\s]/.test(userInput) || /[^A-Za-z0-9,-\s]/.test(positions) || /[^A-Za-z0-9,-\s]/.test(array)) {
        errorMsg.innerHTML = "Special characters are not allowed";
    } else if(/[-]/.test(positions)){
        errorMsg.innerHTML = "Only positive numbers are allowed";
    } else if (/[a-zA-Z]/.test(positions)) {
        errorMsg.innerHTML = "Letters are not allowed in the position";
    } else if (aLength.length == 0 || positions.length == 0 || array.length == 0){
        errorMsg.innerHTML = "Please enter a sentence";
    } else if (aLength.length < 2) {
        errorMsg.innerHTML = "Single string is not allowed in the array";
    } else if (position.length >1){
        errorMsg.innerHTML = "please enter a one position";
    } else if (positions < 1){
        errorMsg.innerHTML = "Enter position more than 0";
    } else if(aLength.length < positions ){
        errorMsg.innerHTML = "position should be within 1 to " +aLength.length;
    } else if (arrays.length>1){
        errorMsg.innerHTML = "Please enter the one element to be added"
    }
     else {
        var insert = aLength;
        if (positions){
            insert[positions - 1] = array;
            result.innerHTML = "Updated array :"+ " " + insert.join(", ");
        }
    }
}