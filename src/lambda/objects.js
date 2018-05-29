import fetch from "node-fetch";

const API_ENDPOINT =
  "https://api.cosmicjs.com/v1/duas-americas-backend-content/objects?pretty=true&hide_metafields=true";
//    .then(res => ({
//      statusCode: 200,
//      body: `${res.name} `
//    }))
exports.handler = async (event, context) => {
  return fetch(API_ENDPOINT)
    .then(response => response.json())
    .catch(error => ({ statusCode: 422, body: String(error) }));
};
