const http = require('http');
const countStudents = require('./3-read_file_async');
const url = require('url');

const hostname = '127.0.0.1';
const PORT = 1245;

const app = http.createServer((req, res) => {
  const reqUrl = url.parse(req.url, true);
  const db = process.argv[2];

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (reqUrl.pathname === '/') {
    res.end('Hello Holberton School!');
  } else if (reqUrl.pathname === '/students') {
    if (!db) {
      res.end('This is the list of our students\nCannot load the database');
      return;
    }

    countStudents(db)
      .then((data) => {
        res.end(`This is the list of our students\n${data}`);
      })
      .catch((error) => {
        res.end(`This is the list of our students\n${error.message}`);
      });
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

app.listen(PORT, hostname, () => {
  console.log(`Server is listening on port ${PORT}`);
});

module.exports = app;
