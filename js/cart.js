// корзина 
const modal = document.querySelector('.cart');
const modalClose = document.querySelector('.modal-close');
const buttonCart = document.querySelector('.button'); // кнопка корзины

buttonCart.addEventListener('click', () => {
    modal.classList.add('visibility');
});
modalClose.addEventListener('click', () => {
    modal.classList.remove('visibility');
});


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

