const questionElement = document.getElementById('question');
const optionsContainer = document.querySelector('.option-container');
const btnContainer = document.getElementById('btn-container');
const nextButton = document.getElementById('next-btn');
const restartButton = document.getElementById('restart-btn');
const resultElement = document.getElementById('result');

const questions = [

            {
    pergunta: "Qual é o órgão responsável pela produção de bile?",
    primeiraresposta: "Fígado",
    segundaresposta: "Pâncreas",
    terceiraresposta: "Baço",
    quartaresposta: "Rim", 
    respostacerta: "Fígado", 
},

{
    pergunta: "Qual desses não é um tipo de célula sanguínea?",
    primeiraresposta: "Glóbulos brancos",
    segundaresposta: "Hemácias",
    terceiraresposta: "Plaquetas",
    quartaresposta: "Linfócitos", 
    respostacerta: "Linfócitos", 
},

{
    pergunta: "O que é a anemia?",
    primeiraresposta: "Aumento da pressão arterial",
    segundaresposta: "Redução do número de glóbulos brancos",
    terceiraresposta: "Deficiência de ferro no sangue",
    quartaresposta: "Inflamação dos pulmões", 
    respostacerta: "Deficiência de ferro no sangue", 
},

// Mais perguntas aqui...

{
    pergunta: "O que é o colesterol HDL?",
    primeiraresposta: "Colesterol 'ruim'",
    segundaresposta: "Colesterol 'bom'",
    terceiraresposta: "Colesterol total",
    quartaresposta: "Colesterol LDL", 
    respostacerta: "Colesterol 'bom'", 
},

{
    pergunta: "Qual é o nome dado à doença em que o sistema imunológico ataca erroneamente as células do corpo?",
    primeiraresposta: "Diabetes",
    segundaresposta: "Artrite",
    terceiraresposta: "Asma",
    quartaresposta: "Doença autoimune", 
    respostacerta: "Doença autoimune", 
},

{
    pergunta: "Qual é a função dos glóbulos brancos no sistema imunológico?",
    primeiraresposta: "Coagulação do sangue",
    segundaresposta: "Transporte de oxigênio",
    terceiraresposta: "Combate a infecções",
    quartaresposta: "Armazenamento de gordura", 
    respostacerta: "Combate a infecções", 
},

{
    pergunta: "O que é a insulina?",
    primeiraresposta: "Um hormônio que regula o açúcar no sangue",
    segundaresposta: "Um tipo de célula sanguínea",
    terceiraresposta: "Uma enzima digestiva",
    quartaresposta: "Um neurotransmissor", 
    respostacerta: "Um hormônio que regula o açúcar no sangue", 
},

{
    pergunta: "Qual é o nome do osso longo localizado no braço?",
    primeiraresposta: "Fêmur",
    segundaresposta: "Úmero",
    terceiraresposta: "Tíbia",
    quartaresposta: "Costela", 
    respostacerta: "Úmero", 
},

{
    pergunta: "Que hormônio é conhecido como o 'hormônio do crescimento'?",
    primeiraresposta: "Insulina",
    segundaresposta: "Testosterona",
    terceiraresposta: "Adrenalina",
    quartaresposta: "Hormônio do crescimento (HGH)", 
    respostacerta: "Hormônio do crescimento (HGH)", 
},

{
    pergunta: "Qual é a função principal dos ossos do crânio?",
    primeiraresposta: "Proteger o cérebro",
    segundaresposta: "Produzir células sanguíneas",
    terceiraresposta: "Armazenar cálcio",
    quartaresposta: "Facilitar a movimentação dos membros", 
    respostacerta: "Proteger o cérebro", 
},

{
    pergunta: "O que é o colesterol LDL?",
    primeiraresposta: "Colesterol 'ruim'",
    segundaresposta: "Colesterol 'bom'",
    terceiraresposta: "Colesterol total",
    quartaresposta: "Colesterol HDL", 
    respostacerta: "Colesterol 'ruim'", 
},

{
    pergunta: "Qual é o nome dado à inflamação das articulações?",
    primeiraresposta: "Bronquite",
    segundaresposta: "Asma",
    terceiraresposta: "Artrite",
    quartaresposta: "Pneumonia", 
    respostacerta: "Artrite", 
},

{
    pergunta: "Qual é o nome dado ao sangue que é bombeado do coração para o corpo?",
    primeiraresposta: "Sangue arterial",
    segundaresposta: "Sangue venoso",
    terceiraresposta: "Sangue oxigenado",
    quartaresposta: "Sangue desoxigenado", 
    respostacerta: "Sangue arterial", 
},

{
    pergunta: "O que é a cirrose?",
    primeiraresposta: "Uma doença do coração",
    segundaresposta: "Uma doença renal",
    terceiraresposta: "Uma doença hepática",
    quartaresposta: "Uma doença pulmonar", 
    respostacerta: "Uma doença hepática", 
},

// Mais perguntas aqui...

{
    pergunta: "Qual é a principal função dos rins?",
    primeiraresposta: "Produção de bile",
    segundaresposta: "Filtração de resíduos do sangue",
    terceiraresposta: "Produção de insulina",
    quartaresposta: "Transporte de oxigênio para os tecidos", 
    respostacerta: "Filtração de resíduos do sangue", 
},

{
    pergunta: "Qual é o nome dado à condição em que o coração não consegue bombear sangue suficiente para atender às necessidades do corpo?",
    primeiraresposta: "Insuficiência cardíaca",
    segundaresposta: "Arritmia cardíaca",
    terceiraresposta: "Infarto do miocárdio",
    quartaresposta: "Hipertensão arterial", 
    respostacerta: "Insuficiência cardíaca", 
},

{
    pergunta: "O que é a trombose?",
    primeiraresposta: "Inflamação dos pulmões",
    segundaresposta: "Coágulo sanguíneo",
    terceiraresposta: "Inflamação das articulações",
    quartaresposta: "Inflamação do fígado", 
    respostacerta: "Coágulo sanguíneo", 
},

// Mais perguntas aqui...

{
    pergunta: "Qual é a função principal do sistema endócrino?",
    primeiraresposta: "Coordenação de movimentos voluntários",
    segundaresposta: "Regulação do metabolismo e das funções corporais",
    terceiraresposta: "Transporte de oxigênio para os tecidos",
    quartaresposta: "Digestão de alimentos", 
    respostacerta: "Regulação do metabolismo e das funções corporais", 
},

{
    pergunta: "O que é a bronquite?",
    primeiraresposta: "Uma infecção nos pulmões",
    segundaresposta: "Um distúrbio do sistema nervoso",
    terceiraresposta: "Uma doença ocular que danifica o nervo óptico",
    quartaresposta: "Uma condição de pele inflamada", 
    respostacerta: "Uma infecção nos pulmões", 
},

{
    pergunta: "Qual é o nome dado à inflamação das amígdalas?",
    primeiraresposta: "Amigdalite",
    segundaresposta: "Bronquite",
    terceiraresposta: "Artrite",
    quartaresposta: "Pneumonia", 
    respostacerta: "Amigdalite", 
},

{
    pergunta: "O que é a arteriosclerose?",
    primeiraresposta: "Um tipo de câncer",
    segundaresposta: "Um distúrbio gastrointestinal",
    terceiraresposta: "Um distúrbio do sistema imunológico",
    quartaresposta: "Um endurecimento das artérias devido ao acúmulo de placas de gordura", 
    respostacerta: "Um endurecimento das artérias devido ao acúmulo de placas de gordura", 
},

{
    pergunta: "Qual é o nome dado à inflamação das veias?",
    primeiraresposta: "Arterite",
    segundaresposta: "Flebite",
    terceiraresposta: "Trombose",
    quartaresposta: "Endocardite", 
    respostacerta: "Flebite", 
},

{
    pergunta: "Qual é o nome dado à inflamação das articulações causada por um acúmulo de ácido úrico?",
    primeiraresposta: "Artrite",
    segundaresposta: "Artrose",
    terceiraresposta: "Gota",
    quartaresposta: "Osteoporose", 
    respostacerta: "Gota", 
},

{
    pergunta: "O que é a apendicite?",
    primeiraresposta: "Inflamação do apêndice",
    segundaresposta: "Inflamação do fígado",
    terceiraresposta: "Inflamação do intestino",
    quartaresposta: "Inflamação do estômago", 
    respostacerta: "Inflamação do apêndice", 
},

// Últimas perguntas aqui...

{
    pergunta: "Qual é a função do pâncreas?",
    primeiraresposta: "Produção de bile",
    segundaresposta: "Produção de insulina",
    terceiraresposta: "Filtração de resíduos do sangue",
    quartaresposta: "Transporte de oxigênio para os tecidos", 
    respostacerta: "Produção de insulina", 
},

{
    pergunta: "O que é a osteoporose?",
    primeiraresposta: "Uma infecção nos ossos",
    segundaresposta: "Uma doença autoimune",
    terceiraresposta: "Uma inflamação das articulações",
    quartaresposta: "Uma condição em que os ossos se tornam frágeis e quebradiços", 
    respostacerta: "Uma condição em que os ossos se tornam frágeis e quebradiços", 
},

{
    pergunta: "Qual desses é um sintoma comum de gripe?",
    primeiraresposta: "Dor de cabeça",
    segundaresposta: "Coceira nos olhos",
    terceiraresposta: "Dor de estômago",
    quartaresposta: "Coceira na garganta", 
    respostacerta: "Dor de cabeça", 
},

{
    pergunta: "Qual desses órgãos é responsável pela produção de insulina no corpo humano?",
    primeiraresposta: "Fígado",
    segundaresposta: "Pâncreas",
    terceiraresposta: "Baço",
    quartaresposta: "Rim", 
    respostacerta: "Pâncreas", 
},

{
    pergunta: "Qual é a função principal do sistema nervoso central?",
    primeiraresposta: "Regulação da temperatura corporal",
    segundaresposta: "Coordenação de movimentos voluntários",
    terceiraresposta: "Digestão de alimentos",
    quartaresposta: "Filtragem de impurezas no sangue", 
    respostacerta: "Coordenação de movimentos voluntários", 
},

{
    pergunta: "Qual destes é um sinal de possível ataque cardíaco?",
    primeiraresposta: "Tosse persistente",
    segundaresposta: "Sensação de queimação no estômago",
    terceiraresposta: "Dor no peito",
    quartaresposta: "Visão turva", 
    respostacerta: "Dor no peito", 
},

{
    pergunta: "O que é o principal componente do sangue?",
    primeiraresposta: "Hemoglobina",
    segundaresposta: "Cálcio",
    terceiraresposta: "Ácido úrico",
    quartaresposta: "Colesterol", 
    respostacerta: "Hemoglobina", 
},

{
    pergunta: "Qual destas opções é uma função dos rins?",
    primeiraresposta: "Produção de bile",
    segundaresposta: "Filtração de resíduos do sangue",
    terceiraresposta: "Produção de insulina",
    quartaresposta: "Transporte de oxigênio para os tecidos", 
    respostacerta: "Filtração de resíduos do sangue", 
},

{
    pergunta: "Qual é o nome dado à doença em que o sistema imunológico ataca erroneamente as células do corpo?",
    primeiraresposta: "Diabetes",
    segundaresposta: "Artrite",
    terceiraresposta: "Asma",
    quartaresposta: "Doença autoimune", 
    respostacerta: "Doença autoimune", 
},

{
    pergunta: "Qual é a função dos glóbulos brancos no sistema imunológico?",
    primeiraresposta: "Coagulação do sangue",
    segundaresposta: "Transporte de oxigênio",
    terceiraresposta: "Combate a infecções",
    quartaresposta: "Armazenamento de gordura", 
    respostacerta: "Combate a infecções", 
},

{
    pergunta: "O que é a insulina?",
    primeiraresposta: "Um hormônio que regula o açúcar no sangue",
    segundaresposta: "Um tipo de célula sanguínea",
    terceiraresposta: "Uma enzima digestiva",
    quartaresposta: "Um neurotransmissor", 
    respostacerta: "Um hormônio que regula o açúcar no sangue", 
},

{
    pergunta: "Qual é o nome do osso longo localizado no braço?",
    primeiraresposta: "Fêmur",
    segundaresposta: "Úmero",
    terceiraresposta: "Tíbia",
    quartaresposta: "Costela", 
    respostacerta: "Úmero", 
},

{
    pergunta: "Que hormônio é conhecido como o 'hormônio do crescimento'?",
    primeiraresposta: "Insulina",
    segundaresposta: "Testosterona",
    terceiraresposta: "Adrenalina",
    quartaresposta: "Hormônio do crescimento (HGH)", 
    respostacerta: "Hormônio do crescimento (HGH)", 
},

{
    pergunta: "Qual é a função principal dos ossos do crânio?",
    primeiraresposta: "Proteger o cérebro",
    segundaresposta: "Produzir células sanguíneas",
    terceiraresposta: "Armazenar cálcio",
    quartaresposta: "Facilitar a movimentação dos membros", 
    respostacerta: "Proteger o cérebro", 
},

{
    pergunta: "O que é o colesterol LDL?",
    primeiraresposta: "Colesterol 'ruim'",
    segundaresposta: "Colesterol 'bom'",
    terceiraresposta: "Colesterol total",
    quartaresposta: "Colesterol HDL", 
    respostacerta: "Colesterol 'ruim'", 
},

{
    pergunta: "Qual é o nome dado à inflamação das articulações?",
    primeiraresposta: "Bronquite",
    segundaresposta: "Asma",
    terceiraresposta: "Artrite",
    quartaresposta: "Pneumonia", 
    respostacerta: "Artrite", 
},

{
    pergunta: "Qual é o nome dado à inflamação das amígdalas?",
    primeiraresposta: "Amigdalite",
    segundaresposta: "Bronquite",
    terceiraresposta: "Artrite",
    quartaresposta: "Pneumonia", 
    respostacerta: "Amigdalite", 
},

{
    pergunta: "Qual é o nome dado à inflamação das veias?",
    primeiraresposta: "Arterite",
    segundaresposta: "Flebite",
    terceiraresposta: "Trombose",
    quartaresposta: "Endocardite", 
    respostacerta: "Flebite", 
},

{
    pergunta: "Qual é o nome dado à inflamação das articulações causada por um acúmulo de ácido úrico?",
    primeiraresposta: "Artrite",
    segundaresposta: "Artrose",
    terceiraresposta: "Gota",
    quartaresposta: "Osteoporose", 
    respostacerta: "Gota", 
},

{
    pergunta: "Qual é o nome dado à inflamação do apêndice?",
    primeiraresposta: "Apendicite",
    segundaresposta: "Gastrite",
    terceiraresposta: "Colite",
    quartaresposta: "Pancreatite", 
    respostacerta: "Apendicite", 
},

{
    pergunta: "Qual é a função do pâncreas?",
    primeiraresposta: "Produção de bile",
    segundaresposta: "Produção de insulina",
    terceiraresposta: "Filtração de resíduos do sangue",
    quartaresposta: "Transporte de oxigênio para os tecidos", 
    respostacerta: "Produção de insulina", 
},

{
    pergunta: "O que é a osteoporose?",
    primeiraresposta: "Uma infecção nos ossos",
    segundaresposta: "Uma doença autoimune",
    terceiraresposta: "Uma inflamação das articulações",
    quartaresposta: "Uma condição em que os ossos se tornam frágeis e quebradiços", 
    respostacerta: "Uma condição em que os ossos se tornam frágeis e quebradiços", 
},

{
    pergunta: "Qual é a função dos rins?",
    primeiraresposta: "Produção de bile",
    segundaresposta: "Filtração de resíduos do sangue",
    terceiraresposta: "Produção de insulina",
    quartaresposta: "Transporte de oxigênio para os tecidos", 
    respostacerta: "Filtração de resíduos do sangue", 
},

{
    pergunta: "Qual é o nome dado à condição em que o coração não consegue bombear sangue suficiente para atender às necessidades do corpo?",
    primeiraresposta: "Insuficiência cardíaca",
    segundaresposta: "Arritmia cardíaca",
    terceiraresposta: "Infarto do miocárdio",
    quartaresposta: "Hipertensão arterial", 
    respostacerta: "Insuficiência cardíaca", 
},

{
    pergunta: "O que é a trombose?",
    primeiraresposta: "Inflamação dos pulmões",
    segundaresposta: "Coágulo sanguíneo",
    terceiraresposta: "Inflamação das articulações",
    quartaresposta: "Inflamação do fígado", 
    respostacerta: "Coágulo sanguíneo", 
},

{
    pergunta: "Qual é a função principal do sistema endócrino?",
    primeiraresposta: "Coordenação de movimentos voluntários",
    segundaresposta: "Regulação do metabolismo e das funções corporais",
    terceiraresposta: "Transporte de oxigênio para os tecidos",
    quartaresposta: "Digestão de alimentos", 
    respostacerta: "Regulação do metabolismo e das funções corporais", 
},

{
    pergunta: "O que é a bronquite?",
    primeiraresposta: "Uma infecção nos pulmões",
    segundaresposta: "Um distúrbio do sistema nervoso",
    terceiraresposta: "Uma doença ocular que danifica o nervo óptico",
    quartaresposta: "Uma condição de pele inflamada", 
    respostacerta: "Uma infecção nos pulmões", 
},

{
    pergunta: "Qual é o nome dado à inflamação das amígdalas?",
    primeiraresposta: "Amigdalite",
    segundaresposta: "Bronquite",
    terceiraresposta: "Artrite",
    quartaresposta: "Pneumonia", 
    respostacerta: "Amigdalite", 
},

{
    pergunta: "Qual é o nome dado à condição em que há um endurecimento das artérias devido ao acúmulo de placas de gordura?",
    primeiraresposta: "Aterosclerose",
    segundaresposta: "Arteriosclerose",
    terceiraresposta: "Trombose",
    quartaresposta: "Endocardite", 
    respostacerta: "Aterosclerose", 
},

{
    pergunta: "Qual é o nome dado à inflamação das veias?",
    primeiraresposta: "Arterite",
    segundaresposta: "Flebite",
    terceiraresposta: "Trombose",
    quartaresposta: "Endocardite", 
    respostacerta: "Flebite", 
},

{
    pergunta: "Qual é o nome dado à inflamação das articulações causada por um acúmulo de ácido úrico?",
    primeiraresposta: "Artrite",
    segundaresposta: "Artrose",
    terceiraresposta: "Gota",
    quartaresposta: "Osteoporose", 
    respostacerta: "Gota", 
},

{
    pergunta: "O que é a apendicite?",
    primeiraresposta: "Inflamação do apêndice",
    segundaresposta: "Inflamação do fígado",
    terceiraresposta: "Inflamação do intestino",
    quartaresposta: "Inflamação do estômago", 
    respostacerta: "Inflamação do apêndice", 
},

{
    pergunta: "Qual é a função do pâncreas?",
    primeiraresposta: "Produção de bile",
    segundaresposta: "Produção de insulina",
    terceiraresposta: "Filtração de resíduos do sangue",
    quartaresposta: "Transporte de oxigênio para os tecidos", 
    respostacerta: "Produção de insulina", 
},

{
    pergunta: "O que é a osteoporose?",
    primeiraresposta: "Uma infecção nos ossos",
    segundaresposta: "Uma doença autoimune",
    terceiraresposta: "Uma inflamação das articulações",
    quartaresposta: "Uma condição em que os ossos se tornam frágeis e quebradiços", 
    respostacerta: "Uma condição em que os ossos se tornam frágeis e quebradiços", 
},

{
    pergunta: "Qual é a função dos rins?",
    primeiraresposta: "Produção de bile",
    segundaresposta: "Filtração de resíduos do sangue",
    terceiraresposta: "Produção de insulina",
    quartaresposta: "Transporte de oxigênio para os tecidos", 
    respostacerta: "Filtração de resíduos do sangue", 
},

{
    pergunta: "Qual é o nome dado à condição em que o coração não consegue bombear sangue suficiente para atender às necessidades do corpo?",
    primeiraresposta: "Insuficiência cardíaca",
    segundaresposta: "Arritmia cardíaca",
    terceiraresposta: "Infarto do miocárdio",
    quartaresposta: "Hipertensão arterial", 
    respostacerta: "Insuficiência cardíaca", 
},

{
    pergunta: "O que é a trombose?",
    primeiraresposta: "Inflamação dos pulmões",
    segundaresposta: "Coágulo sanguíneo",
    terceiraresposta: "Inflamação das articulações",
    quartaresposta: "Inflamação do fígado", 
    respostacerta: "Coágulo sanguíneo", 
},

{
    pergunta: "Qual é a função principal do sistema endócrino?",
    primeiraresposta: "Coordenação de movimentos voluntários",
    segundaresposta: "Regulação do metabolismo e das funções corporais",
    terceiraresposta: "Transporte de oxigênio para os tecidos",
    quartaresposta: "Digestão de alimentos", 
    respostacerta: "Regulação do metabolismo e das funções corporais", 
},

{
    pergunta: "O que é a bronquite?",
    primeiraresposta: "Uma infecção nos pulmões",
    segundaresposta: "Um distúrbio do sistema nervoso",
    terceiraresposta: "Uma doença ocular que danifica o nervo óptico",
    quartaresposta: "Uma condição de pele inflamada", 
    respostacerta: "Uma infecção nos pulmões", 
},

// Mais perguntas aqui...

 
    // Adicione mais perguntas conforme necessário
];

let currentQuestionIndex = 0;
let correctAnswers = 0;
let wrongAnswers = 0;

// Função para exibir a próxima pergunta
function showNextQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.pergunta;

    // Limpa as opções anteriores
    while (optionsContainer.firstChild) {
        optionsContainer.removeChild(optionsContainer.firstChild);
    }

    // Adiciona as novas opções
    const optionButtons = [
        currentQuestion.primeiraresposta,
        currentQuestion.segundaresposta,
        currentQuestion.terceiraresposta,
        currentQuestion.quartaresposta
    ];

    optionButtons.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = `${option}`;
        button.classList.add('option', 'btn', 'btn-outline-secondary');
        button.setAttribute('data-letter', String.fromCharCode(65 + index)); // A, B, C, D
        button.addEventListener('click', checkAnswer);
        optionsContainer.appendChild(button);
    });

    // Esconde o botão "Próxima Pergunta" e as opções
    btnContainer.classList.add('hide');
}

// Função para verificar a resposta selecionada
function checkAnswer(event) {
    const selectedOption = event.target;
    const currentQuestion = questions[currentQuestionIndex];
    const correctAnswer = currentQuestion.respostacerta;

    if (selectedOption.textContent === correctAnswer) { // Correção na comparação
        selectedOption.classList.add('correct');
        showResultMessage('Acertou!');
        correctAnswers++;
    } else {
        selectedOption.classList.add('wrong');
        // Destaca a resposta correta
        Array.from(optionsContainer.children).forEach(option => {
            if (option.textContent === correctAnswer) { // Correção na comparação
                option.classList.add('correct');
            }
        });
        showResultMessage('Errou!');
        wrongAnswers++;
    }

    // Exibe o botão "Próxima Pergunta"
    btnContainer.classList.remove('hide');
}


// Função para exibir a mensagem de resultado
function showResultMessage(message) {
    const resultMessage = document.querySelector('.message');
    resultMessage.textContent = message;
    resultMessage.classList.remove('hide');
}

// Função para exibir o resultado do quiz
function showQuizResult() {
    const resultContainer = document.getElementById('result-container');
    const resultElement = document.getElementById('result');
    const messageElement = document.querySelector('.message');

    // Mostra o container de resultado
    resultContainer.classList.remove('hide');
    resultElement.classList.remove('hide'); // Exibe o elemento de resultado

    // Exibe o número de acertos e erros
    resultElement.textContent = `Acertos: ${correctAnswers} | Erros: ${wrongAnswers}`;

    // Esconde a mensagem de resultado da última pergunta
    messageElement.classList.add('hide');
}



// Event listener para o botão "Próxima Pergunta"
nextButton.addEventListener('click', () => {
    // Incrementa o índice da pergunta atual
    currentQuestionIndex++;
    // Verifica se todas as perguntas foram respondidas
    if (currentQuestionIndex < questions.length) {
        showNextQuestion();
    } else {
        // Se todas as perguntas foram respondidas, oculta o botão "Próxima Pergunta"
        nextButton.classList.add('hide');
        questionElement.textContent = 'Parabéns! Você concluiu o quiz.';
        showQuizResult(); // Exibe o resultado do quiz
        restartButton.classList.remove('hide');
    }
});



// Event listener para o botão "Reiniciar Quiz"
restartButton.addEventListener('click', () => {
    currentQuestionIndex = 0;
    correctAnswers = 0;
    wrongAnswers = 0;
    nextButton.classList.remove('hide');
    restartButton.classList.add('hide');
    resultElement.classList.add('hide');
    showNextQuestion();
});

// Exibe a primeira pergunta
showNextQuestion();

