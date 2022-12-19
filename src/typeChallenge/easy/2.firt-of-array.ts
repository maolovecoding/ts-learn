// 获取数组的第一项的类型

type FirstArrItemType<T extends unknown[]> = T extends [infer F, ...unknown[]]
  ? F
  : never;

type FirstArrItemType2<T extends unknown[]> = T extends [] ? never : T[0]

type t1 = FirstArrItemType<[string]>;
type t2 = FirstArrItemType2<[string]>;
export default {};
