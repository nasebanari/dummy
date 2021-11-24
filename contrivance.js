
//音を鳴らす
let pray_se = () => {
 warning = new Audio('Warning.mp3');
 warning.play();
};



//ブラウザバック禁止
history.pushState(null, null, null);
window.addEventListener('popstate', (e) => {
  history.go(1);
});


//ポップアップを出す
window.onload = function() {
  const popup = document.getElementById('js-popup');
  if(!popup) return;
  popup.classList.add('is-show');
  

  //閉じる処理
  const blackBg = document.getElementById('js-black-bg');
  const closeBtn = document.getElementById('primary');

  closePopUp(blackBg);
  closePopUp(closeBtn);

  function closePopUp(elem) {
    if(!elem) return;
    elem.addEventListener('click', function() {
      pray_se()
      popup.classList.remove('is-show');
    })
  }
}




//$(function popup(){
//$('.modal').modal();
//$('#alert').modal('open');
