import axios from "axios";

export default async function (req, res, next) {
    await axios
        .get("https://genplusmedia.online/manager/posts/json/1.json", {
            params: {
                api_key: "0906429283",
                website_id: 40,
                limit: 1,
            },
        })
        .then((response) => {
            const data = response.data;
            res.setHeader("Content-Type", "application/json; charset=utf-8");
            res.end(JSON.stringify(data));
        })
        .catch((error) => {
            console.error("API Error:", error);
            next(error);
        });
}
