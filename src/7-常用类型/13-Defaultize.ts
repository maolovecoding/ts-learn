import { Copy } from "./0-Copy";
/**
 * 对 A、B 两个索引类型做合并，如果是只有 A 中有的不变，如果是 A、B 都有的就变为可选，只有 B 中有的也变为可选
 */

type Defaultize<
  A extends Record<string, unknown>,
  B extends Record<string, unknown>
> = Pick<A, Exclude<keyof A, keyof B>> & Partial<B>;
// Partial<Pick<A, Extract<keyof A, keyof B>>> &
// Partial<Pick<B, Exclude<keyof B, keyof A>>>;

type t1 = Copy<Defaultize<{ aaa: 1; b: 2; c: 3 }, { b: 2; d: 4 }>>;

export type { Defaultize };
