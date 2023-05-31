export default function convToMins(milTime) {
    const hour = milTime.split(":")[0];
    const min = milTime.split(":")[1];

    return hour * 60 + +min;
}
