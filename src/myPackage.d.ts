// d.ts파일은 정의 파일이다.
// 호출시그니처(타입)만 작성해준다.

interface Config {
  url: string;
}
declare module "myPackage" {
  function init(config: Config): boolean;
  function exit(code: number): number;
}
