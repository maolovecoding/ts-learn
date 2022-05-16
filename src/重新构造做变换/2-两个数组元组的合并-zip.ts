type tuple1 = [1, 2];
type tuple2 = ["mao", "good"];
// 合并为 [[1,"mao"],[2,"good"]]
type Zip<
  Tuple1 extends [unknown, unknown],
  Tuple2 extends [unknown, unknown]
> = Tuple1 extends [infer Tuple1First, infer Tuple1Second]
  ? Tuple2 extends [infer Tuple2First, infer Tuple2Second]
    ? [[Tuple1First, Tuple2First], [Tuple1Second, Tuple2Second]]
    : []
  : never;

type t1 = Zip<tuple1, tuple2>;
export {};

// 合并任意个元素
type ZipAll<
  Tuple1 extends unknown[],
  Tuple2 extends unknown[]
> = Tuple1 extends [infer Tuple1First, ...infer Rest1]
  ? Tuple2 extends [infer Tuple2First, ...infer Rest2]
    ? [[Tuple1First, Tuple2First], ...ZipAll<Rest1, Rest2>]
    : []
  : [];

type t2 = ZipAll<[1, 2, 3], ["mao", "good", "ni"]>;
