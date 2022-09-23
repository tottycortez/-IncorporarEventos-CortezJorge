class Usuario {
    constructor(nombre, nota) {
        this.nombre = nombre
        this.nota = nota
        this.aprobado = false
    }
}

const listaNombres = []

//cargar datos
let btnCrearUsuario = document.querySelector("button")
let inputs = document.querySelectorAll("#crearTabla input")

btnCrearUsuario.addEventListener("click", () => {
    let nombre = inputs[0].value
    let nota = inputs[1].value

    if (nombre == "" || nota == "") {
        alert("¡Falta información!")
    } else if (nota > 10 || nota < 1) {
        alert("¡Calificación incorrecta!")
    } else {
        listaNombres.push(new Usuario(nombre, nota))
        console.log(listaNombres)
        return
    }
})

for (let nombre of listaNombres) {
    let nombres = document.createElement("h3")
    nombres.innerHTML = nombre
    document.body.appendChild(nombres)
}


/*
let desicion = Number(prompt("¿Qué desea hacer?\n1.Agregar alumno.\n2.Finalizar"))
while (desicion == 1) {

    let nombre = prompt("Ingrese un Nombre:")
    let nota = Number(prompt("Ingrese la Nota:"))
    let aprobado
    if (nota >= "6") {
        aprobado = true
    } else {
        aprobado = false
    }

    listaNombres.push(nombre, nota, aprobado)
    desicion = Number(prompt("¿Qué desea hacer?\n1.Agregar alumno.\n2.Finalizar"))
}

console.log(listaNombres)

for (let nombre of listaNombres) {
    let nombres = document.createElement("h1")
    nombres.innerHTML = nombre
    document.body.appendChild(nombres)
}
*/