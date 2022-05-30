const router = require('express').Router();

const { Password } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  
  if(req.session.logged_in){
    res.redirect('/password');
  }else{
    res.redirect('/login');
  }
});



router.get('/password', withAuth, async (req, res) =>{

  // get all the current logged in user password
  const passwords = await Password.findAll({
    where: {
      user_id: req.session.user_id,
    }
  })

  res.render('password/index', {
    logged_in: req.session.logged_in,
    passwords,

  })
})

module.exports = router;
