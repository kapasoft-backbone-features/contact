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