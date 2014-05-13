define(['jquery',
    'underscore',
    'backbone'],
    function($, _, Backbone){

    var BaseView = Backbone.View.extend({
        
        constructor: function(){
            //If we are overriding the constructor then we need to make
            //sure that the parent class's constructor is called too
            //to allow Backbone to do the optimization and other
            //event handling.
            Backbone.View.prototype.constructor.call(this);
            this.buildTemplateCache();
        },
        buildTemplateCache: function(){
            //Pull the Parent object's templateCache attribute and 
            //check if it is present, if yes then return otherwise
            //create an attribute with the same name and assign the
            //compiled template to it.
            var proto = Object.getPrototypeOf(this);
            if(proto.templateCache){
                return ;
            }
            else{
               console.log("Fetching the new template using jQuery..");
                this.templateCache = _.template(this.template, this.getViewData());
            }
        },
        //This method makes sure the data (either a collection or a model)
        //is available to the base view's
        getViewData: function(){
            var data;
            if(this.model){data = this.model.toJSON();}
            if(this.collection){data = this.collection.models;}
            
            return data;
        },
        render: function(){
            console.log("Inside the BaseView render method..");
            this.$el.html(this.templateCache);
            if(this.afterRender){
                this.afterRender();
            }
        }
    });

    return BaseView;

});