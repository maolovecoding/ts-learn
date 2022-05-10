type p = Promise<"dong">;

type getPromiseValue<T> = T extends Promise<infer V> ? V : never;

type pValue = getPromiseValue<p>;

// 提取数组的第一个元素的类型
type arr = [string, string, number];
type getFirst<T> = T extends [infer first, ...unknown[]] ? first : never;

type first = getFirst<arr>;

// 提取数组的剩余的类型
type getRest<T> = T extends []
  ? []
  : T extends [unknown, ...infer rest]
  ? rest
  : never;
type rest = getRest<[]>;
type rest2 = getRest<arr>;
