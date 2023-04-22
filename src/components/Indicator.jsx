const Indicator = (props) => {
    return (
        <div className="indicator">
            <p>
                Limit : {props.hourLimit} hr {props.minsLimit} mins
            </p>
            <p>
                Time Left : {props.hourLeft} hr {props.minsLeft} mins
            </p>
        </div>
    );
};

export default Indicator;
