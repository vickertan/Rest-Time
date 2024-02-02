import "./main.css";
import { createRoot } from "react-dom/client";
import { useEffect, useState } from "react";
import convToMins from "./func/convToMins";
import convToMilTime from "./func/convToMilTime";
import InfoButton from "./components/InfoButton";
import TimeForm from "./components/TimeForm";
import TimeHistory from "./components/TimeHistory";
import Quote from "./components/Quote";

const App = () => {
    const limit = {
        hour: 2,
        mins: 10,
    };

    let limitColor;

    const validHour = String(limit.hour).padStart(2, "0");
    const validMins = String(limit.mins).padStart(2, "0");

    const [timeList, setTimeList] = useState([]);
    const [limitStatus, setLimitStatus] = useState("");
    const [hourLimit, setHourLimit] = useState(validHour);
    const [minsLimit, setMinsLimit] = useState(validMins);
    const [hourLeft, setHourLeft] = useState(validHour);
    const [minsLeft, setMinsLeft] = useState(validMins);

    const [totalMinsUsed, setTotalMinsUsed] = useState(0);

    const [totalMinsLimit, setTotalMinsLimit] = useState(
        convToMins(`${hourLimit}:${minsLimit}`)
    );
    const [totalMinsLeft, setTotalMinsLeft] = useState(totalMinsLimit);

    // keeps limitStatus's state in local storage
    useEffect(() => {
        const limitStatus_S = JSON.parse(localStorage.getItem("limitStatus"));
        if (limitStatus_S) {
            setLimitStatus(limitStatus_S);
        }
    }, []);
    useEffect(() => {
        localStorage.setItem("limitStatus", JSON.stringify(limitStatus));
    }, [limitStatus]);

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

    // update hour and mins left's state on totalMinsLeft change
    useEffect(() => {
        const totalMinsLeft_S = JSON.parse(
            localStorage.getItem("totalMinsLeft")
        );
        if (totalMinsLeft_S) {
            const milTimeLeft = convToMilTime(totalMinsLeft_S);
            setTotalMinsLeft(totalMinsLeft_S);
            setHourLeft(milTimeLeft.split(":")[0]);
            setMinsLeft(milTimeLeft.split(":")[1]);
        }
    }, []);
    useEffect(() => {
        localStorage.setItem("totalMinsLeft", totalMinsLeft);
        const milTimeLeft = convToMilTime(totalMinsLeft);
        setHourLeft(milTimeLeft.split(":")[0]);
        setMinsLeft(milTimeLeft.split(":")[1]);
    }, [totalMinsLeft]);

    // update limitStatus on totalMinsLeft change
    useEffect(() => {
        if (totalMinsLeft < 0) {
            setLimitStatus("danger");
        } else if (totalMinsLeft < 10) {
            setLimitStatus("warn");
        } else {
            setLimitStatus("");
        }
    }, [totalMinsLeft]);

    if (limitStatus === "danger") {
        limitColor = "#aa1e3a";
    } else if (limitStatus === "warn") {
        limitColor = "#f0a92d";
    } else {
        limitColor = "#eee";
    }

    return (
        <div className="content-box">
            <div className="head">
                <div className="indicator">
                    <p style={{ textAlign: "right" }}>
                        Limit : {hourLimit} hr {minsLimit} mins
                    </p>
                    <p style={{ color: limitColor, textAlign: "right" }}>
                        Time Left : {hourLeft} hr {minsLeft} mins
                    </p>
                </div>
                <InfoButton />
            </div>
            <TimeForm
                totalMinsLeft={totalMinsLeft}
                setTotalMinsLeft={setTotalMinsLeft}
                timeList={timeList}
                setTimeList={setTimeList}
                totalMinsUsed={totalMinsUsed}
                setTotalMinsUsed={setTotalMinsUsed}
            />
            <TimeHistory
                totalMinsLimit={totalMinsLimit}
                timeList={timeList}
                setTimeList={setTimeList}
                totalMinsLeft={totalMinsLeft}
                setTotalMinsLeft={setTotalMinsLeft}
                totalMinsUsed={totalMinsUsed}
                setTotalMinsUsed={setTotalMinsUsed}
            />
            <Quote />
        </div>
    );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
