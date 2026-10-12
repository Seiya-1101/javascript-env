let sayHi = function() {
    console.log("Hello");
}

console.log(sayHi);
// Javascriptでは、関数は値として扱うことができる。

let func = sayHi;  // 関数のコピーもできる。()がないことに注意

func();
