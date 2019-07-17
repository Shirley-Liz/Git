

function displayCurrentDt() {
    var mydate = new Date();
    var year = mydate.getFullYear();
    if(year < 1000){
        year +=1900;
    }
var day = mydate.getDay();
var month = myDate.getMonth();
var daym = myDate.getDate();
var dayarray = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday");
var montharray = new Array("January","February","March","April","May","June","July","August","September","October","November","December"); 
  var currentTime = newDate();
  var h = currentTime.getHours();
  var m = currentTime.getMinutes();
  var s = currentTime.getSeconds();
  if(h == 24){
      h=0;
  } else if (h > 12){
      h = h - 0;
  }
   if (h < 10){
       h = "0" + h;
   }
   if (m < 10){
       m = "0" + m;
   }
   if (s < 10){
       s = "0" + s;
   }
var myClock = document.getElementById("timedate");
myClock.textcontent = "" +dayarray[day]+ "" +daym+ "" +montharray[month]+ "" +year+ "|" +h+ ":" +m+ ":" +s;
myclock.innerText =  "" +dayarray[day]+ "" +daym+ "" +montharray[month]+ "" +year+ "|" +h+ ":" +m+ ":" +s;
setTimeout("displayCurrentDt()", 1000);

}
displayCurrentDt();
// function displayDate(){
// document.getElementById(timedate).innerHTML = Date()
//}
