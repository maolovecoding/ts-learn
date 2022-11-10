/**
 * 全组合类型
 * 传入 A｜B =>  A | B | AB | BA
 */
type Combination<A extends string, B extends string> =
  | A
  | B
  | `${A}${B}`
  | `${B}${A}`;
type AllCombinationsOrigin<A extends string, B extends string = A> = A extends A
  ? Combination<A, AllCombinationsOrigin<Exclude<B, A>>>
  : never;
type AllCombinations<A extends string> = AllCombinationsOrigin<A>;

type a3 = AllCombinations<"a" | "b" | "c">;
