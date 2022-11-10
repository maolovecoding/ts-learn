

type IsRequired<
  T extends Record<string, any>,
  K extends keyof T
> = {} extends Pick<T, K> ? never : K;
/**
 * 提取索引类型中的必选索引
 */

type GetRequired<T extends Record<string, any>> = {
  [key in keyof T as IsRequired<T, key>]: T[key];
};

type a2 = GetRequired<{ a: 1; b?: 2 }>;

type GetRequiredDeep<T extends Record<string, any>> = T extends Record<
  string,
  any
>
  ? {
      [key in keyof T as IsRequired<T, key>]: GetRequiredDeep<T[key]>;
    }
  : T;
type a3 = GetRequiredDeep<{ a: 1; b?: 2; c: { d?: 4; e: 5 } }>;
export type { GetRequired, GetRequiredDeep };
