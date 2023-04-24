import calculateTimeUsed from "../tasks/calculateTimeUsed";
import calculateTimeLeft from "../tasks/calculateTimeLeft";

const CalcButton = (props) => {
    function handleClick(e) {
        e.preventDefault();

        let outTime = document.getElementById("out-time").value;
        let inTime = document.getElementById("in-time").value;
        let timeUsed = "";
        let timeLeft = "";

        if (outTime && inTime) {
            if (outTime !== inTime) {
                timeUsed = calculateTimeUsed(outTime, inTime);
                timeLeft = calculateTimeLeft(
                    timeUsed,
                    props.hourLeft,
                    props.minsLeft
                );

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
};

export default CalcButton;
