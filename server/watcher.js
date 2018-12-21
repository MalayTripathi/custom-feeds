let Parser = require('rss-parser');
let parser = new Parser();
let R = require('ramda');
const NewsModel = require('./news/models/news.model');
const _links = R.pluck('link');

setInterval(
	async () => {
		try {
			let feed = await parser.parseURL(config.coindesk);

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
			let feed = await parser.parseURL(config.cointelegraph);

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
			let feed = await parser.parseURL(config.bitcoin_com);

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
			let feed = await parser.parseURL(config.newsbtc);

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
			let feed = await parser.parseURL(config.walletinvestor);

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
			let feed = await parser.parseURL(config.reddit);

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
			let feed = await parser.parseURL(config.bitcoin_magazine);

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
			let feed = await parser.parseURL(config.ethereum_world_news);

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