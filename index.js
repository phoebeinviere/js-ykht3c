import './style.css';

$(document).ready(function () {
  $('tbody tr td').each(

    function() {
        var fTcolor00 = 0,
            fTcolor01 = 0.02,
            fTcolor02 = 0.04,
            fTcolor03 = 0.06,
            fTcolor04 = 0.08,
            fTcolor05 = 0.10,
            fTcolor06 = 0.12,
            fTcolor07 = 0,
            fTcolor08 = 0.02,
            fTcolor09 = 0.04,
            fTcolor = 0.06,
            fTcolor4 = 0.08,
            fTcolor5 = 0.10,
            fTcolor6 = 0.12,
            value = $(this).text();
        
        if (value == 0) {
          $(this).addClass('fTcolor0');
        }
        else if (value <= fTcolor01) {
            $(this).addClass('fTcolor01');
        }
        else if (value > fTcolor01 && value <= fTcolor02) {
            $(this).addClass('fTcolor02');
        }
        else if (value > fTcolor02 && value <= fTcolor03) {
          $(this).addClass('fTcolor02');
      }
        else if (value > fTcolor03 && value <= fTcolor04) {
            $(this).addClass('fTcolor03');
        }
        else if (value > fTcolor04&& value <= fTcolor05) {
            $(this).addClass('fTcolor04');
        }
        else if (value > fTcolor05) {
            $(this).addClass('fTcolor05');
        }
      });
    });