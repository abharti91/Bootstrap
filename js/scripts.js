// slide carousel every 500 ms and manipulate DOM using single pause/play button
$(document).ready(function(){
     $('#mycarousel').carousel({interval:500});
     $('#carouselButton').click(function(){
          if ($('#carouselButton').children('span').hasClass('fa-pause')) {
               $('#mycarousel').carousel('pause');
               $('#carouselButton').children('span').removeClass('fa-pause');
               $('#carouselButton').children('span').addClass('fa-play');
          }
          else if ($('#carouselButton').children('span').hasClass('fa-play')) {
               $('#mycarousel').carousel('cycle');
               $('#carouselButton').children('span').removeClass('fa-play');
               $('#carouselButton').children('span').addClass('fa-pause');
          }
     });

});

// Reservation modal to be invoked on click with id=ReservationModal 
$('#reserveTableButton').click(function() {
     $('#ReservationModal').modal('toggle');
});

$('#reserveCloseButton').click(function(){ 
     $('#ReservationModal').modal('hide');
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
     if (event.target == modal) {
          modal.style.display = "none";
     }
};

// Login modal to be invoked on click with id=loginModal 
$('#loginButton').click(function(){
     $('#loginModal').modal('toggle');
});

$('#loginCloseButton').click(function(){ 
     $('#loginModal').modal('hide');
});


/*
$(document).ready(function () {
     $('[data-toggle="tooltip"]').tooltip();
});
*/