const imgs = document.querySelectorAll('.caroussel');

let timer = 0;


function seter() {
    imgs.forEach(function(img){
        setInterval(function(){
        img.classList.add('fades', 'show');
        }, 5000 + timer);
        timer += 5000;
    });
}

seter();