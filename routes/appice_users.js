const User = require('../models/appice_users');
const express = require('express');
const router = express.Router();


router.post("/",(req,res)=>{
	const user = new User ({
		name: req.body.name,
		email: req.body.email
	});
	user.save().then(result=>{
		res.json(result);
	}).catch(err=>{
		res.json(err);
	})
})
 module.exports = router;