let clock = () => {
    let date = new Date();
let month_num = date.getMonth();
let day = date.getDay();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();

if(day <= 9) day = "0" + day
if(hours <= 9) hours = "0" + hours
if(minutes <= 9) minutes = "0" + minutes
if(seconds <= 9) seconds = "0" + seconds

let month =[
"Январь",
"Февраль",
"Март",
"Апрель",
"Май",
"Июнь",
"Июль",
"Август",
"Сентябрь",
"Октябрь",
"Наябрь",
"Декабрь",
]



let date_time = "Today" +" "+ month[month_num] + " "+ day +  " " +  hours +  ":" + minutes +  ":" +   seconds 

   let d = document.getElementById("time");

d.innerHTML = date_time;

setTimeout(() => {
    clock()
}, 1000)
// 1000 - 1s

};
 clock()