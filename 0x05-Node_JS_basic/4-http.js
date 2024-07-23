const {createServer} = require('http');
const hostname = '127.0.0.1';
const PORT = 1245;

const app = createServer((req, res)=>{
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!')
});

app.listen(PORT, ()=>{
    console.log(`Server is listening on port ${PORT}`);
})

module.exports = app;