TweenLite.set("#overlay", {x:0, xPercent:100});
TweenLite.set("#overlay-2", {x:0, xPercent:100});

$('#open').on('click',
  function() {
    TweenMax.to("#overlay", 0.5, {xPercent: 0, ease:Power4.easeInOut});
  });

$('#close').on('click',
  function() {
    TweenMax.to("#overlay", 0.5, {xPercent: 100, ease:Power4.easeInOut});
  });

$('#open-2').on('click',
  function() {
    TweenMax.to("#overlay-2", 0.5, {xPercent: 0, ease:Power4.easeInOut});
  });

$('#close-2').on('click',
  function() {
    TweenMax.to("#overlay-2", 0.5, {xPercent: 100, ease:Power4.easeInOut});
  });