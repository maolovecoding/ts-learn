// 将一个字符串类型的首字母大写
type CapitalizeStr<Str extends string> =
  Str extends `${infer First}${infer Rest}`
    ? // 借助内置类型 将一个字符串可以转为大写字符串
      `${Uppercase<First>}${Rest}`
    : never;
type s1 = CapitalizeStr<"good">; //Good

// 把下划线连接的字符串转为驼峰形式的字符串
type CamelCase<Str extends string> =
  Str extends `${infer Start}${"_"}${infer EndFirst}${infer End}`
    ? `${Start}${Uppercase<EndFirst>}${CamelCase<End>}`
    : // ? CamelCase<`${Start}${Uppercase<EndFirst>}${End}`>
      Str;
type s2 = CamelCase<"pink_pig_cat_dog">;

// 把任意连接符连接的字符串 转为驼峰字符串

type CamelCaseSplitter<
  Str extends string,
  Connector extends string
> = Str extends `${infer Start}${Connector}${infer EndFirst}${infer EndRest}`
  ? `${Start}${Uppercase<EndFirst>}${CamelCaseSplitter<EndRest, Connector>}`
  : // ? CamelCaseSplitter<`${Start}${Uppercase<EndFirst>}${EndRest}`, Connector>
    Str;
type s3 = CamelCaseSplitter<"pink_pig_cat_dog", "_">;
type s4 = CamelCaseSplitter<"pink-pig-cat-dog", "-">;
export {};
