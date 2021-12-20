const express = require('express');
const app = express();
const { engine } = require("express-handlebars");

app.use(express.urlencoded({
    extended:true
}));
app.use(express.json());
app.engine("handlebars", engine({
    defaultLayout: 'main',
}));
app.set('view engine', 'handlebars');
app.use('/sources', express.static('sources'));
app.use('/images', express.static('images'))
// app.use('/sources',express.static('sources'));
app.get('/', (req, res)=>{
    res.render('home', {
        title:'Ana Sehife'
    })
})

app.get('/doktorantura', (req, res)=>{
    res.render('doktorantura', {
        title:'Doktorantura'
    })
})
app.get('/elektronika', (req, res)=>{
    res.render('elektronika',{
        title:'Elektronika'
    })
})
app.get('/robotika', (req, res)=>{
    res.render('robotika', {
        title:'Robotika'
    })
})

app.get('/proqramlasdirma', (req, res)=>{
    res.render('proqram', {
        title:'Proqramlasdirma'
    })
})
app.listen(8000, ()=>{
    console.log('Server 8000-ci portu dinleyir.')
})