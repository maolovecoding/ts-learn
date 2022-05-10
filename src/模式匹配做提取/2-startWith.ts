type StartsWith<
  Str extends string,
  Prefix extends string
> = Str extends `${Prefix}${string}` ? true : false;

type s1 = StartsWith<"#adsadadd", "#a">; // true
type s2 = StartsWith<"#adsadadd", "a">; // false

type EndsWith<
  Str extends string,
  Suffix extends string
> = Str extends `${string}${Suffix}` ? true : false;

type s3 = EndsWith<"#adsadadd", "dd">; // true
type s4 = EndsWith<"#adsadadd", "ad">; // false

// 替换字符串的某些子串  产生新的类型

type ReplaceStr<
  Str extends string,
  From extends string,
  To extends string
> = Str extends `${infer Prefix}${From}${infer Suffix}`
  ? `${Prefix}${To}${Suffix}`
  : never;

type s5 = ReplaceStr<"abcd","a","c">

