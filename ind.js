console.log('hi');
class CountdownTimer {
    constructor({ onTick }) {
        this.targetDate = new Date('Aug 16, 2021');
        this.time = null;
        this.onTick = onTick;
    }

    calculateTime() {
        setInterval(() => {
            const timeNow = new Date()
            this.time = this.targetDate - timeNow;
            const timeComponents = getTimeComponent(time)

        }, 1000);
    }
}

function getTimeComponent(time) {

    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    //console.log(days);
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    //console.log(hours);
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    //console.log(mins);
    const secs = Math.floor((time % (1000 * 60)) / 1000);
    console.log(`${days}:${hours}:${mins}:${secs}`);

    onTick(days, hours, mins, secs);
    return (days, hours, mins, secs);
}


function updateClockfase (days, hours, mins, secs) {
        refs.secsEl.textContent = secs < 10 ? `0${secs}` : secs;
    refs.minsEl.textContent = mins < 10 ? `0${mins}` : mins;
        refs.hoursEl.textContent = hours < 10 ? `0${hours}` : hours;
        refs.dateEl.textContent = days < 10 ? `0${days}` : days;

}

const timer1 = new CountdownTimer({
    onTick: updateClockfase,
    selector: '#timer-1',
    targetDate: new Date('Jul 17, 2019'),    
});

console.log(new CountdownTimer());






//         this.dateEl = document.querySelector('[data-value="days"]'),
//         this.hoursEl = document.querySelector('[data-value="hours"]'),
//         this.minsEl = document.querySelector('[data-value="mins"]'),
//         this.secsEl = document.querySelector('[data-value="secs"]')      

//     }

//     action() {
//         const days = Math.floor(time / (1000 * 60 * 60 * 24));
//         const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//         const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
//         const secs = Math.floor((time % (1000 * 60)) / 1000);

//         this.secsEl.textContent = secs < 10 ? `0${sec}` : sec;
//         this.minsEl.textContent = mins < 10 ? `0${minutes}`: minutes;
//         this.hoursEl.textContent = hours < 10 ? `0${hours}` : hours;
//         this.dateEl.textContent = days;

//     }

//     calculateTime() {
//         console.log("hkl")
//     }
// }

// console.log(new Date('Jul 17, 2019'));
// console.log(new Date());

// const timer1 = new CountdownTimer({
//     selector: '#timer-1',
//     targetDate: new Date('Jul 17, 2022'),
    
// });

// console.log(timer1.calculateTime())
// timer1.calculateTime();

// console.log(CountdownTimer);
// console.log(timer1)
// console.log(timer1.dateEl)
// console.log()

// console.log('hi');

// let targetDate = new Date('Aug 16, 2021');
// let time = null;

// const refs = {
//     dateEl: document.querySelector('[data-value="days"]'),
//     hoursEl: document.querySelector('[data-value="hours"]'),
//     minsEl: document.querySelector('[data-value="mins"]'),
//     secsEl: document.querySelector('[data-value="secs"]')
// }



// const timer = {
     

//     calculateTime() {
//         setInterval(() => {
//             const timeNow = new Date()
//             // console.log(timeNow);
//             // console.log(targetDate);
//             time = targetDate - timeNow;
//             //console.log(time);

//             const timeComponents = getTimeComponent(time)
            
//         }, 1000);

        
//     },
  
// };





// // console.log(days);

// function vhjgj(days, hours, mins, secs) {
//         refs.secsEl.textContent = secs < 10 ? `0${secs}` : secs;
//     refs.minsEl.textContent = mins < 10 ? `0${mins}` : mins;
//         refs.hoursEl.textContent = hours < 10 ? `0${hours}` : hours;
//         refs.dateEl.textContent = days < 10 ? `0${days}` : days;
    
// }

// timer.calculateTime();

