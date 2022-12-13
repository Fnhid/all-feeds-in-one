const express = require('express');
const router = express.Router();
{/* <script src="./rss.json" type="text/javascript"></script> */}
let Parser = require('rss-parser');
let parser = new Parser();
const sites = require('./rss.json');


const parseRSS = async (sites) => {

    const parseContent = async (site) => {
        
        let feed = await parser.parseURL(site.url);
        return (feed.items.map(item => {
            return {
                title: item.title,
                link: item.link, 
                date: item.pubDate,
                siteName: site.name
            }
        })
        )
    }

    
    let contents = await Promise.all(sites.map(function(site){
        return parseContent(site);
    }));
    const contentsOne = [].concat(...contents);
    
    return ({
        "sites": sites,
        "contents": contentsOne
    });
} 


router.get('/', async (req, res) => {
    await parseRSS(sites.sites)
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