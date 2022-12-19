/**
 * 手动实现内置 Pick<T, K> 函数，返回一个新的类型，从对象 T 中抽取类型 K：
 */

interface P {
  name: string;
  age: number;
  addr: string
}
type Pick<T, K extends keyof T = keyof T> = {
  [Key in K]: T[Key]
}
type p2 = Pick<P,"age">
export {};
