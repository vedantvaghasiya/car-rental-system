const express = require('express');
const route = express.Router()
const multer  = require('multer')
const path = require('path');
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, 'public/upload');
    },
    filename: function(req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
  });
  
  const upload = multer({ storage: storage });

const services = require('../services/render');
const controller = require('../controller/controller');

route.get('/', services.homeRoutes);
route.get('/add-user', services.add_user)
route.get('/update-user', services.update_user)
// API
route.post('/api/users', upload.single('avatar') ,controller.create);
route.get('/api/users', controller.find);
// route.get('/api/users/profile', controller.findProfile);
route.post('/api/users/:id',upload.single('image'), controller.update);
route.delete('/api/users/:id', controller.delete);
route.delete('/api/users/order/:id', controller.deleteorder);
route.delete('/api/users/users/:id', controller.deleteuser);


route.get('/car/:postId',controller.findCarById);
route.post('/order',controller.createorder);
// route.post('/order',controller.createorderuser);

module.exports = route