const toggleBtn = document.getElementById("toggleMenu");
const mySidenav = document.getElementById("mySidenav");

window.addEventListener('scroll', function () {
    var header = document.getElementById('header');
    header.classList.toggle("sticky", window.scrollY > 0);

})




var flag = true;

const flagMenu = () => {

    if (flag) {
        openNav();
    }

    else {
        closeNav();
    }

    flag = !flag;

}


function openNav() {

    mySidenav.style.width = "300px";

}

function closeNav() {
    mySidenav.style.width = "0";

}


toggleBtn.onclick = () => {
    flagMenu();

}
