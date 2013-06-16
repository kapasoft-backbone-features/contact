var ContactItem = Backbone.Model.extend({
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
            message: this.$el.find('.contact-form input[name="message"]').val(),
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
