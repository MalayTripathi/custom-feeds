const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const R = require('ramda');
const _links = R.pluck('link');

mongoose.connect(global.config.db_uri, { useNewUrlParser: true });

const newsSchema = new Schema({
    creator: String,
    title: String,
    link: { type: String, unique: true },
    pubDate: String,
    content: String,
    guid: String,
    categories: [{ type: String }],
    isoDate: Date,
}, {
        autoIndex: false
    });

// Ensure virtual fields are serialised.
newsSchema.set('toJSON', {
    virtuals: true
});

const News = mongoose.model('News', newsSchema);

exports.findById = (id) => {
    return News.findById({ _id: id })
        .then((result) => {
            result = result.toJSON();
            delete result._id;
            delete result.__v;
            return result;
        });
};

exports.createNews = (newsData) => {
    const news = new News(newsData);
    return news.save();
};

exports.list = (perPage, page) => {
    return new Promise((resolve, reject) => {
        News.find().select('-__v').sort({ isoDate: -1 })
            .limit(perPage)
            .skip(perPage * page)
            .exec(function (err, news) {
                if (err) {
                    reject(err);
                } else {
                    resolve(news)
                }
            })
    });
};

exports.newLinks = (links) => {
    return new Promise((resolve, reject) => {
        News.find({ link: { $in: links } })
            .exec(function (err, news) {
                if (err) {
                    reject(err);
                } else {
                    resolve(_links(news));
                }
            })
    });
};

exports.insertAll = (items) => {
    return new Promise((resolve, reject) => {
        News.insertMany(items, (err, re) => {
            if (err) {
                reject(err)
            } else {
                resolve(re)
            }
        })
    });
};

exports.count = (links) => {
    return new Promise((resolve, reject) => {
        News.find({}).countDocuments()
            .exec(function (err, news) {
                if (err) {
                    reject(err);
                } else {
                    resolve(news);
                }
            })
    });
};