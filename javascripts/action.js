$(function() {
  $('#push').click(function() {
    var json = JSON.stringify($('#questions').serializeArray());
    //alert($('#questions').serialize());
    var github = new Github({
      username: $('#github-id').val(),
      password: $('#github-pass').val(),
      auth: 'basic'
    });
    var username = $('#github-url').attr('href').split('/').pop();
    var reponame = username + '.github.com'
    var repo = github.getRepo(username, reponame);
    alert(github.getUser().show('awakia', function(err, user) { alert(err.msg); alert(user)}));
    debugger;
  });
})
