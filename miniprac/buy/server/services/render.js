const axios = require('axios');


exports.homeRoutes = (req,res) => {
    //make a get request to api
    axios.get('http://localhost:8080/api/owners')
        .then(function(response){
            res.render('index', {owners: response.data});
        })
        .catch(err => {
            res.send(err);
        })
}


exports.contact_owner =(req,res) => {
    axios.get('http://localhost:8080/api/owners', {params:{id:req.query.id}})
        .then(function(ownerdata1){
            //console.log(ownerdata1.data)

            res.render("contact_owner", {owner: [ownerdata1.data]})
        })
        .catch(err => {
            res.send(err);
        })
        
}
