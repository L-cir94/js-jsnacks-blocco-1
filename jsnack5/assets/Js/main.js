/* 
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.
*/
const listaNumeri = [

]
//ciclo for
for (let i = 0; i < 6; i++) {
    let userNumb = Number(prompt('inserisci un numero'))
    if (userNumb % 2 == 0) {
        listaNumeri.push(userNumb)
        console.log(userNumb)
    }
}


document.getElementById("demo").innerHTML = listaNumeri