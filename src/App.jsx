import { createRoot } from "react-dom/client";
import Indicator from "./Indicator";
import TimeForm from "./TimeForm";
import QnA from "./QnA";

const App = () => {
    return (
        <div className="content-box">
            <Indicator />
            <TimeForm sequence="1" />
            <QnA text="What did you have for lunch?" />
            <QnA text="What did you have for dinner?" />
        </div>
    );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
