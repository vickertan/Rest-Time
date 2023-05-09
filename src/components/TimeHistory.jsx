export default function TimeHistory({ timeList }) {
    return (
        <div className="time-history">
            {!timeList.length ? (
                <p>No record yet</p>
            ) : (
                timeList.map((index, time) => {
                    return (
                        <div key={index} className="record">
                            <p className="history-time">O. {time.timeOut}</p>
                            <p className="history-time">I. {time.timeIn}</p>
                        </div>
                    );
                })
            )}
        </div>
    );
}
