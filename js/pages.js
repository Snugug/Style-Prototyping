var counter = document.getElementById('pagecounter');

// Fires each time a new slide is activated
Reveal.addEventListener( 'slidechanged', function( e ) {
    // event.previousSlide, event.currentSlide, event.indexh, event.indexv
    var page = e.indexh;
    if (page === 0) {
      page = '';
    }
    if (e.indexv !== 0) {
      page += '-' + e.indexv;
    }
    counter.innerHTML = page;
} );