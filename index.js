import STORE from './STORE.js';
import api from './api.js';

const handleMenuButtonClicked = function() {
  $('.hamburger').click(function() {
    STORE.menuExpanded = !STORE.menuExpanded;
    if (STORE.menuExpanded) {
      $('.new-game-nav-link, .find-jokes-nav-link, .how-to-play-nav-link').slideDown(150);
      $('header').addClass('extra-margin');
    } else {
      $('.new-game-nav-link, .find-jokes-nav-link, .how-to-play-nav-link').slideUp(150);
      $('header').removeClass('extra-margin');
    }
  });
};

const renderMenuOnResize = function() {
  if ($('.hamburger').css('display') === 'none'){
    $('.new-game-nav-link, .find-jokes-nav-link, .how-to-play-nav-link').show();
    $('header').removeClass('extra-margin');
    STORE.menuExpanded = false;
  }
  if ($('.hamburger').css('display') === 'block' && STORE.menuExpanded === false) {
    $('.new-game-nav-link, .find-jokes-nav-link, .how-to-play-nav-link').hide();
  }
};

const handleToggleDirectionsButtonClicked = function() {
  $('.toggle-directions').click(function() {
    $('.directions').slideToggle(250);
    if ($('.toggle-directions').text() === 'hide') {
      $('.toggle-directions').text('show');
    } else {
      $('.toggle-directions').text('hide');
    }
  });
};

const renderRandomJoke = function() {
  api.getRandomJoke()
    .then((randomJoke) => {
      $('.joke').text(randomJoke.joke);
    });
};

const handleNewJokeButtonClicked = function() {
  $('.new-joke-button').click(function() {
    if ($('.winner').css('display') === 'block') {
      $('.winner').hide();
      $('.player-1-score-container').removeClass('winner-decor');
      $('.player-2-score-container').removeClass('winner-decor');
    }
    renderRandomJoke();
  });
};

const displayWinner = function() {
  let winnerHTML = `
    <h2>
      <span role="img" aria-label="party popper">🎉</span> 
      Congratulations ${STORE.winner}! 
      <span role="img" aria-label="party popper">🎉</span>
    </h2>
    <p>You have won the game :)</p>
  `;
  $('.winner').html(winnerHTML);
  $('.winner').show();
  if(STORE.winner === 'Player 1') {
    $('.player-1-score-container').addClass('winner-decor');
  } else {
    $('.player-2-score-container').addClass('winner-decor');
  }
};

const handlePlusPlayer1Clicked = function() {
  $('.plus-player-1').click(function() {
    let p1Score = $('.player-1-score').text();
    p1Score = parseInt(p1Score, 10) + 1;
    $('.player-1-score').text(p1Score);

    if (p1Score === 7 && !STORE.winner) {
      STORE.winner = 'Player 1';
      displayWinner();
    }
  });
};

const handlePlusPlayer2Clicked = function() {
  $('.plus-player-2').click(function() {
    let p2Score = $('.player-2-score').text();
    p2Score = parseInt(p2Score, 10) + 1;
    $('.player-2-score').text(p2Score);
    
    if (p2Score === 7 && !STORE.winner) {
      STORE.winner = 'Player 2';
      displayWinner();
    }
  });
};

const handleMinusPlayer1Clicked = function() {
  $('.minus-player-1').click(function() {
    let p1Score = $('.player-1-score').text();
    p1Score = (p1Score === '0') ? '0' : parseInt(p1Score, 10) - 1;
    $('.player-1-score').text(p1Score);
  });
};

const handleMinusPlayer2Clicked = function() {
  $('.minus-player-2').click(function() {
    let p2Score = $('.player-2-score').text();
    p2Score = (p2Score === '0') ? '0' : parseInt(p2Score, 10) - 1;
    $('.player-2-score').text(p2Score);
  });
};

const handleFindJokesSubmitted = function() {
  $('#find-jokes-form').submit(function(event) {
    event.preventDefault();
    let searchQuery = $('#search-field-input').val();
    api.searchDadJokes(searchQuery)
      .then((jokes) => {
        let jokeResultsHTML = '';
        jokes.results.forEach(result => {
          jokeResultsHTML += `
            <hr>
            <p class="joke">${result.joke}</p>`;
        });
        if (jokeResultsHTML === '') {
          jokeResultsHTML = `
            <hr>
            <p>No results found</p>`;
        }
        $('.joke-search-results').html(jokeResultsHTML);
      });
  });
};

const bindEventHandlers = function() {
  handleMenuButtonClicked();
  handleToggleDirectionsButtonClicked();
  handleNewJokeButtonClicked();
  handlePlusPlayer1Clicked();
  handlePlusPlayer2Clicked();
  handleMinusPlayer1Clicked();
  handleMinusPlayer2Clicked();
  handleFindJokesSubmitted();
};

const main = function() {
  $(window).resize(renderMenuOnResize);
  bindEventHandlers();
  if(window.location.pathname === '/game.html') {
    renderRandomJoke();
  }  
};

$(main);