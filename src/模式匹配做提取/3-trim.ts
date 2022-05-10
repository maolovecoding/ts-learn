// 去除开头结尾空白字符

type TrimStrLeft<Str extends string> = Str extends `${
  | "\n"
  | " "
  | "\t"}${infer Rest}`
  ? TrimStrLeft<Rest>
  : Str;

type t1 = TrimStrLeft<"   abb">;

type TrimStrRight<Str extends string> = Str extends `${infer Rest}${
  | "\n"
  | " "
  | "\t"}`
  ? TrimStrRight<Rest>
  : Str;
type t2 = TrimStrRight<"abb   ">;

// 去除开头结尾所有空格
type TrimStr<Str extends string> = TrimStrLeft<TrimStrRight<Str>>;

type t3 = TrimStr<"  ab  ">;

export {};
