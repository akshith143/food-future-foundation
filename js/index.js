window.onscroll = function () {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        $('#header').addClass('stickyHeader')
    } else {
        $('#header').removeClass('stickyHeader')
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


$(".nav .pills-li").on("click", function () {
    $(".nav").find(".act").removeClass("act");
    $(this).addClass("act");
});

function mouserHoverIn(str) {
    console.log(str);
    // document.getElementById('card-data').style.borderBottomRightRadius = "0%";
    // document.getElementById('card-data').style.borderTopLeftRadius = "0%";
    document.getElementById(str + '-card-front').style.borderBottomRightRadius = "0%";
}

function mouserHoverOut(str) {
    console.log(str);
    // document.getElementById('card-data').style.borderBottomRightRadius = "40%";
    // document.getElementById('card-data').style.borderTopLeftRadius = "40%";
    document.getElementById(str + '-card-front').style.borderBottomRightRadius = "40%";
}