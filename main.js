require.config({
    baseUrl: 'js',
    paths: {
        "jquery"           : 'jquery.min',
        "index"            : 'index',
        "imagezoom"        : 'imagezoom',
        "flexslidermain"       : 'jquery.flexslider',
        "magnific-popup"   : 'jquery.magnific-popup',
        "memenu"           : 'memenu',
        "responsiveslides" : 'responsiveslides.min',
        "simpleCart"       : 'simpleCart.min',
        //module tambahan
        "menu"             : 'module/menu',
        "slide"            : 'module/slider',
        "popup"            : 'module/popup',
        "modflex"          : 'module/flexslider'
    }
});

require(['menu','slide','popup','modflex'],function(showmenu,slider,popup,flex)
  {
     showmenu.showmenu();
     slider.slider();
     flex.flexslider();
     popup.popup();
  }
);
