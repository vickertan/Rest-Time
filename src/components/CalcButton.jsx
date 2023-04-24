import calculateTime from "../tasks/calculateTime";

const CalcButton = (props) => {
    function handleClick(e) {
        const outTime = document.getElementById("out-time").value;
        const inTime = document.getElementById("in-time").value;

        e.preventDefault();

        const time = calculateTime(outTime, inTime);

        props.setHourLeft(props.hourLeft - time.slice(0, 2));
        props.setMinsLeft(props.minsLeft - time.slice(-2));
    }

    return (
        <button className="calc-button" onClick={handleClick}>
            |
        </button>
    );
};

export default CalcButton;
