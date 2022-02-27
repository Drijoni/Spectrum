window.addEventListener('scroll',function() {
    var header = document.getElementById('header');
    header.classList.toggle("sticky",window.scrollY > 0);
    })
        