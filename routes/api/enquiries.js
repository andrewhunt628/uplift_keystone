var keystone = require('keystone')

exports = module.exports = function(req, res, next) {
	var email = req.body.email;
	var Enquiry = keystone.list('Enquiry');

	var newEnquiry = new Enquiry.model({
		email: email
	});

	newEnquiry.save(function(err){
		var jsonResp = {
			success: false,
			message: ''
		};

		if(err){
			jsonResp.message = 'Please fill out the form correctly';
			res.json(jsonResp);
		}
		else {
			jsonResp.success = true;
			jsonResp.message = 'Thank you for contacting us.';
			res.json(jsonResp);
		}
	});

};
