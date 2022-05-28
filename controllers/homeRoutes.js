const router = require('express').Router();

const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  
  if(req.session.logged_in){
    res.redirect('/password');
  }else{
    res.redirect('/login');
  }
});

router.get('/signup', (req, res) => {

  res.render('signup');

})



router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/password');
    return;
  }

  res.render('login');
});


router.get('/password',  (req, res) =>{


  res.render('password/index', {
    logged_in: false
  })
})

module.exports = router;
