function submit() {
    var a = document.getElementById("userInput").value.trim();
    var b = document.getElementById("errors");
    var sResult = document.getElementById("smallResult");
    var lResult = document.getElementById("largeResult");
    b.innerHTML = "";
    sResult.innerHTML = "";
    lResult.innerHTML = "";
    if (/[0-9]/.test(a)) {
        b.innerHTML = "Numbers are not allowed";
        return;
    } else if (/[^a-zA-Z\s]/.test(a)) {
        b.innerHTML = "Special Characters are not allowed";
        return;
    } else if (a.length === 0) {
        b.innerHTML = "Please enter the sentence";
        return;
    }
    var words = a.split(/\s+/);
    if (words.length < 2) {
        b.innerHTML = "Please enter a sentence with more than one word";
        return;
    }
    var smallestLength = words[0].length, largestLength = words[0].length;
    var smallestWords = [words[0]], largestWords = [words[0]];
    for (var i = 1; i < words.length; i++) {
        var wordLength = words[i].length;
        if (wordLength < smallestLength) {
            smallestLength = wordLength;
            smallestWords = [words[i]];
        } else if (wordLength === smallestLength) {
            smallestWords.push(words[i]);
        }
        if (wordLength > largestLength) {
            largestLength = wordLength;
            largestWords = [words[i]];
        } else if (wordLength === largestLength) {
            largestWords.push(words[i]);
        }
    }
    smallestWords = [...new Set(smallestWords)];
    largestWords = [...new Set(largestWords)];

    if (smallestLength === largestLength) {
        b.innerHTML = "All words have the same length";
        return;
    }
    sResult.innerHTML = "Smallest: " + smallestWords.join(", ");
    lResult.innerHTML = "Largest: " + largestWords.join(", ");
}
