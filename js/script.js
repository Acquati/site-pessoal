/* Full Page Scroll */
$(document).ready(function() {
	$('#fullpage').fullpage({
		/*sectionsColor: ['#f2f2f2', '#003556', '#f2f2f2', '#80d2fe', '#f2f2f2', '#80d2fe', '#f2f2f2'],*/
		anchors: ['home', 'enejunesp', 'interage', 'primeirodemaio', 'sobre', 'contato'],
		menu: '#menu',
    controlArrows: false,
		scrollOverflow: true
	});
});

/* MENU */
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}