const path = require('path')

const serveStatic = require('serve-static');
const express = require('express');

const morgan = require('morgan')

const app = express();
const port = process.env.PORT || 9090;

app.use(express.static(path.join(__dirname, 'public')));

app.use(morgan('tiny'))

app.use((req, res, next) => {

   next(); 
});

app.get('/', function (req, res) {
    res.send('hello, world!')
})

app.use(serveStatic('public', {
    'index': ['index.html', 'default.htm']
}))

app.listen(port, () => {
    console.log(`server running @  http://127.0.0.1:${port}`);
});
