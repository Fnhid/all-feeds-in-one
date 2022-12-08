const express = require('express');
const router = express.Router();

let Parser = require('rss-parser');
let parser = new Parser();

const url = "https://developer.apple.com/news/rss/news.rss";

const parseRSS = async (url) => {
    let feed = await parser.parseURL(url);
    return feed.items.map(item => {
        return {
            title: item.title,
            link: item.link,
            date: item.pubDate
        }
    });
};


router.get('/', async (req, res) => {
    await parseRSS(url)
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(404).json({
                status: 'error',
                message: 'error occured'
            })
        })
});

module.exports = router;