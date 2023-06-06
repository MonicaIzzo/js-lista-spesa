console.log('JS OK')

/* 
# Lista della spesa.

Data una lista della spesa, stampare sulla pagina gli elementi della lista individualmente con un ciclo while.
<br>
<br>

- **1**
  - Genero un arrey contenete la lista.
- **2**
  - mi apro il tag <ul>
- **3**
  - creo un ciclo While, mi creo il template literals, chiuso il tag <ul>
- **4**
  - Inserisco in pagina
**FINE**  
*/ 



/*---------------------------------------
        OPERAZIONI PRELIMINARI
---------------------------------------*/
// #1 Genero un arrey contenete la lista.
const products = ['latte', 'cereali', 'pane', 'zucchero', 'uova',]

// #1 Genero un arrey contenete la lista.
/*---------------------------------------
        PROGRAMMA
---------------------------------------*/

// #2 mi apro il tag <ul>
let shoppinList = `<ul>`;


// #3 creo ciclo While, creo il template literals, chiuso il tag <ul>
let i = 0;
while (i < products.length) {
  shoppinList += `<li>${products[i]}</li>`;
  i++;
}
shoppinList += `</ul>`;

// #4 inserisco in pagina
document.body.innerHTML = shoppinList;




