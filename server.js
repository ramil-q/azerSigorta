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


app.listen(8000, ()=>{
    console.log('Server 8000-ci portu dinleyir.')
})