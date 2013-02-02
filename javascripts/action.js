$(function() {
  $('#push').click(function() {
    alert(JSON.stringify($('#questions').serializeArray()));
    //alert($('#questions').serialize());
  });
})
