import axios from "axios";

const baseUrl = "https://lobster-app-ddwng.ondigitalocean.app/product";
const apiKey = "Z9Q7WKEY7ORGBUFGN3EG1QS5Y7FG8DU29GHKKSZH";

export default axios.create(
    {
        baseURL: baseUrl,
        headers: {
            'x-rapidapi-host': baseUrl,
            'api_key': apiKey
        },
        params: {}
    }
)