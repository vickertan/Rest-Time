import { useState, useEffect } from "react";

function Quote() {
    const [latestDate, setLatestDate] = useState(new Date().getDate());

    const objData = JSON.parse(localStorage.getItem("quoteData"));
    const [quoteData, setQuoteData] = useState({
        category: objData?.category ? objData.category : "",
        content: objData?.category ? objData.content : "",
        author: objData?.author ? objData.author : "",
        date: objData?.date ? objData.date : "",
    });

    const randDigit = Math.floor(Math.random() * 2);

    const fetchQuote = async () => {
        try {
            const response = await fetch(
                `https://api.api-ninjas.com/v1/quotes?category=${
                    randDigit ? "happiness" : "success"
                }`,
                {
                    method: "GET",
                    headers: {
                        "X-Api-Key": import.meta.env.VITE_API_KEY,
                    },
                }
            );

            if (!response.ok) {
                throw new Error("quote fetch not ok");
            }

            const data = await response.json();
            setQuoteData({
                category: data[0].category,
                content: data[0].quote,
                author: data[0].author,
                date: latestDate,
            });
            console.log("Data fetched");
        } catch (error) {
            console.log("Error: ", error);
        }
    };

    // keeping latestDate in local storage
    useEffect(() => {
        const prevDate = JSON.parse(localStorage.getItem("latestDate"));
        if (prevDate != latestDate) {
            setLatestDate(latestDate);
        } else {
            setLatestDate(prevDate);
        }
    }, []);
    useEffect(() => {
        localStorage.setItem("latestDate", JSON.stringify(latestDate));
    }, [latestDate]);

    // keeping quoteData in local storage
    useEffect(() => {
        const quoteData_S = JSON.parse(localStorage.getItem("quoteData"));
        if (quoteData_S) {
            setQuoteData(quoteData_S);
        }
    }, []);
    useEffect(() => {
        localStorage.setItem("quoteData", JSON.stringify(quoteData));
    }, [quoteData]);

    // refetch data every day
    useEffect(() => {
        if (quoteData.date !== latestDate || !quoteData.content) {
            fetchQuote();
        } else {
            console.log("Not fetching quote");
        }
    }, []);

    return (
        <div className="quote">
            <div className="header">
                <p className="title">Today's {quoteData.category} quote</p>
                <button
                    className="refresh"
                    onClick={() => window.location.reload(true)}
                >
                    Refresh
                </button>
            </div>
            <p className="content">{quoteData.content}</p>
            <p className="author">- {quoteData.author}</p>
        </div>
    );
}

export default Quote;
