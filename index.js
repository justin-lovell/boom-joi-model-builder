'use strict';

var Joi = require('joi');


function builder(keys) {

  keys = keys || {};

  return {
    add: function(code) {
      keys[code] = Joi.object({
        statusCode: Joi.number().integer().required().only(code),
        error: Joi.string().required(),
        message: Joi.string(),
        data: Joi.string()
      });
      return builder(keys);
    },
    createMap: function() {
      return keys;
    }
  }

}


module.exports = builder;