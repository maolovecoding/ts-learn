import { isAny } from "./1-isAny";
/**
 * 判断两个类型是否相同
 */

type isEqual<A, B> = isAny<A> extends true
  ? isAny<B> extends true
    ? true // 都是 any
    : false // A是any B不是
  : isAny<B> extends true
  ? false // B是any A不是
  : (A extends B ? true : false) & (B extends A ? true : false);
type t4 = isEqual<any, any>;
type t5 = isEqual<any, "1">;
type t6 = isEqual<"2", "1">;
type t7 = isEqual<any, never>;
/**
 * 判断两个类型是否相同 hack写法
 */
type IsEqual2<A, B> = (<T>() => T extends A ? 1 : 2) extends <
  T
>() => T extends B ? 1 : 2
  ? true
  : false;

export {
  isEqual
};
