/**
 * parse querystring 解析查询字符串
 *  name=zs&age=22
 * 很明显 个数不一定 所以 1. 递归 2. 同名字段合并为数组吧
 */

type ParseQuerystring<T extends string> =
  T extends `${infer Query}&${infer Rest}`
    ? MergeParam<ParseParam<Query & Param>, ParseQuerystring<Rest>>
    : ParseParam<T & Param>;
type Param = `${string}=${string}`;
type ParseParam<T extends Param> = T extends `${infer Key}=${infer Value}`
  ? { [k in Key]: Value }
  : // 因为 ParseQueryString 是针对字符串字面量类型做运算的，如果传入的不是字面量类型，而是 string，那就会走到这里，如果返回空对象，那取它的任何属性都会报错。  ParseQuerystring<string> 所以不用 {} 而是选择用 Record
    Record<string, any>;
type MergeParam<
  T extends Record<string, string>,
  V extends Record<string, string>
> = {
  readonly [key in keyof T | keyof V]: key extends keyof T
    ? key extends keyof V
      ? MergeValue<T[key], V[key]>
      : T[key]
    : key extends keyof V
    ? V[key]
    : never;
};

type MergeValue<V1, V2> = V1 extends V2
  ? V1
  : V2 extends unknown[]
  ? [V1, ...V2]
  : [V1, V2];
type a1 = ParseQuerystring<"a=1&b=2">;
type a2 = ParseQuerystring<"a=1&b=2&c=3&a=2&a=3">;
type a3 = ParseQuerystring<string>;

export type { ParseQuerystring };
