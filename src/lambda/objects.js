import fetch from "node-fetch";

const API_ENDPOINT =
  "https://api.cosmicjs.com/v1/duas-americas-backend-content/objects?pretty=true&hide_metafields=true";
// to maniuplate the data .then(response => response.json())
//    .then(res => ({
//      statusCode: 200,
//      body: `${res.name} `
//    }))
exports.handler = async (event, context) => {
  return fetch(API_ENDPOINT)
    .catch(error => ({ statusCode: 422, body: String(error) }));
};
