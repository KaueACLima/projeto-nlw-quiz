const perguntas = [
  {
    pergunta: "Qual é o único tipo de Pokémon que é imune ao tipo Veneno?",
    respostas: [
      "Inseto",
      "Fada",
      "Aço"
    ],
    correta: 2
  },
  {
    pergunta: "Qual é o tipo de Pokémon que é fraco contra quatro outros tipos diferentes?",
    respostas: [
      "Inseto",
      "Gelo",
      "Pedra"
    ],
    correta: 1
  },
  {
    pergunta: "Qual é o único tipo de Pokémon que é resistente ao tipo Fada?",
    respostas: [
      "Lutador",
      "Dragão",
      "Noturno"
    ],
    correta: 2
  },
  {
    pergunta: "Qual é o tipo de Pokémon que é forte contra o tipo Gelo?",
    respostas: [
      "Fogo",
      "Aço",
      "Elétrico"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o tipo de Pokémon que é imune ao tipo Fantasma?",
    respostas: [
      "Psíquico",
      "Normal",
      "Fantasma"
    ],
    correta: 1
  },
  {
    pergunta: "Qual é o tipo de Pokémon que é fraco contra o tipo Fada?",
    respostas: [
      "Venenoso",
      "Dragão",
      "Lutador"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o tipo de Pokémon que é forte contra o tipo Água?",
    respostas: [
      "Elétrico",
      "Planta",
      "Fogo"
    ],
    correta: 2
  },
  {
    pergunta: "Qual é o tipo de Pokémon que é resistente ao tipo Aço?",
    respostas: [
      "Fada",
      "Fogo",
      "Lutador"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o tipo de Pokémon que é imune ao tipo Elétrico?",
    respostas: [
      "Voador",
      "Terrestre",
      "Inseto"
    ],
    correta: 1
  },
  {
    pergunta: "Qual é o tipo de Pokémon que é forte contra o tipo Veneno?",
    respostas: [
      "Inseto",
      "Psíquico",
      "Lutador"
    ],
    correta: 2
  }
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

for(const item of perguntas) {
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta

  for(let resposta of item.respostas){
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name','pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta
      
      corretas.delete(item)
      if(estaCorreta){
        corretas.add(item)

      mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

      }
    }
    
    quizItem.querySelector('dl').appendChild(dt)
  }

  quizItem.querySelector('dl dt').remove()

 
 
 
  quiz.appendChild(quizItem)
}
