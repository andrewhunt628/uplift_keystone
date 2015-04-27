var keystone = require('keystone')
var	_ = require('underscore');

exports = module.exports = function(req, res, next) {

	var email = req.body.email;
	var Enquiry = keystone.list('Enquiry');

	var newEnquiry = new Enquiry.model({
		email: email
	});

	newEnquiry.save(function(err){
		if(err){
			_.each(err.errors, function(error) {
				req.flash('error', error.path + ' ' + error.type);
			});

			next(err);
		}
		else {
			console.log('success');
			req.flash('success', 'Thank you!  Your enquiry has been sent.');
			next();
		}
	});

};
