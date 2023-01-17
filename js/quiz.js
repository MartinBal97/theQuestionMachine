const questionsAPI = fetch("https://the-trivia-api.com/api/questions")
const containerPrincipal = document.querySelector(".containerPrincipal")
const preguntas = []

questionsAPI
    .then(res => res.json())
    .then(data =>  data.forEach(e => {
        preguntas.push(e)
    }))

console.log(preguntas);

preguntas.forEach((pregunta) => {
    containerPrincipal.innerHTML = `

    `
})