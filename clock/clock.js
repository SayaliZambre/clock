// setInterval(() => {
//     d = new Date();
//     htime = d.getHours();
//     mtime = d.getMinutes();
//     stime = d.getSeconds();
//     hrotation = 30*htime + mtimes/2;
//     mrotation = 6*mtimes;
//     srotation = 6*stimes;

//     hour.style.transform = `rotate(${hrotation}deg)` ;
//     minute.style.transform = `rotate(${hrotation}deg)` ;
//     second.style.transform = `rotate(${hrotation}deg)` ;
// } ,1000);
// <script src="clock.js">let hr = document.querySelector('#hr');
// let mn = document.querySelector('#mn');
// let sc = document.querySelector('#sc');

setInterval(() =>{
    let day = new Date();
    let hh = day.getHours()*30;
    let mn = day.getHours()*6;
    let ss = day.getHours()*6;
   
    hr.style.transform = 'rotate(${hh+(mn/12)}deg)';
    mn.style.transform = 'rotate(${mn}deg)';
    sc.style.transform = 'rotate(${scsdeg)';
   
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');
    let anpm = document.getElementById('anpm');
    
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    h = (h<10)?"0"+h:h
    m = (h<10)?"0"+m:m
    s = (h<10)?"0"+s:s

    hours.innerhtml

})
