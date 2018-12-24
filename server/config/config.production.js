var config = module.exports = {};

config.db_uri = `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@127.0.0.1:${process.env.DB_PORT}/Feeds`;
config.sources = {
    coindesk : 'https://www.coindesk.com/feed',
    cointelegraph : 'https://cointelegraph.com/rss',
    bitcoin_com : 'https://news.bitcoin.com/feed',
    newsbtc : 'https://www.newsbtc.com/feed',
    walletinvestor : 'https://walletinvestor.com/blog/feed',
    reddit : 'https://www.reddit.com/r/CryptoCurrency/top/.rss',
    bitcoin_magazine : 'https://bitcoinmagazine.com/feed',
    ethereum_world_news : 'https://ethereumworldnews.com/feed',
    minergate : 'https://minergate.com/blog/feed',
    kraken : 'https://blog.kraken.com/feed',
    finance_maganates : 'https://www.financemagnates.com/cryptocurrency/feed',
    coinsutra : 'https://coinsutra.com/blog/feed',
    coingape : 'https://coingape.com/feed',
    cryptopotato : 'https://cryptopotato.com/feed',
    bitcoin_exchange : 'https://bitcoinexchangeguide.com/feed',
    reuters : "http://feeds.reuters.com/reuters/INtopNews"
};
config.keywords = ["bitcoin", "ethereum", "blockchain", "crypto", "smart contract", "decentralized"];