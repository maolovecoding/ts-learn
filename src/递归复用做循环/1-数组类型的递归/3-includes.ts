import { IsEqual, IsEqual2 } from "./3-isEqual";
type Arr = [1, 2, 3, 4, 5];
type Includes<Arr extends unknown[], FindItem> = Arr extends [
  infer Item,
  ...infer Rest
]
  ? Item extends FindItem
    ? FindItem extends Item
      ? true
      : false
    : Includes<Rest, FindItem>
  : false;

type p = Includes<Arr, 6>;

type Includes2<Arr extends unknown[], FindItem> = Arr extends [
  infer Item,
  ...infer Rest
]
  ? IsEqual2<Item, FindItem> extends true
    ? true
    : Includes2<Rest, FindItem>
  : false;
type p2 = Includes2<Arr, 6>;
type p3 = Includes2<Arr, 1>;

export {};
