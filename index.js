class CountdownTimer {
    constructor({ onTick, selector, targetDate }) {
        this.targetDate = new Date('Aug 16, 2021');
        this.time = null;
        this.selector = selector;
        this.targetDate = targetDate;

        this.dateEl = document.querySelector('[data-value="days"]');
        this.hoursEl = document.querySelector('[data-value="hours"]');
        this.minsEl = document.querySelector('[data-value="mins"]');
        this.secsEl = document.querySelector('[data-value="secs"]');

        this.pageLoaded();
    }

    getTimeNow() {
        return this.time = this.targetDate - new Date;
     }

    pageLoaded() {
        if (this.getTimeNow() > 0) {
            this.getTimeComponent(this.time);
            this.calculateTime();
        }
        else {
            this.stopTimer(this.time);
        }
                
    }

    calculateTime() {
            setInterval(() => {
            this.getTimeNow();
            this.getTimeComponent(this.time)
        }, 1000);
    }

    getTimeComponent(time) {
        const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
        const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),);
        const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
        console.log(`${days}:${hours}:${mins}:${secs}`);
        
        this.updateTimerFace({ days, hours, mins, secs })
    }
    
    updateTimerFace({ days, hours, mins, secs }) {
    this.secsEl.textContent = secs;
    this.minsEl.textContent = mins;
    this.hoursEl.textContent = hours;
    this.dateEl.textContent = days;
    }
    
    pad(value) {
        return String(value).padStart(2, '0');
    }

    stopTimer() {
        clearInterval(this.time);
        this.getTimeComponent(0);
    };
}

const timer1 = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Dec 1, 2021'),
});


// const timer2 = new CountdownTimer({
//     selector: '#timer-2',
//     targetDate: new Date('Aug 8, 2021'),
//     onTick: updateTimerFace,
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
