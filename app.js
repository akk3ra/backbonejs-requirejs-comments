requirejs.config({

	paths: {
		'text': 'http://cdnjs.cloudflare.com/ajax/libs/require-text/2.0.10/text',
		'jquery': 'http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.0/jquery.min',
		'underscore': 'http://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.6.0/underscore-min',
		'backbone': 'http://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.1.2/backbone-min'
	},
	baseUrl: '.',

	shim: {

		'underscore': {

			deps: [],
			exports: '_'
		},
		'backbone': {
			deps: ['jquery','underscore'],
			exports: 'Backbone'
		}
	}
});


require(['jquery','modules/Router','backbone'], function($, Router, Backbone){

	$(document).ready(function(){

		Router.initialize();		
		Backbone.history.start();
	});
});