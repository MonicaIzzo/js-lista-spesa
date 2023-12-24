console.log('JS OK')

/* 
# List della spesa.

Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.

**BONUS:** Presa la stessa lista della spesa, stampare in pagina utilizzando in alternativa un ciclo **for.**
<br>
<br>

- **1** Genero un arrey contenete la lista.
- **2** Mi preparo il tag di apertura ul
- **3** Creo un ciclo While
- **4** Nel ciclo While, costruisco il template literals
- **5** Al di fuori del ciclo, chiuso il tag ul
- **6** Stampo in pagina la lista della spesa
  **FINE**
*/ 



/*---------------------------------------
        OPERAZIONI PRELIMINARI
---------------------------------------*/

// #1 Genero un arrey contenete la lista.
const products = ['latte', 'cereali', 'pane', 'zucchero', 'uova',]


// #2 mi apro il tag <ul>
let shoppinList = `<ul>`;


/*---------------------------------------
        PROGRAMMA
---------------------------------------*/

// #3 Creo un ciclo While
// dichiaro la variabile del contattore
let i = 0;
while (i < products.length) {
  // #4  Costruisco il template literals
  shoppinList += `<li>${products[i]}</li>`;
  // incremento il contattore
  i++;
}

// #5 Al di fuori del ciclo, chiuso il tag ul
shoppinList += `</ul>`;

// #6 Stampo in pagina la lista della spesa
document.body.innerHTML = shoppinList;




// ? VERSIONE FOR
/* 
for (let i =0; i < products.length; i++) {
  shoppinList += `<li>${products[i]}</li>`;
}
*/ 
