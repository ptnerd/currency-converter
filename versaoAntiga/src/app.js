const express      = require('express'),
      bodyParser   = require('body-parser'),
      convertRoute = require('./routes/convert'),
      path         = require('path'),
      port         = process.env.PORT,
      app          = express();
// ------------------------------------------------ \\
// -- SERVE PUBLIC DIRECTORY, BOOTSTRAP & JQUERY -- \\
const publicDir = express.static(path.join(__dirname, '../public')),
      cssDir    = express.static(path.join(__dirname, '../node_modules/bootstrap/dist/css')),
      jsDir     = express.static(path.join(__dirname, '../node_modules/bootstrap/dist/js')),
      jqDir     = express.static(path.join(__dirname, '../node_modules/jquery/dist/'));
// ------------------------------------------------- \\

app.use(publicDir);
app.use(cssDir);
app.use(jsDir);
app.use(jqDir);

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());
app.use(convertRoute);

app.get('*', (req, res) => {
    res.send('Page Not Found!');
});

app.listen(port, () => {
    console.log('SERVER ON --- ' + port);
});