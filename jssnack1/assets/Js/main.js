
/* 
L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore.
*/

/* strumenti: 

*/
let primoNumero = Number(prompt('inserisci un numero'))
let secondoNumero = Number(prompt('inserisci un altro numero'))
if(isNaN(primoNumero)||isNaN(secondoNumero)){
alert('devi inserire un numerino')
}else{
    if (primoNumero === secondoNumero) {
  console.log(`il primo numero ${primoNumero} e il secondo ${secondoNumero} sono uguali`);
} else if (primoNumero > secondoNumero) {
  console.log(`il primo numero ${primoNumero} è maggiore del secondo ${secondoNumero}`);
} else {
  console.log(`il secondo numero ${secondoNumero} è maggiore del primo ${primoNumero}`);
}
}

