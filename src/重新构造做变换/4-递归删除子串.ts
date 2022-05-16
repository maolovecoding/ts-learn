type DropSubStr<
  Str extends string,
  SubStr extends string
> = Str extends `${infer Prefix}${SubStr}${infer Suffix}`
  ? DropSubStr<`${Prefix}${Suffix}`, SubStr>
  : // ? `${DropSubStr<Prefix, Sub>}${DropSubStr<Suffix, SubStr>}`
    Str;

type s1 = DropSubStr<"~~~ha ni 1~~~", "~">;

export {};
