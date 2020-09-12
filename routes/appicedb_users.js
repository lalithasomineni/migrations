const User = require("../models/appice_users");
const user = require("../models/appicedb_users");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
    try {
        var User = await User.find() 
        console.log(User)
        User.foreach( async (data) => {
            var newuser = new user({
                name: data.name,
                email: data.email
            })
            var saveData = await newuser.save()
            res.send({ userSaved: savedData  , message : "userSaved"})
        })
    }
    catch(error) {
        res.send(error);
    }
})


	/*User.find().then(result=>{
	const count = result.length;
	for(var i = 0;i < count;i ++){
	const newuser = new user({
		name : result[i].name,
		email: result[i].email
	});
	newuser.save().then(result=>{
		res.send(result);
	}).catch(err=>{
		res.send(err);
	})
}
	})
	.catch(err=>{res.send(err)});*/



router.get("/",(req,res)=>{
	user.find().then(result=>{
		res.send(result);
	}).catch(err=>{
		res.json(err);
	})
})
module.exports = router;