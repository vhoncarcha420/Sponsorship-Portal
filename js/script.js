TweenLite.set("#product-wrapper", {x:0, xPercent:100});
TweenLite.set("#plan-wrapper", {x:0, xPercent:100});

$('#open').on('click',
  function() {
    TweenMax.to("#product-wrapper", 0.5, {xPercent: 0, ease:Power4.easeInOut});
  });

$('#close').on('click',
  function() {
    TweenMax.to("#product-wrapper", 0.5, {xPercent: 100, ease:Power4.easeInOut});
  });

$('#open-2').on('click',
  function() {
    TweenMax.to("#plan-wrapper", 0.5, {xPercent: 0, ease:Power4.easeInOut});
  });

$('#close-2').on('click',
  function() {
    TweenMax.to("#plan-wrapper", 0.5, {xPercent: 100, ease:Power4.easeInOut});
  });






