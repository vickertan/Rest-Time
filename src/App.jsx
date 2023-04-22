import { createRoot } from "react-dom/client";
import { useState } from "react";
import Indicator from "./components/Indicator";
import TimeForm from "./components/TimeForm";
import QnA from "./components/QnA";

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
            <Indicator
                hourLimit={hourLimit}
                minsLimit={minsLimit}
                hourLeft={hourLeft}
                minsLeft={minsLeft}
            />
            <TimeForm
                hourLeft={hourLeft}
                setHourLeft={setHourLeft}
                minsLeft={minsLeft}
                setMinsLeft={setMinsLeft}
            />
            <QnA text="What did you have for lunch?" />
            <QnA text="What did you have for dinner?" />
        </div>
    );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
