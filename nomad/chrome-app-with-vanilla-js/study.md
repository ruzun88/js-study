# let, const, var
- let은 선언 후, 값 바꾸기 가능
- const는 값 바꾸기 불가능
- var는 언제든 쓸수 있는데 let / const 나온 이후로 쓸 이유가 없음

# Data Types on JS
Boolean / Number / Float

# Organizing Data with Arrays
array를 사용한다. []

# 2.1 More Function Fun
``` js
function sayHello(name, age) {
  return `hello ${name} you are ${age} years old`;
}

const  greetYJ = sayHello("YJ", 20)
```
- return 하지 않으면, 아무것도 밖으로 전달되지 않는다.

``` js
const calculator = {
    plus: function(a, b) {
        return a + b;
    }
}

const plusResult = calculator.plus(5, 5)
console.log(plusResult)
```

# 2.2 JS DOM Functions
document는 HTML 문서 전체를 의미한다.
``` js
const title = document.getElementById("title");
// title이라는 id를 가진 객체를 가져온다.
```

# 2.3 Modifying the DOM with JS
객체 안에 있는 값을 js를 통해 직접 바꿀 수 있다.

## querySelector
css와 비슷한 방법으로 dom을 찾을 수 있다.
```js
const title = document.querySelector("#title");
```

# 2.4 Events and event handlers
js는 이벤트를 핸들링 할 수 있다.  
이벤트 중간에 가로챌 수 있다.
## 이벤트를 다는 방법
``` js
function handleResize(event) { //event는 자동으로 입력된다!
    console.log("I have been resized");
    console.log(event)
}

window.addEventListener("resize", handleResize);
```

``` js
function handleClick() {
    title.style.color = "blue";
}

title.addEventListener("click", handleClick);
```

# 3일차 과제 제출
https://codesandbox.io/s/day-three-blueprint-forked-kzsov?file=/src/index.js