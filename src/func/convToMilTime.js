export default function convToMilTime(mins, overLimit) {
    const min = mins % 60;
    let hour = 0;

    if (mins < 0) {
        hour = Math.ceil(mins / 60);
    } else {
        hour = Math.floor(mins / 60);
    }

    let milTime =
        String(hour).padStart(2, "0") + ":" + String(min).padStart(2, "0");

    return milTime;
}
