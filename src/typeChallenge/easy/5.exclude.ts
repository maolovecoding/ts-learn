// 从T中去除掉U中有的类型

type Exclude<T, U> = T extends U ? never : T;

type t2 = Exclude<"a" | "C", "b" | "C">;
export default {};
