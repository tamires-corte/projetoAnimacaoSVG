class Cards {
 constructor() {
  this.posicaoSectionDicas = document.getElementById('section-dicas')
  this.cardEsquerda = document.querySelector('.card-esquerdo')
  this.cardDireita = document.querySelector('.card-direito') 
}

  scrollCards() {
    window.requestAnimationFrame(this.calculoScroll.bind(this))
  }

 calculoScroll() {
  const posicao = this.posicaoSectionDicas.getBoundingClientRect()['y'];
  if(posicao >= 770) {
    this.cardEsquerda.style.transform = `translate(${((-posicao) + 770)/2}%)`;
    this.cardDireita.style.transform = `translate(${((posicao) - 770)/2}%)`;
  }
}
}

export { Cards }