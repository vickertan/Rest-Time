import getCurTime from "./tasks/getCurTime";

const ClockButton = (props) => {
    return (
        <button className="clock-button" onClick={getCurTime}>
            {props.icon}
        </button>
    );
};

export default ClockButton;
