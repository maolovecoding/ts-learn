/**
 * 联合类型判断
 */
type isUnionOrigin<A, B = A> = A extends A
  ? [B] extends [A]
    ? false
    : true
  : never;
type isUnion<T> = isUnionOrigin<T>;

type a = isUnion<"aaa" | "b">;

export { isUnion };
