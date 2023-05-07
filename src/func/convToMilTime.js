export default function convToMilTime(mins, overLimit) {
    const min = mins % 60;
    const hour = Math.floor(mins / 60);

    let milTime =
        String(hour).padStart(2, "0") + ":" + String(min).padStart(2, "0");

    return milTime;
}
