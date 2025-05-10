// ボタンとメッセージの要素を取得
const button = document.getElementById('clickBtn');
const message = document.getElementById('message');

// ボタンクリック時の処理を追加
button.addEventListener('click', function() {
  message.textContent = 'ボタンがクリックされました！';
});