'use strict';
$(document).ready(
      setInterval(
    function () {
        if ($('main').hasClass('foto1')) {
            $('main').removeClass('foto1').addClass('foto2')
    }
        else if ($('main').hasClass('foto2')) {
            $('main').removeClass('foto2').addClass('foto3')
        }
        else if ($('main').hasClass('foto3')) {
            $('main').removeClass('foto3').addClass('foto1')
        }
          },10000
      )

);



