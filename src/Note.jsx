const Note = (props) => {
    return (
        <div className="note">
            <p>What did you have for {props.meals}?</p>
            <input type="text" />
        </div>
    );
};

export default Note;
