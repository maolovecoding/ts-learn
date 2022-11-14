/**
 * 根据数组类型，比如 [‘a’, ‘b’, ‘c’] 的元组类型，再加上值的类型 'xxx'，构造出这样的索引类型
 * {
    a: {
        b: {
            c: 'xxx'
        }
    }
}
 */
type TupleToNestedObject<
  Tuple extends readonly unknown[],
  Value extends unknown
> = Tuple extends [infer Property extends keyof any, ...infer Rest]
  ? {
      // [key in Property as key extends keyof any ? key : never] 过滤null undefined 不能作为key 现在可以直接用 infer 4.8约束特性直接过滤
      [key in Property]: Rest extends readonly unknown[]
        ? TupleToNestedObject<Rest, Value>
        : Value;
    }
  : Value;

type t1 = TupleToNestedObject<[1, 2, 3, null, 4], "abc">;
type t2 = TupleToNestedObject<[], "abc">;
export type { TupleToNestedObject };
