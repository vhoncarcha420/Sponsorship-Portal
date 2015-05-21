TweenLite.set("#product-wrapper", {x:0, xPercent:100});
TweenLite.set("#stm-product-wrapper", {y:0, yPercent:100});
TweenLite.set("#awc-product-wrapper", {y:0, yPercent:100});
TweenLite.set("#amc-product-wrapper", {y:0, yPercent:100});
TweenLite.set("#branch-wrapper", {y:0, yPercent:100});
TweenLite.set("#package-wrapper", {x:0, xPercent:100});

// opening the product page
$('#open').on('click',
  function() {
    TweenMax.to("#product-wrapper", 0.5, {xPercent: 0, ease:Power4.easeInOut});
  });

$('#back').on('click',
  function() {
    TweenMax.to("#product-wrapper", 0.5, {xPercent: 100, ease:Power4.easeInOut});
  });

// opening the stm product overlay
$('#open-stm').on('click',
  function() {
    TweenMax.to("#stm-product-wrapper", 0.5, {yPercent: 0, ease:Power4.easeInOut});
  });

$('#close-stm').on('click',
  function() {
    TweenMax.to("#stm-product-wrapper", 0.5, {yPercent: 100, ease:Power4.easeInOut});
  });

// opening the awc product overlay
$('#open-awc').on('click',
  function() {
    TweenMax.to("#awc-product-wrapper", 0.5, {yPercent: 0, ease:Power4.easeInOut});
  });

$('#close-awc').on('click',
  function() {
    TweenMax.to("#awc-product-wrapper", 0.5, {yPercent: 100, ease:Power4.easeInOut});
  });

// opening the 6wamc product overlay
$('#open-amc').on('click',
  function() {
    TweenMax.to("#amc-product-wrapper", 0.5, {yPercent: 0, ease:Power4.easeInOut});
  });

$('#close-amc').on('click',
  function() {
    TweenMax.to("#amc-product-wrapper", 0.5, {yPercent: 100, ease:Power4.easeInOut});
  });

// open branch overlay
$('#open-branch').on('click',
  function() {
    TweenMax.to("#branch-wrapper", 0.5, {yPercent: 0, ease:Power4.easeInOut});
    TweenMax.to("#awc-product-wrapper", 0.5, {yPercent: -100, ease:Power4.easeInOut});
  });
$('#back-branch').on('click',
  function() {
    TweenMax.to("#branch-wrapper", 0.5, {yPercent: 100, ease:Power4.easeInOut});
    TweenMax.to("#awc-product-wrapper", 0.5, {yPercent: 0, ease:Power4.easeInOut});
  });

// opening the package plan
$('#open-package').on('click',
  function() {
    TweenMax.to("#package-wrapper", 0.5, {xPercent: 0, ease:Power4.easeInOut});
  });

$('#back-package').on('click',
  function() {
    TweenMax.to("#package-wrapper", 0.5, {xPercent: 100, ease:Power4.easeInOut});
    TweenMax.to("#branch-wrapper", 0, {yPercent: 100, ease:Power4.easeInOut});
    TweenMax.to("#awc-product-wrapper", 0, {yPercent: 100, ease:Power4.easeInOut});
  });



