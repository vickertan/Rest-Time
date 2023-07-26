import { useState, useEffect } from "react";

function Quote() {
    const [quoteData, setQuoteData] = useState({
        category: "",
        content: "",
        author: "",
        timeCreated: "",
    });

    const fetchQuote = async () => {
        try {
            const response = await fetch(
                "https://api.api-ninjas.com/v1/quotes?category=",
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
                timeCreated: "now",
            });
        } catch (error) {
            console.log("Error: ", error);
        }
    };

    useEffect(() => {
        fetchQuote();
    }, []);

    console.log(quoteData);

    return (
        <>
            <div>
                <p>{quoteData.category}</p>
                <p>{quoteData.content}</p>
                <p>{quoteData.author}</p>
            </div>
        </>
    );
}

export default Quote;
