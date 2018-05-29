import fetch from "node-fetch";

const API_ENDPOINT =
  "https://api.cosmicjs.com/v1/duas-americas-backend-content/objects?pretty=true&hide_metafields=true";
// to maniuplate the data .then(response => response.json())
exports.handler = async (event, context) => {
  return fetch(API_ENDPOINT)
    .then(proxyResponse => ({
      statusCode: 200,
      body: `${proxyResponse} `
    }))
    .catch(error => ({ statusCode: 422, body: String(error) }));
};
