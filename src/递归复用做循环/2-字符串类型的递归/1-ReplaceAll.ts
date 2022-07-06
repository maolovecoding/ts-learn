type ReplaceAll<
  Str extends string,
  From extends string,
  To extends string = ""
> = Str extends `${infer Start}${From}${infer End}`
  ? `${Start}${To}${ReplaceAll<End, From, To>}`
  : Str;

type s1 = ReplaceAll<"aa11bb22cc33dd44aa11bb22", "11", "ee">;
type s2 = ReplaceAll<"喔是一个好孩子，喔真的是", "喔", "我">;

export {};
