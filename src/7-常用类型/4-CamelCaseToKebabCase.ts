/**
 * 驼峰字符串 转为串行 或者蛇形
 */
type CamelCaseToKebabCase<
  Str extends string,
  Separator extends string = "-"
> = Str extends `${infer First extends string}${infer Rest}`
  ? First extends Uppercase<First>
    ? `${Separator}${Lowercase<First>}${CamelCaseToKebabCase<Rest, Separator>}`
    : `${First}${CamelCaseToKebabCase<Rest, Separator>}`
  : Str;

type t1 = CamelCaseToKebabCase<"aBcDef", '_'>;

export type { CamelCaseToKebabCase };
