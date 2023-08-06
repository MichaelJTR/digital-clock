let hrs = document.getElementById('hrs');
let min = document.getElementById('min');
let secs = document.getElementById('secs');

setInterval(() => {
    let currentTime = new Date();

    console.log(currentTime);
    console.log(currentTime.getHours());
    console.log(currentTime.getMinutes());
    console.log(currentTime.getSeconds());
    
    hrs.innerText = (currentTime.getHours()<10?"0":"") + (currentTime.getHours()>12?currentTime.getHours()-12:currentTime.getHours());
    min.innerText = (currentTime.getMinutes()<10?"0":"") + currentTime.getMinutes();
    secs.innerText = (currentTime.getSeconds()<10?"0":"") + currentTime.getSeconds();
}, 1000);



