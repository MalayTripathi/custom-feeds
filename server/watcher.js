let Parser = require('rss-parser');
let parser = new Parser();
let R = require('ramda');
const NewsModel = require('./news/models/news.model');
const _links = R.pluck('link');
const reutersExp = RegExp(config.keywords.join('|'),'gi')

setInterval(
	async () => {
		try {
			let feed = await parser.parseURL(config.sources.coindesk);

			let links = _links(feed.items)
			let matched = await NewsModel.newLinks(links)
			let uniqueItems = feed.items.filter(f => matched.indexOf(f.link) === -1).slice().reverse()
			if(uniqueItems.length > 0) {
				const io = global.io
				let result = await NewsModel.insertAll(uniqueItems)
				uniqueItems.map(item => {
					delete item.__v
					delete item.contentSnippet
					delete item['dc:creator']
					io.sockets.emit('message', item)
				})
			}
		} catch (e) {
			console.log('Error in Coindesk Feed', e);
		}
}, 60000);

setInterval(
	async () => {
		try {
			let feed = await parser.parseURL(config.sources.cointelegraph);

			let links = _links(feed.items)
			let matched = await NewsModel.newLinks(links)
			let uniqueItems = feed.items.filter(f => matched.indexOf(f.link) === -1).slice().reverse()
			if(uniqueItems.length > 0) {
				const io = global.io
				let result = await NewsModel.insertAll(uniqueItems)
				uniqueItems.map(item => {
					delete item.__v
					delete item.contentSnippet
					delete item['dc:creator']
					io.sockets.emit('message', item)
				})
			}
		} catch (e) {
			console.log('Error in Cointelegraph Feed', e);
		}
}, 60000);

setInterval(
	async () => {
		try {
			let feed = await parser.parseURL(config.sources.bitcoin_com);

			let links = _links(feed.items)
			let matched = await NewsModel.newLinks(links)
			let uniqueItems = feed.items.filter(f => matched.indexOf(f.link) === -1).slice().reverse()
			if(uniqueItems.length > 0) {
				const io = global.io
				let result = await NewsModel.insertAll(uniqueItems)
				uniqueItems.map(item => {
					delete item.__v
					delete item.contentSnippet
					delete item['dc:creator']
					io.sockets.emit('message', item)
				})
			}
		} catch (e) {
			console.log('Error in Bitcoin.com Feed', e);
		}
}, 60000);

setInterval(
	async () => {
		try {
			let feed = await parser.parseURL(config.sources.newsbtc);

			let links = _links(feed.items)
			let matched = await NewsModel.newLinks(links)
			let uniqueItems = feed.items.filter(f => matched.indexOf(f.link) === -1).slice().reverse()
			if(uniqueItems.length > 0) {
				const io = global.io
				let result = await NewsModel.insertAll(uniqueItems)
				uniqueItems.map(item => {
					delete item.__v
					delete item.contentSnippet
					delete item['dc:creator']
					io.sockets.emit('message', item)
				})
			}
		} catch (e) {
			console.log('Error in News BTC Feed', e);
		}
}, 60000);

setInterval(
	async () => {
		try {
			let feed = await parser.parseURL(config.sources.walletinvestor);

			let links = _links(feed.items)
			let matched = await NewsModel.newLinks(links)
			let uniqueItems = feed.items.filter(f => matched.indexOf(f.link) === -1).slice().reverse()
			if(uniqueItems.length > 0) {
				const io = global.io
				let result = await NewsModel.insertAll(uniqueItems)
				uniqueItems.map(item => {
					delete item.__v
					delete item.contentSnippet
					delete item['dc:creator']
					io.sockets.emit('message', item)
				})
			}
		} catch (e) {
			console.log('Error in Wallet Investor Feed', e);
		}
}, 60000);

setInterval(
	async () => {
		try {
			let feed = await parser.parseURL(config.sources.reddit);

			let links = _links(feed.items)
			let matched = await NewsModel.newLinks(links)
			let uniqueItems = feed.items.filter(f => matched.indexOf(f.link) === -1).slice().reverse()
			if(uniqueItems.length > 0) {
				const io = global.io
				let result = await NewsModel.insertAll(uniqueItems)
				uniqueItems.map(item => {
					delete item.__v
					delete item.contentSnippet
					delete item['dc:creator']
					io.sockets.emit('message', item)
				})
			}
		} catch (e) {
			console.log('Error in Reddit Feed', e);
		}
}, 60000);

setInterval(
	async () => {
		try {
			let feed = await parser.parseURL(config.sources.bitcoin_magazine);

			let links = _links(feed.items)
			let matched = await NewsModel.newLinks(links)
			let uniqueItems = feed.items.filter(f => matched.indexOf(f.link) === -1).slice().reverse()
			if(uniqueItems.length > 0) {
				const io = global.io
				let result = await NewsModel.insertAll(uniqueItems)
				uniqueItems.map(item => {
					delete item.__v
					delete item.contentSnippet
					delete item['dc:creator']
					io.sockets.emit('message', item)
				})
			}
		} catch (e) {
			console.log('Error in Bitcoin Magazine Feed', e);
		}
}, 60000);

setInterval(
	async () => {
		try {
			let feed = await parser.parseURL(config.sources.ethereum_world_news);

			let links = _links(feed.items)
			let matched = await NewsModel.newLinks(links)
			let uniqueItems = feed.items.filter(f => matched.indexOf(f.link) === -1).slice().reverse()
			if(uniqueItems.length > 0) {
				const io = global.io
				let result = await NewsModel.insertAll(uniqueItems)
				uniqueItems.map(item => {
					delete item.__v
					delete item.contentSnippet
					delete item['dc:creator']
					io.sockets.emit('message', item)
				})
			}
		} catch (e) {
			console.log('Error in Ethereum World News Feed', e);
		}
}, 60000);

setInterval(
	async () => {
		try {
			let feed = await parser.parseURL(config.sources.minergate);

			let links = _links(feed.items)
			let matched = await NewsModel.newLinks(links)
			let uniqueItems = feed.items.filter(f => matched.indexOf(f.link) === -1).slice().reverse()
			if(uniqueItems.length > 0) {
				const io = global.io
				let result = await NewsModel.insertAll(uniqueItems)
				uniqueItems.map(item => {
					delete item.__v
					delete item.contentSnippet
					delete item['dc:creator']
					io.sockets.emit('message', item)
				})
			}
		} catch (e) {
			console.log('Error in Miner Gate News Feed', e);
		}
}, 60000);

setInterval(
	async () => {
		try {
			let feed = await parser.parseURL(config.sources.kraken);

			let links = _links(feed.items)
			let matched = await NewsModel.newLinks(links)
			let uniqueItems = feed.items.filter(f => matched.indexOf(f.link) === -1).slice().reverse()
			if(uniqueItems.length > 0) {
				const io = global.io
				let result = await NewsModel.insertAll(uniqueItems)
				uniqueItems.map(item => {
					delete item.__v
					delete item.contentSnippet
					delete item['dc:creator']
					io.sockets.emit('message', item)
				})
			}
		} catch (e) {
			console.log('Error in Kraken News Feed', e);
		}
}, 60000);

setInterval(
	async () => {
		try {
			let feed = await parser.parseURL(config.sources.finance_maganates);

			let links = _links(feed.items)
			let matched = await NewsModel.newLinks(links)
			let uniqueItems = feed.items.filter(f => matched.indexOf(f.link) === -1).slice().reverse()
			if(uniqueItems.length > 0) {
				const io = global.io
				let result = await NewsModel.insertAll(uniqueItems)
				uniqueItems.map(item => {
					delete item.__v
					delete item.contentSnippet
					delete item['dc:creator']
					io.sockets.emit('message', item)
				})
			}
		} catch (e) {
			console.log('Error in Finance Maganates News Feed', e);
		}
}, 60000);

setInterval(
	async () => {
		try {
			let feed = await parser.parseURL(config.sources.coinsutra);

			let links = _links(feed.items)
			let matched = await NewsModel.newLinks(links)
			let uniqueItems = feed.items.filter(f => matched.indexOf(f.link) === -1).slice().reverse()
			if(uniqueItems.length > 0) {
				const io = global.io
				let result = await NewsModel.insertAll(uniqueItems)
				uniqueItems.map(item => {
					delete item.__v
					delete item.contentSnippet
					delete item['dc:creator']
					io.sockets.emit('message', item)
				})
			}
		} catch (e) {
			console.log('Error in Coin Sutra News Feed', e);
		}
}, 60000);

setInterval(
	async () => {
		try {
			let feed = await parser.parseURL(config.sources.coingape);

			let links = _links(feed.items)
			let matched = await NewsModel.newLinks(links)
			let uniqueItems = feed.items.filter(f => matched.indexOf(f.link) === -1).slice().reverse()
			if(uniqueItems.length > 0) {
				const io = global.io
				let result = await NewsModel.insertAll(uniqueItems)
				uniqueItems.map(item => {
					delete item.__v
					delete item.contentSnippet
					delete item['dc:creator']
					io.sockets.emit('message', item)
				})
			}
		} catch (e) {
			console.log('Error in Coin Gape News Feed', e);
		}
}, 60000);

setInterval(
	async () => {
		try {
			let feed = await parser.parseURL(config.sources.cryptopotato);

			let links = _links(feed.items)
			let matched = await NewsModel.newLinks(links)
			let uniqueItems = feed.items.filter(f => matched.indexOf(f.link) === -1).slice().reverse()
			if(uniqueItems.length > 0) {
				const io = global.io
				let result = await NewsModel.insertAll(uniqueItems)
				uniqueItems.map(item => {
					delete item.__v
					delete item.contentSnippet
					delete item['dc:creator']
					io.sockets.emit('message', item)
				})
			}
		} catch (e) {
			console.log('Error in Crypto Potato News Feed', e);
		}
}, 60000);

setInterval(
	async () => {
		try {
			let feed = await parser.parseURL(config.sources.bitcoin_exchange);
			
			let links = _links(feed.items)
			let matched = await NewsModel.newLinks(links)
			let uniqueItems = feed.items.filter(f => matched.indexOf(f.link) === -1).slice().reverse()
			if(uniqueItems.length > 0) {
				const io = global.io
				let result = await NewsModel.insertAll(uniqueItems)
				uniqueItems.map(item => {
					delete item.__v
					delete item.contentSnippet
					delete item['dc:creator']
					io.sockets.emit('message', item)
				})
			}
		} catch (e) {
			console.log('Error in Bitcoin Exchange News Feed', e);
		}
}, 60000);

setInterval(
	async () => {
		try {
			let feed = await parser.parseURL(config.sources.reuters);
			let cryptoFeeds = feed.items.filter(f => {
				if(reutersExp.test(f.title) || reutersExp.test(f.content)) {
					return true
				} else return false
			}).slice();
			let links = _links(cryptoFeeds)
			let matched = await NewsModel.newLinks(links)
			let uniqueItems = cryptoFeeds.filter(f => matched.indexOf(f.link) === -1).slice().reverse()
			if(uniqueItems.length > 0) {
				const io = global.io
				let result = await NewsModel.insertAll(uniqueItems)
				uniqueItems.map(item => {
					delete item.__v
					delete item.contentSnippet
					delete item['dc:creator']
					io.sockets.emit('message', item)
				})
			}
		} catch (e) {
			console.log('Error in Reuters News Feed', e);
		}
}, 60000);