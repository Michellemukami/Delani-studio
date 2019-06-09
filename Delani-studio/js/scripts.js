$('.main').click(function() {
  $(this).children('.hide').slideToggle(1200);
  $(this).children('.show').toggle(1500);
});
$("button").click(function (kami) {
  var client = document.getElementById('client').value;
  alert( client +' we have received your message');
  kami.preventDefault();
});
$("button").on('click', function() {
  $('form').each(function() {
    this.reset();
  });
});
