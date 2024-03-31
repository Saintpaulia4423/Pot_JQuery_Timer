$(document).ready(function () {
    let flag = 0;
    let hour = 0, minute = 0, second = 0, miliSecond = 0;


    setInterval(() => {
        setTimerCount();
        if (flag === 1) {
            miliSecond += 1;
        }
    }, 100);
    setInterval(() => {
        console.log(hour + "h" + minute + "m" + second + "s" + miliSecond + "milis");
    }, 1000);

    $("#start-button").click(function () {
        flag = 1;
        if (flag === 0) {
            resetTime();
        }
        console.log("start");
        $("#start-button").prop("disabled", !$("#start-button").prop("disabled"));
        $("#stop-button").prop("disabled", !$("#stop-button").prop("disabled"));
    });

    $("#stop-button").click(function () {
        flag = 2;
        console.log("stop");
        $("#start-button").prop("disabled", !$("#start-button").prop("disabled"));
        $("#stop-button").prop("disabled", !$("#stop-button").prop("disabled"));
    });

    $("#reset-button").click(function () {
        resetTime();
        console.log("reset");
    });

    function resetTime() {
        console.log("time_reset");
        hour = 0;
        minute = 0;
        second = 0;
        miliSecond = 0;
    }

    function setTimerCount() {
        console.log("set_time");
        calTime();
        $("#hour").text(hour);
        $("#minute").text(minute);
        $("#second").text(second);
        $("#mili-second").text(miliSecond);
    }

    function calTime() {
        if (miliSecond >= 10) { miliSecond -= 10; second += 1 };
        if (second >= 60) { second -= 60; minute += 1 };
        if (minute >= 60) { minute -= 60; hour += 1 };
    }
});