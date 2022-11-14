/**
 * 需求是拿到一个索引类型的所有 key 的路径。
 */
type AllKeyPath<Obj extends Record<string, unknown>> = {
  [Key in keyof Obj]: Key extends string
    ? Obj[Key] extends Record<string, unknown>
      ? Key | `${Key}.${AllKeyPath<Obj[Key]> & string}`
      : Key
    : never;
}[keyof Obj] // 因为我们是遍历了 Key，对每个 Key 做的处理，需要的结果在 value 部分，所以要 [keyof Obj] 的形式取出所有 value 的联合类型。

type t1 = AllKeyPath<{ a: 1; b: 2; c: { d: 3; e: { 4 } } }>;
