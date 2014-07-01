(function constructor(args) {

  if (OS_ANDROID) {

    var properties = {
      message: args.message
    };

    if (args.duration) {

      // convert ms to constant
      if (args.duration !== Ti.UI.NOTIFICATION_DURATION_LONG && args.duration !== Ti.UI.NOTIFICATION_DURATION_LONG) {
        properties.duration = (args.duration > 2000) ? Ti.UI.NOTIFICATION_DURATION_LONG : Ti.UI.NOTIFICATION_DURATION_SHORT;
      } else {
        properties.duration = args.duration;
      }
    }

    $.notification.applyProperties(properties);

    $.notification.show();

  } else {

    $.label.text = args.message;

    $.window.open();

    // set a timeout to hide and close
    setTimeout(function() {

      // exitAnimation defined in TSS
      $.window.animate(_.omit($.createStyle({
        classes: ['nlFokkezbToast_exitAnimation']

      }), 'classes'), function(e) {

        $.window.close();

      });

    }, args.duration || 3000);
  }

})(arguments[0] || {});

function onWindowOpen(e) {

  // enterAnimation defined in TSS
  $.window.animate(_.omit($.createStyle({
    classes: ['nlFokkezbToast_enterAnimation']
  }), 'classes'));

}