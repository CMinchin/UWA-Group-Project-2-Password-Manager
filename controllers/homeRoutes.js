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

  console.log(passwords);

  const passwordData = passwords.map(password => password.get({plain: true}));

  res.render('password/index', {
    logged_in: req.session.logged_in,
    passwords: passwordData,

  })
});
router.get('/password/new', withAuth, async (req, res) => {
  res.render('password/new', {
    logged_in: req.session.logged_in,

  })
});

router.get('/password/delete/:id', withAuth, async (req, res) => {

  // find and delete password by id
  const deleted = await Password.destroy({
    where: {
      id: req.params.id,
    }
  });

  res.redirect('/password');


})

router.post('/password/new', withAuth, async (req, res) => {


  // read the req data
  const payload = {
    name: req.body.name,
    username:req.body.username,
    password:req.body.password,
    website:req.body.website,
    user_id: req.session.user_id,
  }

  // save the password to db
  const created = await Password.create(payload);


  // redirect the user to password/index
  res.redirect('/password');


});

module.exports = router;
