// 判断一个类型元祖是否包含某个类型

export {};

type Includes<T extends unknown[], E> = T extends [infer First, ...infer Rest]
  ? Equal<First, E> extends true
    ? true
    : Includes<Rest, E>
  : false;

type t2 = Includes<["A", "B", "C"], "C">;
type t3 = Includes<["A", "B", "C"], "D">;
type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false