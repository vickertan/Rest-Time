import { useEffect, useState } from "react";
import Markdown from "react-markdown";

export default function UpdateLog() {
    const updateLog = `
  # Update Log

  **Feb 02, 2024**
  
  -   **Added Information page**
  
  -   **Display update log for the user inside Information page**
  
  **Jan 30, 2024**
  
  -   **Added feature to singly delete record**
  
      \`Click the number in record button to delete the record\`
      `;

    const [content, setContent] = useState();

    useEffect(() => {
        setContent(updateLog);
    }, []);

    return <Markdown>{updateLog}</Markdown>;
}
