export interface Time {
    days: number,
    hours: number,
    minutes: number,
    seconds: number
}
const timeHandler = (end: string) => {
    const endDate: number = new Date(end).getTime();
    const currentDate: number = new Date().getTime();
    const timeRemaining: number = endDate - currentDate;

    const timeObj : Time = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    };

    if (timeRemaining > 0) {
        timeObj.days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        timeObj.hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        timeObj.minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        timeObj.seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
    }

    return timeObj;
}

export default timeHandler;