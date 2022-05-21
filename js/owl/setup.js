//Implementar carrossel de filmnes

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay: true,
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

//Fixar menu no topo
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