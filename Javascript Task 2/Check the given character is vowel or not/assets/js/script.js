function submit() {
    var a = document.getElementById("userInput").value.toLowerCase().trim();
    var b = document.getElementById("errors");
    var result = document.getElementById("result");
    var resultDiv = document.getElementById("resultDiv");
    b.innerHTML = "";
    result.innerHTML = "";
    resultDiv.innerHTML ="";
    if (/[0-9]/.test(a)){
        b.innerHTML = "Numbers are not allowed";
        return;
    }
    else if (/[^a-zA-Z\s]/.test(a)) {
        b.innerHTML = "Special Characters are not allowed";
        return;
    }
    else if (a.length === 0) {
        b.innerHTML = "Please enter the sentence";
        return;
    }
    var words = a.split(/\s+/);
    if (words.length > 1) {
        b.innerHTML = "Please enter only one word";
        return;
    }else{
        var word = a.split("");
        var vowels = word.filter(char => "aeiouAEIOU".includes(char));
        var uniqueVowel = [...new Set(vowels)];
        if(uniqueVowel.length > 0){
            result.innerHTML = "vowels :" +uniqueVowel;
            return;
        }
        else{
            resultDiv.innerHTML = "No vowels found";
            return;
        }
    }
}