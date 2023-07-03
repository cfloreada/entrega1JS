/* 1

const funcion = (numero) => {
  if (numero % 2 === 0) {
    console.log(`el ${numero} es par`);
  }
  else {
     console.log(`el ${numero} es impar`);
  }
}

funcion ()
*/

// 2

/*
const funcion = (n1, n2) =>{
  if (n1 > n2) {
    console.log(`${n1} es mayor a ${n2}`);
  }else if (n2 < n1) {
    console.log(`${n2} es mayor a ${n1}`);
  } 
  
  if (n1 == n2) {
    console.log(`ambos numeros son iguales`);
  }
}

funcion (10,1)
*/

// 3

/*
const funcion = (n) => {
  if (n %5 === 0) {
    console.log(`${n} es multiplo de 5`);
  }
else{
  console.log(`${n} no es multiplo de 5`);
}

}

funcion()
*/

// 4
/*
const funcion = (n) => {
  for (let i = 0; i <= n; i++) {
    console.log(i); ;
  };
}
funcion(30)
*/

// 5

/*
const funcion = (numero, palabra) => {
  for (let index = 0; index < numero; index++) {
    console.log(palabra);
  }
}

funcion (10, 'amadeo')
*/

// 6
/*

let amigos = ["amadeo", "tomas", "nahuel", "nicolas", "elias"];

const nombres = (array) => {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
    
  }
}

nombres(amigos)
*/

// 7
/*
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const funcion = (numeros) => {
  for (let i = 0; i < numeros.length; i++) {
    if (i === 5) {
      continue;
    }
    console.log(numeros[i]);
  }
}

funcion (numeros)
*/

// 8
/*
 let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 const funcion = (num) => {
   for (let i = 0; i < numeros.length; i++) {
     numeros[i] = numeros[i] * num;  
   }
 console.log(numeros);
 
 funcion (2)
 */
