module.exports = {
    'errorResponse': function (errorObj) {
        this.HTTP = errorObj. httpCode;
        this.MESSAGE = errorObj.httpMessage;
        this.DESCRIPTION = errorObj.description;
        this.details = errorObj.details ? errorObj.details:null;
    },
};