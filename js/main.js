(function(){
    var $body = document.querySelector('body')
    $body.classList.remove('no-js')
    $body.classList.add('js')

    var menu = new Menu({
        container: '.header__nav',
        toggleBtn: '.header__btnMenu',
        widthEnable: 1024
    })

    var carouselImgs = new Carousel({
        container: '.laptop-slide .slide-show',
        itens: 'figure',
        btnPrev: '.prev',
        btnNext: '.next'
    })

    var carouselQuotes = new Carousel({
        container: '.quote-slideshow',
        itens: 'figure',
        btnPrev: '.prev',
        btnNext: '.next'
    })
})()