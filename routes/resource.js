var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var gift_controller = require('../controllers/gift'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/resource', api_controller.api); 
 
/// COSTUME ROUTES /// 
 
// POST request for creating a Costume.  
router.post('/resource/gift', gift_controller.gift_create_post); 
 
// DELETE request to delete Costume. 
router.delete('/resource/gift/:id', gift_controller.gift_delete); 
 
// PUT request to update Costume. 
router.put('/resource/gift/:id', gift_controller.gift_update_put); 
 
// GET request for one Costume. 
router.get('/resource/gift/:id', gift_controller.gift_detail); 
 
// GET request for list of all Costume items. 
router.get('/resource/gift', gift_controller.gift_list); 
 
module.exports = router; 