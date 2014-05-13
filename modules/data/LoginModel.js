define(['jquery',
	'backbone'],
	function($, Backbone){

		var LoginModel = Backbone.Model.extend({
			initialize: function(){

				//Fetch the authentication data for the login
				// (This is an anti pattern for secure login,
				// doing this for only demo purpose)
				this.deferred = this.fetch();
			},
			url: '/login'
		});

		return LoginModel;

});