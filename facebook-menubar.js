(function() {

  'use strict';

  var isFixed = false;
  var header;

  function init() {
    header = document.querySelector('#page > div._129-');
    window.addEventListener('scroll', handlePageStateChange);

    handlePageStateChange();
  }

  function handlePageStateChange (e) {
    if (window.location.href.indexOf('soft=') < 0 && window.scrollY > 0) {
      changeHeaderPosition(true);
    } else {
      changeHeaderPosition(false);
    }
  }

  function changeHeaderPosition (doFixed) {
    if (doFixed && !isFixed) {
      header.style.position = 'fixed';
      header.style.width = '100%';
      header.style.borderTopWidth = '0';
      isFixed = true;
    } else if (!doFixed) {
      header.style.position = '';
      header.style.width = '';
      header.style.borderTopWidth = '';
      isFixed = false;
    }
  }

  if (document.readyState !== 'loading') {
    init();
  } else {
    document.addEventListener('readystatechange', function readyStateChange() {
      if (document.readyState === 'interactive') {
        document.removeEventListener('readystatechange',
          readyStateChange);
        init();
      }
    });
  }

}());
