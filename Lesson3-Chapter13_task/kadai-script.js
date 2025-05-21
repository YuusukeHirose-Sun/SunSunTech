// ボタンとメッセージの要素を取得
const button = document.getElementById('clickBtn');
const message = document.getElementById('message');

// クリック回数をカウント
let clickCount = 0;

// ボタンをクリックした時の動作を設定
button.addEventListener("click",function(){
clickCount += 1; //クリック回数を１増やす 

  // カウントが１の時だけ以下の処理をする
  if (clickCount === 1){
    button.addEventListener('click', function() {
      message.textContent = '1回目ですね。まだまだこれからです！';
    });
  }
  
    // カウントが2の時だけ以下の処理をする
  if (clickCount === 2){
    button.addEventListener('click', function() {
      message.textContent = '2回目です。いいペースです！';
    });
  } 
  
    // カウントが3の時だけ以下の処理をする
  if (clickCount === 3){
    button.addEventListener('click', function() {
      message.textContent = '3回目！半分きました！';
    });
  }
  
     // カウントが4の時だけ以下の処理をする
  if (clickCount === 4){
    button.addEventListener('click', function() {
      message.textContent = '4回目です。あと少し！';
    });
  }
  
    // カウントが5の時だけ以下の処理をする
  if (clickCount === 5){
    button.addEventListener('click', function() {
      message.textContent = '5回目！お疲れ様でした！';
    });
  }
  
    // カウントが6の時ボタンを非表示にする
  if (clickCount === 6){
    button.addEventListener('click', function() {
      button.style.display="none";
    });
  }
})
