var keystone = require('keystone'),
	async = require('async');
	Enquiry = keystone.list('Enquiry');


exports = module.exports = function(req, res) {

	var email = req.body.email;
	var Enquiry = keystone.list('Enquiry');

	var newEnquiry = new Enquiry.model({
		email: email
	});

	newEnquiry.save(function(err){
		if(err){
			console.log(err);
			res.json('err');
		}
		res.json('success');
	});


};
