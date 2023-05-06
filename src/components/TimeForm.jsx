import { forwardRef, useRef } from "react";
import calcTotalMinsUsed from "../func/calcTotalMinsUsed";

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
            String(hour).padStart(2, "0") + ":" + String(mins).padStart(2, "0");
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
                let totalMinsLeft = props.hourLeft * 60 + +props.minsLeft;

                totalMinsLeft -= totalMinsUsed;

                const curHourLeft = String(
                    Math.floor(totalMinsLeft / 60)
                ).padStart(2, 0);
                const curMinsLeft = String(totalMinsLeft % 60).padStart(2, 0);

                if (totalMinsLeft < 0) {
                    // change Time Left color to "danger"

                    const hourExceeded = String(
                        Math.floor(totalMinsLeft / 60 + 1)
                    ).padStart(2, 0);
                    const minsExceeded = String(totalMinsLeft % 60).padStart(
                        2,
                        0
                    );

                    props.setHourLeft(hourExceeded);
                    props.setMinsLeft(minsExceeded);
                } else {
                    props.setHourLeft(curHourLeft);
                    props.setMinsLeft(curMinsLeft);
                }

                // set input value to empty
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
