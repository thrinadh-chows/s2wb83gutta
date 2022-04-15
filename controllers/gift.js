var Gift = require('../models/gift'); 
 
// List of all Gifts 
exports.gift_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: Gift list'); 
}; 
 
// for a specific Gift. 
exports.gift_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: Gift detail: ' + req.params.id); 
}; 
 
// Handle Costume create on POST. 
exports.gift_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new Gift(); 
    document.gifttype = req.body.gifttype; 
    document.occasion = req.body.occasion; 
    document.cost = req.body.cost; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// Handle Gift delete form on DELETE. 
exports.gift_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Gift delete DELETE ' + req.params.id); 
}; 
 
// Handle Gift update form on PUT. 
exports.gift_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: Gift update PUT' + req.params.id); 
}; 

// List of all Gifts 
exports.gift_list = async function(req, res) { 
    try{ 
        theGift = await Gift.find(); 
        res.send(theGift); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

// VIEWS 
// Handle a show all view 
exports.gift_view_all_Page = async function(req, res) { 
    try{ 
        theGift = await Gift.find(); 
        res.render('gift', { title: 'Costume Search Results', results: theGift }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 