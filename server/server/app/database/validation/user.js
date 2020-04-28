const Joi = require('joi');

const user = Joi.object().keys({
  name: Joi.string(),
  address: Joi.string(),
  date: Joi.string(),
  height: Joi.number().integer(),
  weight: Joi.number().integer(),
  email:Joi.string().required(),
  gender:Joi.string(),
  basic_salary: Joi.number(),
  grosspay: Joi.number(),
  mode:Joi.string()
});

module.exports = user;
