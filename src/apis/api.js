import searchApiResponse from "../mockups/searchApiResponse";
import responseFormatter from "../utils/reponse"


const url = "https://api.perplexity.ai/chat/completions";
const headers = {
    "Authorization": "Bearer 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",
    "Content-Type": "application/json"
};



const callApi = async (productName, websiteNames) => {
    const data = {
        model: "sonar",
        messages: [
            {
                role: "user",
                content: (
                    "Give me a JSON array of Samsung S25 listings in India from Amazon, Flipkart, Croma, Reliance Digital, and Samsung India. "
                    + "For each, include: site, productUrl, productName, price, rating, and imageUrls. "
                    + "Format response as raw JSON only, no extra text."
                )
            }
        ]
    };

    return await fetch(url, {
        method: "POST",
        headers,
        body: JSON.stringify(data),
    })
        .then(res => res.json())
        .then(json => {
            console.log(json);
            console.log("===final====", json.choices[0].message.content);
            return JSON.parse(responseFormatter(json.choices[0].message.content))
            // Access response: json.choices[0].message.content
        })
        .catch(err => console.error(err));

};

const callmock = async (productName, websiteNames) => {
    return searchApiResponse;

};

export { callApi, callmock };