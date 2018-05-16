/// <reference path="_references.js" />
$(function() {
  $('header > div.title > i.material-icons').click(function(e) { $('body').toggleClass('sidebar-closed'); });
  $('.main-content').click(function() { $('body').addClass('sidebar-closed'); });
  $('header > div.right-nav > i.material-icons').click(function() { window.close(); });
});