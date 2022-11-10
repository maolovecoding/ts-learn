/**
 * 提取索引类型中的可选类型出来
 * 本质还是利用 可选类型多了一个 undefined
 */
type IsPart<T extends Record<string, any>, K extends keyof T> = {} extends Pick<T, K> ? K : never;
type GetOptional<T extends Record<string, any>> = {
  // 如果这个key是可选的 才会被保留
  [key in keyof T as IsPart<T, key>]: T[key];
};

type a2 = GetOptional<{ a: 1; b?: 2 }>;

type GetOptionalDeep<T extends Record<string, any>> = T extends Record<
  string,
  any
>
  ? {
      [key in keyof T as IsPart<T, key>]: GetOptionalDeep<T[key]>;
    }
  : T;
type a3 = GetOptionalDeep<{ a: 1; b: 2; c?: { d?: 4; e: 5 } }>;
const aaa: a3 = {};

export { GetOptional, GetOptionalDeep };
