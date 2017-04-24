var express = require("express");
var mongoose = require('mongoose');
var data = require("./chatsSchema.js");
var bodyParser = require('body-Parser');
var apiRouter = express.Router();


apiRouter.use(bodyParser.urlencoded({
    extended: false
}));
apiRouter.use(bodyParser.json());


apiRouter.get("/", function (req, res) {
    data.find({}, function (err, data) {
        if (err) {
            res.status(500).send({
                message: 'internal server error'
            });

        } else {

            res.status(200).send({
                data: data
            });

        }





    })

});


apiRouter.post("/", function (req, res) {
    var newData = new data(req.body);
    newData.save(function (err, nd) {
        if (err) {
            res.status(500).send({
                meassage: 'error'
            });

        } else {
            res.status(200).send({
                data: nd
            });

        }

    })

});
//apiRouter.get("/:id", function (req, res) {
//    data.findOne({
//        _id: req.params.id
//    }, function (err, data) {
//        if (err) {
//            res.status(500).send({
//                message: 'internal server error'
//            });
//
//        } else {
//
//            res.status(200).send({
//                data: data
//            });
//
//        }
//
//
//
//
//
//    })
//
//});









module.exports = apiRouter;