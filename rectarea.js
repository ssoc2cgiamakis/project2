function areaRectangle(){
    var width  = document.getElementById("width").value;
    var length = document.getElementById("length").value;
    
    if (width > 0 & length > 0) {
        var area = width * length;
        var result = "Area: " + area + '&#13217';
        document.getElementById("output").innerHTML = result; 
    } else {
        alert('Put positive values to width and length, excluding zeros.');
    }

  }