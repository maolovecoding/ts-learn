// 两个类型是否相等
export type IsEqual<T1, T2> = T1 extends T2
  ? T2 extends T1
    ? true
    : false
  : false;

  export type IsEqual2<A, B> = (A extends B ? true : false) &
  (B extends A ? true : false);
