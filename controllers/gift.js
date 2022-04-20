var Gift = require('../models/gift'); 
 
// List of all Gifts 
exports.gift_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: Gift list'); 
}; 
 
// for a specific Gift. 
// for a specific Costume. 
exports.gift_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await Gift.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
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
 
// Handle Costume delete on DELETE. 
exports.gift_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await Gift.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
}; 
 
exports.gift_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await Gift.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.gifttype)  
               toUpdate.gifttype = req.body.gifttype; 
        if(req.body.occasion) toUpdate.occasion = req.body.occasion; 
        if(req.body.cost) toUpdate.cost = req.body.cost; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
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
        res.render('gift', { title: 'Gifts Search Results', results: theGift }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
};

 
 // Handle a show one view with id specified by query 
 exports.gift_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await Gift.findById( req.query.id) 
        res.render('giftdetail',  {title: 'Gift Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

exports.gift_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('giftcreate', { title: 'gift Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 

// Handle building the view for updating a costume. 
// query provides the id 
exports.gift_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await Gift.findById(req.query.id) 
        res.render('giftupdate', { title: 'Gift Update', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
exports.gift_delete_Page = async function(req, res) { 
    console.log("Delete view for id "  + req.query.id) 
    try{ 
        result = await Gift.findById(req.query.id) 
        res.render('giftdelete', { title: 'gift Delete', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
};