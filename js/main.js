$(document).ready(
  function () {
    var includes = $('[data-include]')
    $.each(includes, function () {
      var file = 'includes/' + $(this).data('include') + '.html'
      $(this).load(file)
    })
  }
)

$('.first-option').hide();

$('.custom-file input').change(function (e) {
  if (e.target.files.length) {
    $(this).next('.custom-file-label').html(e.target.files[0].name);
  }
});

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

function toggleSidebar() {
  $("#sidebar").toggleClass("expanded");
  $("body").toggleClass("overlay-active")
}