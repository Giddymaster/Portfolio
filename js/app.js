 `use strict`
var datetime = new Date();
console.log(datetime);
document.getElementById("time").textContent = datetime; //it will print on html page
`use strict`;
function refreshTime() {
  const timeDisplay = document.getElementById("time");
  const dateString = new Date().toLocaleString();
  const formattedString = dateString.replace(", ", " - ");
  timeDisplay.textContent = formattedString;
}
  setInterval(refreshTime, 1000);
 `use strict`
var datetime = new Date().getDate();
console.log(datetime); // it will represent date in the console of developers tool
document.getElementById("time").textContent = datetime; //it will print on html page
`use strict`
var datetime = new Date().getDay();
console.log(datetime); // it will represent date in the console of developers tool
document.getElementById("time").textContent = datetime; //it will print on html page
 `use strict`
var datetime = new Date().getFullYear();
console.log(datetime); // it will represent date in the console of developers tool
document.getElementById("time").textContent = datetime; //it will print on html page


`use strict`
var datetime = new Date().getHours()+1;
console.log(datetime); // it will represent date in the console of developers tool
document.getElementById("time").textContent = datetime; // represent on webbrowser

 `use strict`
var datetime = new Date().getMilliseconds();
console.log(datetime); // it will represent date in the console of developers tool
document.getElementById("time").textContent = datetime; // represent on html page


`use strict`
var datetime = new Date().getMonth() + 1;
console.log(datetime); // it will represent date in the console of  developers tool
document.getElementById("time").textContent = datetime; // represent on html page

`use strict`
var datetime = new Date().toDateString();
console.log(datetime); // it will represent date in the console of developer tool
document.getElementById("time").textContent = datetime; // represent on html page

 `use strict`
var datetime = new Date().toLocaleTimeString();
console.log(datetime); // it will represent date in the console of developers tool
document.getElementById("time").textContent = datetime; // represent on html page

var today = new Date();
  var day = today.getDay();
  var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
  console.log("Today is : " + daylist[day] + ".");