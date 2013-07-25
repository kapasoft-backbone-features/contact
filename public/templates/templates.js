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