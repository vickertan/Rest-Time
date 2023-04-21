import { createRoot } from "react-dom/client";
import Indicator from "./Indicator";
import TimeForm from "./TimeForm";
import Note from "./Note";

const App = () => {
    return (
        <div className="content-box">
            <Indicator />
            <TimeForm sequence="1" />
            <TimeForm sequence="2" />
            <Note meals="lunch" />
            <Note meals="dinner" />
        </div>
    );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
