define(['jquery',
	'underscore',
	'backbone',
	'modules/data/LoginModel',
    'modules/views/BaseView',
    'text!modules/templates/login-template.html'], function($, _, Backbone, LoginModel, BaseView, loginTemplate){

	var LoginView = BaseView.extend({
		initialize: function(){

			//Initialize the model to the LoginModel backbone model.
			this.model = new LoginModel();
		},
        template: loginTemplate,
        events: {
            'submit .login-form':'loginAction'
        },
        loginAction: function(event){
            event.preventDefault();
            console.log("Inside the loginAction method..");
            var _this = this;

            //The deferred object is configured/set in the LoginModel class.
            //After the deferred object is resolved/rejected, the done() method
            //will be called. This happens asynchronously.
            this.model.deferred.done(function(model){
	            if(_this.$("#username").val()===model.username &&
	               _this.$("#password").val()===model.password){
	                console.log("LOGIN SUCCESSFUl!!!!");
	                Backbone.history.navigate("comments", {trigger: true});
	            }            	
            });
        }
    });	

    return LoginView;

});