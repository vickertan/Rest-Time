import { createRoot } from "react-dom/client";
import { useState } from "react";
import TimeForm from "./components/TimeForm";
import TimeHistory from "./components/TimeHistory";

const App = () => {
    const limit = {
        hour: 2,
        mins: 20,
    };

    const [timeList, setTimeList] = useState([]);

    const [overLimit, setOverLimit] = useState(false);

    const [hourLimit, setHourLimit] = useState(
        String(limit.hour).padStart(2, "0")
    );
    const [minsLimit, setMinsLimit] = useState(
        String(limit.mins).padStart(2, "0")
    );

    const [hourLeft, setHourLeft] = useState(
        String(limit.hour).padStart(2, "0")
    );
    const [minsLeft, setMinsLeft] = useState(
        String(limit.mins).padStart(2, "0")
    );

    return (
        <div className="content-box">
            <div className="indicator">
                <p>
                    Limit : {hourLimit} hr {minsLimit} mins
                </p>
                <p>
                    Time Left : {hourLeft} hr {minsLeft} mins
                </p>
            </div>
            <TimeForm
                hourLeft={hourLeft}
                setHourLeft={setHourLeft}
                minsLeft={minsLeft}
                setMinsLeft={setMinsLeft}
                overLimit={overLimit}
                setOverLimit={setOverLimit}
                timeList={timeList}
                setTimeList={setTimeList}
            />
            <TimeHistory timeList={timeList} />
            <div className="note">
                <p>What did you have for lunch?</p>
                <input type="text" />
                <p>What did you have for dinner?</p>
                <input type="text" />
            </div>
        </div>
    );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
