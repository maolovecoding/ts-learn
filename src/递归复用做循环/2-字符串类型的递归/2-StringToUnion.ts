type StringToUnion<
  Str extends string,
> = Str extends `${infer First}${infer Rest}` ? First | StringToUnion<Rest> : never;

type p1 = StringToUnion<"123">
export {};
