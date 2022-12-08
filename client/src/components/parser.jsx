import RssParser from 'rss-parser';
import {useState, useEffect} from 'react';

const rssParser = new RssParser();

const [url, setURL] = useState("https://www.apple.com/newsroom/rss-feed.rss");

useEffect(() => {
        const parseRSS = async (url) => {
        let feed = rssParser.parseURL(url);
        console.log(feed.title);
        let items = feed.items.foreach(item => {
            console.log(item.title + ':' + item.link);
        });
        console.log(feed.parseURL);
        return(
            <>${items}</>
        )
    }; 
}, [url]);

export default parsedRSS;