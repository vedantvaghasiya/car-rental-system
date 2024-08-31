const { log } = require('console');
var Userdb = require('../models/model');
var orderDb = require('../models/order');
var Register = require('../models/register');
var User = require('../../app');





// create and save new user
exports.create = (req,res)=>{
    // validate request
    if(!req.body){
        res.status(400).send({ message : "Content can not be emtpy!"});
        return;
    }

    // new user
    const user = new Userdb({
        name : req.body.name,
        price : req.body.price,
        seats : req.body.seats,
        description : req.body.description,
        fuelType: req.body.fuelType,
        image: '/upload/' + req.file.filename

        // status : req.body.status
    })

    // save user in the database
    user
        .save(user)
        .then(data => {
            //res.send(data)
            console.log(data);
            res.redirect('/showcaradmin');
        })
        .catch(err =>{
            res.status(500).send({
                message : err.message || "Some error occurred while creating a create operation"
            });
        });

}

// retrieve and return all users/ retrive and return a single user
exports.find = (req, res)=>{

    if(req.query.id){
        const id = req.query.id;

        Userdb.findById(id)
            .then(data =>{
                if(!data){
                    res.status(404).send({ message : "Not found user with id "+ id})
                }else{
                    res.send(data)
                }
            })
            .catch(err =>{
                res.status(500).send({ message: "Erro retrieving user with id " + id})
            })

    }else{
        Userdb.find()
            .then(user => {
                res.send(user)
            })
            .catch(err => {
                res.status(500).send({ message : err.message || "Error Occurred while retriving user information" })
            })
    }

    
}



exports.findProfile = (req, res)=>{

    if(req.query.id){
        const id = req.query.id;

        Register.findById(id)
            .then(data =>{
                if(!data){
                    res.status(404).send({ message : "Not found user with id "+ id})
                }else{
                    res.send(data)
                }
            })
            .catch(err =>{
                res.status(500).send({ message: "Erro retrieving user with id " + id})
            })

    }else{
        Register.find()
            .then(user => {
                res.send(user)
            })
            .catch(err => {
                res.status(500).send({ message : err.message || "Error Occurred while retriving user information" })
            })
    }

    
}

// Update a new idetified user by user id
exports.update = (req, res)=>{
    if(!req.body){
        return res
            .status(400)
            .send({ message : "Data to update can not be empty"})
    }
console.log(req.body);
let body = {...req.body,image:'/upload/' + req.file.filename}
    const id = req.params.id;
    // console.log(body);
    Userdb.findByIdAndUpdate(id, body, { useFindAndModify: false})
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Update user with ${id}. Maybe user not found!`})
            }else{
                // res.send(data)
                res.redirect('/showcaradmin')
            }
        })
        .catch(err =>{
            res.status(500).send({ message : "Error Update user information"})
        })
}

// Delete a user with specified user id in the request
exports.delete = (req, res)=>{
    const id = req.params.id;

    Userdb.findByIdAndDelete(id)
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Delete with id ${id}. Maybe id is wrong`})
            }else{
                res.send({
                    message : "User was deleted successfully!"
                })
            }
        })
        .catch(err =>{
            res.status(500).send({
                message: "Could not delete User with id=" + id
            });
        });
}

exports.deleteorder = (req, res)=>{
    const id = req.params.id;

    orderDb.findByIdAndDelete(id)
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Delete with id ${id}. Maybe id is wrong`})
            }else{
                res.send({
                    message : "User was deleted successfully!"
                })
            }
        })
        .catch(err =>{
            res.status(500).send({
                message: "Could not delete User with id=" + id
            });
        });
}

exports.deleteuser = (req, res)=>{
    const id = req.params.id;

    Register.findByIdAndDelete(id)
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Delete with id ${id}. Maybe id is wrong`})
            }else{
                res.send({
                    message : "User was deleted successfully!"
                })
            }
        })
        .catch(err =>{
            res.status(500).send({
                message: "Could not delete User with id=" + id
            });
        });
}
// exports.deletegoogleuser = (req, res)=>{
//     const id = req.params.id;

//     User.findByIdAndDelete(id)
//         .then(data => {
//             if(!data){
//                 res.status(404).send({ message : `Cannot Delete with id ${id}. Maybe id is wrong`})
//             }else{
//                 res.send({
//                     message : "User was deleted successfully!"
//                 })
//             }
//         })
//         .catch(err =>{
//             res.status(500).send({
//                 message: "Could not delete User with id=" + id
//             });
//         });
// }


exports.findCarById = (req,res) => {
  
    
    const requestedPostId = req.params.postId;

    Userdb.findOne({_id: requestedPostId}, function(err, user){
        if (user) {
            // console.log(user);
            res.render("car", {
                //   title: post.title,
                //   content: post.content
                name : user.name,
                price : user.price,
                seats : user.seats,
                description : user.description,
                fuelType: user.fuelType,
                image: user.image
                });
        }else{
            console.log(err);
        }   
      });   
}






exports.createorder = (req,res)=>{
    // validate request
    if(!req.body){
        res.status(400).send({ message : "Content can not be emtpy!"});
        return;
    }
    // new user
    const order = new orderDb({
        carName : req.body.carName,
        Pickup : req.body.Pickup,
        Dropoff : req.body.Dropoff,
        PickupDate : req.body.PickupDate,
        DropoffDate : req.body.DropoffDate,
        total : req.body.total

        // status : req.body.statuss
    })
    // save user in the database
    order
        .save(order)
        .then(data => { 
            //res.send(data)
            // console.log(data);
            res.status(200).redirect('/userlogin');
        })
        .catch(err =>{
            console.log(err)
            res.status(500).send({
                message : err.message || "Some error occurred while creating a create operation"
            });
        });
}




exports.createorderuser = (req,res)=>{
    // validate request
    if(!req.body){
        res.status(400).send({ message : "Content can not be emtpy!"});
        return;
    }

    // new user
    const order = new orderDb({
        carName : req.body.carName,
        total : req.body.total

        // status : req.body.status
    })
    // save user in the database
    order
        .save(order)
        .then(data => {
            //res.send(data)
            console.log(data);
            res.redirect('/userlogin');
        })
        .catch(err =>{
            console.log(err)
            res.status(500).send({
                message : err.message || "Some error occurred while creating a create operation"
            });
        });
}
