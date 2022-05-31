const router = require('express').Router();
const { Password } = require('../../models');
const withAuth = require('../../utils/auth');

// router.post('/', withAuth, async (req, res) => {
//   try {
//     const newProject = await Password.create({
//       ...req.body,
//       user_id: req.session.user_id,
//     });

//     res.status(200).json(newProject);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

// router.delete('/:id', withAuth, async (req, res) => {
//   try {
//     const projectData = await Password.destroy({
//       where: {
//         id: req.params.id,
//         user_id: req.session.user_id,
//       },
//     });

//     if (!projectData) {
//       res.status(404).json({ message: 'No project found with this id!' });
//       return;
//     }

//     res.status(200).json(projectData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// retrieve all passwords from acc that you are logged in as
router.get('', withAuth, async (req, res) => {
  try {
    const passwordsData = await Password.findAll({
      where: {
        user_id: req.session.user_id,
      },
    });

    const passwords = passwordsData.get({ plain: true });


    if (!passwords) {
      res.status(404).json([]);
      return;
    }

    res.status(200).json(passwords);
  } catch (err) {
    res.status(500).json(err);
  }
});

// retrieve specific password from acc you are logged in as 
router.get('/:id', withAuth, async (req, res) => {
  try {
    const passwordsData = await Password.findAll({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    const passwords = passwordsData.get({ plain: true });


    if (!passwords) {
      res.status(404).json([]);
      return;
    }

    res.status(200).json(passwords);
  } catch (err) {
    res.status(500).json(err);
  }
});

// add password to database
router.post('/', withAuth, async (req, res) => {
  try {
    const passwordsData = await Password.create(req.body);

    const passwords = passwordsData.get({ plain: true });


    if (!passwords) {
      res.status(404).json([]);
      return;
    }

    res.status(200).json(passwords);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

// update password in database
router.patch('/:id', withAuth, async (req, res) => {
  try {
    const passwordsData = await Password.update(req.body,{
      where: {
        id: req.params.id,
        user_id: req.session.user_id
      }
    });

    const passwords = passwordsData.get({ plain: true });


    if (!passwords) {
      res.status(404).json([]);
      return;
    }

    res.status(200).json(passwords);
  } catch (err) {
    res.status(500).json(err);
  }
});

// delete password from database
router.patch('/:id', withAuth, async (req, res) => {
  try {
    const passwordsData = await Password.destroy(req.body,{
      where: {
        id: req.params.id,
        user_id: req.session.user_id
      }
    });

    const passwords = passwordsData.get({ plain: true });


    if (!passwords) {
      res.status(404).json([]);
      return;
    }

    res.status(200).json(passwords);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
