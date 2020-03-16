document.addEventListener("DOMContentLoaded", function (event) {
    const modal = document.querySelector('.modal'); /* Модальное окно теперь в переменной modal */
    const modalBtn = document.querySelectorAll('[data-toggle=modal]'); /* цепляет все классы с data-toggle=modal в переменную */
    const closeBtn = document.querySelector('.modal__close'); /* Стиль modal__close применяется в переменной closeBtn */
    const switchModal = () => {
        modal.classList.toggle('modal--visible');
    };
    /* модальное окно через classList и функциб toggle применяет стиль modal--visible 
       и работает как выключатель. Включает или выключает модалку */

    modalBtn.forEach(element => {
        element.addEventListener('click', switchModal);
    });
    /* Запустил цикл который перебирает все кнопки что попали в переменную modalBtn
       при клике на кнопку будет применятся switchModal */

    closeBtn.addEventListener('click', switchModal);
    /* после клика мыши применяется класс modal__close */
});