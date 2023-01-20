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
    arrayDeLasDiv.forEach(div =>{
        div.setAttribute("name","activado")
        divpai.appendChild(div) /* AQUI AÑADE AL CONTENEDOR DE LAS DIV YA CON LOS CAMBIOS EN ALEATORIO*/
    })
let cont = 1;
/* FUNCION QUE ACTIVA EL BOTON DEL NEXT */
const activarNext = elBotonNext =>{
    const elBotonPasar = document.querySelector(".nextQuestion")
    elBotonPasar.addEventListener("click",()=>{
        cont++
        if(cont != 11){
        let objeto = arrayLocal[arrayLocal.length-cont];
        cuestionCorrecta.innerHTML = `<p value ="correcta">${objeto.correctAnswer}</p>` /* AQUI CAMBIA EL HTML PARA CUESTION CORRECTA */
        inco1.innerHTML =`<p value ="incorrecta">${objeto.incorrectAnswers[0]}`
        inco2.innerHTML =`<p value ="incorrecta">${objeto.incorrectAnswers[1]}`
        inco3.innerHTML =`<p value ="incorrecta">${objeto.incorrectAnswers[2]}`
        let functionCalled = false;
        console.log(cont)
        }else{
            console.log("llegue a 10")
        }
    })
}

let arrayLocal =  JSON.parse(localStorage.getItem("array")) /* AQUI SE OBTIENE EL ARRAY PREGUNTAS DEL LOCAL STORAGE */


/* ITERACIONES POR EL ARRAY DE LAS  PREGUNTAS */
let objeto = arrayLocal[arrayLocal.length- 1] /* ESTO SERIA LA SELECCION DEL INDEX PARA ITERAR POR UN UNICO OBJETO,LUEGO CON EL BOTON NEXT ESTE INDEX VA A CAMBIAR */


/* AQUI SE CREA UNA VARIABLE QUE SELECCIONA LA DIV CON ID#1 PARA QUE SEA LA CUESTION CORRECTA */
let cuestionCorrecta = arrayDeLasDiv.find(element => element.id === "1")

cuestionCorrecta.innerHTML = `<p value ="correcta">${objeto.correctAnswer}</p>` /* AQUI CAMBIA EL HTML PARA CUESTION CORRECTA */

/* AQUI SE CREA LAS VARIABLES DE LAS INCORRECTAS */
let inco1 = arrayDeLasDiv.find(element => element.id === "2")
let inco2 = arrayDeLasDiv.find(element => element.id === "3")
let inco3 = arrayDeLasDiv.find(element => element.id === "4")

inco1.innerHTML =`<p value ="incorrecta">${objeto.incorrectAnswers[0]}`
inco2.innerHTML =`<p value ="incorrecta">${objeto.incorrectAnswers[1]}`
inco3.innerHTML =`<p value ="incorrecta">${objeto.incorrectAnswers[2]}`

let functionCalled = false;



/* FOR EACH QUE CAMBIA EL COLOR DE LAS CARTAS CUANDO UNA SE DA CLICK */
arrayDeLasDiv.forEach(div =>{
    div.addEventListener("click",()=>{ 
        const cambiao = div.childNodes[0];
        if(cambiao.getAttribute("value") == "correcta"){
            console.log("respuesta correcta")
        }else if (cambiao.getAttribute("value") == "incorrecta"){
            console.log("respuesta incorrecta")
        }
        arrayDeLasDiv.forEach(div =>{
            const cambiao = div.childNodes[0];
        if(cambiao.getAttribute("value") == "correcta"){
            cambiao.style.color = "	#7CFC00"
        }else if (cambiao.getAttribute("value") == "incorrecta"){
            cambiao.style.color ="#FF0000"
        }
        if(!functionCalled){
            activarNext();
        
            functionCalled = true;
        }
       
    })
    })
})


