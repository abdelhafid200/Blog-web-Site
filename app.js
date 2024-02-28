const express = require('express');
const morgan = require('morgan')
const mongoose = require('mongoose');
const blogsRouter = require('./routes/blogsRoutes')

const app = express();


// Connexion à MongoDB
mongoose.connect('mongodb://localhost:27017/node-tuts', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => app.listen(3000))
.catch((err) => console.error('Erreur de connexion à la base de données :', err));


// register view engine
app.set('view engine', 'ejs');


app.use(express.static('public')); 
app.use(express.urlencoded({extended: true}))
app.use(morgan('dev'))

// app.get('/add-blogs', (req, res) => {
//     const blog = new Blog({
//         title : 'new blog 2',
//         snippet : 'about my new blog',
//         body : 'more about my new blog'
//     });

//     blog.save()
//         .then((result) => {
//             res.send(result)
//         })
//         .catch(err => {
//             console.log(err);
//         });
// })

// app.get('/all-blogs', (req, res) => {
//     Blog.find()
//         .then((result) => {
//             res.send(result);
//         })
//         .catch((err) => {
//             console.log('Erreur : ', err)
//         });
// })

// app.get('/single-blog', (req, res) => {
//     Blog.findById('65d1c3abe72fb0f5d261cf15')
//         .then((result) => {
//             res.send(result)
//         })
//         .catch((err) => {
//             console.log('Erreur : ', err)   
//         });
// })
app.use(blogsRouter);

app.get('/', (req, res) => {
    res.redirect('/blogs')
})
 

// blogs Routers


app.get('/about', (req, res) => {
    // res.send('<p>Hello word</p>')
    res.render("about", {title : 'About'});
})

app.get("/about-us", (req, res) => {
    res.redirect('/about');
})



app.use((req, res) => {
    res.status(404).render('404', {title : '404'});
})