// 实现类型 Length<T> 获取元组长度:

type LengthOfTuple<T extends unknown[]> = T["length"]

type t1 = LengthOfTuple<[1,2]>

export default {}