// корзина 
const modal = document.querySelector('.cart');
const modalClose = document.querySelector('.modal-close');
const buttonCart = document.querySelector('.button'); // кнопка корзины
// const modalBody = document.querySelector('.modal-body');

buttonCart.addEventListener('click', () => {
    modal.classList.add('visibility');

});

const getCloseModal = () => {
    // найти модальное окно и её боди

    const modal = document.querySelector('.cart');
    modal.addEventListener('click', (e) => {
        if (e.target.classList.contains('cart-body')){
            modal.classList.remove('visibility');
        }

        modalClose.addEventListener('click', (e) => {
            modal.classList.remove('visibility');
        
        });

        // if (!e.target.closest('.modal-body')) {
        //     modal.classList.remove('visibility');
        // }
        // if (e.target.closest('.modal-close')) {
        //     modal.classList.remove('visibility');
        // }
    })
};
getCloseModal();


// addCart Добавление карточек товаров
function addCart() {

    const CARDS = document.querySelectorAll('.menu-grid-item'); // карточки
    const cartEmpty = document.querySelector('#cart-empty'); // текст пусто
    const cartWrapper = document.querySelector('.cart-wrapper'); // карман
    // перебираем карточки
    CARDS.forEach((card) => {
        const btnCard = card.querySelector('.menu-grid-btn')
        // клик 
        btnCard.addEventListener('click', (e) => {
            const cardClone = card.cloneNode(true); // клонируем карточку 
            cartWrapper.appendChild(cardClone);
            cartEmpty.remove(); // удалим текст пусто
            showData();
            const removeBtn = cardClone.querySelector('.menu-grid-text');
            removeBtn.textContent = 'Удалить';
            removeBtn.addEventListener('click', () => {
                cardClone.remove();
                showData();
            })
        });

    })
    // найти кнопку в карточке
    const showData = () => {
        const cardsCart = cartWrapper.querySelectorAll('.menu-grid-item');
        const cartCount = document.querySelector('.button-count'); // счетчик
        cartCount.textContent = cardsCart.length;

        if (cardsCart.length === 0) {
            cartWrapper.appendChild(cartEmpty);
        }
    }

}
addCart()

