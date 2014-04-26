define(['backbone'], function(Backbone){


	var CommentModel = Backbone.Model.extend({
		
		defaults: {
			commentMsg: "Hi this is Sandeep Akkeera..",
			emailId: "someone@email.com"
		}
	});

	return CommentModel;
});