import { forwardRef, useRef } from "react";
import calcTotalMins from "../func/calcTotalMins";

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
                const totalMinsUsed = calcTotalMins(start, end);
                console.log(props.hourLeft);

                // let calculatedHour = props.hourLeft - timeUsed.slice(0, 2);
                // let calculatedMins = props.minsLeft - timeUsed.slice(-2);

                // if (calculatedMins < 0) {
                //     calculatedMins += 60;
                //     calculatedHour--;
                // }

                // props.setHourLeft(calculatedHour);
                // props.setMinsLeft(calculatedMins);

                // ref.outTimeRef.current.value = "";
                // ref.inTimeRef.current.value = "";
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
