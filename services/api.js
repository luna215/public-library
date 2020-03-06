import axios from 'axios';

module.exports =  {
    init: function (baseUrl, cb) {
        axios.defaults.baseUrl = baseUrl;
        return cb(axios.defaults.baseUrl);
    },

    // If you are using Tokens
    setHeader: function() {
    },

    removeHeader: function() {
    },

    get: function(resource) {
        return axios.get(resource);
    },

    post: function(resource, data) {
        return axios.post(resource);
    },

    put: function(resource) {
        return axios.put(resource, data);
    },

    delete: function(resource) {
        return axios.delete(resource, data);
    },

    customRequest: function(data) {
        return axios(data);
    }
}