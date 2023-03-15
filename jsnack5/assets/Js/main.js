/* 
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.
*/
let listaNumeri = [

]
//ciclo for
for (let i = 0; i < 6; i++) {
    let numb = Number(prompt('inserisci un numero'))
    if (numb % 2 == 0) {
        listaNumeri.push(numb)
        console.log(numb)
    }
}


document.getElementById("demo").innerHTML = listaNumeri