const app = require('express')();
const bodyParser = require('body-parser');

const errors = require('./lib/error');
const errorModal = require('./lib/errorResponse');
const validator = require('./lib/validator');
const isError = true;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/json'}));

app.get('/', async function(req, res, next) {
    if(!isError) {
        res.send({message: 'hello world'});
    }
    const { email } = await validator.validateEmail(req.body.email);
    if(!email){
        const error = new errorModal.errorResponse(errors.invalid_operation.withDetails('Event given title is already created'));
        return res.send(error);
    }
    res.send({message: 'email valid'});
});

app.listen(8085, function() {
    console.log('Server is running on port 8085');
});