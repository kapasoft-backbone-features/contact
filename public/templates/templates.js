(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['contact'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"contact-form\" novalidate=\"\">\n    <div class=\"controls controls-row\">\n        <div class=\"control-group span6\">\n            <input class=\"span12\" name=\"name\" placeholder=\"your name\" type=\"text\">\n        </div>\n        <div class=\"control-group span6\">\n            <input class=\"span12\" name=\"email\" placeholder=\"your email\" type=\"email\">\n        </div>\n    </div>\n    <div class=\"controls controls-row\">\n        <div class=\"control-group span12\">\n            <input class=\"span12\" name=\"subject\" placeholder=\"subject\" type=\"text\">\n        </div>\n    </div>\n    <div class=\"controls controls-row\">\n        <div class=\"control-group span12\">\n            <textarea class=\"span12\" name=\"message\" placeholder=\"please, leave your message here... \" rows=\"5\"></textarea>\n        </div>\n    </div>\n    <div class=\"controls controls-row\">\n        <div class=\"control-group span12\">\n            <button class=\"btn btn-primary\" name=\"submitButton\" type=\"submit\">Send Message</button>\n        </div>\n    </div>\n</div>";
  });
})();