define(['jquery','responsiveslides'], function() {
  return {
      slider: function(){
          $("#slider").responsiveSlides({
            auto: true,
            speed: 500,
            namespace: "callbacks",
            pager: true,
          });
       }
    };
});
