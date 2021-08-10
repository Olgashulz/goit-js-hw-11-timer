const refs = {
    dateEl: document.querySelector('[data-value="days"]'),
    hoursEl: document.querySelector('[data-value="hours"]'),
    minsEl: document.querySelector('[data-value="mins"]'),
    secsEl: document.querySelector('[data-value="secs"]')
}



class CountdownTimer {
    constructor({ onTick, selector, targetDate }) {
        this.targetDate = new Date('Aug 16, 2021');
        this.time = null;
        this.onTick = onTick;
        this.selector = selector;
        this.targetDate = targetDate;

        this.pageLoaded();
    }

    getTimeNow() {
        return this.time = this.targetDate - new Date;
     }

    pageLoaded() {
        this.getTimeNow();
        this.getTimeComponent(this.time);
    }

    calculateTime() {
        setInterval(() => {
            this.getTimeNow();
            this.getTimeComponent(this.time)
        }, 1000);
    }

    getTimeComponent(time) {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);
        //console.log(`${days}:${hours}:${mins}:${secs}`);
        
        this.onTick(days, hours, mins, secs);
    }
    
    updateTimerface({ days, hours, mins, secs }) {
    refs.secsEl.textContent = secs < 10 ? `0${secs}` : secs;
    refs.minsEl.textContent = mins < 10 ? `0${mins}` : mins;
    refs.hoursEl.textContent = hours < 10 ? `0${hours}` : hours;
    refs.dateEl.textContent = days < 10 ? `0${days}` : days;
}
}

const timer1 = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Aug 17, 2021'),
});

document.addEventListener('DOMContentLoaded', timer1.calculateTime.bind(timer1));



//console.log(timer1.calculateTime());

// const timer2 = new CountdownTimer({
//     selector: '#timer-2',
//     targetDate: new Date('Aug 8, 2021'),
//     onTick: updateTimerface,
// });
//console.log(timer2.calculateTime());

//!!!!!!!!!!!!!!!!!!!!Вариант без класса!!!!!!!!!!!!!!!!!
// class CountdownTimer {
//     constructor({ onTick }) {
//         this.targetDate = new Date('Aug 16, 2021');
//         this.time = null;
//         this.onTick = onTick;
//     }

//     calculateTime() {
//         setInterval(() => {
//             const timeNow = new Date()
//             this.time = this.targetDate - timeNow;
//             const timeComponents = getTimeComponent(time)

//         }, 1000);
//     }
// }

// function getTimeComponent(time) {

//     const days = Math.floor(time / (1000 * 60 * 60 * 24));
//     //console.log(days);
//     const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     //console.log(hours);
//     const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
//     //console.log(mins);
//     const secs = Math.floor((time % (1000 * 60)) / 1000);
//     console.log(`${days}:${hours}:${mins}:${secs}`);

//     onTick(days, hours, mins, secs);
//     return (days, hours, mins, secs);
// }


// function updateClockfase (days, hours, mins, secs) {
//         refs.secsEl.textContent = secs < 10 ? `0${secs}` : secs;
//     refs.minsEl.textContent = mins < 10 ? `0${mins}` : mins;
//         refs.hoursEl.textContent = hours < 10 ? `0${hours}` : hours;
//         refs.dateEl.textContent = days < 10 ? `0${days}` : days;

// }

// const timer1 = new CountdownTimer({
//     onTick: updateClockfase,
//     selector: '#timer-1',
//     targetDate: new Date('Jul 17, 2019'),    
// });

// console.log(new CountdownTimer());
