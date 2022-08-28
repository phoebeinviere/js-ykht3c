import './style.css';

$(document).ready(function () {
  $('tbody tr td').each(

    function() {
        var fTcolor1 = 0.02,
            fTcolor2 = 0.04,
            fTcolor3 = 0.06,
            fTcolor4 = 0.08,
            fTcolor5 = 0.10,
            fTcolor6 = 0.12,
            value = $(this).text();
        
        if (value >= fTcolor1) {
            $(this).addClass('fTcolor1');
        }
        else if (value < fTcolor1 && value >= fTcolor2) {
            $(this).addClass('fTcolor2');
        }
        else if (value <fTcolor3 && value >= fTcolor4) {
            $(this).addClass('fTcolor3');
            document.append("fTcolor3 assigned!");
        }
        else if (value < fTcolor4&& value >= fTcolor5) {
            $(this).addClass('fTcolor4');
        }
        else if (value < fTcolor5) {
            $(this).addClass('fTcolor5');
        }
      });
    });