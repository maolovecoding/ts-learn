// 普通字面量类型 111 “22” [12,23] -> 称为伪类型
const a1: 11 = 11;
const a2: "22" = "22";

// 2. 模版字面量类型
/*
  形式： `aaa${string}` 字符串aaa开头 后面是任意的string字符串组成的字符串字面量类型
*/
const a3: `aaa${string}` = "aaa";
const a4: `aaa${string}` = "aaaaaa";
const a5: `aaa${string}` = "aaabab";
// 约束该参数必须以 #开头 的字符串类型
const fn1 = (str: `#${string}`) => str;
fn1("#1234567")
// fn1("1234567")
