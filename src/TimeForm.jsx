import ClockButton from "./ClockButton";

const TimeForm = (props) => {
    return (
        <form>
            <div className="time-div">
                <label htmlFor={props.out}>Time Out</label>
                <div>
                    <ClockButton icon="🕙" />
                    <input id={props.out} type="time" required />
                </div>
                <label htmlFor={props.in}>Time In</label>
                <div>
                    <ClockButton icon="🕑" />
                    <input id={props.in} type="time" required />
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
