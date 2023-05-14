import { createRoot } from "react-dom/client";
import { useEffect, useState } from "react";
import TimeForm from "./components/TimeForm";
import TimeHistory from "./components/TimeHistory";

const App = () => {
    const limit = {
        hour: 2,
        mins: 20,
    };

    const validHour = String(limit.hour).padStart(2, "0");
    const validMins = String(limit.mins).padStart(2, "0");

    const [timeList, setTimeList] = useState([]);
    const [overLimit, setOverLimit] = useState(false);
    const [hourLimit, setHourLimit] = useState(validHour);
    const [minsLimit, setMinsLimit] = useState(validMins);
    const [hourLeft, setHourLeft] = useState(validHour);
    const [minsLeft, setMinsLeft] = useState(validMins);

    const [totalMinsUsed, setTotalMinsUsed] = useState(0);

    // keeps time left's state in local storage
    useEffect(() => {
        const milTimeLeft_S = JSON.parse(localStorage.getItem("milTimeLeft"));
        if (milTimeLeft_S) {
            setHourLeft(milTimeLeft_S.split(":")[0]);
            setMinsLeft(milTimeLeft_S.split(":")[1]);
        }
    }, []);
    useEffect(() => {
        localStorage.setItem(
            "milTimeLeft",
            JSON.stringify(hourLeft + ":" + minsLeft)
        );
    }, [hourLeft, minsLeft]);

    // keeps timeList in local storage
    useEffect(() => {
        const timeList_S = JSON.parse(localStorage.getItem("timeList"));
        if (timeList_S) {
            setTimeList(timeList_S);
        }
    }, []);
    useEffect(() => {
        localStorage.setItem("timeList", JSON.stringify(timeList));
    }, [timeList]);

    // keeps totalMinsUsed in local storage
    useEffect(() => {
        const totalMinsUsed_S = JSON.parse(
            localStorage.getItem("totalMinsUsed")
        );
        if (totalMinsUsed_S) {
            setTotalMinsUsed(totalMinsUsed_S);
        }
    }, []);
    useEffect(() => {
        localStorage.setItem("totalMinsUsed", JSON.stringify(totalMinsUsed));
    }, [totalMinsUsed]);

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
                totalMinsUsed={totalMinsUsed}
                setTotalMinsUsed={setTotalMinsUsed}
            />
            <TimeHistory
                hourLimit={hourLimit}
                minsLimit={minsLimit}
                timeList={timeList}
                setTimeList={setTimeList}
                setHourLeft={setHourLeft}
                setMinsLeft={setMinsLeft}
                totalMinsUsed={totalMinsUsed}
                setTotalMinsUsed={setTotalMinsUsed}
            />
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
