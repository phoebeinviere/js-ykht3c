import './style.css';

$(document).ready(function () {
  $('tbody tr td:not(":first")').each(

    function() {
        var fTColor1 = 0.02,
            fTColor2 = 0.04,
            good = 25,
            avg = 20,
            poor = 15,
            vPoor = 10,
            score = $(this).text();
        
        if (score >= fTColor1) {
            $(this).addClass('fTcolor1');
        }
        else if (score < fTColor1 && score >= fTColor2) {
            $(this).addClass('good');
        }
        else if (score <good && score >= avg) {
            $(this).addClass('avg');
        }
        else if (score < avg&& score >= poor) {
            $(this).addClass('poor');
        }
        else if (score < poor) {
            $(this).addClass('vPoor');
        }
        });});