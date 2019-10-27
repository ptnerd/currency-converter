const express      = require('express'),
      bodyParser   = require('body-parser'),
      convertRoute = require('./routes/convert'),
      port         = process.env.PORT,
      app          = express();
// ------------------------------------------------ \\

app.use(express.static('public'));
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