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
         body: String(corp.object.title)
     };
});



exports.handler = async (event, context) => {
    return fetch(API_ENDPOINT)
     .then(res => res.json())
     .then(getTitle)
     .catch(error => ({ statusCode: 422, body: String(error) }));
};


 /**
 * schema for corporation - not required but helps me to know what I have to work with
 * It will also be useful for posting data. TODO:move to a models area. 
 * @private
 * @return {object} cosmicApi
 */
// const schema = Joi.object({
//     "title": Joi.string().required(),
//     "content": Joi.string().required(),
//     "type_slug": Joi.string(),
//     "metadata": {
//       "mddoingbusinessas":Joi.string().required(),
//       "mdaddressline1": Joi.string().required(),
//       "mdcity": Joi.string().required(),
//       "mdstate":Joi.string(),
//       "mdcountry":Joi.string().required(),
//       "mddescription":Joi.string().required(),
//       "mdgithub": Joi.string(),
//     }
// });

// const Corporation   = joiModel(schema);
