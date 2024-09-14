function sum(requiredSum, nums) {
  //en este caso recorro 2 bucles for para encontrar 2 valores de el array que sumen el valor buscado
  for (let i = 0; i <= num_elements; i++) {
    for (let j = 0; j < num_elements; j++) {
      if (nums[i] + nums[j] === requiredSum) {
        //si se encuentra 2 valores en el array que devuelvan el valor de la suma buscada se devuelve true en el primer match
        return true;
      }
    }

    //en el caso de que ninguna suma nos dé el valor buscado se devuelve false
    return false;
  }
}

//dado que no se especifica el tamaño de el array y los valores le pido al usuario que ingrese tales datos por teclado
const num_elements = prompt("Ingrese el tamaño del array:");
const nums = [];

for (let i = 1; i <= num_elements; i++) {
  let value = parseInt(
    prompt(`introduce un numero para el ${i} valor del array:`)
  );
  nums.push(value);
}

const requiredSum = parseInt(
  prompt(
    "Ingrese el valor que desea encontrar con la suma de 2 numeros de el array:"
  )
);

//llamo a la funcion y muestro su resultado por consola
console.log(sum(requiredSum, nums));
