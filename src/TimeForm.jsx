import ClockButton from "./ClockButton";
import TimeInput from "./TimeInput";
import CalcButton from "./CalcButton";

const TimeForm = () => {
    return (
        <form id="form">
            <div className="time-div">
                <label htmlFor="out-time">T. Out</label>
                <div>
                    <ClockButton icon="🕙" />
                    <TimeInput timeInputId="out-time" />
                </div>
                <label className="in-time" htmlFor="in-time">
                    T. In
                </label>
                <div>
                    <ClockButton icon="🕑" />
                    <TimeInput timeInputId="in-time" />
                </div>
            </div>
            <CalcButton />
        </form>
    );
};

export default TimeForm;
