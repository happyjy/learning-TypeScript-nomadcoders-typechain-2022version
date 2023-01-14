1. create folder/ open the folder
2. npm init -y
3. npm i -D typescript
4. create & setting gitignore

- touch .gitignore
- setting .gitignore

5. create tsconfig.json

```
touch tsconfig.json
```

6. setting tsconfig.json

- ref: https://www.typescriptlang.org/tsconfig
- what is the tsconfig.json ref: https://www.typescriptlang.org/docs/handbook/tsconfig-json.html

7. setting package.json

- add scripts: "build": "tsc"

* lib 설정
  - https://www.typescriptlang.org/tsconfig#lib

8. ts build & execute js file

- package.json 파일 참고
- npm run build && npm run start 로 실행

```
// package.json
 "scripts": {
    "build": "tsc",
    "start": "node build/index.js",
  },
```

9. ts 파일 저장시 다음 두 동작 동시에 해주는 module(compile & execute js)

- npm i -D ts-node
  - ts 컴파일할 필요없이 ts 실행
  - 개발 환경에서만 사용(production 프로젝트 에서 사용 하지 않는다.)
- npm i nodemon
  - 자동으로 커맨드를 재실행 해준다.
- package.json에 nodemon 관련 명령어 추가
- npm run dev로 실행

```
// package.json
  'script' : {
  "dev": "nodemon --exec ts-node src/index.ts"
  }
```

10. TypeScript type 정의를 위한 리포지토리
    https://github.com/DefinitelyTyped/DefinitelyTyped

11. @types/node 설치

- 아래 폴어데 있는 d.ts를 모두 설치해서 type을 알 수 있게 설정
  https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/node
- npm i -D @types/node
