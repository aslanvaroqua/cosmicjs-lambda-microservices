import fetch from "node-fetch";

const API_ENDPOINT =
  "https://api.cosmicjs.com/v1/duas-americas-backend-content/objects?pretty=true&hide_metafields=true";

exports.handler = async (event, context) => {
  return fetch(API_ENDPOINT)
    .then(response => response.json())
    .then(res => ({
         statusCode: 200,
          headers: {
              "Access-Control-Allow-Origin" : "*" // Required for CORS support to work
          },
         body: JSON.stringify(res)
     }))
    .catch(error => ({ statusCode: 422, body: String(error) }));
};
