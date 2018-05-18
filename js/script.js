/// <reference path="_references.js" />
$(function() {
  $('header > div.title > i.material-icons').click(function(e) { $('body').toggleClass('sidebar-closed'); });
  $('main > .tint').click(function() { $('body').addClass('sidebar-closed'); });
  $('header > div.right-nav > i.material-icons:first-child').click(function(e) {
    $(e.target).toggleClass('rotated');
    $('header > div.right-nav > div.settings').toggleClass('closed').children().click(function() { $('body').toggleClass('black-theme'); });
  });
  $('header > div.right-nav > i.material-icons:last-child').click(function() { window.close(); });
  $('.main-top-wrapper > .fab').click(function(e) { toast(4000, $('.main-top-wrapper > input[type="text"]').val(), 'warning', 'primary-color'); });
  colorPaletteSequencer(0, $('div.color-palette'));
});
function colorPaletteSequencer(index, elements) {
  elements.removeClass('hover'); 
  elements.eq(index).addClass('hover');
  setTimeout(function() { colorPaletteSequencer(index === 5 ? 0 : ++index, elements); }, 1500);
}
function toast(duration, message, icon, color) {
  $('.toast').remove();
  $('body').append('<div class="toast shown ' + color + '">' + (message ? message : 'Enter text!') + '</div>');
  icon ? $('.toast').prepend('<i class="material-icons">' + icon + '</i>') : '';
  setTimeout(function() { $('.toast').removeClass('shown'); }, duration);
}