import { IsEqual } from "./3-isEqual";
// 移除数组中的某个元素
type RemoveItem<
  Arr extends unknown[],
  FindItem,
  Result extends unknown[] = []
> = Arr extends [infer Item, ...infer Rest]
  ? IsEqual<FindItem, Item> extends true
    ? RemoveItem<Rest, FindItem, Result>
    : RemoveItem<Rest, FindItem, [...Result, Item]>
  : Result;

type p1 = RemoveItem<[1, 2, 3], 3>;
type p2 = RemoveItem<[1, 2, 3, 4, 5,3], 3>;

export {};
