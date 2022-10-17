let offset = 0;
const photoSlider = document.querySelector('.slider_photo');

document.querySelector('.slide_right').addEventListener('click', function(){
   offset += 860;
   if (offset > 860){
    offset = 0;
   }
   photoSlider.style.left = -offset + 'px';
});

document.querySelector('.slide_left').addEventListener('click', function(){
    offset = offset - 860;
    if (offset < -860){
     offset = 0;
    }
    photoSlider.style.left = -offset + 'px';
 });