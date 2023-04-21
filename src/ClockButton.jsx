const ClockButton = (props) => {
    function handleClick(e) {
        e.preventDefault();
        const timeInput = e.target.parentNode.querySelector("input");

        const hour = new Date().getHours();
        const mins = new Date().getMinutes();
        const curTime = hour + ":" + String(mins).padStart(2, "0");
        timeInput.value = curTime;
    }

    return (
        <button className="clock-button" onClick={handleClick}>
            {props.icon}
        </button>
    );
};

export default ClockButton;
