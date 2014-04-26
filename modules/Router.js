define(['jquery','underscore','backbone', 'modules/views/CommentsView'], function($, _, Backbone, CommentsView){

	var Router = Backbone.Router.extend({
		routes: {
			'':'home',
			'comments':'comments'
		}
	});

	initialize = function(){

		var router = new Router();
		console.log("Inside the initialize method..");
		router.on('route:home', function(){

			console.log("Inside the home router..");
			router.navigate('comments', {trigger: true});
		});

		router.on('route:comments', function(){

			console.log("Inside the comments route...");
			var commentsView = new CommentsView();
			commentsView.render();

		});
	}

	return {initialize: initialize};

});