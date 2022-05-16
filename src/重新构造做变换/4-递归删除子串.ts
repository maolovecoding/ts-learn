type DropSubStr<
  Str extends string,
  SubStr extends string
> = Str extends `${infer Prefix}${SubStr}${infer Suffix}`
  ? DropSubStr<`${Prefix}${Suffix}`, SubStr>
  : // ? `${DropSubStr<Prefix, Sub>}${DropSubStr<Suffix, SubStr>}`
    Str;

type s1 = DropSubStr<"~~~ha ni 1~~~", "~">;

type DropSubStr2<
  Str extends string,
  SubStr extends string
> = Str extends `${infer Left}${SubStr}${infer Right}`
  ? `${Left}${DropSubStr<Right, SubStr>}`
  : Str;
  type s2 = DropSubStr2<"~~~ha ni 1~~~", "~">;
export {};
