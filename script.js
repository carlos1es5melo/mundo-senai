// abre e fecha o menu "Sobre"
function alternarMenu(){
  document.getElementById('menuSobre').classList.toggle('aberto')
}
 
// troca a página que está sendo exibida
function mostrarPagina(id){
  document.querySelectorAll('.pagina').forEach(pagina => pagina.classList.remove('ativa'))
  document.getElementById(id).classList.add('ativa')
  document.getElementById('menuSobre').classList.remove('aberto')
}

// abre e fecha o menu hambúrguer (mobile)
function alternarMenuMobile(){
  document.getElementById('menuMobile').classList.toggle('aberto');
}