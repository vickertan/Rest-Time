export default function TimeHistory({ timeList }) {
    return (
        <div className="time-history">
            {!timeList.length ? (
                <p className="default">No record yet</p>
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
            <p className="sequence">{id + 1}</p>
            <div className="time-section">
                <p>O. {time.out}</p>
                <p>I. {time.in}</p>
            </div>
        </div>
    );
}
