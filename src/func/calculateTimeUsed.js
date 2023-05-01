function calculateTimeUsed(outInput, inInput) {
    // get the values of user's inputs
    const outTime = outInput;
    const inTime = inInput;

    // calculate out and in input together
    const calcHour = inTime.slice(0, 2) - outTime.slice(0, 2);
    const calcMins = inTime.slice(-2) - outTime.slice(-2);

    // calculate the time in 24-hour format
    let hourUsed = calcHour < 0 ? calcHour + 24 : calcHour;
    let minsUsed = 0;

    // create logic for minutes and hours used
    if (calcMins < 0) {
        minsUsed = calcMins + 60;
        hourUsed--;
        if (hourUsed < 0) {
            hourUsed += 24;
        }
    } else {
        minsUsed = calcMins;
    }

    return (
        String(hourUsed).padStart(2, 0) + ":" + String(minsUsed).padStart(2, 0)
    );
}

export default calculateTimeUsed;
