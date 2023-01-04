const hello = () => console.log("hi1");

// tsconfig.json > "lib": ["ES6", "dom"] 에 의해서
//  - getItem을 추천해준다.
//  - localStorage F12하면 lib.dom.d.ts 파일에 접근할 수 있다.
localStorage.getItem();
