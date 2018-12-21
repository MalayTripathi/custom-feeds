const NewsModel = require('../models/news.model');

exports.insert = (req, res) => {
    NewsModel.createUser(req.body)
        .then((result) => {
            res.status(201).send({id: result._id});
        });
};

exports.list = async (req, res) => {
    let limit = req.query.limit && req.query.limit <= 100 ? parseInt(req.query.limit) : 25;
    let page = 0;
    if (req.query) {
        if (req.query.page) {
            req.query.page = parseInt(req.query.page);
            page = Number.isInteger(req.query.page) ? req.query.page : 0;
        }
    }
    let count = await NewsModel.count()
    NewsModel.list(limit, page)
        .then((result) => {
            res.status(200).send({ status: true, page, total: count, limit: limit, newsList: result });
        })
};

exports.getById = (req, res) => {
    NewsModel.findById(req.params.newsId)
        .then((result) => {
            res.status(200).send({ status: true, news: result });
        });
};