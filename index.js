const perguntas = [
  {
    pergunta: "Qual é o Pokémon inicial da região de Kanto?",
    respostas: [
      "Charmander",
      "Squirtle",
      "Bulbasaur"
    ],
    correta: 2
  },
  {
    pergunta: "Quem é o treinador principal da Equipe Rocket?",
    respostas: [
      "Jessie",
      "James",
      "Giovanni"
    ],
    correta: 2
  },
  {
    pergunta: "Qual é o tipo de Pokémon do Pikachu?",
    respostas: [
      "Elétrico",
      "Normal",
      "Fogo"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o lendário que tem o poder de controlar o tempo em Pokémon Diamond & Pearl?",
    respostas: [
      "Dialga",
      "Palkia",
      "Giratina"
    ],
    correta: 0
  },
  {
    pergunta: "Qual desses Pokémon é conhecido como o 'Guardião do Mar'?",
    respostas: [
      "Kyogre",
      "Groudon",
      "Rayquaza"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o número total de Pokémon até a geração 8?",
    respostas: [
      "800",
      "900",
      "1000"
    ],
    correta: 1
  },
  {
    pergunta: "Qual desses Pokémon é conhecido por ser capaz de megaevoluir?",
    respostas: [
      "Charizard",
      "Blastoise",
      "Venusaur"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o tipo principal do Pokémon Mewtwo?",
    respostas: [
      "Psíquico",
      "Sombrio",
      "Lutador"
    ],
    correta: 0
  },
  {
    pergunta: "Quem é o professor Pokémon na região de Hoenn?",
    respostas: [
      "Professor Oak",
      "Professor Elm",
      "Professor Birch"
    ],
    correta: 2
  },
  {
    pergunta: "Qual é o Pokémon lendário que simboliza a paz?",
    respostas: [
      "Mew",
      "Zygarde",
      "Celebi"
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
  