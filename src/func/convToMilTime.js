export default function convToMilTime(totalMins, overLimit) {
    let min = totalMins % 60;
    let hour = 0;

    if (totalMins < 0) {
        hour = Math.ceil(totalMins / 60);
        if (min < 0 && min > -10) {
            min = String(min).replace("-", "-0");
        }
        if (hour > -10) {
            hour = String(hour).replace("-", "-0");
        }
    } else {
        hour = Math.floor(totalMins / 60);
    }

    let milTime =
        String(hour).padStart(2, "0") + ":" + String(min).padStart(2, "0");

    return milTime;
}
