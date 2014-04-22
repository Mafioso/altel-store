$(document).ready(function($) {
  'use strict';

  $('.sidebar-extension-toggle').on('click', function(e) {
      e.preventDefault();
      if (e.isDefaultPrevented()) {
        $(document.body).attr('class', function(index, attr) {
        return attr == 'sidebar-extension-open' ? 'sidebar-extension-close' : 'sidebar-extension-open'
      });
      }
  });
});
