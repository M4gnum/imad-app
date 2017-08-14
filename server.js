var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var articles = {
    'article-one': {
        title: 'Article 1 | Start',
        heading: 'Article 1',
        date: '14 Aug 2017',
        content: ` <p>This is article 1.
    This is actually a js o/p not just a text msg.
    </p>`
    },
    'article-two': {title: 'Article 2 | Testing',
        heading: 'Article 2',
        date: '14 Aug 2017',
        content: ` <p>This is article 2.
    I guess this works for now.
    </p>`},
    'article-three': {title: 'Article 3 | Ending',
        heading: 'Article 3',
        date: '14 Aug 2017',
        content: ` <p>This is article 3.
    This is the last one.This is enough.
    </p>`}
};

function createTemplate(data)
{
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
    var htmlTemplate = `
        <!DOCTYPE html>
          <head>
              <title>
                  ${title}
              </title>
              <meta name="viewport" content = "width-device-width, initial scale = 1 " />
              <link href="/ui/style.css" rel="stylesheet" />
          </head>
          <body>
              <div class="contains">
              <div>
                  <a href="/">Home</a>
              </div><br>
              <div>
                ${heading}
              </div>
              <div>
                ${date}
              </div>
                ${content}
            </div>
          </body>
        </html>
        `;
        return htmlTemplate;
}

var counter = 0;
app.get('/counter', function(req, res){
    counter++;
    res.send(counter.toString());
});

app.get('/:articleName', function(req, res){
    var articleName = req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
