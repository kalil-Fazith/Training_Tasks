var checkBoxes = document.getElementsByClassName("check");
function check(){
    for (let i = 0; i < checkBoxes.length; i++) {
        checkBoxes[i].checked = true;
    }
}
function uncheck(){
    for (let i = 0; i < checkBoxes.length; i++) {
        checkBoxes[i].checked = false;
    }
}
function crossCheck(){
    for (let i=0; i<checkBoxes.length;i++){
        checkBoxes[i].checked = !checkBoxes[i].checked
    }
}