const persona = {
  nombre: "Panchito",
  edad: 25,
  ocupacion: "Desarrollador"
};
const colores = [
  "verde", "rojo", "azul"
];
console.log(persona);
console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.ocupacion);

console.log(colores);
console.log(colores.length);
console.log("--------- ------- ----------");
console.log(colores[0]);
console.log(colores[1]);
console.log(colores[2]);
console.log(colores[3]);

console.log("--------- ------- ----------");

colores.push("amarillo");
colores.push("celeste");
colores.push("cafe");
colores.reverse();
console.log(colores);
colores.push("CYAN");
colores.push("DEEPBLUE");
colores.push(4);
colores.push(5);
colores.push(6);
colores.push(true);
colores.push(false);
colores.push(5.3);
colores.push([0, 0 ,0]);

// colores.sort();

var elemento = colores.pop();

console.log(elemento);
console.log(colores);
console.log("--------- ------- ----------");
console.log(colores.find(function (elemento){
  return elemento ==="rojo";
}));

console.log("--------- ------- ----------");

for (let i = 0; i < colores.length; i++) {
  console.log("Elemento: " + colores[i] + ", indice: " + i);
}

console.log("--------- ------- ----------");

console.log("Mi nombre es " + persona.nombre + " y tengo " + persona.edad + " años.");
// agregar mas atributos
persona["nom2"] = "Nicolas";
console.log(persona.nom2);

persona["ci"] = 1234567;
// sobreescribir un atributo
persona.nombre = "Israel";
console.log("Mi nombre es " + persona.nombre + " y tengo " + persona.edad + " años.");

persona.edad = 27;
persona.ocupacion = "Ing";

console.log(persona);
