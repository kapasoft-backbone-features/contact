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
