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
        const nuevoUsuario = new Usuario (nombre, nota)
        listaNombres.push(nuevoUsuario)
        let alumnos = document.createElement("ol")
        alumnos.innerHTML = `Alumno: ${nuevoUsuario.nombre}   /   Nota: ${nuevoUsuario.nota}`
        document.body.appendChild(alumnos)
        return
    }
})
