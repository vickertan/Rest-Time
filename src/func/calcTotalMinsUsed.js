export default function calcTotalMinsUsed(start, end) {
    // calculate out and in input together
    let calcHour = end.slice(0, 2) - start.slice(0, 2);
    let calcMins = end.slice(-2) - start.slice(-2);

    // calculate the time in 24-hour format
    calcHour = calcHour < 0 ? calcHour + 24 : calcHour;

    // create logic for minutes and hours used
    if (calcMins < 0) {
        calcMins += 60;
        calcHour--;
        if (calcHour < 0) {
            calcHour += 24;
        }
    }

    const totalMinsUsed = calcHour * 60 + calcMins;

    return totalMinsUsed;
}
