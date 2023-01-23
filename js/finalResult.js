let puntaje =JSON.parse(localStorage.getItem('puntaje'))
let containerPrincipal = document.querySelector('.containerPrincipal')

containerPrincipal.innerHTML = `
    <h3>Tu puntaje es de ${puntaje * 10}/100</h3>
`