"use strict"

const img = document.querySelectorAll('.main_img'),
      modal = document.querySelector('.modal'),
      modalClose = document.querySelectorAll('[data-modal-close]'),
      modalBackground = document.querySelector('.modal_background'),
      secondModal = document.querySelector('.second_modal');

let check = 0;

function onOpen(e){
    if(check==0){
        e.target.src = "opened_box2.png";
        img.forEach(i=> i.removeEventListener('click', onOpen));
        setTimeout(()=>{
            modal.classList.add('show');
            modal.classList.remove('hide');

            modalBackground.classList.remove('hide');

            img.forEach(i=> i.addEventListener('click', onOpen));
        }, 1000);
        check++;
        
    } else if (check==1) {
        e.target.classList.add('hide');
        e.target.nextSibling.classList.add('show');
        e.target.nextSibling.classList.remove('hide');

        img.forEach(i=> i.removeEventListener('click', onOpen));
        setTimeout(()=>{
            secondModal.classList.add('show');
            secondModal.classList.remove('hide');

            modalBackground.classList.remove('hide');

            setTimeout(()=>{
                document.querySelector('.main').classList.add('hide');
            },1000);

        },1000);
    }
}

function onClose(e){
    e.target.parentElement.classList.remove('show');
    e.target.parentElement.classList.add('hide');
    
    modalBackground.classList.add('hide');
}

img.forEach(item =>{
    item.addEventListener('click', onOpen);
});

modalClose.forEach(item=>{
    item.addEventListener('click', onClose);
});