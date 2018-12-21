const NewsModel = require('../models/news.model');
const mongoose = require('mongoose');
const moment = require('moment');


exports.list = async (req, res) => {
    let limit = req.query.limit && req.query.limit <= 100 ? parseInt(req.query.limit) : 50;
    let page = 0;
    if (req.query) {
        if (req.query.page) {
            req.query.page = parseInt(req.query.page);
            page = Number.isInteger(req.query.page) ? req.query.page : 0;
        }
    }
    let total = await NewsModel.count();
    let sources = 8;
    NewsModel.list(limit, page).then((result) => {
        let newestStory = (moment(new Date()).diff(result[0].isoDate)/(3600000)).toFixed(2) + ' Hours';
        let oldestStory = (moment(new Date()).diff(result[result.length-1].isoDate)/(3600000)).toFixed(2) + ' Hours';
        res.status(200).send({ status: true, page, total, sources, limit: limit, newestStory, oldestStory, newsList: result });
    }).catch((err) => {
        console.log(err);
    });
};

exports.getById = (req, res) => {
    if (mongoose.Types.ObjectId.isValid(req.params.id)) {
        NewsModel.findById(req.params.id).then((result) => {
            res.status(200).send({ status: true, news: result });
        }).catch((err) => {
            console.log(err)
        });
    } else {
        res.status(400).send({status: false, message: 'Bad News ID'});
    }
};