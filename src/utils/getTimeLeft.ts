export function getTimeLeft(startDate: Date) {
    const today = new Date();

    const difference = startDate.getTime() - today.getTime();

    const oneSecond = 1000;
    const oneMinute = oneSecond * 60;
    const oneHour = oneMinute * 60;
    const oneDay = oneHour * 24;

    const days = Math.floor(difference / oneDay);
    const hours = Math.floor((difference % oneDay) / oneHour);
    const minutes = Math.floor((difference % oneHour) / oneMinute);
    const seconds = Math.floor((difference % oneMinute) / oneSecond);

    return { days, hours, minutes, seconds };
}
