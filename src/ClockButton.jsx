const ClockButton = (props) => {
    return (
        <button
            className="clock-button"
            onClick={() => console.log(`${props.icon} button clicked`)}
        >
            {props.icon}
        </button>
    );
};

export default ClockButton;
