const answersList = document.querySelectorAll('ol.answers li');

answersList.forEach(li => li.addEventListener('click', checkClickedAnswer))

// 正しい答え
const correctAnswers = {
    question1: 'B',
    question2: 'A',
};
function checkClickedAnswer(event) {
    //  クリックされた答えの要素(liタグ)
    const ClickedAnswerElement=event.currentTarget;

    // 選択した答え(A,B,C,D)
    const selectedAnswer =ClickedAnswerElement.dataset.answer;

    const questionId =ClickedAnswerElement.closest('ol.answers').dataset.id ;
    // 正しい答え(A,B,C,D)
    const correctAnswer = correctAnswers[questionId];

    // メッセージを入れる変数を用意
    let message;
    //　カラーコードを入れる変数を用意
    let answerColorCode;

    //　答えが正しいか判定
    if(selectedAnswer === correctAnswer) {
        //　正しい答えだったとき
        massage = '正解です！おめでとう！';
        answerColorCode = '';
    } else {
        //　間違った答えだったとき
        massage = 'ざんねん！不正解です！';
        answerColorCode = '#f05959';
    }
    

    alert(massage);

    //　色を変更(間違っていたときだけ色が変わる)
    document.querySelector('span#correct-answer').style.color = answerColorCode;
    //　答え全体を表示
    document.querySelector('div#section-correct-answer').style.display = 'block';

}
