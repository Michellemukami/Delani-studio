$('.main').click(function() {
  $(this).children('.hide').slideToggle(1200);
  $(this).children('.show').toggle(1500);
});
$("button").click(function(kami) {
  var client = document.getElementById('nameDetail').value;
  alert(' Dear ' + client + ' Message is well recieved ' + ' you may contact us at will');
  kami.preventDefault();
});
