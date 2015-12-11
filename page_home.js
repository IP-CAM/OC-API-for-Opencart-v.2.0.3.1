require(['./main','slide','popup'],function(slider,popup){
    require(['modflex'],function(slider,popup){
        slider.slider();
        popup.popup();
      });
});
