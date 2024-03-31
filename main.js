window.addEventListener("DOMContentLoaded", function () {
    const start_button = this.document.getElementById("start-button");
    const stop_button = this.document.getElementById("stop-button");
    const reset_button = this.document.getElementById("reset-button");
    const hour_time = this.document.getElementById("hour");
    const minute_time = this.document.getElementById("minute");
    const second_time = this.document.getElementById("second");
    const milisecond_time = this.document.getElementById("mili-second");
    let flag = 0;
    let hour = 0, minute = 0, second = 0, miliSecond = 0;


    setInterval(() => {
        if (flag === 1) {
            miliSecond += 1;
        }
        setTimerCount();
    }, 100);
    // setInterval(() => {
    //     console.log(hour + "h" + minute + "m" + second + "s" + miliSecond + "milis");
    // }, 1000);

    start_button.addEventListener("click", function () {
        flag = 1;
        if (flag === 0) {
            resetTime();
        }
        // console.log("start");
        start_button.disabled = !start_button.disabled;
        stop_button.disabled = !stop_button.disabled;
    });

    stop_button.addEventListener("click", function () {
        stop_button
        flag = 2;
        // console.log("stop");
        start_button.disabled = !start_button.disabled;
        stop_button.disabled = !stop_button.disabled;
    })


    reset_button.addEventListener("click", function () {
        resetTime();
        // console.log("reset");
    });

    function resetTime() {
        // console.log("time_reset");
        hour = 0;
        minute = 0;
        second = 0;
        miliSecond = 0;
    }

    function setTimerCount() {
        // console.log("set_time");
        calTime();
        hour_time.textContent = hour;
        minute_time.textContent = minute;
        second_time.textContent = second;
        milisecond_time.textContent = miliSecond;
    }

    function calTime() {
        if (miliSecond >= 10) { miliSecond -= 10; second += 1 };
        if (second >= 60) { second -= 60; minute += 1 };
        if (minute >= 60) { minute -= 60; hour += 1 };
    }
});