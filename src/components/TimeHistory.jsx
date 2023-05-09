export default function TimeHistory({ timeList }) {
    return (
        <div className="time-history">
            {!timeList.length ? (
                <p>No record yet</p>
            ) : (
                timeList.map((time, index) => (
                    <Record time={time} id={index} key={index} />
                ))
            )}
        </div>
    );
}

function Record({ time, id }) {
    return (
        <div id={id} className="record">
            <p className="history-time">O. {time.out}</p>
            <p className="history-time">I. {time.in}</p>
        </div>
    );
}
