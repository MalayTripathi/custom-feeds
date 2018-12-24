var config = module.exports = {};

config.db_uri = `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@127.0.0.1:${process.env.DB_PORT}/Feeds`;
config.coindesk = 'https://www.coindesk.com/feed'; //20
config.cointelegraph = 'https://cointelegraph.com/rss'; //30
config.bitcoin_com = 'https://news.bitcoin.com/feed'; //10
config.newsbtc = 'https://www.newsbtc.com/feed'; //10
config.walletinvestor = 'https://walletinvestor.com/blog/feed'; //10
config.reddit = 'https://www.reddit.com/r/CryptoCurrency/top/.rss'; //25
config.bitcoin_magazine = 'https://bitcoinmagazine.com/feed'; //10
config.ethereum_world_news = 'https://ethereumworldnews.com/feed'; //10
config.minergate = 'https://minergate.com/blog/feed';
config.kraken = 'https://blog.kraken.com/feed';
config.finance_maganates = 'https://www.financemagnates.com/cryptocurrency/feed';
config.coinsutra = 'https://coinsutra.com/blog/feed';
config.coingape= 'https://coingape.com/feed';
config.cryptopotato = 'https://cryptopotato.com/feed';
config.bitcoin_exchange = 'https://bitcoinexchangeguide.com/feed';
config.reuters = "http://feeds.reuters.com/reuters/INtopNews";
config.keywords = ["bitcoin", "ethereum", "blockchain", "crypto", "smart contract", "decentralized", "Bitcoin", "Ethereum", "Blockchain", "Crypto", "Smart Contract", "Decentralized"];