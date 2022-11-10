/**
 * 索引签名不能构造成字符串字面量类型，因为它没有名字，而其他索引可以。
 */

type RemoveIndexSignature<T extends Record<string, any>> = {
  [key in keyof T as key extends `${infer Str}` ? Str : never]: T[key];
};
type RemoveIndexSignatureDeep<T extends Record<string, any>> = T extends Record<
  string,
  any
>
  ? {
      [key in keyof T as key extends `${infer Str}`
        ? Str
        : never]: RemoveIndexSignatureDeep<T[key]>;
    }
  : T;
type a2 = RemoveIndexSignature<{ a: 2; [key: string]: 2 }>;
type a3 = RemoveIndexSignatureDeep<{
  a: 2;
  b: { [key: string]: 2 };
  [key: string]: any;
}>;

export type { RemoveIndexSignature, RemoveIndexSignatureDeep };
