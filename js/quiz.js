const divNuevas = document.querySelectorAll(".carta")
const arrayDeLasDiv = []
divNuevas.forEach(div =>{
    arrayDeLasDiv.push(div)
})
const divpai = document.querySelector(".cartaPregunta")
divNuevas.forEach(div =>{
    divpai.removeChild(div)
})
console.log(arrayDeLasDiv)
arrayDeLasDiv.sort(() => Math.random() - 0.5);
console.log(arrayDeLasDiv);
arrayDeLasDiv.forEach(div =>{
    divpai.appendChild(div)
})







const preguntas = document.querySelectorAll(".cartaPregunta>.carta>p")
let cont = 0
console.log(preguntas)

arrayNuevo =  [];
preguntas.forEach(pregunta =>{
    arrayNuevo.push(pregunta)
})
arrayNuevo.sort(() => Math.random() - 0.5);
console.log(arrayNuevo);

preguntas.forEach((pregunta,i) => {

    pregunta.innerHTML=`${arrayNuevo[i].innerText}`
    
})














const botonNext = document.querySelector("#proximo")
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
const questionsAPI = fetch("https://the-trivia-api.com/api/questions")
const containerPrincipal = document.querySelector(".containerPrincipal")
const preguntos = [];
questionsAPI
    .then(res => res.json())
    .then(data =>  data.forEach(e => {
        preguntos.push(e)
    }))

console.log(preguntos);
