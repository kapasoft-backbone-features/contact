(function(){var d=Handlebars.template;(Handlebars.templates=Handlebars.templates||{}).contact=d(function(b,c,d,e,g){this.compilerInfo=[4,"\x3e\x3d 1.0.0"];this.merge(d,b.helpers);var a;b=this.escapeExpression;return c=""+('\x3cdiv class\x3d"contact-form" novalidate\x3d""\x3e\n    \x3cdiv class\x3d"controls controls-row"\x3e\n        \x3cdiv class\x3d"control-group"\x3e\n            \x3cinput class\x3d"'+b((a=(a=c.name,null==a||!1===a?a:a.elemClass),"function"===typeof a?a.apply(c):a))+'" name\x3d"name" placeholder\x3d"'+
b((a=(a=c.name,null==a||!1===a?a:a.elemText),"function"===typeof a?a.apply(c):a))+'" type\x3d"'+b((a=(a=c.name,null==a||!1===a?a:a.elemType),"function"===typeof a?a.apply(c):a))+'"\x3e\n        \x3c/div\x3e\n        \x3cdiv class\x3d"control-group"\x3e\n            \x3cinput class\x3d"'+b((a=(a=c.email,null==a||!1===a?a:a.elemClass),"function"===typeof a?a.apply(c):a))+'" name\x3d"email" placeholder\x3d"'+b((a=(a=c.email,null==a||!1===a?a:a.elemText),"function"===typeof a?a.apply(c):a))+'" type\x3d"'+
b((a=(a=c.email,null==a||!1===a?a:a.elemType),"function"===typeof a?a.apply(c):a))+'"\x3e\n        \x3c/div\x3e\n    \x3c/div\x3e\n    \x3cdiv class\x3d"controls controls-row"\x3e\n        \x3cdiv class\x3d"control-group"\x3e\n            \x3cinput class\x3d"'+b((a=(a=c.subject,null==a||!1===a?a:a.elemClass),"function"===typeof a?a.apply(c):a))+'" name\x3d"subject" placeholder\x3d"'+b((a=(a=c.subject,null==a||!1===a?a:a.elemText),"function"===typeof a?a.apply(c):a))+'" type\x3d"'+b((a=(a=c.subject,
null==a||!1===a?a:a.elemType),"function"===typeof a?a.apply(c):a))+'"\x3e\n        \x3c/div\x3e\n    \x3c/div\x3e\n    \x3cdiv class\x3d"controls controls-row"\x3e\n        \x3cdiv class\x3d"control-group "\x3e\n            \x3ctextarea class\x3d"'+b((a=(a=c.message,null==a||!1===a?a:a.elemClass),"function"===typeof a?a.apply(c):a))+'" name\x3d"message" placeholder\x3d"'+b((a=(a=c.message,null==a||!1===a?a:a.elemText),"function"===typeof a?a.apply(c):a))+'" rows\x3d"5"\x3e\x3c/textarea\x3e\n        \x3c/div\x3e\n    \x3c/div\x3e\n    \x3cdiv class\x3d"controls controls-row"\x3e\n        \x3cdiv class\x3d"control-group"\x3e\n            \x3cbutton class\x3d"'+
b((a=(a=c.button,null==a||!1===a?a:a.elemClass),"function"===typeof a?a.apply(c):a))+'" id\x3d"contactSubmit_B" name\x3d"submitButton" type\x3d"'+b((a=(a=c.button,null==a||!1===a?a:a.elemType),"function"===typeof a?a.apply(c):a))+'"\x3e'+b((a=(a=c.button,null==a||!1===a?a:a.elemText),"function"===typeof a?a.apply(c):a))+"\x3c/button\x3e\n        \x3c/div\x3e\n    \x3c/div\x3e\n\x3c/div\x3e")})})();var CONTACT=CONTACT||{};
(function(d,b){var c=Backbone.Model.extend({defaults:{name:"",email:"",website:"",subject:"",message:""}}),f=Backbone.View.extend({render:function(b){this.$el.html(Handlebars.templates.contact(b));this.delegateEvents({"click .contact-form #contactSubmit_B":"save"});return this},save:function(){this.setModelData();e.navigate("contact-received",{trigger:!0});socket.send(JSON.stringify(e.contentView.model.attributes))},setModelData:function(){this.model.set({name:this.$el.find('.contact-form input[name\x3d"name"]').val(),
email:this.$el.find('.contact-form input[name\x3d"email"]').val(),website:window.location.hostname,subject:this.$el.find('.contact-form input[name\x3d"subject"]').val(),id:null,message:this.$el.find('.contact-form textarea[name\x3d"message"]').val(),type:"postContactUs"})}}),e=new (Backbone.Router.extend({routes:{"":"list_contact_form","contact-received":"post_contact_form"},initialize:function(){this.contentView=new f({model:new c})},list_contact_form:function(){d("#app-contact").html(this.contentView.render(this.clientConfig).el)},
post_contact_form:function(){d("#app-contact").html('\x3cdiv class\x3d"alert alert-success"\x3e'+this.clientConfig.response+"\x3c/div\x3e")}}));b=b||{};b.name=b.name||{};b.button=b.button||{};b.subject=b.subject||{};b.email=b.email||{};b.message=b.message||{};void 0==b.response&&(b.response="Thank You for subscribing to our Newsletter");void 0==b.button.elemText&&(b.button.elemText="Send Message");void 0==b.button.elemClass&&(b.button.elemClass="btn btn-primary");void 0==b.button.elemType&&(b.button.elemType=
"submit");void 0==b.name.elemText&&(b.name.elemText="your name");void 0==b.name.elemClass&&(b.name.elemClass="required email placeholder");void 0==b.name.elemType&&(b.name.elemType="text");void 0==b.subject.elemText&&(b.subject.elemText="subject");void 0==b.subject.elemClass&&(b.subject.elemClass="");void 0==b.subject.elemType&&(b.subject.elemType="text");void 0==b.email.elemText&&(b.email.elemText="your email");void 0==b.email.elemClass&&(b.email.elemClass="required email valid");void 0==b.email.elemType&&
(b.email.elemType="email");void 0==b.message.elemText&&(b.message.elemText="please, leave your message here...");void 0==b.message.elemClass&&(b.message.elemClass="required placeholder valid");e.clientConfig=b;d(function(){Backbone.history.start()})})(jQuery,CONTACT);