/**
 * 反转字符串
 */
type ReverseStr<Str extends string> = Str extends `${infer First}${infer Rest}`
  ? `${ReverseStr<`${Rest}`>}${First}`
  : Str;

type a1 = ReverseStr<"abc">;
/**
 * 对象属性只读
 */

type ReadOnly<T extends Record<string, any>> = T extends never
  ? never
  : {
      readonly // 没有触发计算 想要触发计算 加上 T extends never
      [key in keyof T]: T[key] extends object ? ReadOnly<T[key]> : T[key];
    };

type a2 = ReadOnly<{ a: 1; b: { c: 2 } }>;

/**
 * 由数组长度实现 四则运算
 */
type BuildArray<
  Len extends number,
  Ele = unknown,
  Arr extends Array<Ele> = []
> = Arr["length"] extends Len ? Arr : BuildArray<Len, Ele, [...Arr, Ele]>;

/**
 * 加法运算
 */
type Add<Num1 extends number, Num2 extends number> = [
  ...BuildArray<Num1>,
  ...BuildArray<Num2>
]["length"];

type a3 = Add<10, 200>;

/**
 * 减法操作 只能大减小
 */
type Subtract<
  Num1 extends number,
  Num2 extends number
> = BuildArray<Num1> extends [...BuildArray<Num2>, ...infer Rest]
  ? Rest["length"]
  : never;

type a4 = Subtract<20, 20>;
/**
 * 乘法操作 将乘法转为加法 1 * 5 = 1 + 1 + 1 + 1 + 1
 */
type Multiply<
  Num1 extends number,
  Num2 extends number,
  ResultArray extends Array<unknown> = []
> = Num2 extends 0
  ? ResultArray["length"]
  : Multiply<Num1, Subtract<Num2, 1>, [...ResultArray, ...BuildArray<Num1>]>;
type a5 = Multiply<1, 5>;

/**
 * 除法 Divide 不断的减法 记录减几次为0就行了
 */

type Divide<
  Num1 extends number,
  Num2 extends number,
  Result extends number = 0
> = Num1 extends 0
  ? Result
  : Divide<Subtract<Num1, Num2>, Num2, Add<Result, 1> & number>;

type a6 = Divide<9, 3>;

/**
 * 获取字符串的字符数量
 */
type StrLen<
  Str extends string,
  Result extends number = 0
> = Str extends `${string}${infer Rest}`
  ? StrLen<Rest, Add<Result, 1> & number>
  : Result;

type a7 = StrLen<"length">;

/**
 * 数字的大小比较
 */
type GreaterThan<
  Num1 extends number,
  Num2 extends number,
  CountArray extends unknown[] = []
> = Num1 extends Num2
  ? false // 相等
  : CountArray["length"] extends Num2
  ? true // 先到达 Num2 Num1则更大
  : CountArray["length"] extends Num1
  ? false // Num2 更大
  : GreaterThan<Num1, Num2, [...CountArray, unknown]>;

type a8 = GreaterThan<40, 20>;

/**
 * 实现斐波那契数列
 * 1 1 2 3 5 8 13 21 ...
 * f(n) = f(n-1) + f(n-2)
 */

type FibonacciLoop<
  PrevArray extends unknown[],
  CurrArray extends unknown[],
  IndexArray extends unknown[],
  Num extends number
> = IndexArray["length"] extends Num
  ? CurrArray["length"]
  : FibonacciLoop<
      CurrArray,
      [...PrevArray, ...CurrArray],
      [...IndexArray, unknown],
      Num
    >;

type Fibonacci<Num extends number> = FibonacciLoop<[1], [], [], Num>;
type a9 = Fibonacci<20>;

type FibonacciLoop2<
  Num extends number,
  PrevArray extends unknown[] = [unknown],
  CurrArray extends unknown[] = [unknown]
> = Num extends 1 | 2
  ? CurrArray["length"]
  : FibonacciLoop2<Subtract<Num, 1>, CurrArray, [...PrevArray, ...CurrArray]>;

type a10 = FibonacciLoop2<20>;
/**
 * 对字符串的分隔符进行处理 处理为驼峰
 */
type CamelCase<
  Str extends string,
  Separator extends string = "_"
> = Str extends `${infer First}${Separator}${infer SecondHead}${infer SecondEnd}`
  ? `${First}${Uppercase<SecondHead>}${CamelCase<SecondEnd, Separator>}`
  : Str;

type a11 = CamelCase<"abc_aaa_bbb">;
type a12 = CamelCase<"abc-aaa-bbb", "-">;
/**
 *
 */
type CamelCaseArr<Arr extends unknown[] = []> = Arr extends [
  infer First,
  ...infer Rest
]
  ? [CamelCase<First & string>, ...CamelCaseArr<Rest>]
  : Arr;

type a13 = CamelCaseArr<["a_b_c", "c_dd_ee"]>;

export {}