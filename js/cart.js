{
    const modal = document.querySelector('._modal');
    const modalClose = document.querySelector('.modal-close');
    const buttonCart = document.querySelector('.button');
    
    buttonCart.addEventListener('click', () => {
        modal.classList.add('visibility');
    });
    modalClose.addEventListener('click', () => {
        modal.classList.remove('visibility');
    });        

}
function addCart() {
    // addCart Добавление карточек товаров

    // ищем карточки в диве .goods ".card".
    const cards = document.querySelectorAll('.menu-grid-item'),
    
    // ищем оболочку корзины
    // ищем карман корзины 
    cartWrapper = document.querySelector('.cart-wrapper'),
    cartEpmty = document.getElementById('cart-empty'),
    // ищем счетчик корзины 
    countGoods = document.querySelector('.button-count');
    
    // перебираем карточки через переменную 'card' 
    
        cards.forEach((card) => {
            // в этой карточке, а не в документ ищем кноку "добавить"
            const btn = card.querySelector('.menu-grid-btn');
            // обработчик клика
            btn.addEventListener('click', () => {
                // в новой переменной делаем клон карточки 
                const cardClone = card.cloneNode(true);
                // помещаем клона в карман карточки 
                cartWrapper.appendChild(cardClone);
                showData();                      
// ищем кнопку в КЛОНЕ, чтобы удалять с корзины карточку
                const removeBtn = cardClone.querySelector('button');
                // заменим текст кнопки 
                removeBtn.textContent = 'Удалить из корзины';
// показывает
                removeBtn.addEventListener('click', () => {
                    cardClone.remove();   
                    showData();             
                })
            })
        });
        
        // считаем сумму товара 
        const showData = () => {
            const cardsCart = cartWrapper.querySelectorAll('.card'),
            // ищем цены в товара в карточке
                cardsPrice = cartWrapper.querySelectorAll('.menu-grid-price'),
                cartTotal = document.querySelector('.button-text');
            let sum = 0;
            
            countGoods.textContent = cardsCart.length;
            if (cardsCart.length !== 0) {
                cartEpmty.remove();
            } else {
                cartWrapper.appendChild(cartEpmty);
            }
            cardsPrice.forEach((cardPrice) => {
                let price = parseFloat(cardPrice.textContent);
                sum += price;
            });
            cartTotal.textContent = sum;
        }
    }
    addCart()