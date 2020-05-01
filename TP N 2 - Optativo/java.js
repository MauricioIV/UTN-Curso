function sumar() {
    //   alert(sel.options[sel.selectedIndex].value);
       var o1 = parseInt(document.getElementById('op1').value);
       var o2 = parseInt(document.getElementById('op2').value);
       var resultado = o1 + o2;
       console.log(o1);
       console.log(o2);
       console.log(resultado);
       document.getElementById("prueba").innerHTML = "El resultado es: " + resultado;

   };

   function restar() {
    //   alert(sel.options[sel.selectedIndex].value);
       var o1 = parseInt(document.getElementById('op1').value);
       var o2 = parseInt(document.getElementById('op2').value);
       var resultado = o1 - o2;
       console.log(o1);
       console.log(o2);
       console.log(resultado);
       document.getElementById("prueba").innerHTML = "El resultado es: " + resultado;

   };

   function multiplicar() {
    //   alert(sel.options[sel.selectedIndex].value);
       var o1 = parseInt(document.getElementById('op1').value);
       var o2 = parseInt(document.getElementById('op2').value);
       var resultado = o1 * o2;
       console.log(o1);
       console.log(o2);
       console.log(resultado);
       document.getElementById("prueba").innerHTML = "El resultado es: " + resultado;

   };

   function dividir() {
    //   alert(sel.options[sel.selectedIndex].value);
       var o1 = parseInt(document.getElementById('op1').value);
       var o2 = parseInt(document.getElementById('op2').value);
       var resultado = o1 / o2;
       console.log(o1);
       console.log(o2);
       console.log(resultado);
       document.getElementById("prueba").innerHTML = "El resultado es: " + resultado;

   };
