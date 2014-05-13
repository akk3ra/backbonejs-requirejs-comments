define(['backbone',
 'text!modules/templates/new-comment-template.html',
 'modules/views/BaseView'],
 function(Backbone, newCommentTemplate, BaseView){

    //The below view is for creating the single comment
    var NewCommentView = BaseView.extend({
        tagName: 'li',
        template: newCommentTemplate,
        render: function(){
        	console.log("Returning a single template....");
            return this.$el.html(this.templateCache);
        }
    });
	return NewCommentView;
});