const containerPrincipal = document.querySelector(".containerPrincipal");
const nextQuestion = document.querySelector(".nextQuestion");

let puntaje = 0;
let cont = 0;
nextQuestion.addEventListener("click", () => {
    cont++;

    fetch("https://the-trivia-api.com/api/questions?limit=1")
    .then((res) => res.json())
    .then((e) => {

        function randomsNumbers() {
            let randoms = [];
            while (randoms.length < 4) {
                let random = Math.floor(Math.random() * (4));
                if (randoms.indexOf(random) == -1) {
                    randoms.push(random);
                }
            }
            return randoms
        }

        let randoms = randomsNumbers()

        if (cont < 11) {
            containerPrincipal.innerHTML = `
            <p> Pregunta número ${cont}</p>
            <h3>${e[0].question}</h3>
            <div class="containerPregunta">
                <div class="preguntas">
                    
                <div style="order:${randoms[0]};" id="1" class="pregunta">
                        <input class="inpRad" type="radio" name="responses${cont}" value="correct">
                        <label>${e[0].correctAnswer}</label>
                    </div>
    
                    <div style="order:${randoms[1]};" id="2" class="pregunta">
                        <input class="inpRad" type="radio" name="responses${cont}" value="incorrect">
                        <label>${e[0].incorrectAnswers[0]}</label>
                    </div>
    
                    <div style="order:${randoms[2]};" id="3" class="pregunta">
                        <input class="inpRad" type="radio" name="responses${cont}" value="incorrect">
                        <label>${e[0].incorrectAnswers[1]} </label>
                    </div>
    
                    <div style="order:${randoms[3]};" id="4" class="pregunta">
                        <input class="inpRad" type="radio" name="responses${cont}" value="incorrect">
                        <label>${e[0].incorrectAnswers[2]}</label>
                    </div>
                </div>
                <button disabled id="checkAnswer">Check Answer</button>
                <div class="showCorrect">
                </div>`;
        } 

        const showCorrect = document.querySelector('.showCorrect')
        const inputs = document.querySelectorAll('.inpRad')
       
        inputs.forEach(input => input.disabled = false)

        let checkAnswer = document.querySelector("#checkAnswer")
        nextQuestion.disabled = true;

        inputs.forEach((input) => {
            input.addEventListener('click', () => {
                checkAnswer.disabled = false;
            })
        })
        nextQuestion.innerHTML='Next Question'
        checkAnswer.addEventListener("click", () => {
            inputChecked = document.querySelector(`input[name=responses${cont}]:checked`).value

            if (inputChecked === 'correct') {
                puntaje++
                console.log(puntaje);
                showCorrect.innerHTML = `<p>Tu respuesta es correcta !!</p>`
                localStorage.setItem('puntaje', JSON.stringify(puntaje))
            } else {
                inputs.forEach((input) => {
                    if (input.value=== 'correct') {
                        let correctAnswer = input.nextElementSibling.innerText
                        showCorrect.innerHTML = `
                                <p>Tu respuesta es incorrecta.</p>
                                <p>La respuesta correcta es ${correctAnswer}.</p>
                                `
                    }
                })
            }

            checkAnswer.disabled = true;
            nextQuestion.disabled = false;
            inputs.forEach(input => input.disabled = true)

            if (cont == 10) {
                nextQuestion.innerHTML=` <a href="./pages/finalResult.html">Ver Resultados !!</a>  `    
            }
        })
    })
})
