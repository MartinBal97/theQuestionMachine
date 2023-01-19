
// 
//  </div>
//     <div class="preguntas">
//          <div class="pregunta1"><input type="radio"><label>asdfafgsdadfgasdgf</label></div>
//          <div class="pregunta2"><input type="radio"><label>ghjdfjghdfjddf</label></div>
//          <div class="pregunta3"><input type="radio"><label>fsghgfdhsghs</label></div>
//          <div class="pregunta4"><input type="radio"><label>shfshgfdhsfdgsdfgh</label></div>
//  </div>
//          <button>next question</button>  <button>result</button>

// `
// contenedor.append.div
// }))
//  

const pregunta = fetch("https://the-trivia-api.com/api/questions")
    .then(response => response.json())
    .then(data => data)

localStorage.setItem('data', JSON.stringify(data))