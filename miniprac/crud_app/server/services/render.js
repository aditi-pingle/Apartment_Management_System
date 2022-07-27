const axios = require('axios');


exports.homeRoutes = (req,res) => {
    //make a get request to api
    axios.get('http://localhost:5000/api/owners')
        .then(function(response){
            res.render('index', {owners: response.data});
        })
        .catch(err => {
            res.send(err);
        })
}

exports.add_owner =(req,res) => {
    res.render('add_owner');
}

exports.update_owner =(req,res) => {
    axios.get('http://localhost:5000/api/owners', {params:{id:req.query.id}})
        .then(function(ownerdata){
            res.render("update_owner", {owner: ownerdata.data})
        })
        .catch(err =>{
            res.send(err);
        })
}
