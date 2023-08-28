const conteudoDiv2 = document.querySelector('.conteudo');
const setaAvancar = document.querySelector('.seta.avancar');
const setaVoltar = document.querySelector('.seta.voltar');

// Variável para rastrear a posição atual do translateX
let currentPosition2 = 0;

// Limite máximo e mínimo para a posição
const maxPosition = 320 * 3; // 3 slides * 320px
const minPosition = 0;

// Adiciona um evento de clique à seta avançar
setaAvancar.addEventListener('click', () => {
  // Adiciona 320px ao valor atual de currentPosition2, mas não permite que passe do limite
  currentPosition2 = Math.min(maxPosition, currentPosition2 + 320);

  // Define o novo valor de translateX na propriedade style
  conteudoDiv2.style.transform = `translateX(-${currentPosition2}px)`;
});

// Adiciona um evento de clique à seta voltar
setaVoltar.addEventListener('click', () => {
  // Subtrai 320px do valor atual de currentPosition2, mas não permite que seja menor que 0px
  currentPosition2 = Math.max(minPosition, currentPosition2 - 320);

  // Define o novo valor de translateX na propriedade style
  conteudoDiv2.style.transform = `translateX(-${currentPosition2}px)`;
});
