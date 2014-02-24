  $(function() {
      $( '.menulink' ).each(function() {
        $(this).click(function(){
          parent.location.href = $(this).attr('href');
        });
      });
  });
