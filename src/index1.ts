const hello = () => console.log("hi1");

// tsconfig.json > "lib": ["ES6", "dom"] 에 의해서
//  - getItem을 추천해준다.
//  - localStorage F12하면 lib.dom.d.ts 파일에 접근할 수 있다.

// getItem에 param이 이 ts컴파일 하면 타입대로 사용하지 않음에 대한 경고 문구를 볼 수 있다.
localStorage.getItem("a");
