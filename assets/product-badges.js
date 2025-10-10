
(function () {
  // listen for changes on color swatches and update sale badge
  document.addEventListener('change', function (event) {
    if (!event.target.matches('input[name^="cd-group-"]')) return;

    var $productCard = event.target.closest('.sr-product-card-v2');

    if (!$productCard) return;

    var $saleBadge = $productCard.querySelector('.product-badge--sale');
    // NOTE: This data would need to be added to the color swatch for this to work
    var compareAtPrice = event.target.getAttribute('data-variant-compare-at-price');
    var price = event.target.getAttribute('data-variant-price');

    if (!$saleBadge) return;

    if (compareAtPrice && price && parseFloat(compareAtPrice) > parseFloat(price)) {
      $saleBadge.style.display = '';
    } else {
      $saleBadge.style.display = 'none';
    }
  });
})();
