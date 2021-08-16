import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular2021';

  /*
  // ***************************************************************************
  //
  // *************************************
  // *** INTRODUCCIÓN FUNCIONES FLECHA ***
  // *************************************
  
  // EJEMPLO 1:
  // Función Normal Con Parametro
  getName(name:string):string{
    return "hola" + name;
  }

  // Función Flecha Con Parametro
  (name:string) => {
    return "hola" + name;
  }

  // EJEMPLO 2:
  // Función Normal Sin Parametro
   getName():string {
    return "hola";
  }

  // Función Flecha Sin Parametro
  () => "hola"

  // EJEMPLO 3:
  // Función Normal Con Parametro Sin Tipo Especificado
  getName(name):string{
    return "hola" + name;
  }

  // Función Flecha Con Parametro Sin Tipo Especificado
  name=> {
    return "hola" + name;
  }

  // NOTA: Llamado a una función flecha
  //       usando "const"
  const test =() => "hola"
  */

  // ***************************************************************************

  // *************************************
  // ***          OPERADORES           ***
  // *************************************
  
  constructor() {
    /* EJEMPLO 1: Multiplicar cada elemento por 2

        map: Teniendo un array se obtiene uno nuevo
        realizando alguna operacion en cada uno de los
        elementos.

    */
    const testMap = [1, 2, 3, 4, 5, 6].map(item => item * 2);
    console.log(testMap);


    /* EJEMPLO 2: Para cada item hacer algo

        forEach: Teniendo un array se recorre el mismo
        realizando alguna operacion en cada uno de los
        elementos, pero sólo lo recorre no nos 
        devuelve un nuevo Array.

    */
    const testForEach = [1, 2, 3, 4, 5, 6].forEach(item => item);
    console.log(testForEach);


    /* EJEMPLO 3: Buscar 4

        find: Opera a partir de un Array, devolviendo 
        un resultado según una condición dada.

    */
    const testFind = [1, 2, 3, 4, 5, 6].find(item => item === 4);//=== Busqueda estricta
    console.log(testFind);


    /* EJEMPLO 4: Extraer números divisbles entre 2

        filter: Filtra todos los resultados que 
        correpondan a una condición dada, en forma de 
        un array.

    */
    const testFilter = [1, 2, 3, 4, 5, 6].filter(item => item % 2 === 0);
    console.log(testFilter);


    /* EJEMPLO 5: Buscar indice que cumpla una condición

        findIndex: Devuelve el indice del primer 
        elemento que cumpla con cierta condición.

    */
    const testFindIndex = [90, 2, 300, 4, 5, 6].findIndex(item => item === 300);
    console.log(testFindIndex);


    /* EJEMPLO 6: Buscar una letra en un palabra

        findIndex: Devuelve el indice de un 
        elemento buscado en particular ya sea en
        Arrays o en Strings , si existe más de 
        uno devuelve el primer indice hallado.   

    */
    const testIndexOf = 'ricardo'.indexOf('o');
    console.log(testIndexOf);


    /* EJEMPLO 7: Convertir un array en una cadena.

        join: Convierte un array en una cadena
        de texto concatenando la misma con un 
        elemento dado.

    */
    const testJoin = [1, 2, 3, 4, 5, 6].join(',');
    console.log(testJoin);


    /* EJEMPLO 8: Convertir una cadena en un Array

        split: Convierte una cadena en un Array
        identificando algún patrón de separación
        en dicha cadena.

    */
    const testSplit = '1,2,3,4,5,6'.split(',');
    console.log(testSplit);


    /* EJEMPLO 9: Fragmentar Dos Array

        splice: Dado un Array, indicando (m,n) se
        fragmenta dicho arreglo. Siendo:
        - m: Indice desde donde se quiere
             fragmentar.
        - n: Cuantos elementos después de "m"
             queremos eliminar. 

    */ 
    const testSpliceA = [10, 20, 30, 40, 50, 60];
    testSpliceA.splice(0, 1);
    // Modificación indirecta: Nos muestra lo 
    // original después del corte.
    const testSpliceB = [1, 2, 3, 4, 5, 6].splice(1, 2);
    // Modificación directa:   Nos muestra lo cortado.
    console.log(testSpliceA, testSpliceB);
    

    /* EJEMPLO 10: Sumar todos los elementos de un array

        reduce: Recibe 4 parametros de entrada en
        el siguiente orden:
        - Valor previo.
        - Valor actual.
        - Indice actual.
        - Arreglo.
        Donde se puede usar solo dos parametros:
        - Valor previo => acc.
        - Valor actual => value.
        
    */
    const testReduce = [1, 2, 3, 4, 5, 6].reduce((acc, value) => acc + value);
    console.log(testReduce);

    /* EJEMPLO 11: Sumar todos los elementos de un array y
                   sumarle 100.
    */
    const testReduce1 = [1, 2, 3, 4, 5, 6].reduce((acc, value) => acc + value, 100);
    console.log(testReduce1);


    /* EJEMPLO 12: Convertir una constante JSON en 
                   un Arreglo, luego en otro 
                   Arreglo imprimir los "keys" y en 
                   último Arreglo imprimir los 
                   valores asociados a dichas keys.
        entries: Dado una variable de tipo JSON, se 
        convierte la misma en un Array.
        
        keys: Nos muestra en un Array los "keys" 
        (valor primero en el archivo JSON) como
        Strings.
        
        values: Nos muestra en un Array los "values" 
        (valor segundo en el archivo JSON) como
        Strings.
    */
    const testEntries = { value: 'ricardo', key: 'RPC' };
    console.log('aaaaa', Object.entries(testEntries));
    console.log('bbbbb', Object.keys(testEntries));
    console.log('ccccc', Object.values(testEntries));

    /* EJEMPLO 13: Dado una variable JSON filtrar
                   los indices del mismo.
    */
    const asadasd = { 1: 'd', 2: 'd', 3: 'd', 4: 'd', 5: 'd' };
    console.log('ddddd', Object.keys(asadasd));


    /* EJEMPLO 14: Concatenar dos arreglos, luego
                   concatenar dos varibles JSON y
                   luego concatenar ambos 
                   resultados con el 

        ...: Se utiliza tres puntos suspensivos para
        concatenar Arreglos.

    */
    // Concatenación de arreglos
    const array1 = [1, 2, 3, 4, 5];
    const array2 = [9, 10, 11, ...array1];
    // Concatenación de JSON
    const per1 = { name: 'Sofía', age: 25 };
    const per2 = { data: 'Datos', ...per1 };
    // Concatenación resultados
    console.log('Spread', array2, per2);


    /* EJEMPLO 15: Dado un JSON de los datos
                   personales de una persona
                   ,identificar el teléfono 
                   de dicha persona.
    */
    const per3 = {
      name: 'Roberto',
      age: 12,
      phone: 79408867,
      extra: 123,
      response: 200,
      response2: 200,
      response4: 200
    };
    // Desestructuración
    const { phone: ci } = per3;
    console.log('name = ', ci);

    //------------------------------------------------------------------------------
    //EJERCICIO 1:
    //{1:'a',2:'a',3:'a',4:'a',5:'a',6:'a'} convertir a un array y sumar los números pares:
    const exercise1 = { 1: 'a', 2: 'a', 3: 'a', 4: 'a', 5: 'a', 6: 'a' };
    const answ1 = Object.keys(exercise1)
      .map(n => parseInt(n))
      .reduce((acc, value) => {
        if (value % 2 == 0) {
          acc = acc + value;
        }
        return acc;
      }, 0);
    console.log('Exercise 1: ', answ1);

    //EJERCICIO 2:
    //[1,2,3,4,5,6] filtrar los numeros impares y mostrarlos como cadena
    const exercise2 = [1, 2, 3, 4, 5, 6]
      .filter(item => item % 2 !== 0)
      .join('-');
    console.log('Exercise 2: ', exercise2);
  }
}
