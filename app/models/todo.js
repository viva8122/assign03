var mongoose = require('mongoose');

var TodoSchema =  new mongoose.Schema({
   text : {type : String, default: ''},
   done : {type : Boolean, default: true}
});

module.exports = mongoose.model('Todo', TodoSchema);
