/* PRIMERO HACEMOS LA PETICION A LA BASE DE DATOS */
const questionsAPI = fetch("https://the-trivia-api.com/api/questions");

const preguntaas = [] /* AQUI CREAMOS UN ARRAY VAZIO PARA AÑADIR EL ARAY DE LA API */


/* AQUI ES EL THEN QUE PUSHEA CADA OBJETO DEL ARRAY DE LA API Y AÑADE AL ARRAY PREGUNTAAS */
questionsAPI
    .then(res => res.json())
    .then(data => data.forEach(question =>{
        preguntaas.push(question) /* EL PUSH PARA EL ARRAY VACIO */
    }))
    .then(pregunta => {
        localStorage.setItem("array",JSON.stringify(preguntaas)) /* AQUI ES EL LOCAL STORAGE QUE AÑADE EL ARRAY PREGUNTAAS QUE ESTA CON LOS OBJETOS DE LA API */
    })


/* AQUI ES EL CONTENIDO DE LAS DIVS QUE SE VAN A PONER EN ALEATORIO */
const divNuevas = document.querySelectorAll(".carta") /* SELECCIONANDO LAS DIV QUE ESTAN AL PRINCIPIO EN EL HTML */
const arrayDeLasDiv = []
    divNuevas.forEach(div =>{
        arrayDeLasDiv.push(div) /* UN FOR EACH QUE PUSHEA LAS DIV PARA EL ARRAY "arrayDeLasDiv" */
    })

const divpai = document.querySelector(".cartaPregunta") /* AQUI SE SELECCIONA LA DIV QUE ES EL CONTENEDOR DE TODAS LAS 4 DIVS PREGUNTAS */
    divNuevas.forEach(div =>{
        divpai.removeChild(div) /* ESTE FOR EACH LO QUE HACES ES REMOVER LAS DIVS DEFAULT PARA LUEGO REAÑADIR CON LAS NUEVAS */
    })
    arrayDeLasDiv.sort(() => Math.random() - 0.5); /* ESTE EL LA PROPIEDAD DEL ARRAY QUE HACE LA POSICION DEL ELEMENTO(LA DIV PREGUNTA) DEL ARRAY QUEDAR ALEATORIO */
    console.log(arrayDeLasDiv);
    arrayDeLasDiv.forEach(div =>{
        divpai.appendChild(div) /* AQUI AÑADE AL CONTENEDOR DE LAS DIV YA CON LOS CAMBIOS EN ALEATORIO*/
    })

const arrayLocal =  JSON.parse(localStorage.getItem("array")) /* AQUI SE OBTIENE EL ARRAY PREGUNTAS DEL LOCAL STORAGE */


/* ITERACIONES POR EL ARRAY DE LAS  PREGUNTAS */
const objeto = arrayLocal[arrayLocal.length-1] /* ESTO SERIA LA SELECCION DEL INDEX PARA ITERAR POR UN UNICO OBJETO,LUEGO CON EL BOTON NEXT ESTE INDEX VA A CAMBIAR */
/* AQUI SE CREA UNA VARIABLE QUE SELECCIONA LA DIV CON ID#1 PARA QUE SEA LA CUESTION CORRECTA */
const cuestionCorrecta = arrayDeLasDiv.find(element => element.id === "1")

cuestionCorrecta.innerHTML = `<p value ="correcta">${objeto.correctAnswer}</p>` /* AQUI CAMBIA EL HTML PARA CUESTION CORRECTA */

/* AQUI SE CREA LAS VARIABLES DE LAS INCORRECTAS */
const inco1 = arrayDeLasDiv.find(element => element.id === "2")
const inco2 = arrayDeLasDiv.find(element => element.id === "3")
const inco3 = arrayDeLasDiv.find(element => element.id === "4")

inco1.innerHTML =`<p value ="incorrecta">${objeto.incorrectAnswers[0]}`
inco2.innerHTML =`<p value ="incorrecta">${objeto.incorrectAnswers[1]}`
inco3.innerHTML =`<p value ="incorrecta">${objeto.incorrectAnswers[2]}`

/* ESTO ESTA COMENTADO PERO SON LOS BOTONES DE NEXT*/
/* const botonNext = document.querySelector("#proximo")
botonNext.addEventListener("click",()=>{
    preguntaas.forEach(pregunta =>{
        if(pregunta.getAttribute("value") === "correcta"){
            pregunta.style.color = "hsl(177, 72%, 37%)";
        }else if(pregunta.getAttribute("value") === "incorrecta"){
            pregunta.style.color = "#FF0000";
        }
})
}) */

/* FOR EACH QUE CAMBIA EL COLOR DE LAS CARTAS CUANDO UNA SE DA CLICK */
arrayDeLasDiv.forEach(div =>{
    div.addEventListener("click",()=>{
        arrayDeLasDiv.forEach(div =>{
        const cambiao = div.childNodes[0];
        if(cambiao.getAttribute("value") == "correcta"){
            cambiao.style.color = "	#7CFC00"
        }else if (cambiao.getAttribute("value") == "incorrecta"){
            cambiao.style.color ="#FF0000"
        }
    })
    })
})

