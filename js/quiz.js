const questionsAPI = fetch("https://the-trivia-api.com/api/questions")
const containerPrincipal = document.querySelector(".containerPrincipal")
const preguntas = []

questionsAPI
    .then(res => res.json())
    .then(data =>  data.forEach(e => {

        containerPrincipal.innerHTML += `
        <div class="containerPregunta">
            <h3>${e.question}</h3>
            <div class="preguntas">
                <div class="pregunta"><input type="radio" name="responses" value="correct">${e.correctAnswer}</label></div>
                <div class="pregunta"><input type="radio" name="responses" value="incorrect">${e.incorrectAnswers[0]}</label></div></div>
                <div class="pregunta"><input type="radio" name="responses" value="incorrect">${e.incorrectAnswers[1]}</label></div></div>
                <div class="pregunta"><input type="radio" name="responses" value="incorrect">${e.incorrectAnswers[2]}</label></div></div>
            </div>
            <button onclick="nextQuestion(event)" class="btn-eliminar">Eliminar</button>
        </div>`
    }))

    function nextQuestion(event) {
        
    }
    