/**
 * 直接声明同名函数 参数，返回值，参数个数等不同就构成了重载
 */
declare function fn(a: number): number;
declare function fn(a: string): string;

/**
 * 用 interface实现重载
 */
interface MyFn {
  (name: string): string;
  (age: number): number;
}
declare const fn2: MyFn;
// fn2('1')
// fn2(1)

/**
 * 函数类型可以取交叉类型，也就是多种类型都可以，其实也是函数重载的意思
 */
declare const fn3: ((name: string) => string) & ((age: number) => number);
// fn3('1')
// fn3(1)
