setInterval(() => {
    let d = new Date;
    // console.log(d)

    let hr = d.getHours()
    let min = d.getMinutes()
    let sec = d.getSeconds()

    let hrRotate = 30*hr + min/2;
    let minRotate = 6*min;
    let secRotate = 6*sec;

    let hour = document.querySelector(".hr")
    let minute = document.querySelector(".min")
    let second = document.querySelector(".sec")

    hour.style.transform = `rotate(${hrRotate}deg)`
    minute.style.transform = `rotate(${minRotate}deg)`
    second.style.transform = `rotate(${secRotate}deg)`

}, 1000);