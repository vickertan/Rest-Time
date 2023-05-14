import { forwardRef, useRef, useState, useEffect } from "react";
import calcMinsUsed from "../func/calcMinsUsed";
import convToMilTime from "../func/convToMilTime";

export default function TimeForm(props) {
    function getCurTime(setInput) {
        const hour = new Date().getHours();
        const mins = new Date().getMinutes();
        const curTime =
            String(hour).padStart(2, 0) + ":" + String(mins).padStart(2, 0);
        setInput(curTime);
    }

    const [outInput, setOutInput] = useState("");
    const [inInput, setInInput] = useState("");

    // outInput
    useEffect(() => {
        const outInput_S = JSON.parse(localStorage.getItem("outInput"));
        if (outInput_S) {
            setOutInput(outInput_S);
        }
    }, []);
    useEffect(() => {
        localStorage.setItem("outInput", JSON.stringify(outInput));
    }, [outInput]);

    // inInput
    useEffect(() => {
        const inInput_S = JSON.parse(localStorage.getItem("inInput"));
        if (inInput_S) {
            setInInput(inInput_S);
        }
    }, []);
    useEffect(() => {
        localStorage.setItem("inInput", JSON.stringify(inInput));
    }, [inInput]);

    const outTimeRef = useRef(null);
    const inTimeRef = useRef(null);

    return (
        <div id="form">
            <div className="time-div">
                <label htmlFor="out-time">T. Out</label>
                <div>
                    <button
                        ref={outTimeRef}
                        className="clock-button"
                        onClick={() => getCurTime(setOutInput)}
                    ></button>
                    <input
                        ref={outTimeRef}
                        id="out-time"
                        type="time"
                        value={outInput}
                        onChange={(e) => {
                            setOutInput(e.target.value);

                            // update local storage of outInput on value change
                        }}
                        required
                    />
                </div>
                <label className="in-time" htmlFor="in-time">
                    T. In
                </label>
                <div>
                    <button
                        ref={inTimeRef}
                        className="clock-button"
                        onClick={() => getCurTime(setInInput)}
                    ></button>
                    <input
                        ref={inTimeRef}
                        id="in-time"
                        type="time"
                        value={inInput}
                        onChange={(e) => {
                            setInInput(e.target.value);

                            // update local storage of inInput on value change
                        }}
                        required
                    />
                </div>
            </div>
            <CalcButton
                {...props}
                ref={{ outTimeRef, inTimeRef }}
                setOutInput={setOutInput}
                setInInput={setInInput}
            />
        </div>
    );
}

const CalcButton = forwardRef((props, ref) => {
    function handleClick() {
        let start = ref.outTimeRef.current.value;
        let end = ref.inTimeRef.current.value;

        if (start && end) {
            if (start !== end) {
                const curMinsUsed = calcMinsUsed(start, end);
                props.setTotalMinsUsed(props.totalMinsUsed + curMinsUsed);

                let totalMinsLeft = +props.hourLeft * 60 + +props.minsLeft;

                totalMinsLeft -= curMinsUsed;

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

                props.setOutInput("");
                props.setInInput("");
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
