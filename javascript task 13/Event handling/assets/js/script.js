document.addEventListener('mouseup', function(event) {
    var result = document.getElementById("result");
    switch (event.button) {
        case 0:
            result.innerText = "Left button is clicked";
            break;
        case 1:
            result.innerText = "Middle button is clicked";
            break;
        case 2:
            result.innerText = "Right button is clicked";
            break;
    }
});