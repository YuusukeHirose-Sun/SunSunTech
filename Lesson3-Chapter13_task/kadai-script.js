// ボタンとメッセージの要素を取得
const button = document.getElementById('clickBtn');
const message = document.getElementById('message');

// クリック回数をカウント
let clickCount = 0;

// ボタンをクリックした時の動作を設定
button.addEventListener("click",function(){
clickCount += 1; //クリック回数を１増やす 

  // カウントが1以降のメッセージ表示を設定
  if (clickCount === 1){
    message.textContent = '1回目ですね。まだまだこれからです！';
  }else if (clickCount === 2){
    message.textContent = '2回目です。いいペースです！';
  }else if (clickCount === 3){
    message.textContent = '3回目！半分きました！';
  }else if (clickCount === 4){
    message.textContent = '4回目です。あと少し！';
  }else if (clickCount === 5){  
    message.textContent = '5回目！お疲れ様でした！';
  }else if (clickCount === 6){
   button.style.display="none";
  }
});
