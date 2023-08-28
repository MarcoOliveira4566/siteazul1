// Variables
  
    const body = document.querySelector('body')
    const nav = document.querySelector('nav')
  
    // ADICIONAR CLASSE AO SCROLLAR
  
    function adicionarClasse () {
      window.addEventListener('scroll', () => {
        const alturaPagina = window.scrollY
        if (alturaPagina < 10) nav.classList.remove('scroll')
        else nav.classList.add('scroll')
      })
    }
  
    // Start
    adicionarClasse()
  
  
  