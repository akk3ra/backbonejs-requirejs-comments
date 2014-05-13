define(['jquery',
	'underscore',
	'backbone',
	'text!modules/templates/comments-template.html',
	'modules/data/CommentCollection',
	'modules/data/CommentModel',
	'modules/views/NewCommentView',
	'modules/views/BaseView'],
	function($, _, Backbone, commentsTemplate, CommentCollection, CommentModel, NewCommentView, BaseView){

    var CommentsView = BaseView.extend({
        
        //When an object of this class is create, the initialize is called by the
        //constructor of this class. This is the place where we can initialize anything
        //such as data used by the view and other listeners (listenTo or stopListening)
        initialize: function(){
            
        	//Initialize the collection attribute to the CommentCollection

        	this.collection = new CommentCollection();
            //When a model is added to the current view's collection,
            //this event will be handled by a callback method renderSingleView
            this.listenTo(this.collection, 'add', this.renderSingleView);
        },
        modelView : NewCommentView,
        getCommentView: function(){
            return this.modelView;        
        },        
        template: commentsTemplate,
        afterRender: function(){
            var html = [];
            var _this = this;
            console.log("Inside the afterRender method of comments view..");
            
            _this.collection.deferred.done(function(){
            	console.log("Deferred collection resolved....");
	            _this.collection.each(function(item){
	                html.push(_this.singleViewRender(item));
	            });
	        	console.log("comments size-->>"+html.length);
	            _this.$(".comments-list").html(html);	            
            });

        },
        singleViewRender: function(model){
            var NewComment = this.getCommentView();
            var NewComment1 = NewComment.extend({
                model: model
            });           
            return (new NewComment1()).render();
        },
        //Once the below method is executed, the listenTo listeneer will
        //be invoked and renderSingleView method will be called.
        addNewComment: function(event){
            //This method adds a model to the view's collection.
            event.preventDefault();
            console.log("About to create a new comment..");
            var id = Math.random();
            var commentMsg = this.$("#content").val();
            var emailId = this.$("#emailId").val();
            
            this.collection.add(new CommentModel({
                id: id,
                commentMsg: commentMsg,
                emailId: emailId
            }));          
        },
        renderSingleView: function(model){
            //This method gets triggered when a model is added
            // to the view's collection.
            
            this.$(".comments-list").prepend(this.singleViewRender(model));
        },
        events: {
            'submit .comments-form':'addNewComment'
        }
    });

	return CommentsView;

});