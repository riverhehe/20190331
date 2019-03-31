//ajax快捷方法
// $.ajax('http://api.github.com/users/biaoyansu')
// .done(function(data){
//   console.log("data:",data);
// });
// $.ajax('https://api.github.com/users/biaoyansu') .done(function(data){console.log("data:",data);})

//ajax不整页刷新调用Ajax方法
var form = $('#search');
var input = $('input#username');
var result = $('#result');
var username;
form.on('submit',function(e){
  e.preventDefault();
  username = input.val();
  $.ajax('https://api.github.com/users/' + username)
  .done(function(data){
    var html =
    "<div>用户名：" + data.login + "</div>" +
    "<div>介绍：" + (data.bio || '无') + "</div>" ;

    result.html(html);
  })
})
