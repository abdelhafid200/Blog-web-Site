const express = require("express");
const Blog = require('../models/blog');

const router = express.Router();
router.get('/blogs', (req, res) => {
    // res.send('<p>Hello word</p>')
    Blog.find()
        .then((result) => {
                res.render('index', {title : 'All Blogs', blogs : result})

        })
        .catch((err) => {
            console.log('Erreur : ', err)   
        });

})

router.get("/blogs/create", (req,res)=> {
    res.render("create", {title : 'Create a new Blocs'})
})


router.post('/blogs', (req, res) => {
    const blog = new Blog(req.body)
    blog.save()
        .then((result) => {
            res.redirect('/blogs')
        })
        .catch(err => {
            console.error(err);
        })
})

router.get('/blogs/:id', (req, res) => {
    const id = req.params.id;
    Blog.findById(id)
        .then(result => {
            res.render('details', { blog : result, title : "page Blogs"});
        })
        .catch(err => {
            console.log("erreur : ", err);
        })
})

router.delete('/blogs/:id', (req, res) => {
    const id = req.params.id;

    Blog.findByIdAndDelete(id)
    .then(result => {
        res.json({redirect : '/blogs'})
    })
    .catch(err => {
        console.log(err)
    })
})