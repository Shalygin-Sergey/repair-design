$(document).ready(function () {
    var modal = $('.modal'),
        modalBtn = $('[data-toggle="modal"]'),
        closeBtn = $('.modal__close');

    modalBtn.on('click', function () {
        modal.toggleClass('modal--visible');
    });

    closeBtn.on('click', function () {
        modal.toggleClass('modal--visible');
    });

    var mySwiper = new Swiper('.swiper-container', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    var next = $('.swiper-button-next');
    var prev = $('.swiper-button-prev');
    var bullets = $('.swiper-pagination');

    next.css('left', prev.width() + 10 + bullets.width() + 10)
    bullets.css('left', prev.width() + 10)

    new WOW().init();

    // Валидация формы
    $('.modal__form').validate({
        errorClass: "invalid",
        rules: {
            // Простое строчное правило {required:true}
            userName: {
                required: true,
                minlength: 3,
                maxlength: 15
            },
            userPhone: "required",
            // правило объект (блок)
            userEmail: {
                required: true,
                email: true
            }
        }, // сообщения
        messages: {
            userName: {
                required: "Имя обязательно",
                minlength: "Имя не короче трех букв",
                maxlength: "Пожалуйста, не больше 15 букв"
            },
            userPhone: "Телефон обязателен",
            userEmail: {
                required: "Обязательно укажите email",
                email: "Введите в формате: name@domain.com"
            }
        },
        submitHandler: function (form) {
            $.ajax({
                type: "POST",
                url: "send.php",
                data: $(form).serialize(),
                success: function (response) {
                    console.log('Ajax сработал, ответ сервера: ' + response);
                    alert('Форма отправлена, мы вам перезвоним');
                    $(form)[0].reset();
                    modal.removeClass('modal--visible');
                }
            });
        }
    });

    // маска для номера телефона
    $('[type=tel]').mask('+7(000)-000-00-00', {
        placeholder: "+7 (___)-___-__-__"
    });
});