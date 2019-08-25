const express = require('express');
const hbs = require('hbs');

let app = express();



hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', hbs);

app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getFullYear', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('screamIt',(text)=>{
    return text.toUpperCase()
})

app.use((req,res,next)=>{
    res.render('maintenance.hbs')
})


app.get('/', (req, res) => {
    res.render('home.hbs', {
        welcomeMessage: 'Welcome to my test',
    })
});


app.get('/about', (req, res) => {
    res.render('about.hbs')
});

app.get('/help',(req,res)=>{
    res.render('help.html')
});


app.get('/bad', (req, res) => {
    res.send({
        status: 'bad',
        errorMessage: 'Here is the error message'
    });
});
app.listen(3000, () => {
    console.log('I am using port 3000 to serving up My testing website');
});


/* Git
    git.scm.com
    in terminal in the project folder: git init
    

 */