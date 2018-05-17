/// <reference path="_references.js" />
$(function() {
  $('header > div.title > i.material-icons').click(function(e) { $('body').toggleClass('sidebar-closed'); });
  $('main > .tint').click(function() { $('body').addClass('sidebar-closed'); });
  $('header > div.right-nav > i.material-icons:first-child').click(function(e) {
    $(e.target).toggleClass('rotated');
    $('header > div.right-nav > div.settings').toggleClass('closed').children().click(function() { $('body').toggleClass('black-theme'); });
  });
  $('header > div.right-nav > i.material-icons:last-child').click(function() { window.close(); });
  colorPaletteSequencer(0, $('div.color-palette'));
});
function colorPaletteSequencer(index, elements) {
  elements.removeClass('hover'); 
  elements.eq(index).addClass('hover');
  setTimeout(function() { colorPaletteSequencer(index === 5 ? 0 : ++index, elements); }, 1500);
}