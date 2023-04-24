import calculateTime from "../tasks/calculateTime";

const CalcButton = (props) => {
    function handleClick(e) {
        let outTime = document.getElementById("out-time").value;
        let inTime = document.getElementById("in-time").value;
        let time = "";

        e.preventDefault();

        if (outTime && inTime) {
            if (outTime !== inTime) {
                time = calculateTime(outTime, inTime);
                props.setHourLeft(props.hourLeft - time.slice(0, 2));
                props.setMinsLeft(props.minsLeft - time.slice(-2));
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
};

export default CalcButton;
