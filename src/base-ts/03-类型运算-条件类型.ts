// 条件类型 extends ? :
// 这就是ts的类型系统中的 if else
type t1 = 1 extends 2 ? true : false; // t1 = false

// 对类型参数做校验
type isTwo<T> = T extends 2 ? true : false;
type t2  = isTwo<2> // t2 = true
type t3 = isTwo<1> // t3 = false

export {};
