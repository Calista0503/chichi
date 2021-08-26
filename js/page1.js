
//icon會員登入

$(function(){
  // 開啟 Modal 彈跳視窗
  $("#login").on("click", function(){
    $("div.box").fadeIn();
  });

  // 關閉 Modal
  $("div.close").on("click", function(){
    $("div.box").fadeOut();
  });


  // 防止article區塊的點擊事件冒泡至上層元素：

  // 寫法1：使用jQuery綁定事件
  // $("article").on("click", function(event){
  //   event.stopPropagation();
  // });

  // 寫法2：使用DOM方法綁定事件
  let article = document.getElementsByClassName("sign_box")[0];
    console.log(article);
  // 2-1：使用addEventlistener（較佳）
  article.addEventListener("click", function(event){
    event.stopPropagation();
  });
  // 2-2：使用onclick(HTML屬性，較不推薦)
  // article.onclick = function(event){
  //   event.stopPropagation();
  // };

  $("div.box").on("click", function(){
    $("div.box").fadeOut();
  });

});
