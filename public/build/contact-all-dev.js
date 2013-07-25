(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['contact'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"contact-form\" novalidate=\"\">\n    <div class=\"controls controls-row\">\n        <div class=\"control-group\">\n            <input class=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.name),stack1 == null || stack1 === false ? stack1 : stack1.elemClass)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" name=\"name\" placeholder=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.name),stack1 == null || stack1 === false ? stack1 : stack1.elemText)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" type=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.name),stack1 == null || stack1 === false ? stack1 : stack1.elemType)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n        </div>\n        <div class=\"control-group\">\n            <input class=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.email),stack1 == null || stack1 === false ? stack1 : stack1.elemClass)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" name=\"email\" placeholder=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.email),stack1 == null || stack1 === false ? stack1 : stack1.elemText)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" type=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.email),stack1 == null || stack1 === false ? stack1 : stack1.elemType)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n        </div>\n    </div>\n    <div class=\"controls controls-row\">\n        <div class=\"control-group\">\n            <input class=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.subject),stack1 == null || stack1 === false ? stack1 : stack1.elemClass)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" name=\"subject\" placeholder=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.subject),stack1 == null || stack1 === false ? stack1 : stack1.elemText)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" type=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.subject),stack1 == null || stack1 === false ? stack1 : stack1.elemType)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\n        </div>\n    </div>\n    <div class=\"controls controls-row\">\n        <div class=\"control-group \">\n            <textarea class=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.message),stack1 == null || stack1 === false ? stack1 : stack1.elemClass)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" name=\"message\" placeholder=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.message),stack1 == null || stack1 === false ? stack1 : stack1.elemText)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" rows=\"5\"></textarea>\n        </div>\n    </div>\n    <div class=\"controls controls-row\">\n        <div class=\"control-group\">\n            <button class=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.button),stack1 == null || stack1 === false ? stack1 : stack1.elemClass)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" id=\"contactSubmit_B\" name=\"submitButton\" type=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.button),stack1 == null || stack1 === false ? stack1 : stack1.elemType)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.button),stack1 == null || stack1 === false ? stack1 : stack1.elemText)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</button>\n        </div>\n    </div>\n</div>";
  return buffer;
  });
})();
var CONTACT = CONTACT || {};(function($,CONTACT){var ContactItem = Backbone.Model.extend({
    defaults: {
        name: '',
        email: '',
        website: '',
        subject: '',
        message: ''
    }
});
var ContactView = Backbone.View.extend({

    render: function(config){

        this.$el.html(Handlebars.templates.contact(config));

        this.delegateEvents({//ensures DOM elements always get events they suppose to
            'click .contact-form #contactSubmit_B' : 'save'
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
            website: window.location.hostname,
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
        $('#app-contact').html(this.contentView.render(this.clientConfig).el);
    },

    post_contact_form: function () {
        $('#app-contact').html('<div class="alert alert-success">' + this.clientConfig.response + '</div>');
    }
});

var app = new ContactAppRouter();
var CONTACT = CONTACT || {};
CONTACT.name = CONTACT.name || {};
CONTACT.button = CONTACT.button || {};
CONTACT.subject = CONTACT.subject || {};
CONTACT.email = CONTACT.email || {};
CONTACT.message = CONTACT.message || {};

if(CONTACT.response == undefined){
    CONTACT.response = "Thank You for subscribing to our Newsletter";
}

if(CONTACT.button.elemText == undefined){
    CONTACT.button.elemText = "Send Message";
}

if(CONTACT.button.elemClass == undefined){
    CONTACT.button.elemClass = "btn btn-primary";
}

if(CONTACT.button.elemType == undefined){
    CONTACT.button.elemType = "submit";
}

if(CONTACT.name.elemText == undefined){
    CONTACT.name.elemText = "your name";
}

if(CONTACT.name.elemClass == undefined){
    CONTACT.name.elemClass = "required email placeholder";
}

if(CONTACT.name.elemType == undefined){
    CONTACT.name.elemType = "text";
}


if(CONTACT.subject.elemText == undefined){
    CONTACT.subject.elemText = "subject";
}

if(CONTACT.subject.elemClass == undefined){
    CONTACT.subject.elemClass = "";
}

if(CONTACT.subject.elemType == undefined){
    CONTACT.subject.elemType = "text";
}

if(CONTACT.email.elemText == undefined){
    CONTACT.email.elemText = "your email";
}

if(CONTACT.email.elemClass == undefined){
    CONTACT.email.elemClass = "required email valid";
}

if(CONTACT.email.elemType == undefined){
    CONTACT.email.elemType = "email";
}

if(CONTACT.message.elemText == undefined){
    CONTACT.message.elemText = "please, leave your message here...";
}

if(CONTACT.message.elemClass == undefined){
    CONTACT.message.elemClass = "required placeholder valid";
}

app.clientConfig = CONTACT;

$(function(){
    Backbone.history.start();
});
})(jQuery,CONTACT); 
