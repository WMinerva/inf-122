function saludar (nombre){
  return "Hola, "+ nombre + "!";
}
const mensaje = saludar("Nicolas");

console.log(mensaje);

function sumar(n1,n2){
  r = n1 + n2;
  return console.log(n1 +" + "+ n2 + " = " + r);
}
sumar(5,6);
 document.getElementById("boton").addEventListener("click", function(){
  alert("Boton Clickeado!");
})
