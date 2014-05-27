$(document).ready(function($) {
  'use strict';

  $('[data-dismiss=sidebar-extension]').on('click', function(e) {
    e.preventDefault();
    $(document.body)
    .removeClass('sidebar-extension-open').addClass('sidebar-extension-close');
  })

  $('.sidebar-extension-toggle').on('click', function(e) {
      e.preventDefault();
      if (e.isDefaultPrevented()) {
        $(document.body).attr('class', function(index, attr) {
        return attr == 'sidebar-extension-open' ? 'sidebar-extension-close' : 'sidebar-extension-open'
      });
      }
  });

  var hash = document.location.hash
  console.log(hash)

  if (hash && $(hash+".tab-pan")) {
    // if there is such a tab, so let's toggle it
    $('[href='+hash+']').tab('show');
  }

  // we want to share links to tabs, so
  $('[data-toggle=tab]').on('shown.bs.tab', function(e) {
    // doesn't work in ie9
    history.replaceState(null, null, $(this).attr('href'));
  });

  // if(hash){
  //   $(".nav-tabs a[href=" + hash.replace(prefix, "") + "]").tab("show");
  // }
  //
  // $(".nav-tabs a").on("shown.bs.tab", function(e){
  //   window.location.hash = e.target.hash.replace("#","#" + prefix);
  // });
});
