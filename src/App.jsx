import { createRoot } from "react-dom/client";
import Indicator from "./Indicator";
import TimeForm from "./TimeForm";
import Question from "./Question";

const App = () => {
    return (
        <div className="content-box">
            <Indicator />
            <TimeForm id="1" />
            <TimeForm id="2" />
            <Question meals="lunch" />
            <Question meals="dinner" />
        </div>
    );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
