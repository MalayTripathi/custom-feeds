const Parser = require('rss-parser');
const parser = new Parser();
const R = require('ramda');
const NewsModel = require('./news/models/news.model');
const _links = R.pluck('link');
const reutersExp = RegExp(config.keywords.join('|'),'gi')
const axios = require('axios');

setInterval(
    () => {
        try {
            for (const source in config.sources) {
                if (config.sources.hasOwnProperty(source)) {
                    const url = config.sources[source];
                    axios.get(url).then(async r => {
                        let allFeeds = await parser.parseString(r.data), feed;
                        if(source === 'reuters') {
                            feed = allFeeds.items.filter(f => {
                                if(reutersExp.test(f.title) || reutersExp.test(f.content)) {
                                    return true;
                                } else return false;
                            }).slice();
                        } else {
                            feed = allFeeds.items;
                        }
                        let links = _links(feed);
                        let matched = await NewsModel.newLinks(links);
                        let uniqueItems = feed.filter(f => matched.indexOf(f.link) === -1).slice().reverse();
                        if(uniqueItems.length > 0) {
                            const io = global.io;
                            let result = await NewsModel.insertAll(uniqueItems);
                            uniqueItems.map(item => {
                                delete item.__v;
                                delete item.contentSnippet;
                                delete item['dc:creator'];
                                io.sockets.emit('message', item);
                            });
                        }
                        return 1;
                    }).catch((err) => { 
                        console.log(`Error in ${source} feed: `, err); 
                    });
                }
            }
        } catch (e) {
            console.log('Error: ', e);
        }
}, 30000);