window.onscroll = function () {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById('header').style.height = "60px";
        document.getElementById('nav-logo').style.width = "60px";
        document.getElementById('nav-logo').style.height = "60px";
        document.getElementById('nav-logo').style.marginLeft = "90%"
        document.getElementById('header').style.backgroundColor = "#000000";
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById('header').style.height = "125px";
        document.getElementById('nav-logo').style.width = "125px";
        document.getElementById('nav-logo').style.height = "125px";
        document.getElementById('nav-logo').style.marginLeft = "50%"
        document.getElementById('header').style.backgroundColor = "transparent";
        document.getElementById("myBtn").style.display = "none";
    }
}
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}



// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function showMore() {
    document.getElementById('show-more').style.display = 'none';
    document.getElementById('show-less').style.display = 'block';
}

function showLess() {
    document.getElementById('show-more').style.display = 'block';
    document.getElementById('show-less').style.display = 'none';
}

function showMorei(i) {
    document.getElementById('show-more' + i).style.display = 'none';
    document.getElementById('show-less' + i).style.display = 'block';
}

function showLessi(i) {
    document.getElementById('show-more' + i).style.display = 'block';
    document.getElementById('show-less' + i).style.display = 'none';
}
