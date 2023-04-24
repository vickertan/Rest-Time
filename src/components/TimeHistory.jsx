const TimeHistory = ({ timeList }) => {
    return (
        <div className="time-history">
            {!timeList.length ? (
                <p>No record yet</p>
            ) : (
                timeList.map((time, index) => {
                    return (
                        <div id={index} className="record">
                            <p>O. {time.timeOut}</p>
                            <p>I. {time.timeIn}</p>
                        </div>
                    );
                })
            )}
        </div>
    );
};

export default TimeHistory;
