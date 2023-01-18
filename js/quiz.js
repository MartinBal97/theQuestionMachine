const preguntas = document.querySelectorAll(".cartaPregunta>p")
console.log(preguntas)

/* Funcion que cambia la respuesta correcta a verde y roja a las otras */

/* for(i=0 ; i < cuestiones.length ; i++){


} */
const botonNext = document.querySelector("#proximo")
console.log(botonNext)
botonNext.addEventListener("click",()=>{
    preguntas.forEach(pregunta =>{
        if(pregunta.getAttribute("value") === "correcta"){
            pregunta.style.color = "hsl(177, 72%, 37%)";
        }else if(pregunta.getAttribute("value") === "incorrecta"){
            pregunta.style.color = "#FF0000";
        }
})
})
preguntas.forEach(pregunta =>{
    pregunta.addEventListener("click",()=>{
        preguntas.forEach(pregunta =>{
            if(pregunta.getAttribute("value") === "correcta"){
                pregunta.style.color = "hsl(177, 72%, 37%)";
            }else if(pregunta.getAttribute("value") === "incorrecta"){
                pregunta.style.color = "#FF0000";
            }
        })
    })
})

