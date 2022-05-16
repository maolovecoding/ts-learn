type ToReadonly<Obj extends Record<string, any>> = {
  readonly [key in keyof Obj]: Obj[key];
};

type o1 = ToReadonly<{ name: string; age: number }>;

type ToPartial<Obj extends Record<string, any>> = {
  [key in keyof Obj]?: Obj[key];
};
type o2 = ToPartial<{ name: string; age: number }>;

export {};
