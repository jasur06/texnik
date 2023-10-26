let categoryBtn = document.querySelector('.catalog-btn');
let categoryMenu = document.querySelector('.modal');
let closeButton = document.querySelector('.close');




categoryBtn.addEventListener('click', ()=>{
    categoryMenu.classList.toggle('active');
})

closeButton.addEventListener('click', ()=>{
    categoryMenu.classList.remove('active');
})

