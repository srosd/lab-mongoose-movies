const express = require('express');
const router  = express.Router();
const Celebrity = require('../models/Celebrity.model');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/celebrities', (req, res, next)=>{
  Celebrity.find()
    .then((celebrities)=>{
      res.render('celebrities/index', {celebrities})
    })
    .catch((err)=>{
      res.send(err);
      console.log(err);
      next();
    });
});

router.get('/celebrities/:id', (req, res, next)=>{
  const id = req.params.id;
  Celebrity.findById(id)
    .then((celebrity)=>{
      res.render('celebrities/show', celebrity);
    })
    .catch((err)=>{
      res.send(err);
      console.log(err);
      next();
    });
});

router.get('/new', (req, res, next)=>{
  res.render('new');
});

router.post('/new', (req, res, next)=>{
  const newCelebrity = {...req.body};

  Celebrity.create(newCelebrity)
    .then((createdCelebrity)=>{
        console.log(createdCelebrity);
        res.redirect('/celebrities');
    })
    .catch((err)=>{
      console.log(err);
      res.redirect('/new');
    });
});

router.post('celebrities/delete/:id', (req, res, next)=>{
  const id = req.params.id;
  Celebrity.findByIdAndDelete(id)
    .then(()=>{
      console.log('Celebrity deleted.');
      res.redirect('/celebrities');
    })
    .catch((err)=>{
      res.send(err);
      next();
    });
});

module.exports = router;
