
var funcionCarrusel = function (){
    $('.carousel.carousel-slider').carousel({fullWidth: true, });
    console.log("En funcion la del carrusel")
}
  
var saluda = function(){
    console.log("El js esta funcionando");
}

$(document).ready(function(){
      funcionCarrusel();
      saluda();
});
        
