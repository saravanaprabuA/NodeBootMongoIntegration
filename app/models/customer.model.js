var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var CustomerSchema = new Schema({
    custid: Number,
    firstname: String,
    lastname: String
});
module.exports = mongoose.model('Customer', CustomerSchema);