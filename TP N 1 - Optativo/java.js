function informarPrecio(sel) {
    //   alert(sel.options[sel.selectedIndex].value);
       var x = "El valor del Seguro es " + (sel.options[sel.selectedIndex].value);
       document.getElementById("prueba").innerHTML = x;
   }