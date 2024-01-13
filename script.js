
var day_count = document.getElementById('day_num');
var hours_count = document.getElementById('hours_num');
var minits_count = document.getElementById('minits_num');
var seconds_count = document.getElementById('sec_num');


var count_date = new Date("december 15,2023 13:42").getTime();

var time = setInterval(function(){
    var now = new Date().getTime();
    console.log(now);
    var distance = count_date - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);


day_count.innerText = days;
hours_count.innerText = hours;
minits_count.innerText = minutes;
seconds_count.innerText = seconds;

if(distance<0){
 day_count.innerText = 0;
hours_count.innerText = 0;
minits_count.innerText = 0;
seconds_count.innerText = 0;
}


},1000);

