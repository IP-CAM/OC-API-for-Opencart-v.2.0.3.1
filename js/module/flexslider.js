define(['jquery','flexslidermain'], function() {
  return {
       flexslider: function() {
         $('.flexslider').flexslider({
           animation: "slide",
           controlNav: "thumbnails"
         });
       }
    };
});
