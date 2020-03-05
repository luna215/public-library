const Joi = require('@hapi/joi');


const schema = Joi.object({
    email: Joi.string()
        .email({
            minDomainSegments: 2,
            tlds: {
                allow: [
                    'com',
                    'net',
                ]
            }
        })
});


module.exports = {
    validateEmail: async function(email) {
        try {
            const value = await schema.validateAsync({ email });
            return value;
        } catch(err) {
            console.log('Error:', err);
            return err;
        }
    }
}