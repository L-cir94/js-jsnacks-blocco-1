
/* 
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
*/

/* strumenti: 

*/

/* 
const primoNumero = Number(prompt('inserisci un numero'))
const secondoNumero = Number(prompt('inserisci un altro numero'))
const terzoNumero = Number(prompt('inserisci un altro numero'))
const quartoNumero = Number(prompt('inserisci un altro numero'))
const quintoNumero = Number(prompt('inserisci un altro numero'))
const sestoNumero = Number(prompt('inserisci un altro numero'))
const settimoNumero = Number(prompt('inserisci un altro numero'))
const ottavoNumero = Number(prompt('inserisci un altro numero'))
const nonoNumero = Number(prompt('inserisci un altro numero'))
const decimoNumero = Number(prompt('inserisci un altro numero'))
console.log(primoNumero+secondoNumero+terzoNumero+quartoNumero+quintoNumero+sestoNumero+settimoNumero+ottavoNumero+nonoNumero+decimoNumero)
*/

/* correct way */
let sum = 0;
for (let i = 0; i < 10; i++) {
    let numb = Number(prompt('inserisci un numero'))
    sum += numb
}
console.log(sum)
/* 
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
CON WHILE
*/
let j = 0;
let sum = 0;
while ( j < 10 ) {
    let numb = Number(prompt('inserisci un numero'))
    sum += numb
    j++
}
console.log(sum)
document.getElementById("demo").innerHTML = sum;