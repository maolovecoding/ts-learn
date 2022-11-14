declare function curring<T extends (...args: unknown[]) => unknown>(
  fn: T
): CurringReturn<T>;

type CurringReturn<T extends (...args: unknown[]) => unknown> = T extends (
  ...args: infer Param
) => infer Return
  ? CurringParam<Param, Return>
  : never;

type CurringParam<Params, Return> = Params extends [infer Arg, ...infer Rest]
  ? (arg: Arg) => CurringParam<Rest, Return>
  : Return;

curring((a: number, b: number) => a + b);
