let stars = document.getElementById('stars');
let Edutrack = document.querySelector(`.Edutrack`);
window.onscroll = function(){
     let value = scrollY;
     stars.style.left = value + 'px';
     Edutrack.style.fontSize = value + 'px';
     if (scrollY >= 113){
        Edutrack.style.fontSize = 154 + 'px';
        Edutrack.style.position = 'fixed';
        if(scrollY >= 220){
            Edutrack.style.display = 'none';
        }
        else{
            Edutrack.style.display = 'block';
        }
        if(scrollY <= 114){
        document.querySelector('.main').style.background = 'linear-gradient(black, rgb(33, 32, 32))';
        }
        else{
        document.querySelector('.main').style.background = 'linear-gradient(rgb(225, 236, 238),rgb(33, 32, 32))';
        }
     }
}