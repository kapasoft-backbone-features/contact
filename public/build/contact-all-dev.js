(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['contact'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"contact-form\" novalidate=\"\">\n    <div class=\"controls controls-row\">\n        <div class=\"control-group span6\">\n            <input class=\"span12\" name=\"name\" placeholder=\"your name\" type=\"text\">\n        </div>\n        <div class=\"control-group span6\">\n            <input class=\"span12\" name=\"email\" placeholder=\"your email\" type=\"email\">\n        </div>\n    </div>\n    <div class=\"controls controls-row\">\n        <div class=\"control-group span12\">\n            <input class=\"span12\" name=\"subject\" placeholder=\"subject\" type=\"text\">\n        </div>\n    </div>\n    <div class=\"controls controls-row\">\n        <div class=\"control-group span12\">\n            <textarea class=\"span12\" name=\"message\" placeholder=\"please, leave your message here... \" rows=\"5\"></textarea>\n        </div>\n    </div>\n    <div class=\"controls controls-row\">\n        <div class=\"control-group span12\">\n            <button class=\"btn btn-primary\" name=\"submitButton\" type=\"submit\">Send Message</button>\n        </div>\n    </div>\n</div>";
  });
})();
(function($){var ContactItem = Backbone.Model.extend({
    defaults: {
        name: '',
        email: '',
        subject: '',
        message: ''
    }
});
var ContactView = Backbone.View.extend({

    render: function(){
        this.$el.html(Handlebars.templates.contact());

        this.delegateEvents({//ensures DOM elements always get events they suppose to
            'click .contact-form .btn-primary': 'save'
        });
        return this;
    },

    save: function () {
        this.setModelData();//extract data and set in the model
        app.navigate('contact-received',{trigger: true});
        socket.send(JSON.stringify(app.contentView.model.attributes));
    },

    setModelData: function  () {
        this.model.set({
            name: this.$el.find('.contact-form input[name="name"]').val(),
            email: this.$el.find('.contact-form input[name="email"]').val(),
            subject: this.$el.find('.contact-form input[name="subject"]').val(),
            id:null,//so that reusing this function, it gets its own unique id before going to server
            message: this.$el.find('.contact-form textarea[name="message"]').val(),
            type:'postContactUs'
        });
    }
});
var ContactAppRouter = Backbone.Router.extend({
    routes: {
        "": "list_contact_form",
        "contact-received": "post_contact_form"
    },

    initialize: function (){
        this.contentView = new ContactView({model: new ContactItem()});
    },

    list_contact_form: function () {
        $('#app-contact').html(this.contentView.render().el);
    },

    post_contact_form: function () {
        $('#app-contact').html('<div class="alert alert-success">Thank You. Your message was sent</div>');
    }
});

var app = new ContactAppRouter();

$(function(){
    Backbone.history.start();
});
})(jQuery); 
