document.addEventListener("DOMContentLoaded", function() {

    //getting inputs from html file

    var zmienna_1 = document.getElementById("Color1");
    var zmienna_2 = document.getElementById("Color2");
    var gradientDiv = document.getElementById("gradient");
    var rotation = document.getElementById("Rotation");
    var gradientDisplay = document.getElementById("gradient-display");

    document.getElementById("submit").addEventListener("click", function() {

        // Get the values of Color1, Color2, and Rotation inputs

        var w_zmienna_1 = zmienna_1.value;
        var w_zmienna_2 = zmienna_2.value;
        var w_rotation = rotation.value;

        //for dev, checking, if website get values of zmienna_1, zmienna_2, and rotation

        console.log(w_zmienna_1, w_zmienna_2, w_rotation);

        // Displaying Gradients
        
        gradientDiv.style.background = "linear-gradient(" + w_rotation + "deg, " + w_zmienna_1 + ", " + w_zmienna_2 + ")";
        gradientDisplay.textContent = "linear-gradient(" + w_rotation + "deg, " + w_zmienna_1 + ", " + w_zmienna_2 + ")";
    });
});
