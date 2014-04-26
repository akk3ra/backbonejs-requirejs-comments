define(['backbone',
 'text!modules/templates/new-comment-template.html'],
 function(Backbone, newCommentTemplate){

	var NewCommentView = Backbone.View.extend({

		tagName: 'li',
		render: function(commentObj){

			console.log("Inside the NewCommentView render method....");

			var template = _.template(newCommentTemplate, commentObj);
			return this.$el.html(template);
		}
	});

	return NewCommentView;
});