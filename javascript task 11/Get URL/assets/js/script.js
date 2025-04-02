function getUrl(){
  var result = document.getElementById("result");
  result.innerHTML = "";
  var cLocation = document.URL;
  result.innerText = cLocation;
  return false;
}