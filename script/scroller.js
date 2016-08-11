'use strict';

var $slides = $('.photo');

        setInterval(function(){
                slideShow();
            },2000);
    

    function slideShow(){
        $slides.filter('.visible').removeClass('.visible').next().addClass('visible');
        if ($slides.filter('.visible').lenght === 0 ) {
            $slides.first().addClass('visible')
        }
    }


