/**
 * 联合类型转元组类型 ？
 */
type UnionToTuple<T> = UnionToIntersection<
  T extends any ? () => T : never
> extends (...args: unknown[]) => infer Return
  ? [...UnionToTuple<Exclude<T, Return>>, Return]
  : [];

type UnionToIntersection<U> = (
  // U extends U 触发分发
  U extends U ? (args: U) => unknown : never
) extends (args: infer R) => unknown
  ? R
  : never;

type UnionToFuncIntersection<T> = UnionToIntersection<
  T extends any ? () => T : never
>;
type t1 = UnionToFuncIntersection<1 | 2>;

type t2 = UnionToTuple<1 | 2 | 3>;
export type { UnionToTuple };
