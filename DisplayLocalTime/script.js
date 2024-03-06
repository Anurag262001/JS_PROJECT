const time = document.querySelector('.time');
setInterval(function(){
    let realtime = new Date;
    let maindata = realtime.toLocaleTimeString();
    time.innerHTML = maindata
},1000)