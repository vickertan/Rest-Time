import { forwardRef, useRef } from "react";
import calculateTimeUsed from "../func/calculateTimeUsed";
import calculateTimeLeft from "../func/calculateTimeLeft";

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
        const curTime = hour + ":" + String(mins).padStart(2, "0");
        ref.current.value = curTime;
    }

    return <button className="clock-button" onClick={getCurTime}></button>;
});

const CalcButton = forwardRef((props, ref) => {
    function handleClick() {
        let outTime = ref.outTimeRef.current.value;
        let inTime = ref.inTimeRef.current.value;

        if (outTime && inTime) {
            if (outTime !== inTime) {
                const timeUsed = calculateTimeUsed(outTime, inTime);
                props.setHourLeft(props.hourLeft - timeUsed.slice(0, 2));
                props.setMinsLeft(props.minsLeft - timeUsed.slice(-2));
                calculateTimeLeft(timeUsed, props.hourLeft, props.minsLeft);

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
