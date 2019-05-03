const express = require('express'),
    nodemailer = require('nodemailer'),
    mongoose = require('mongoose');
   const router = express.Router({
       mergeParams: true
   });


router.get ('/', (req, res) => {
    res.render('landing');
});

router.get('/menus', (req, res) => {
    res.render('menus');
});

router.route('/deliver')
.get ((req, res)=> {
    res.render('deliver');
})
.post ((req, res) => {
    console.log (req.body); 
    req.flash('success', 'Your soup is on its way!!!')
    return res.redirect('/thankyou');
});

router.get ('/thankyou', (req, res)=> {
    router.render ('thankyou');
});

module.exports = router;