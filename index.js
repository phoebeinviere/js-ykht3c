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
            fTcolor07 = 0.14,
            fTcolor08 = 0.16,
            fTcolor09 = 0.18,
            fTcolor10 = 0.20,
            fTcolor11 = 0.22,
            fTcolor12 = 0.24,
            fTcolor13 = 0.26,
            fTcolor14 = 0.28,
            fTcolor15 = 0.30,
            fTcolor16 = 0.32,
            fTcolor17 = 0.34,
            fTcolor18 = 0.36,
            fTcolor19 = 0.38,
            fTcolor20 = 0.40,
            fTcolor21 = 0.42,
            fTcolor22 = 0.44,
            fTcolor23 = 0.46,
            fTcolor24 = 0.48,
            fTcolor25 = 0.50,
            fTcolor26 = 0.52,
            fTcolor27 = 0.54,
            fTcolor28 = 0.56,
            fTcolor29 = 0.58,
            fTcolor30 = 0.60,
            fTcolor31 = 0.62,
            fTcolor32 = 0.64,
            fTcolor33 = 0.66,
            fTcolor34 = 0.68,
            fTcolor35 = 0.70,
            fTcolor36 = 0.72,
            fTcolor37 = 0.74,
            fTcolor38 = 0.76,
            fTcolor39 = 0.78,
            fTcolor40 = 0.80,
            value = $(this).text();
        
        if (value == fTcolor00) {
          $(this).addClass('fTcolor0');
        }
        else if (value <= fTcolor01) {
          $(this).addClass('fTcolor01');
        }
        else if (value > fTcolor01 && value <= fTcolor02) {
          $(this).addClass('fTcolor02');
        }
        else if (value > fTcolor02 && value <= fTcolor03) {
          $(this).addClass('fTcolor03');
        }
        else if (value > fTcolor03 && value <= fTcolor04) {
          $(this).addClass('fTcolor04');
        }
        else if (value > fTcolor04 && value <= fTcolor05) {
          $(this).addClass('fTcolor05');
        }
        else if (value > fTcolor05 && value <= fTcolor06) {
          $(this).addClass('fTcolor06');
        }
        else if (value > fTcolor06 && value <= fTcolor07) {
          $(this).addClass('fTcolor07');
        }
        else if (value > fTcolor07 && value <= fTcolor08) {
          $(this).addClass('fTcolor08');
        }
        else if (value > fTcolor08 && value <= fTcolor09) {
          $(this).addClass('fTcolor09');
        }
        else if (value > fTcolor09 && value <= fTcolor10) {
          $(this).addClass('fTcolor10');
        }
        else if (value > fTcolor10 && value <= fTcolor11) {
          $(this).addClass('fTcolor11');
        }
        else if (value > fTcolor11 && value <= fTcolor12) {
          $(this).addClass('fTcolor12');
        }
        else if (value > fTcolor12 && value <= fTcolor13) {
          $(this).addClass('fTcolor13');
        }
        else if (value > fTcolor13 && value <= fTcolor14) {
          $(this).addClass('fTcolor14');
        }
        else if (value > fTcolor14 && value <= fTcolor15) {
          $(this).addClass('fTcolor15');
        }
        else if (value > fTcolor15 && value <= fTcolor16) {
          $(this).addClass('fTcolor16');
        }
        else if (value > fTcolor16 && value <= fTcolor17) {
          $(this).addClass('fTcolor17');
        }
        else if (value > fTcolor17 && value <= fTcolor18) {
          $(this).addClass('fTcolor18');
        }
        else if (value > fTcolor18 && value <= fTcolor19) {
          $(this).addClass('fTcolor19');
        }
        else if (value > fTcolor19 && value <= fTcolor20) {
          $(this).addClass('fTcolor20');
        }
        else if (value > fTcolor20 && value <= fTcolor21) {
          $(this).addClass('fTcolor21');
        }
        else if (value > fTcolor21 && value <= fTcolor22) {
          $(this).addClass('fTcolor22');
        }
        else if (value > fTcolor22 && value <= fTcolor23) {
          $(this).addClass('fTcolor23');
        }
        else if (value > fTcolor23 && value <= fTcolor24) {
          $(this).addClass('fTcolor24');
        }
        else if (value > fTcolor24 && value <= fTcolor25) {
          $(this).addClass('fTcolor25');
        }
        else if (value > fTcolor25 && value <= fTcolor26) {
          $(this).addClass('fTcolor26');
        }
        else if (value > fTcolor26 && value <= fTcolor27) {
          $(this).addClass('fTcolor27');
        }
        else if (value > fTcolor27 && value <= fTcolor28) {
          $(this).addClass('fTcolor28');
        }
        else if (value > fTcolor28 && value <= fTcolor29) {
          $(this).addClass('fTcolor29');
        }
        else if (value > fTcolor29 && value <= fTcolor30) {
          $(this).addClass('fTcolor30');
        }
        else if (value > fTcolor30 && value <= fTcolor31) {
          $(this).addClass('fTcolor31');
        }
        else if (value > fTcolor31 && value <= fTcolor32) {
          $(this).addClass('fTcolor32');
        }
        else if (value > fTcolor32 && value <= fTcolor33) {
          $(this).addClass('fTcolor33');
        }
        else if (value > fTcolor33 && value <= fTcolor34) {
          $(this).addClass('fTcolor34');
        }
        else if (value > fTcolor34 && value <= fTcolor35) {
          $(this).addClass('fTcolor35');
        }
        else if (value > fTcolor35 && value <= fTcolor36) {
          $(this).addClass('fTcolor36');
        }
        else if (value > fTcolor36 && value <= fTcolor37) {
          $(this).addClass('fTcolor37');
        }
        else if (value > fTcolor37 && value <= fTcolor38) {
          $(this).addClass('fTcolor38');
        }
        else if (value > fTcolor38 && value <= fTcolor39) {
          $(this).addClass('fTcolor39');
        }
        else if (value > fTcolor39) {
          $(this).addClass('fTcolor40');
        }
      });
    });