export default function calcMinsUsed(start, end) {
    // calculate hour and minutes difference
    let hourDif = end.slice(0, 2) - start.slice(0, 2);
    let minsDif = end.slice(-2) - start.slice(-2);

    // set minimum limit hour difference to 0
    hourDif = hourDif < 0 ? hourDif + 24 : hourDif;

    if (minsDif < 0) {
        minsDif += 60;
        hourDif--;
        if (hourDif < 0) {
            hourDif += 24;
        }
    }

    const minsUsed = hourDif * 60 + minsDif;

    return minsUsed;
}
