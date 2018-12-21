var config = module.exports = {};

config.db_uri = `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@127.0.0.1:${process.env.DB_PORT}/Feeds`;
config.feed1 = 'https://www.coindesk.com/feed'; //20
config.feed2 = 'https://cointelegraph.com/rss'; //30
config.feed3 = 'https://news.bitcoin.com/feed'; //10
config.feed4 = 'https://www.newsbtc.com/feed'; //10
config.feed5 = 'https://walletinvestor.com/blog/feed'; //10
config.feed6 = 'https://www.reddit.com/r/CryptoCurrency/top/.rss'; //25
config.feed7 = 'https://bitcoinmagazine.com/feed'; //10
config.feed8 = 'https://ethereumworldnews.com/feed'; //10