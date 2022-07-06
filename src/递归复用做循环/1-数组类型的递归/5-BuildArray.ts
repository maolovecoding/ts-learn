import { IsEqual } from '../1-数组类型的递归/3-isEqual';
// 传入长度和元素类型 构造一个指定长度 指定元素类型的元组
type BuildArray<
  Length extends number,
  Ele = unknown,
  Arr extends unknown[] = []
> = IsEqual<Arr["length"], Length> extends true ? Arr : BuildArray<Length, Ele, [...Arr, Ele]>;


type p1 = BuildArray<4, number,[1]>;


export {};
