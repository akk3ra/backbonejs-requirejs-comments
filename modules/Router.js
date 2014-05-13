define(['jquery',
	'underscore',
	'backbone',
	'modules/views/CommentsView',
	'modules/views/LoginView'],
	function($, _, Backbone, CommentsView, LoginView){

	var Router = Backbone.Router.extend({
		routes: {
			'':'home',
			'login':'login',
			'comments':'comments'
		}
	});
	initialize = function(){

		var router = new Router();
		console.log("Inside the initialize method..");
		
	    router.on('route:home',function(){
	        console.log("Inside the home route..");
	        router.navigate('login', {trigger: true});
	    });
	    router.on('route:login', function(){
	        console.log("Inside the login route..");
	        
	        (new (LoginView.extend({
	            el: '.mainDiv'
	        }))()).render();
	        
	    });
	    router.on('route:comments', function(){
	        console.log("Inside the comments route..");
	        
	        (new (CommentsView.extend({
	            el: '.mainDiv'
	        }))()).render();
	        
	    });
	}
	return {initialize: initialize};
});