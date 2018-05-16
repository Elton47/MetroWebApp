/// <reference path="_references.js" />
$(function() {
  $('header > div.title > i.material-icons').click(function(e) { $('body').toggleClass('sidebar-closed'); });
  $('.main-content').click(function() { $('body').addClass('sidebar-closed'); });
  $('header > div.right-nav > i.material-icons:first-child').click(function(e) {
    $(e.target).toggleClass('rotated');
    $('header > div.right-nav > div.settings').toggleClass('closed').children().click(function() { $('body').toggleClass('black-theme'); });
  });
  $('header > div.right-nav > i.material-icons:last-child').click(function() { window.close(); });
});