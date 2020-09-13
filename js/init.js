(function ($) {
    $(function () {

        $('.sidenav').sidenav();
        $('.parallax').parallax();
        var nav2 = $('#nav2')
        nav2.pushpin({ top: nav2.offset().top });
        
        var categories = $('div .categories-container');
        if (categories.length) {
            var $links = categories.find('li');
            $links.each(function () {
                var $link = $(this);
                $link.on('click', function () {
                    $links.removeClass('active');
                    $link.addClass('active');
                    var hash = $link.find('a').first()[0].hash.substr(1);
                    var text =$link.find('a').text()
                    var $galleryItems = $('.gallery .gallery-item');


                    $galleryItems.stop().addClass('gallery-filter').fadeIn(100);

                    if (hash !== 'all') {
                        var $galleryFilteredOut = $galleryItems.not('.' + hash).not('.all');
                        $galleryFilteredOut.removeClass('gallery-filter').hide();
                        $("#portfolio-header").text( text + " Projects ")
                    } else {
                        $("#portfolio-header").text("Projects ")
                    }
                    

                    // transition layout
                    $masonry.masonry({
                        transitionDuration: '1s'
                    });
                    // only animate on layout
                    $masonry.one('layoutComplete', function (event, items) {
                        $masonry.masonry({
                            transitionDuration: 0
                        });
                    });
                    setTimeout(function () {

                        $masonry.masonry('layout');
                    }, 1000);
                });
            });
        }
        
        var $masonry = $('.gallery');
        $masonry.masonry({
            // set itemSelector so .grid-sizer is not used in layout
            itemSelector: '.gallery-filter',
            // use element for option
            columnWidth: '.gallery-filter',
            // no transitions
            transitionDuration: 0
        });

        // layout Masonry after each image loads
        $masonry.imagesLoaded(function () {
            $masonry.masonry('layout');
        });
        $('a.filter').click(function (e) {
            e.preventDefault();
        });

    }); // end of document ready
})(jQuery); 




