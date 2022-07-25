const express = require('express');
const partnerRouter = express.Router();

partnerRouter.route('/')
.all((req, res, next) => {
    res.statusCode= 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send all partners to you');
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /partners');
})
.post((req, res) => {
    res.end(`Will add the partners: ${req.body.name} with description: ${req.body.description} `);
})
.delete((req, res) => {
    res.end('Deleting all partners.');
});

partnerRouter.route('/:partnerId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text-plain');
    next();
})
.get((req, res) => {
    res.end(`Will send partner: ${req.params.partnerId} to you.`);
})
.put((req, res) => {
    res.end(`Will update partner: ${req.params.partnerId}`);
})
.post((req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on partner: ${req.params.partnerId}
    with description: ${req.body.description}`);
})
.delete((req, res) => {
    res.end(`Deleting partner: ${req.params.partnerId}`);
});

module.exports = partnerRouter;