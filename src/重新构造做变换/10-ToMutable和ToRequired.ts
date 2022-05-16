// 去掉只读修饰符
type ToMutable<Obj extends Record<string, any>> = {
  -readonly [key in keyof Obj]: Obj[key];
};

type o1 = ToMutable<{ readonly name: string; readonly age: number }>;

// 去掉只读修饰符
type ToRequired<Obj extends Record<string, any>> = {
  [key in keyof Obj]-?: Obj[key];
};
type o2 = ToRequired<{ name?: string; age?: number }>;

export {};
