// 获取函数的参数类型

type getParameter<T extends Function> = T extends (
  ...args: infer Args
) => unknown
  ? Args
  : never;

type f1 = getParameter<() => void>;
type f2 = getParameter<(name: string) => number>;
type f3 = getParameter<(num: number, age: number) => never>;

type getReturnType<T extends Function> = T extends (
  ...args: any[]
) => infer R
  ? R
  : never;

type r1 = getReturnType<(str:string)=>number>

export {};
