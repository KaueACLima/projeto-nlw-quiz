const perguntas = [
  {
    pergunta: "Qual é o único tipo de Pokémon que não tem uma habilidade que o afeta negativamente?",
    respostas: [
      "Fantasma",
      "Dragão",
      "Inseto"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o número total de formas diferentes que o Pokémon Unown pode assumir?",
    respostas: [
      "26",
      "28",
      "30"
    ],
    correta: 1
  },
  {
    pergunta: "Qual é o menor Pokémon em termos de altura?",
    respostas: [
      "Joltik",
      "Flabébé",
      "Diglett"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o único Pokémon que não é do tipo Fantasma, mas tem a habilidade de aprender o movimento 'Fantoche'?",
    respostas: [
      "Shuppet",
      "Mimikyu",
      "Spiritomb"
    ],
    correta: 1
  },
  {
    pergunta: "Quantos diferentes tipos de Pokébolas existem até a geração 8?",
    respostas: [
      "20",
      "25",
      "30"
    ],
    correta: 2
  },
  {
    pergunta: "Qual é o único Pokémon que pode aprender todos os movimentos tipo Voador?",
    respostas: [
      "Scyther",
      "Hawlucha",
      "Tornadus"
    ],
    correta: 1
  },
  {
    pergunta: "Qual é o Pokémon com o maior número de resistências de tipo?",
    respostas: [
      "Shedinja",
      "Claydol",
      "Sableye"
    ],
    correta: 0
  },
  {
    pergunta: "Quantos quilômetros por hora (km/h) o Pokémon Electrode pode alcançar?",
    respostas: [
      "80",
      "100",
      "120"
    ],
    correta: 2
  },
  {
    pergunta: "Qual é o único Pokémon que pode aprender todos os movimentos tipo Fada?",
    respostas: [
      "Clefable",
      "Togekiss",
      "Sylveon"
    ],
    correta: 2
  },
  {
    pergunta: "Quantos diferentes movimentos tipo Normal existem até a geração 8?",
    respostas: [
      "80",
      "100",
      "120"
    ],
    correta: 2
  }
]

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
