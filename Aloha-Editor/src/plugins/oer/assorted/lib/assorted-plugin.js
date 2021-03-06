// Generated by CoffeeScript 1.6.3
/*
Register a couple of assorted oer plugins
*/


(function() {
  define(['aloha/plugin', 'jquery', 'overlay/overlay-plugin', './link', './image', './figure', './title-figcaption', './list'], function(Plugin, $, Popover, linkConfig, imageConfig, figureConfig, figcaptionConfig) {
    return Plugin.create('assorted', {
      defaultSettings: {
        image: {
          preview: true
        }
      },
      init: function() {
        this.settings = $.extend(true, this.defaultSettings, this.settings);
        Popover.register(linkConfig);
        return Popover.register(imageConfig);
      }
    });
  });

}).call(this);
