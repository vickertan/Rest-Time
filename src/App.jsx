import { createRoot } from "react-dom/client";
import { useState } from "react";
import TimeForm from "./components/TimeForm";
import TimeHistory from "./components/TimeHistory";

const App = () => {
    const limit = {
        hour: 2,
        mins: 20,
    };

    const [hourLimit, setHourLimit] = useState(limit.hour);
    const [minsLimit, setMinsLimit] = useState(limit.mins);

    const [hourLeft, setHourLeft] = useState(limit.hour);
    const [minsLeft, setMinsLeft] = useState(limit.mins);

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
            />
            <TimeHistory timeList="" />
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
