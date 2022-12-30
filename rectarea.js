function areaRectangle(){
    var width  = document.getElementById("width").value;
    var height = document.getElementById("height").value;
    
    if (width > 0 & height > 0) {
        var area = width * height;
        var result = "Area: " + area;
        document.getElementById("output").innerHTML = result; 
    } else {
        var result = 'Put positive values to width and height, excluding zeros';
        document.getElementById("output").innerHTML = result;
    }

  }