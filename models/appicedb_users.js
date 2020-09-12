const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const myDB = mongoose.connection.useDb('appicedb');
const userSchema = new Schema ({
	name: {type: String},
	email: {type: String}
})
var Users    = myDB.model('Users',userSchema);
module.exports = Users;