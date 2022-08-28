//Creating a 1D array
var flowerTerp = new Array(10);

document.write('Creating 2D array <br>');

// Loop to create 2D array using the 1D array
for (var i = 0; i < flowerTerp.length; i++) {
  flowerTerp[i] = new Array(16);
}

//Filling the 2D array
flowerTerp[0] = [0.72, 0.51, 0.23, 0.11, 0.09, 0.07, 0.04, 0.13, 0.03, 0.01, 0, 0, 0, 0, 0, 0];
flowerTerp[1]= [0.72, 0.90, 0.21, 0.03, 0.16, 0.10, 0.18, 0.02, 0.04, 0.02, 0.09, 0.03, 0, 0, 0, 0];



/* Loop to display the elements of 2D array.
for (var i= 0; i < 2; i++) {
  for (var j = 0; j < 16; j++) {
    document.write(flowerTerp[i][j] + ' ');
  }
  document.write('<br>');
}
*/