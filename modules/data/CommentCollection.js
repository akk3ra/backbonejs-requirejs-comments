define(['backbone',
	'modules/data/CommentModel'],
	function(Backbone, CommentModel){

	var CommentCollection = Backbone.Collection.extend({

		initialize: function(){

			//Initialize the REST GET call and assign it
			//to the deferred object. The deferred object is an unresolved Promise.
			this.deferred = this.fetch();
		},
		url: '/comments',
		model: CommentModel
	});
	return CommentCollection;
});