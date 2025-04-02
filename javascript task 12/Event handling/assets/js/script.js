function rightClickDisable(){
    var event = document.getElementById("event");
    var head = document.getElementById("head");
    alert("right click is disabled");
    event.addEventListener('contextmenu', event => event.preventDefault());
    head.addEventListener('contextmenu', event => event.preventDefault());
}