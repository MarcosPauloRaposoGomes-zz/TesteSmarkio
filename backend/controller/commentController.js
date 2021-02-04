const db = require("../models/index");
const Comment = db.comment;
const Sequelize = require("sequelize");
const Op = db.Sequelize.Op;

//Get All Comments
exports.getAllComments = (req, res, next) => {
    Comment.findAll({
            include: [{
               content: db.content
            }],
            order: [
                ["createdAt", "DESC"]
            ]
        })
        .then(AllComments => res.status(200).send(AllComments))
        .catch(err =>
            res.status(500).send({
                error: err
            })
        );
};

//Comment Create
exports.createComment = (req, res) => {
    if (!req.body.content) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
        return;
      }

    Comment.create({
        content: req.body.content
        })
        .then(()=> res.status(200))
        .catch(err =>
            res.status(500).send({
                error: err
            })
        );
};