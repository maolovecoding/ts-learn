/**
 * 把一个索引类型的某些 Key 转为 可选的，其余的 Key 不变，
 * 只用内置类型
 * 1. Omit删除某些key
 * 2. Pick抓取某些key
 * 3. Partial key变可选
 */
type PartialObjectPropByKeys<
  Obj extends Record<keyof any, unknown>,
  Key extends keyof Obj
> = Copy<Omit<Obj, Key> & Partial<Pick<Obj, Key>>>;

// 重映射 让ts计算实际的类型
type Copy<T extends Record<keyof any, unknown>> = {
  [key in keyof T]: T[key];
};

type t1 = Omit<{ a: 1; b: 2 }, "b">;
type t2 = Pick<{ a: 1; b: 2 }, "a">;
type t3 = Partial<{ a: 1; b: 2 }>;

type t4 = PartialObjectPropByKeys<
  { name: string; age: string; address: string },
  "name"
>;

export type { PartialObjectPropByKeys };
