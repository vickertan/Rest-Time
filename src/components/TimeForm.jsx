import { forwardRef, useRef } from "react";
import calcTotalMinsUsed from "../func/calcTotalMinsUsed";
import convToMilTime from "../func/convToMilTime";

export default function TimeForm(props) {
    const outTimeRef = useRef(null);
    const inTimeRef = useRef(null);

    return (
        <div id="form">
            <div className="time-div">
                <label htmlFor="out-time">T. Out</label>
                <div>
                    <ClockButton ref={outTimeRef} />
                    <input
                        ref={outTimeRef}
                        id="out-time"
                        type="time"
                        required
                    />
                </div>
                <label className="in-time" htmlFor="in-time">
                    T. In
                </label>
                <div>
                    <ClockButton ref={inTimeRef} />
                    <input ref={inTimeRef} id="in-time" type="time" required />
                </div>
            </div>
            <CalcButton {...props} ref={{ outTimeRef, inTimeRef }} />
        </div>
    );
}

const ClockButton = forwardRef((props, ref) => {
    function getCurTime() {
        const hour = new Date().getHours();
        const mins = new Date().getMinutes();
        const curTime =
            String(hour).padStart(2, 0) + ":" + String(mins).padStart(2, 0);
        ref.current.value = curTime;
    }

    return <button className="clock-button" onClick={getCurTime}></button>;
});

const CalcButton = forwardRef((props, ref) => {
    function handleClick() {
        let start = ref.outTimeRef.current.value;
        let end = ref.inTimeRef.current.value;

        if (start && end) {
            if (start !== end) {
                const totalMinsUsed = calcTotalMinsUsed(start, end);
                let totalMinsLeft = +props.hourLeft * 60 + +props.minsLeft;

                totalMinsLeft -= totalMinsUsed;

                if (totalMinsLeft < 0) {
                    props.setOverLimit(true);
                }

                const totalTimeLeft = convToMilTime(totalMinsLeft);

                // set hour value to the left side of :
                props.setHourLeft(totalTimeLeft.split(":")[0]);

                // set mins value to the right side of :
                props.setMinsLeft(totalTimeLeft.split(":")[1]);

                // update timeList record
                props.setTimeList([...props.timeList, { out: start, in: end }]);

                ref.outTimeRef.current.value = "";
                ref.inTimeRef.current.value = "";
            } else {
                // change input value color

                console.log("Error: same input value");
            }
        } else {
            // change input box color
            console.log("Error: empty input");
        }
    }

    return (
        <button className="calc-button" onClick={handleClick}>
            |
        </button>
    );
});
