// 对一个函数的参数和返回值做变换构造
const fn = (name: string, age: number) => `${name},${age}`;

// 追加函数参数 变成一个新的函数类型约束
type AppendArgument<Fn extends Function, Arg> = Fn extends (
  ...args: infer Args
) => infer Result
  ? (...args: [...Args, Arg]) => Result
  : never;

type fn1 = AppendArgument<typeof fn,number>
export {};
