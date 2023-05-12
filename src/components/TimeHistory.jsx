import convToMilTime from "../func/convToMilTime";

export default function TimeHistory({ timeList, totalMinsUsed }) {
    return (
        <div className="time-history">
            {!timeList.length ? (
                <p className="default">No record yet</p>
            ) : (
                <>
                    <div className="inner-history-box">
                        {timeList.map((time, index) => (
                            <Record time={time} id={index} key={index} />
                        ))}
                    </div>
                    <div className="total-box">
                        <p>Total time used : {convToMilTime(totalMinsUsed)}</p>
                    </div>
                </>
            )}
        </div>
    );
}

function Record({ time, id }) {
    return (
        <div id={id} className="record">
            <p className="sequence">{id + 1}</p>
            <div className="time-section">
                <p>Out. {time.out}</p>
                <hr />
                <p>In. {time.in}</p>
            </div>
        </div>
    );
}
