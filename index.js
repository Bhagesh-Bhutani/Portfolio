const express = require('express');
const app = express();

const path = require('path');
const env = require('./config/environment');
const port = env.port;

const expressLayouts = require('express-ejs-layouts');
const sassMiddleware = require('node-sass-middleware');

app.set('view engine', 'ejs');
app.set('views', './views');

if(env.name == 'development'){
    app.use(sassMiddleware({
        src: path.join(__dirname, env.asset_path, 'scss'),
        dest: path.join(__dirname, env.asset_path, 'css'),
        debug: false,
        outputStyle: 'extended',
        prefix: '/css'
    }));
}

app.use(express.static(env.asset_path));

app.use(express.urlencoded({extended: true}));

app.use(expressLayouts);

app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

app.use('/', require('./routes'));

app.listen(port, function(err){
    if(err){
        console.log(err);
        return;
    }

    console.log(`Server is running on port: ${port}`);
});