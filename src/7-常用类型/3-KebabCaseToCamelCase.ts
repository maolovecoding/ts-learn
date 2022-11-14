/**
 * 串行字符串转换为驼峰
 */
type KebabCaseToCamelCase<
  Str extends string,
  Separator extends string = "-"
> = Str extends `${infer Start extends string}${Separator}${infer RestHead extends string}${infer Rest extends string}`
  ? `${Start}${Uppercase<RestHead>}${KebabCaseToCamelCase<Rest, Separator>}`
  : Str;


type t1 = KebabCaseToCamelCase<'ab-cd-ef', '-'>
export type { KebabCaseToCamelCase };
