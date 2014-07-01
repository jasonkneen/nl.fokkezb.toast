var defaults = {};

(function constructor(args) {

  defaults = args;

})(arguments[0] || {});

exports.show = function(message, opts) {

  Widget.createController('widget', _.extend(defaults, {
    message: message
  }, opts || {}));

};