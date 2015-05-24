var feed = require("feed-read");

feed("http://www.vishnuks.com/feed.xml", function(err, articles) {
  if (err) throw err;
  // Each article has the following properties:
  // 
  //   * "title"     - The article title (String).
  //   * "author"    - The author's name (String).
  //   * "link"      - The original article link (String).
  //   * "content"   - The HTML content of the article (String).
  //   * "published" - The date that the article was published (Date).
  //   * "feed"      - {name, source, link}
  // 

  console.log(articles.length);
  for (var i = 0; i < articles.length; i++) {
  	console.log(articles[i].title);
  	console.log(articles[i].author);
  //	console.log(articles[i].content);
  	
  }
});