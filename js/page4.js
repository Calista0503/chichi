$(function(){
  $("button.btn_drawer").on("click", function(){
    $(this).closest("div.right_sidebar").toggleClass("-open");
  });
});


$(function(){
  // 開啟 Modal 彈跳視窗
  $("button.btn_drawer").on("click", function(){
    $("div.signin").fadeIn();
  });

  // 關閉 Modal
  $("button.btn_modal_close").on("click", function(){
    $("div.signin").fadeOut();
  });

  $("article").on("click", function(event){
    event.stopPropagation();
  });

  let article = document.getElementsByClassName("sign_box")[0];
  article.addEventListener("click", function(event){
    event.stopPropagation();
  });
  // article.onclick = function(event){
  //   event.stopPropagation();
  // });

  // $("div.overlay").on("click", function(){
  //   $("div.overlay").fadeOut();
  // });

});
