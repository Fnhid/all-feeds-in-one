# all-feeds-in-one
* 🚧 디자인은 아직 개발중입니다! 🚧

### Features
* can get RSS Feeds from multiple sites based on local setting
* 다양한 사이트에서 RSS 피드를 불러와 한 곳에 표시하는 서비스입니다.
* can filter by title, sitenme 
* 피드의 제목, 사이트명 등으로 필터가 가능합니다.

### How to Install for Test | 테스트를 위한 설치 방법
```
cd ./client 
yarn  
cd ../server
yarn 
```
### How to Test | 테스트 방법
```
yarn run server
```
* If you want to config sites, please edit server/rss.json
* 사이트를 설정하고 싶다면, server/rss.json을 수정하세요. 아래와 같이 추가할 수 있습니다.
```json
{"id": [number], "name": [name], "url": [url]}
```

---
### To-Do
* Design
* More Filters
* 
