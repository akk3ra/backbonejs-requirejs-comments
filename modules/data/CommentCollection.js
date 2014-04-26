define(['backbone', 'modules/data/CommentModel'], function(Backbone, CommentModel){

	var CommentCollection = Backbone.Collection.extend({

		model: CommentModel
	});
	return CommentCollection;
});