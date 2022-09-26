"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var Product_1 = __importDefault(require("./holders/Product"));
var Users_1 = __importDefault(require("./holders/Users"));
var Orders_1 = __importDefault(require("./holders/Orders"));
var app = (0, express_1["default"])();
var address = "0.0.0.0:3000";
var corsOptions = {
    origin: 'http://storeFront.com',
    optionSuccessStatus: 200
};
function cors(corsOptions) {
    throw new Error('Function not implemented.');
}
app.use(cors(corsOptions));
app.use(body_parser_1["default"].json());
app.get('/Product', function (req, res) {
    try {
        res.send('This in INDEX routes');
    }
    catch (err) {
        res.status(400);
        return res.json(err);
    }
});
app.get('/Product/:id', function (req, res) {
    try {
        res.send('This in SHOW routes');
    }
    catch (err) {
        res.status(400);
        return res.json(err);
    }
});
app.post('/Product', function (req, res) {
    var product = {
        id: req.body.id,
        name: req.body.name,
        price: req.body.price
    };
    try {
        res.send('This in CREATE routes');
    }
    catch (err) {
        res.status(400);
        return res.json(err);
    }
});
//-----------------------------
app.get('/Users', function (req, res) {
    try {
        res.send('This in INDEX routes');
    }
    catch (err) {
        res.status(400);
        return res.json(err);
    }
});
app.get('/Users/:id', function (req, res) {
    try {
        res.send('This in SHOW routes');
    }
    catch (err) {
        res.status(400);
        return res.json(err);
    }
});
app.post('/Users', function (req, res) {
    var users = {
        id: req.body.id,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: req.body.password
    };
    try {
        res.send('This in CREATE routes');
    }
    catch (err) {
        res.status(400);
        return res.json(err);
    }
});
//------------------------------------------
app.get('/Orders/:id', function (req, res) {
    try {
        res.send('This in SHOW routes');
    }
    catch (err) {
        res.status(400);
        return res.json(err);
    }
});
app.listen(3000, function () {
    console.log("starting app on: ".concat(address));
});
app.get('/test-cors', cors(corsOptions), function (req, res, next) {
    res.json({ msg: 'This is CORS-enabled with a middle ware' });
});
(0, Product_1["default"])(app);
(0, Users_1["default"])(app);
(0, Orders_1["default"])(app);
