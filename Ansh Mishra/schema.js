const Joi = require("joi");

module.exports.listingSchema = Joi.object({
    listing : Joi.object({
        email : Joi.string().required(),
        name : Joi.string().required(),
        family_background : Joi.string().required(),
        skills : Joi.string().required(),
        goals : Joi.string().required(),
        higher_studies : Joi.string().required(),
        Image : Joi.string().allow("",null),
    }).required(),
});

module.exports.stu_problemSchema = Joi.object({
    stu_problem : Joi.object({
        rating : Joi.number().required().min(1).max(5),
        problem : Joi.string().required(),
    }).required(),
});