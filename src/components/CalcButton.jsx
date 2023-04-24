import calculateTime from "../tasks/calculateTime";

const CalcButton = (props) => {
    function handleClick(e) {
        let outTime = document.getElementById("out-time").value;
        let inTime = document.getElementById("in-time").value;
        let time = "";

        e.preventDefault();

        if (outTime !== inTime) {
            if (outTime && inTime) {
                time = calculateTime(outTime, inTime);
                props.setHourLeft(props.hourLeft - time.slice(0, 2));
                props.setMinsLeft(props.minsLeft - time.slice(-2));
                document.getElementById("out-time").value = "";
                document.getElementById("in-time").value = "";
            }
        } else {
            // change submit button color
            console.log("Button color change");
        }
    }

    return (
        <button className="calc-button" onClick={handleClick}>
            |
        </button>
    );
};

export default CalcButton;
