import { useState, useEffect } from "react";

function Quote() {
    const [category, setCategory] = useState("");
    const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");

    // fetch quote's data from API Ninjas
    useEffect(() => {
        fetch("https://api.api-ninjas.com/v1/quotes?category=happiness", {
            method: "GET",
            headers: {
                "X-Api-Key": "F9BuIfa9FQbnDnA3nHl+5Q==CodlQToENsszxSAJ",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setCategory(data[0].category);
                setQuote(data[0].quote);
                setAuthor(data[0].author);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <>
            <div>
                <p>{category}</p>
                <p>{quote}</p>
                <p>{author}</p>
            </div>
        </>
    );
}

export default Quote;
