import STORE from './STORE.js';

const handleMenuButtonClicked = function() {
  $('.hamburger').click(function() {
    STORE.menuExpanded = !STORE.menuExpanded;
    if (STORE.menuExpanded) {
      $('.new-game-nav-link, .find-a-joke-nav-link, .how-to-play-nav-link').slideDown(150);
      $('header').addClass('extra-margin');
    } else {
      $('.new-game-nav-link, .find-a-joke-nav-link, .how-to-play-nav-link').slideUp(150);
      $('header').removeClass('extra-margin');
    }
  });
};

const renderMenuOnResize = function() {
  if ($('.hamburger').css('display') === 'none'){
    $('.new-game-nav-link, .find-a-joke-nav-link, .how-to-play-nav-link').show();
    $('header').removeClass('extra-margin');
    STORE.menuExpanded = false;
  }
  if ($('.hamburger').css('display') === 'block' && STORE.menuExpanded === false) {
    $('.new-game-nav-link, .find-a-joke-nav-link, .how-to-play-nav-link').hide();
  }
};

const main = function() {
  handleMenuButtonClicked();
  $(window).resize(renderMenuOnResize);
};

$(main);