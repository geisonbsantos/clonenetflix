$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

const header=document.getElementsByTagName("header")[0];
const topoHeader=header.offsetTop;

window.onscroll=function() {
    fixarMenuNoTopo();
}

function fixarMenuNoTopo() {
    if(window.pageYOffset >= topoHeader) {
        header.classList.add("fixoNoTopo");
    }else{
        header.classList.remove("fixoNoTopo");
    }
}