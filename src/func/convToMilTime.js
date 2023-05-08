export default function convToMilTime(mins, overLimit) {
    const min = mins % 60;

    if (mins < 0) {
        const hour = Math.ceil(mins / 60);
    } else {
        const hour = Math.floor(mins / 60);
    }
    const hour = Math.floor(mins / 60);

    let milTime =
        String(hour).padStart(2, "0") + ":" + String(min).padStart(2, "0");

    return milTime;
}
