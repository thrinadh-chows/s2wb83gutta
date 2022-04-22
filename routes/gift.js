var express = require('express');
const gift_controlers= require('../controllers/gift'); 
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('gift', { title: 'Search Results Gift' });
// });
router.get('/', gift_controlers.gift_view_all_Page ); 
router.get('/gift/:id', gift_controlers.gift_detail);

// GET detail gift page.
router.get('/detail', gift_controlers.gift_view_one_Page); 
/* GET create gift page */ 
router.get('/create', gift_controlers.gift_create_Page);
/* GET create update page */ 
router.get('/update', gift_controlers.gift_update_Page);
/* GET delete gift page */ 
router.get('/delete', gift_controlers.gift_delete_Page);

module.exports = router;
