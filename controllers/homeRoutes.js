const router = require('express').Router();

const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  
});




router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/password');
    return;
  }

  res.render('login');
});


router.get('/password', (req, res) =>{


  res.render('password/index', {
    
  })
})

module.exports = router;
