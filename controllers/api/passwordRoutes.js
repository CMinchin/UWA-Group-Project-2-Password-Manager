const router = require('express').Router();
const { Project } = require('../../models');
const withAuth = require('../../utils/auth');

// router.post('/', withAuth, async (req, res) => {
//   try {
//     const newProject = await Project.create({
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
//     const projectData = await Project.destroy({
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
    const passwordsData = await Project.findAll({
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
    const passwordsData = await Project.findAll({
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
    const passwordsData = await Project.create(req.body);

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

// update password in database
router.patch('/:id', withAuth, async (req, res) => {
  try {
    const passwordsData = await Project.update(req.body,{
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
    const passwordsData = await Project.destroy(req.body,{
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
