//Selecting all required elements
let mainContainer = document.getElementsByClassName('mainContainer')[0]
let Hours = document.getElementById('Hours')
let Minutes = document.getElementById('Minutes')
let Second = document.getElementById('Second')
let currentTime = document.getElementsByClassName('currentTime')
let SetAlarm = document.getElementsByClassName('SetAlarm')[0]
let AddingAlarm = document.getElementsByClassName('AddingAlarm')[0]
let selectElement = document.querySelector('#SongSelect')
let AddBtn = document.getElementById('AddBtn')
let DoneBtn = document.getElementById('DoneBtn')
let StopWatchPage = document.getElementsByClassName('StopWatchPage')[0]
let back = document.getElementById('back')
let Alarmnum = 0;
let alarmarry = []

//Setting Live Time To Display on clock
setInterval(() => {
    let hrs = new Date()
    let h = hrs.getHours()
    Hours.innerHTML = h
}, 1000)

setInterval(() => {
    let mint = new Date()
    let m = mint.getMinutes()
    Minutes.innerHTML = m
}, 1000)

setInterval(() => {
    let sec = new Date()
    let s = sec.getSeconds()
    Second.innerHTML = s
}, 1000)


// openning add alarm page logic 
let container = document.getElementsByClassName('Container')[0];
AddBtn.addEventListener('click', () => {
    //color changing whenever Add button is click
    AddBtn.style.backgroundColor = "white";
    setTimeout(() => {
        AddBtn.style.backgroundColor = "#000000d9";
    }, 100);

    setTimeout(() => {
        // show the Stop watch
        StopWatchPage.style.display = "none";

        // show AddingAlarm element
        AddingAlarm.style.display = "grid";
        mainContainer.style.background = "beige"

        // hide the container element
        container.style.display = "none";
    }, 500)
});


//done button functionalty 
DoneBtn.addEventListener('click', () => {
    //logic to add and display the setted alarm
    let alarmHour = alarm.value.split(":")[0]
    let alarmmin = alarm.value.split(":")[1]
    
    //Main Div
    var MainDiv = document.createElement('div')
    MainDiv.setAttribute('class', "Alarm")
    
    //Time showing Div
    let div = document.createElement('div')
    div.setAttribute('class', "DivAlarm")
    ++Alarmnum
    div.setAttribute('id', `Alarm${Alarmnum}`)
    div.innerHTML = `${alarmHour}:${alarmmin}`
    
    //removing Button Div
    var button = document.createElement('button')
    button.setAttribute('class', "RemoveSettedAlarm")
    button.setAttribute('id', `${Alarmnum}`)
    button.innerHTML = `<i class="fa-solid fa-minus"></i>`
    
    // Giving position to a setted Alarm
    let SetAlarm = document.getElementsByClassName('SetAlarm')[0]
    SetAlarm.appendChild(MainDiv)
    MainDiv.appendChild(div)
    MainDiv.appendChild(button)
    alarmarry.push(div.innerHTML)
    //To delete the div if alarm is not setted
    if (div.innerHTML == ":undefined" && button.innerHTML == `<i class="fa-solid fa-minus"></i>`) {
        MainDiv.remove()
    }
    
    button.addEventListener('click', () => {
        MainDiv.remove()
        alarmarry.pop()
    })
    setTimeout(()=>{
        alarm.value = ''
    },1000)
    
    //color changing whenever Done button is click
    DoneBtn.style.backgroundColor = "#3edc3e7d"
    setTimeout(() => {
        DoneBtn.style.backgroundColor = "#3edc3e";
    }, 100);
    
    setTimeout(() => {
        // show the Stop watch
        StopWatchPage.style.display = "none";
        
        // hide the AddingAlarm element
        AddingAlarm.style.display = "none";
        
        //show container element
        container.style.display = "grid";
        mainContainer.style.background = "white"
    }, 500)
})



let Timmer_Hours = 0;
let Timmer_Mintues = 0;
let Timmer_Second = 0;

// openning Stop Watch page logic 
let StopWatchBtn = document.getElementById('StopWatchBtn')
StopWatchBtn.addEventListener('click', () => {
    //changing color onclick
    StopWatchBtn.style.backgroundColor = "white";
    setTimeout(() => {
        StopWatchBtn.style.backgroundColor = "#000000d9";
    }, 100);
    
    setTimeout(() => {
        // show the Stop watch
        StopWatchPage.style.display = "grid";
        mainContainer.style.background = "beige"
        
        // hide AddingAlarm element
        AddingAlarm.style.display = "none";

        // hide the container element
        container.style.display = "none";
    }, 500)

    back.addEventListener('click', () => {
        //changing bg color onclick
        back.style.backgroundColor = "#947aaebd"
        setTimeout(() => {
            back.style.backgroundColor = "#a75feebd"
        }, 100)

        setTimeout(() => {
            // show the Stop watch
            StopWatchPage.style.display = "none";

            // hide AddingAlarm element
            AddingAlarm.style.display = "none";

            // showing the container element
            container.style.display = "grid";
            mainContainer.style.background = "white"
        }, 500)
    })

    //Logic of start Button
    let StartBtn = document.getElementById('StartBtn')
    StartBtn.onclick = function UpDatingStopWatch() {
        //changing MilliSecond
        timmer = setInterval(() => {
            let date = new Date()
            TimmerMilliSecond.innerHTML = date.getMilliseconds()
        }, 1)

        //changing Second Mintues Hours
        timmer2 = setInterval(() => {
            Timmer_Second++
            TimmerSecond.innerHTML = Timmer_Second
            if (Timmer_Second === 60) {
                Timmer_Mintues++
                TimmerMintues.innerHTML = Timmer_Mintues
                TimmerSecond.innerHTML = "00"
                Timmer_Second = 0
                return Timmer_Mintues
            }
            if (Timmer_Mintues === 60) {
                Timmer_Hours++
                TimmerHours.innerHTML = Timmer_Hours
                TimmerMintues.innerHTML = "00"
                Timmer_Mintues = 0
            }
        }, 1000)
    }

    //Logic of Stop Button
    let StopBtn = document.getElementById('StopBtn')
    StopBtn.addEventListener('click', () => {
        clearInterval(timmer)
        clearInterval(timmer2)
    })

    //Logic of reset Button
    let resetBtn = document.getElementById('resetBtn')
    resetBtn.addEventListener('click', () => {
        TimmerMilliSecond.innerHTML = "00"
        TimmerSecond.innerHTML = "00"
        TimmerMintues.innerHTML = "00"
        TimmerHours.innerHTML = "00"
        Timmer_Hours = 0;
        Timmer_Mintues = 0;
        Timmer_Second = 0;
        clearInterval(timmer)
        clearInterval(timmer2)
    })
})



//Changing bg when Buttons(Stop, Start, Reset) is clicked
let logicBtn = document.getElementsByClassName('logicBtn')
Array.from(logicBtn).forEach((logicBtn) => {
    logicBtn.addEventListener('click', (e) => {
        e.target.style.backgroundColor = "#cdc3c3"
        setTimeout(() => {
            e.target.style.backgroundColor = "white"
        }, 100)
    })
})

//list of all alarm songs
let radhe_radhe1 = new Audio('Alarm_Clock/radhe_radhe1.mp3');
let radhe_radhe2 = new Audio('Alarm_Clock/radhe_radhe2.mp3');
let radhe_radhe3 = new Audio('Alarm_Clock/radhe_radhe3.mp3');
let radhe_radhe4 = new Audio('Alarm_Clock/radhe_radhe4.mp3');
let radhe_radhe5 = new Audio('Alarm_Clock/radhe_radhe5.mp3');

//logic of Playing Alarm on Selected time
selectElement.addEventListener("change", (event) => {
    setInterval(() => {
        let date = new Date()
        alarmarry.forEach((Time) => {
            let timehr = Time.split(":")[0]
            let timemin = Time.split(":")[1]
            if (timehr == date.getHours() && timemin == date.getMinutes() && event.target.value == "radhe_radhe1") {
                radhe_radhe1.play()
            }
            else if (timehr == date.getHours() && timemin == date.getMinutes() && event.target.value == "radhe_radhe2") {
                radhe_radhe2.play()
            }
            else if (timehr == date.getHours() && timemin == date.getMinutes() && event.target.value == "radhe_radhe3") {
                radhe_radhe3.play()
            }
            else if (timehr == date.getHours() && timemin == date.getMinutes() && event.target.value == "radhe_radhe4") {
                radhe_radhe4.play()
            }
            else if (timehr == date.getHours() && timemin == date.getMinutes() && event.target.value == "radhe_radhe5") {
                radhe_radhe5.play()
            }
        })
    }, 1000)
});