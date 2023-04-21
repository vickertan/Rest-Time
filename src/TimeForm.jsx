import ClockButton from "./ClockButton";
import TimeInput from "./TimeInput";
import CalcButton from "./CalcButton";

const TimeForm = ({ sequence }) => {
    return (
        <form id={"form" + sequence}>
            <div className="time-div">
                <label htmlFor={"out" + sequence}>T. Out</label>
                <div>
                    <ClockButton icon="🕙" />
                    <TimeInput
                        timeInputId={"out" + sequence}
                        sequence={sequence}
                    />
                </div>
                <label htmlFor={"in" + sequence}>T. In</label>
                <div>
                    <ClockButton icon="🕑" />
                    <TimeInput
                        timeInputId={"in" + sequence}
                        sequence={sequence}
                    />
                </div>
            </div>
            <CalcButton sequence={sequence} />
        </form>
    );
};

export default TimeForm;
