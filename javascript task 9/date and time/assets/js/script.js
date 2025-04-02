function show(){
    var year = document.getElementById("year");
    var month = document.getElementById("month");
    var date = document.getElementById("date");
    var hour = document.getElementById("hour");
    var minute = document.getElementById("minute")
    var seconds = document.getElementById("seconds");
    var millisec = document.getElementById("milliseconds");
    var local = document.getElementById("local");
    var utc = document.getElementById("utc");
    var utcSec = document.getElementById("utcMilli");
    var a = new Date();
    year.value = a.getFullYear();
    month.value = a.getMonth()+1;
    date.value = a.getDate();
    hour.value = a.getHours();
    minute.value = a.getMinutes();
    seconds.value = a.getSeconds();
    millisec.value = a.getMilliseconds();
    local.value = a.getDate()+'-'+a.getMonth()+'-'+a.getFullYear()+" "+a.getHours()+":"+a.getMinutes()+":"+a.getSeconds();
    utcSec.value = a.getTime();
    var utcDate = a.toUTCString();
    utc.value = utcDate;
    return false;
}