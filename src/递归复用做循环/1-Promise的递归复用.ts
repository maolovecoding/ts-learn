// 实现一个提取不确定层数的 Promise 中的 value 类型的高级类型。

type DeepPromiseValueType<P extends Promise<unknown>> = P extends Promise<
  infer ValueType
>
  ? ValueType extends Promise<unknown>
    ? DeepPromiseValueType<ValueType>
    : ValueType
  : never;

type DeepPromiseValueType2<P> = P extends Promise<infer ValueType>
  ? DeepPromiseValueType2<ValueType>
  : P;

type p = Promise<Promise<Promise<Promise<Record<"name", string>>>>>;
type p1 = DeepPromiseValueType<p>;
type p2 = DeepPromiseValueType2<p>;

const t = Promise.resolve(1)
  .then((res) => {
    return res + "";
  })
  .then(parseInt)
  .then((res) => res);
type p3 = DeepPromiseValueType<typeof t>;
type p4 = DeepPromiseValueType2<typeof t>;
export {};
