export default function calcTotalMins(outInput, inInput) {
    // calculate out and in input together
    let calcHour = inInput.slice(0, 2) - outInput.slice(0, 2);
    let calcMins = inInput.slice(-2) - outInput.slice(-2);

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

    const timeUsed = calcHour + ":" + calcMins;
    const totalMinsUsed = calcHour * 60 + calcMins;

    return totalMinsUsed;
}
