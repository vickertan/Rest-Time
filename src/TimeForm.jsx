import ClockButton from "./ClockButton";
import TimeInput from "./TimeInput";

const TimeForm = (props) => {
    return (
        <form id={props.formId}>
            <div className="time-div">
                <label htmlFor={props.out}>T. Out</label>
                <div>
                    <ClockButton icon="🕙" />
                    <TimeInput timeInputId={props.out} />
                </div>
                <label htmlFor={props.in}>T. In</label>
                <div>
                    <ClockButton icon="🕑" />
                    <TimeInput timeInputId={props.in} />
                </div>
            </div>
            <input
                className="time-submit"
                type="submit"
                value={props.sequence}
            />
        </form>
    );
};

export default TimeForm;
