    const ru = {
        welcome: "Добро пожаловать",
        welcome2:'Здесь собрана коллекция моих работ и немного о себе',
        lang: 'Russian',
        color: 'Цветная тема',
        lib: 'Моя библиотека',
        lib2: 'Это некоторые из моих проектов на React/Redux',
        skillHeader: 'Мои навыки',
        cont: 'Для связи',
        thx: 'Спасибо за внимание'

    }
    const en = {
        welcome: 'Welcome',
        welcome2:'Here is a collection of my works and a little about myself',
        lang: 'English',
        color: 'Color Theme',
        lib: 'My Library',
        lib2: 'These are some of my projects mostly using react/redux',
        skillHeader: 'My Skills',
        cont: 'Get in touch',
        thx: 'Thanks for attention'

    }
    localStorage.clear();

    function changeLang(lan) {
        lengthObj = Object.getOwnPropertyNames(lan).length;
        for (var i = 0; i <= lengthObj - 1; i++) {
            objKey = Object.getOwnPropertyNames(lan)[i];
            document.getElementById(objKey).innerText = func(objKey);
        }

        function func(a) {
            for (key in lan) {
                if (key == a) {
                    return (lan[key]);
                }
            }
        }
    }
    const btnEng = document.getElementById('btnEng');

    document.getElementById('language').addEventListener('change', (event) => {
        if(localStorage.getItem('language') === 'russian') {
            localStorage.removeItem('language');

        }
        else {
            localStorage.setItem('language', 'russian')
        }
        addLang();
    })


    function addLang() {
        try {
            if (localStorage.getItem('language') === 'russian') {
                btnEng.onclick(changeLang(ru))



            } else {
                btnEng.onclick(changeLang(en))
            }
        }catch (err) {}
    }
    addLang();



    var $elem = $('.tick');
    let count = 0;
    var duration = 1600;
    /*var $opp = $('.tick').css('opacity')*/

    $(window).scroll(function() {
        var scroll = $(window).scrollTop() + $(window).height();

        //Если скролл до конца елемента
        var offset = $elem.offset().top + ($elem.height() * (3/4));



        if (scroll > offset && count == 0 ) {

            $('.tick').css('opacity', 1);
            $('.tick').each(function(i){
                setTimeout(() => $(this).addClass('move').css('opacity', 1), i*150);
            });
            count = 0;
        } else {
            $('.tick').removeClass('move')
           $('.tick').css('opacity', 0);
        }
    });







var $element = $('footer');
let counter = 0;

$(window).scroll(function() {
    var scroll = $(window).scrollTop() + $(window).height();

    //Если скролл до конца елемента
    var offset = $element.offset().top + ($element.height() * (3/4));



    if (scroll > offset && counter == 0) {
        $('footer').addClass('block')
        $('.contact-section').addClass('block')
        $('.skill-section').addClass('block')



        counter = 0;
    } else {
        $('footer').removeClass('block')
        $('.contact-section').removeClass('block')
        $('.skill-section').removeClass('block')

    }
});






let githubBlack = document.getElementById('githubBlack');
let githubWhite = document.getElementById('githubWhite');



localStorage.clear();

document.getElementById('theme').addEventListener('change', (event) => {
    event.preventDefault();
    if(localStorage.getItem('theme') === 'light') {
        localStorage.removeItem('theme');

    }
    else {
        localStorage.setItem('theme', 'light')
    }
    addClass();
})

function addClass() {
    try {
        if(localStorage.getItem('theme') === 'light') {
            document.querySelector('html').classList.add('light');
            githubBlack.style.visibility = 'hidden'
            githubWhite.style.visibility = 'visible'

        }
        else {
            document.querySelector('html').classList.remove('light');
            githubBlack.style.visibility = 'visible'
            githubWhite.style.visibility = 'hidden'
        }
    } catch (err) {}
}
addClass();

