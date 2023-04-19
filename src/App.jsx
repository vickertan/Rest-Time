import { createRoot } from "react-dom/client";
import Indicator from "./Indicator";
import TimeForm from "./TimeForm";
import Note from "./Note";

const App = () => {
    return (
        <div className="content-box">
            <Indicator />
            <TimeForm out="out-1" in="in-1" sequence="1" />
            <TimeForm out="out-2" in="in-2" sequence="2" />
            <Note meals="lunch" />
            <Note meals="dinner" />
        </div>
    );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
