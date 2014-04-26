define(['jquery',
	'underscore',
	'backbone',
	'text!modules/templates/comments-template.html',
	'modules/data/CommentCollection',
	'modules/data/CommentModel',
	'modules/views/NewCommentView'],
	function($, _, Backbone, commentsTemplate, CommentCollection, CommentModel, NewCommentView){

	var CommentsView = Backbone.View.extend({

		initialize: function(){

			console.log("Inside the initialize method of the Comments View..");
			this.collection = new CommentCollection();
			this.collection.add(new CommentModel());
			this.collection.add(new CommentModel());
			this.collection.add(new CommentModel());
			this.collection.add(new CommentModel({
				commentMsg: "Hi this is a session on Backbone.js",
				emailId: "sandeep.aks@gmail.com"

			}));
		},
		el: '.comments-section',
		render: function(){

			console.log("Inside the Comments View..");
			var template = _.template(commentsTemplate, {comments: this.collection.models});
			this.$el.html(template);
			//this.$(".comments-list").append(template);
		},
		events: {

			'submit .comments-form': 'createNewComment'
		},
		createNewComment: function(event){
			event.preventDefault();
			console.log("Inside the createNewComment method..	");

			var newCommentView = new NewCommentView();
			var commentMsg = this.$("#content").val();
			var emailId = this.$("#emailId").val();
			console.log("Appending the new comment to the comments list...");
			this.$(".comments-list").prepend(newCommentView.render({commentMsg: commentMsg, emailId: emailId}));
		}
	});


	return CommentsView;

});