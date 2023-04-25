import { forwardRef, useRef } from "react";
import calculateTimeUsed from "../func/calculateTimeUsed";

export default function TimeForm(props) {
    const outTimeRef = useRef(null);
    const inTimeRef = useRef(null);

    return (
        <div id="form">
            <div className="time-div">
                <label htmlFor="out-time">T. Out</label>
                <div>
                    <ClockButton icon="🕙" ref={outTimeRef} />
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
                    <ClockButton icon="🕑" ref={inTimeRef} />
                    <input ref={inTimeRef} id="in-time" type="time" required />
                </div>
            </div>
            <CalcButton {...props} />
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

    return (
        <button className="clock-button" onClick={getCurTime}>
            {props.icon}
        </button>
    );
});

function CalcButton(props) {
    function handleClick() {
        let timeUsed = "";
        // let timeLeft = "";

        if (outTime && inTime) {
            if (outTime !== inTime) {
                timeUsed = calculateTimeUsed(outTime, inTime);
                // timeLeft = calculateTimeLeft(
                //     timeUsed,
                //     props.hourLeft,
                //     props.minsLeft
                // );

                props.setHourLeft(props.hourLeft - timeUsed.slice(0, 2));
                props.setMinsLeft(props.minsLeft - timeUsed.slice(-2));
                document.getElementById("out-time").value = "";
                document.getElementById("in-time").value = "";
            } else {
                // change input value color
                console.log("Error: out time and in time are the same!");
            }
        } else {
            // change empty input box color
            console.log("Error: calculating empty input!");
        }
    }

    return (
        <button className="calc-button" onClick={handleClick}>
            |
        </button>
    );
}
