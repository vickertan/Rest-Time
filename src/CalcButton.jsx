const CalcButton = () => {
    function handleClick(e) {
        e.preventDefault();
        const outTime = document.getElementById("out-time").value;
        const inTime = document.getElementById("in-time").value;

        const hour = inTime.slice(0, 2) - outTime.slice(0, 2);
        let hourUsed = hour < 0 ? hour + 24 : hour;

        const mins = inTime.slice(-2) - outTime.slice(-2);
        let minsUsed = 0;
        if (mins < 0) {
            minsUsed = mins + 60;
            hourUsed--;
        } else {
            minsUsed = mins;
        }

        console.log(hourUsed, minsUsed);
    }

    return (
        <button className="calc-button" onClick={handleClick}>
            |
        </button>
    );
};

export default CalcButton;
