const TimeForm = (props) => {
    return (
        <form>
            <input className="time-out" type="time" required />
            <input className="time-in" type="time" required />
            <input className="time-submit" type="submit" value={props.id} />
        </form>
    );
};

export default TimeForm;
