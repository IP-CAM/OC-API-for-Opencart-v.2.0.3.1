requirejs.config({
    baseUrl: 'js',
    paths: {
        "afterlogin"       : 'afterlogin',
        "controller"       : 'controller',
        "jquery"           : 'lib/jquery.min',
        "index"            : 'index',
        "imagezoom"        : 'lib/imagezoom',
        "flexslidermain"   : 'lib/jquery.flexslider',
        "magnific-popup"   : 'lib/jquery.magnific-popup',
        "memenu"           : 'lib/memenu',
        "responsiveslides" : 'lib/responsiveslides.min',
        "simpleCart"       : 'lib/simpleCart.min',
        //module tambahan
        "menu"             : 'module/menu',
        "slide"            : 'module/slider',
        "popup"            : 'module/popup',
        "modflex"          : 'module/flexslider'
    }
});

require(['menu','popup','modflex'],function(showmenu,popup,flex){
     showmenu.showmenu();
     popup.popup();
     flex.flexslider();
  });
