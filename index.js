
$(document).ready(function () {
  $('tbody tr td:not(":first")').each(

    function() {
        var vGood = 30,
            good = 25,
            avg = 20,
            poor = 15,
            vPoor = 10,
            score = $(this).text();
        
        if (score >= vGood) {
            $(this).addClass('vGood');
        }
        else if (score < vGood && score >= good) {
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