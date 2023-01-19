const containerPrincipal = document.querySelector(".containerPrincipal");
const nextQuestion = document.querySelector(".nextQuestion");


let cont = 0;
nextQuestion.addEventListener("click", () => {
    cont++;
    fetch("https://the-trivia-api.com/api/questions?limit=1")
        .then((res) => res.json())
        .then((e) => {


        containerPrincipal.innerHTML = `
        <div class="containerPregunta">
            <h3>${e[0].question}</h3>
            <div class="preguntas">
                <div id="1" class="pregunta"><input type="radio" name="responses${cont}" value="correcta">${e[0].correctAnswer}</label></div>
                <div id="2" class="pregunta"><input type="radio" name="responses${cont}" value="incorrecta">${e[0].incorrectAnswers[0]}</label></div></div>
                <div id="3" class="pregunta"><input type="radio" name="responses${cont}" value="incorrecta">${e[0].incorrectAnswers[1]}</label></div></div>
                <div id="4" class="pregunta"><input type="radio" name="responses${cont}" value="incorrecta">${e[0].incorrectAnswers[2]}</label></div></div>
            </div>
        </div>`;

            const divNuevas = document.querySelectorAll(".pregunta") /* SELECCIONANDO LAS DIV QUE ESTAN AL PRINCIPIO EN EL HTML */
            const arrayDeLasPreguntas = []
            divNuevas.forEach(div => {
                arrayDeLasPreguntas.push(div) /* UN FOR EACH QUE PUSHEA LAS DIV PARA EL ARRAY "arrayDeLasDiv" */
            })

            
            console.log(arrayDeLasPreguntas);


        });
});
