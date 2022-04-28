var express = require('express');
const gift_controlers= require('../controllers/gift'); 
var router = express.Router();

const secured = (req, res, next) => { 
  if (req.user){ 
    return next(); 
  } 
  req.session.returnTo = req.originalUrl; 
  res.redirect("/login"); 
} 

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('gift', { title: 'Search Results Gift' });
// });
router.get('/', gift_controlers.gift_view_all_Page ); 
router.get('/gift/:id', gift_controlers.gift_detail);

// GET detail gift page.
router.get('/detail',secured, gift_controlers.gift_view_one_Page); 
/* GET create gift page */ 
router.get('/create',secured, gift_controlers.gift_create_Page);
/* GET create update page */ 
router.get('/update',secured, gift_controlers.gift_update_Page);
/* GET delete gift page */ 
router.get('/delete',secured, gift_controlers.gift_delete_Page);

module.exports = router;
