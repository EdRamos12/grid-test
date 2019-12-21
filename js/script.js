var lastScrollTop = 0;
var header = document.querySelector('header');
var content = document.querySelector('.corpo');
var lista = document.querySelectorAll('header nav ul li');
window.addEventListener('scroll', function () {
    var scrollTop = window.pageYOffset || document.documentElement.scrolltop;
    if (scrollTop > content.offsetTop - 150) {
        header.style.background = '#ffcc8d';
        lista.forEach(e => {
            e.style["boxShadow"] = 'inset 0px 0px 3px 0px rgba(0,0,0,0.75)';
        });
        if (scrollTop > lastScrollTop) {
            header.style.top = '-70vh';
        } else {
            header.style.top = '0';
        }
    } else {
        lista.forEach(e => {
            e.style["boxShadow"] = 'inset 0px 0px 3px 0px rgba(0,0,0,0)';
        });
        header.style.background = 'none';
        header.style.top = '0';
    }
    console.log(scrollTop)
    lastScrollTop = scrollTop;
})