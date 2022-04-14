var Gift = require('../models/gift'); 
 
// List of all Gifts 
exports.gift_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: Gift list'); 
}; 
 
// for a specific Gift. 
exports.gift_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: Gift detail: ' + req.params.id); 
}; 
 
// Handle Gift create on POST. 
exports.gift_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: Gift create POST'); 
}; 
 
// Handle Gift delete form on DELETE. 
exports.gift_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Gift delete DELETE ' + req.params.id); 
}; 
 
// Handle Gift update form on PUT. 
exports.gift_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: Gift update PUT' + req.params.id); 
}; 