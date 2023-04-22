import calculateTime from "../tasks/calculateTime";

const CalcButton = (props) => {
    function handleClick(e) {
        e.preventDefault();

        const time = calculateTime();

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
