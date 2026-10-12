function showMessage() {
    let message = "Hello, I'm Seiya!"; // ローカル変数（関数内だけの変数）

    console.log(message);
}
// 同じ名前のローカル変数が存在しない場合、外部変数へのフルアクセス権をもつ

showMessage();


function showMessage(from, text = "no text given") {
    console.log(from + ': ' + text);
}

showMessage('Ann', 'Hello!');

function sum(a, b) {
    return a + b;
}

let result = sum(1, 2);
console.log(result);
// 値なしでreturnを使うこともできる。
