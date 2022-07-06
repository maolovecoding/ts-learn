type Arr = [1, 2, 3, 4, 5, 6];
type ReverseArr<Arr extends unknown[]> = Arr extends [
  infer First,
  ...infer Center,
  infer End
]
  ? [End, ...ReverseArr<Center>, First]
  : Arr;

type a1 = ReverseArr<Arr>;
export {};
