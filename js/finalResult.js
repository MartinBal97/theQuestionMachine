let puntaje =JSON.parse(localStorage.getItem('puntaje'))
let containerPrincipal = document.querySelector('.containerPrincipal')

containerPrincipal.innerHTML = `
    <h3>Your score is ${puntaje * 10} / 100.</h3>
`