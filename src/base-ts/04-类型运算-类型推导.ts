// 类型推导 infer
// 比如提取一个元祖中的第一个元素的类型
type Tuple = [string, string, number];
// T extends unknown[] 约束类型为数组 但是数组的元素类型未知
type FirstType<T extends unknown[]> = T extends [infer V,...infer R] ? V:never
type TupleFirstType = FirstType<Tuple> // string
type TupleFirstType2 = FirstType<[1,2,3]> // 1
export {};
