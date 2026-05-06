/*
ACTUALIZADO A ABRIL DEL 2026

Distancia	  | Con SUBE registrada   | Con SUBE sin registrar
0-3 km	    | $ 715.24	            | $ 1137.23
3-6 km	    | $ 794.74		          | $ 1263.64
6-12 km	    | $ 855.97		          | $ 1360.99
12-27 km	  | $ 917.24		          | $ 1458.41
*/

boton.addEventListener("click", () => {
  // COMPLETAR
});
let registrada = registrada.value
let distancia = distancia.value
let tarifa

if(registrada===si){
if (distancia<=3)
  {
    tarifaregistrada="$715.24"
}
else if (distancia<=6)
  {
    tarifaregistrada="$794.74"
  }
  else if (distancia<=12)
  {
    tarifaregistrada="$855.97"
  }
  else if(distancia<=27)
  {
    tarifaregistrada="$917.24"
  }
}
tarifa.innerText = tarifaregistrada