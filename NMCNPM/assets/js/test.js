// Pop up lên second-modal để người dùng kiểm tra thông tin
const getModal_2 = document.querySelector('.second-modal');
const getButton = document.querySelector('.js-sbt-button');
function showBuyTicket2(){
    getModal_2.classList.add('second-open');
}  
getButton.addEventListener('click', showBuyTicket2)

//Close second-modal vs dau x
const c_modal_2 = document.querySelector('.js-top-close-2')
function closeBuyTicket2(){
    getModal_2.classList.remove('second-open');
}  
c_modal_2.addEventListener('click', closeBuyTicket2); 