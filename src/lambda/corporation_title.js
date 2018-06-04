import fetch from "node-fetch";
// add joi for schema validations 
// import Joi from "joi";
// import joi-model from "joi-model"

const API_ENDPOINT =
  "https://api.cosmicjs.com/v1/duas-americas-backend-content/object/duas-americas-group-inc?pretty=true&hide_metafields=true&revision=5b06ee513203d3138e8eba2f";


const getTitle = ((corp) => {
    // for type safety and schema validations
    // new Corporation(response.json().object)
    return {
         statusCode: 200,
          headers: {
            "Access-Control-Allow-Origin" : "*" // Required for CORS support to work
          },
         body: String(corp.object.title)
     };
});



exports.handler = async (event, context) => {
    return fetch(API_ENDPOINT)
     .then(res => res.json())
     .then(getTitle)
     .catch(error => ({ statusCode: 422, body: String(error) }));
};
