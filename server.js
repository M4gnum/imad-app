var express = require('express');
var morgan = require('morgan');
var path = require('path');
var app = express();
app.use(morgan('combined'));
var Pool = require('pg').Pool;
var crypto = require('crypto');

var config = {
    user: 'sourabhsupnekar20',
    database: 'sourabhsupnekar20',
    host: 'db.imad.hasura-app.io',
    port: '5432',
    password: process.env.DB_PASSWORD
};

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

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
                ${date.toDateString()}
              </div>
                ${content}
            </div>
          </body>
        </html>
        `;
        return htmlTemplate;
}

var pool = new Pool(config);

app.get('/test-db', function(req, res){
    //make a select request
    pool.query('SELECT * FROM test', function(err, result){
        if(err)
        {
            res.status(500).send(err.toString());
        }
        else
        {
            res.send(JSON.stringify(result.rows));
        }
    })
    //give a response
});

var counter = 0;
app.get('/counter', function(req, res){
    counter++;
    res.send(counter.toString());
});

var names = [];
app.get('/submit-name/', function(req, res){
    var name = req.query.name; //got the name
    
    names.push(name);
    res.send(JSON.stringify(names));
});

function hash(input, salt)
{
    var hashed = crypto.pbkdf2Sync(input, salt, 10000, 512, 'sha512');
    return(hashed.toString('hex'));
}

app.get('/hash/:input', function(req, res){
    var hashedString - hash(req.params.input, 'random-string');
    res.send(hashedString);
});

app.get('/articles/:articleName', function(req, res){
    pool.query("SELECT * FROM article where title = $1", [req.params.articleName], function(err, result){
        if(err)
        {
            res.status(500).send(err.toString());
        }
        else
        {
            if(result.rows.length === 0)
            {
                res.status(404).send("Article Not Found");
            }
            else
            {
                var articleData = result.rows[0];
                res.send(createTemplate(articleData));
            }
        }
    });
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
