
/* 
L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.
*/

/* strumenti: 

*/

const primaParola = prompt('inserisci la prima parola')
const secondaParola = prompt('inserisci la seconda parola')

if (primaParola.length == secondaParola){
    console.log('le parole hanno la stessa lunghezza')
} else if(primaParola.length > secondaParola.length){
    console.log('la prima parola è più lunga')
} else{
    console.log('la senconda parola è più lunga')
}