setInterval(() => {
    d = new Date();
    hTime = d.getHours();
    mTime = d.getMinutes();
    sTime = d.getSeconds();

    //calibrate the angle w.r.t time
    //for hours 12 -- 360deg + 30 -- 60
    //for minutes 60min -- 360deg ; 1min -- 6deg;
    hRotation = 30*hTime + mTime/2;
    mRotation = 6*mTime;
    sRotation = 6*sTime;

    hour.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
    sec.style.transform = `rotate(${sRotation}deg)`;
    // console.log(d)
}, 1000);