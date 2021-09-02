let headerButton = document.querySelector('.header__button'),
    catalogButton = document.querySelectorAll('.catalog__button')
    popup_1 = document.querySelector('.popup-1'), 
    pop__close = document.querySelectorAll('.pop__close')

function openPopup(id){
  document.querySelector('.'+id).classList.add('popup_active')
}
function closePopup(id){
  document.querySelector('.'+id).classList.remove('popup_active')
}

function addAfunc(){
  openPopup(this.dataset.id)
}
function addDfunc(){
  closePopup(this.dataset.popup)
}
for (var i = 0; i < catalogButton.length; i++) {
  catalogButton[i].addEventListener('click', addAfunc)
}
for (var i = 0; i < pop__close.length; i++) {
  pop__close[i].addEventListener('click', addDfunc)
}
headerButton.addEventListener('click', addAfunc)
