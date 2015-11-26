require.config({
    baseUrl: 'js',
    paths: {
        "jquery"           : 'jquery.min',
        "angular"          : 'angular.min',
        "index"            : 'index',
        "imagezoom"        : 'imagezoom',
        "flexslider"       : 'jquery.flexslider',
        "magnific-popup"   : 'jquery.magnific-popup',
        "memenu"           : 'memenu',
        "responsiveslides" : 'responsiveslides.min',
        "simpleCart"       : 'simpleCart.min',
        //module tambahan
        "menu"             : 'module/menu',
        "slide"            : 'module/slider',
        "popup"            : 'module/popup'
    }
});

require(['menu','slide','popup'],function(memenu,slider,popup)
  {
     memenu.showmenu();
     slider.slider();
     popup.popup();
  }
);
