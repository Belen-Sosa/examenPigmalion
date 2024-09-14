function sum(nums, requiredSum) {
    /*para la variable "valuesViewed" se utiliza Set esto permite que no se almacenen valores duplicados y tambien  el método .has es mas rapido que los métodos nativos de un array*/
  
    const valuesViewed = new Set();
  
    for (let i = 0; i < nums.length; i++) {
      let missingValue = requiredSum - nums[i];
      //si el valor de la resta se encuentra en la variable devuelve true en el primer match encontrado dado que la suma con tal valor si  puede dar el valor buscado.
      if (valuesViewed.has(missingValue)) {
        return true;
      }
      valuesViewed.add(nums[i]);
    }
    //en el caso de que no se encuentre ningun match con respecto al valor de la resta, no hay suma que de el valor buscado y se devuelve false
  
    return false;
  }
  
  //dado que no se especifica el tamaño de el array o los valores se solicita al usuario el input de los datos
  const num_elements = prompt(
    "Ingrese el tamaño del array:"
  );
  
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
  console.log(sum(nums, requiredSum));
  
