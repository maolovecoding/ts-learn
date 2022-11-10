import { isNever } from "./4-isNever";
/**
 * 是否是元组类型：
 * 1. 元组每个元素都是固定类型
 * 2. 元组的 length属性拿到的是具体的数字 而数组的length是number
 */

type a1 = [1, 2, 3]["length"]; // 3
type a2 = number[]["length"]; // number

type isTuple<T extends unknown[]> = isNever<T> extends true
  ? false
  : number extends T["length"]
  ? false
  : true;

type a3 = isTuple<[1, 2, 3]>;
type a4 = isTuple<number[]>;
type a5 = isTuple<never>;
type a6 = isTuple<any>

export {
  isTuple
};
