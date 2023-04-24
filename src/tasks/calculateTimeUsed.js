function calculateTimeUsed(outInput, inInput) {
    // get the values of user's inputs
    const outTime = outInput;
    const inTime = inInput;

    // calculate hours and minutes used
    const hour = inTime.slice(0, 2) - outTime.slice(0, 2);
    const mins = inTime.slice(-2) - outTime.slice(-2);

    // calculate the time in 24-hour format
    let hourUsed = hour < 0 ? hour + 24 : hour;
    let minsUsed = 0;

    // create logic for minutes used
    if (mins < 0) {
        minsUsed = mins + 60;
        hourUsed--;
    } else {
        minsUsed = mins;
    }

    return (
        String(hourUsed).padStart(2, 0) + ":" + String(minsUsed).padStart(2, 0)
    );
}

export default calculateTimeUsed;
