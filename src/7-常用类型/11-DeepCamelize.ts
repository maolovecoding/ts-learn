import { KebabCaseToCamelCase } from "./3-KebabCaseToCamelCase";
/**
 * 递归的把索引类型的 key 转成 CamelCase 的
 * aa_bb => aaBb
 * { aa_bb: 1 } => { aaBb: 1 }
 */

type DeepCamelize<
  Obj extends Record<string, any>,
  Separator extends string = "_"
> = Obj extends unknown[]
  ? CamelCaseArr<Obj, Separator>
  : {
      [key in keyof Obj as key extends string
        ? KebabCaseToCamelCase<key, Separator>
        : never]: DeepCamelize<Obj[key], Separator>;
    };

type CamelCaseArr<
  Arr extends unknown[],
  Separator extends string = "_",
  Res extends unknown[] = []
> = Arr extends [infer First extends string, ...infer Rest]
  ? CamelCaseArr<
      Rest,
      Separator,
      [...Res, KebabCaseToCamelCase<First, Separator>]
    >
  : Res;
type t1 = DeepCamelize<["aa_bb"]>;
type t2 = DeepCamelize<{ a_bb_cc: 1; b_dd: ["a_bbb_ccc"] }>;
export type { DeepCamelize };
