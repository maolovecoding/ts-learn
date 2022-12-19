type Awaited<T extends Promise<unknown>> = T extends Promise<infer V>
  ? V extends Promise<unknown>
    ? Awaited<V>
    : V
  : never;

type t2 = Awaited<Promise<1>>;
type t3 = Awaited<Promise<Promise<2>>>;
type t4 = Awaited<Promise<Promise<Promise<"a">>>>;

export {};
