/**
 * 联合类型转交叉类型
 * 像 1 ｜ 3 交叉类型肯定是 never的 没有交集
 */
type UnionToIntersection<U> = (
  U extends U ? (a: U) => unknown : never
) extends (a: infer T) => unknown
  ? T
  : never;

type a1 = UnionToIntersection<{ a: 1 } | { b: 2 }>;
export { UnionToIntersection };
