const TimeForm = (props) => {
    return (
        <form>
            <div className="time-div">
                <label htmlFor={props.out}>Time Out</label>
                <input id={props.out} type="time" required />
                <label htmlFor={props.in}>Time In</label>
                <input id={props.in} type="time" required />
            </div>
            <input
                className="time-submit"
                type="submit"
                value={props.sequence}
            />
        </form>
    );
};

export default TimeForm;
