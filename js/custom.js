!(function(e) {
  "use strict";
  e('a[href*="#"]:not([href="#"])').click(function() {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var t = e(this.hash);
      if ((t = t.length ? t : e("[name=" + this.hash.slice(1) + "]")).length)
        return (
          e("html, body").animate(
            {
              scrollTop: t.offset().top - 48
            },
            1e3,
            "easeInOutExpo"
          ),
          !1
        );
    }
  }),
    e("a").click(function() {
      e(".navbar-collapse").collapse("hide");
    }),
    e("body").scrollspy({
      target: ".navbar",
      offset: 54
    });
  var t = function() {
    e(".navbar").offset().top > 100
      ? e(".navbar").addClass("navbar-shrink")
      : e(".navbar").removeClass("navbar-shrink");
  };
  t(), e(window).scroll(t);
})(jQuery);
/*
var map = null;
google.maps.event.addDomListener(window, "load", init), google.maps.event.addDomListener(window, "resize", function() {
    map.setCenter(new google.maps.LatLng(40.67, -73.94))
});*/
