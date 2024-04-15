import Joi from 'joi';

const userValidation = Joi.object({
    name: Joi.string()
        .required()
        .min(3).max(30)
        .messages({
            "any.required": "Name is required",
            "string.base": "Name must be a string",
            "string.min": "Name must be at least 3 characters long",
            "string.max": "Name must be at most 30 characters long"
        }),
    password: Joi.string()
        .required()
        .pattern(new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/))
        .messages({
            "any.required": "Password is required",
            "string.pattern.base": "Password must contain at least one number, one special character, and a mix of uppercase and lowercase letters"
        }),
    phoneNumber: Joi.number()
        .required()
        .min(1000000000).max(9999999999)
        .message({
            "any.required": "PhoneNumber is required",
            "number.base": "PhoneNumber must be a number",
            "number.min": "PhoneNumber must be exactly 10 characters long",
            "number.max": "PhoneNumber must be exactly 10 characters long"
        }),
    roll: Joi.number().integer().min(10).max(50),
    isMarried: Joi.boolean().required(),
    spouseName: Joi.string()
        .when("isMarried", {
            is: true,
            then: Joi.string().required(),
            otherwise: Joi.string().allow('')
        }),
    email: Joi.string()
        .email()
        .required()
        .pattern(new RegExp(/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/))
        .messages({
            "any.required": "Email is required",
            "string.email": "Invalid Email",
            "string.pattern.base": "Invalid Email"
        }),
    gender: Joi.string()
        .required()
        .valid('male', 'female', 'other')
        .messages({
            "string.base": "Gender must be a string",
            "any.required": "Gender is required",
            "any.only": "Gender must be either male, female, or other"
        }),
    dob: Joi.date().required(),
    location: Joi.object({
        country: Joi.string().required(),
        exactLocation: Joi.string().required()
    }),
    favTeacher: Joi.array().items(Joi.string()).required(),
    favSubject: Joi.array().items(Joi.object({
        bookName: Joi.string().required(),
        bookAuthor: Joi.string().required()
    })).required(),
});

export default userValidation;