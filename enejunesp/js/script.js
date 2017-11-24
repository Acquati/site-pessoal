/* Rolagem da página. */
jQuery(document).ready(function($) {
  $(".scroll").click(function(event){   
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top - 80}, 500);
  });
});

/* Abre e fecha o menu para celular. */
function showNav() {        
  document.getElementById("showNav").style.display="none";
  document.getElementById("hideNav").style.display="block";
  document.getElementById("Menuitems").style.display="block";
}
function hideNav() {   
  document.getElementById("hideNav").style.display="none";   
  document.getElementById("showNav").style.display="block";
  document.getElementById("Menuitems").style.display="none";
}