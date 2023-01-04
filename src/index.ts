// import { init, exit } from "myPackage";
// // myPackage.d.ts에 선언으로 init, exit에 대한 존재를 알수 있다.
// // myPackage.d.ts이 없으면 오류 생김(이런 에러 => Module '"myPackage"' has no exported member 'exit'.ts(2305))

// init({
//   url: "true",
// });

// exit(1);

// localStorage.clear();

import { init, exit } from "./myPackage1";

init({ debug: false, url: "abc" });
