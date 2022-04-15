var express = require('express');
const gift_controlers= require('../controllers/gift'); 
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('gift', { title: 'Search Results Gift' });
});
router.get('/', gift_controlers.gift_view_all_Page ); 
module.exports = router;
