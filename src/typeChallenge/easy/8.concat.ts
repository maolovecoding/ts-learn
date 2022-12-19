// 用类型系统实现 Concat<P, Q>，将两个数组类型连起来：

export {};

type Concat<P, Q> = [
  ...P extends unknown[] ? P : [P],
  ...Q extends unknown[] ? Q : [Q],
]

type t1 = Concat<[2], [1]>