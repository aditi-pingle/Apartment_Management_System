var Rentaldb = require('../model/model');

//create and save new owner
exports.create = (req,res) => {
    //validate request
    if(!req.body){
        res.status(400).send({message: "Content cannot be empty"});
        return;
    }

    //new owner
    const owner = new Rentaldb({
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone,
        city:req.body.city,
        duration:req.body.duration,
        rooms:req.body.rooms,
        rent:req.body.rent
    })

    //save owner in database
    owner
        .save(owner)
        .then(data => {
            res.redirect('/add-owner')
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "some error occured"
            });
        });
}

//retrieve and return all owners/ or a single owner
exports.find = (req,res) => {

    if(req.query.id){
        const id = req.query.id;
        Rentaldb.findById(id)
            .then(data => {
                if(!data){
                    res.status(404).send({message: `Owner with id ${id} was not found`})
                }
                else{
                    res.send(data)
                }
            })
            .catch(err => {
                res.status(500).send({message: `Error while retrieving owner with id ${id}`})
            })
    }
    else{
        Rentaldb.find()
        .then(owner => {
            res.send(owner)
        })
        .catch(err => {
            res.status(500).send({message: err.message || "Error occured while retrieving owner's information"})
        })
    }
}

//update owner
exports.update = (req,res) => {
    if(!req.body){
        return res
            .status(400)
            .send({message: "Data to be updated cannot be empty"})
    }

    const id = req.params.id;
    Rentaldb.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
        .then( data => {
            if(!data){
                res.status(404).send({message: `Cannot update owner with ${id} or owner was not found`})
            }
            else{
                res.send(data)
            }
    })
    .catch(err =>{
        res.status(500).send({message: "Error in updating information"})
    })
}

//delete owner
exports.delete = (req,res) => {
    const id = req.params.id;

    Rentaldb.findByIdAndDelete(id)
        .then(data => {
            if(!data){
                res.status(404).send({message: `Cannot delete owner with id ${id}`})
            }
            else{
                res.send({
                    message: "Owner was deleted"
                })
            }
        })
        .catch(err => {
            res.status(500).send({message: `Owner with id ${id} could not be deleted`});
        });
}