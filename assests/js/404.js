$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });
});

// disable developer mode
document.onkeydown = function(e) {
  if(e.keyCode == 123) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
     return false;
  }
}



window.addEventListener('beforeunload', () => {
    alert("Popup isarriving popstate !!!");
    alert(window.location.href);
    var isWeddingExitIntentPopupClosed = sessionStorage.getItem("WeddingExitIntentPopupClosed");
    if (!isWeddingExitIntentPopupClosed) {
        openPopup();
    }
});

//$(window).on('popstate', function (e) {
//    //console.log("popstate fired");
//    alert("Popup isarriving popstate !!!");
//    alert(window.location.href);
//    var isWeddingExitIntentPopupClosed = sessionStorage.getItem("WeddingExitIntentPopupClosed");
//    if (!isWeddingExitIntentPopupClosed) {
//        openPopup();
//    }
//}); 