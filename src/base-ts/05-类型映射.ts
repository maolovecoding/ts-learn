/** 
 * 映射类型就相当于把一个集合映射到另一个集合，这是它名字的由来。

  对象、class 在 TypeScript 对应的类型是索引类型（Index Type），
  那么如何对索引类型作修改呢？
  答案是映射类型。

  索引查询 keyof T
  索引访问 T[key]
  in 是用于遍历联合类型的运算符。

  as 运算符 -> 重映射   可以用来修改原来对象的键的类型
*/

type MapType1<T> = {
  [key in keyof T]: T[key];
};
type k1 = MapType1<{ name: "zs" }>; // {name:"zs"}

// 映射对象的属性值类型为一个元祖类型
type MapType2<T> = {
  [key in keyof T]: [T[key]];
};
type k2 = MapType2<{ name: "zs" }>;
const a: k2 = {
  name: ["zs"],
};

/** 
 * 这里的 & string 可能大家会迷惑，解释一下：
    因为索引类型（对象、class 等）可以用 string、number 和 symbol 作为 key，
    这里 keyof T 取出的索引就是 string | number | symbol 的联合类型，
    和 string 取交叉部分就只剩下 string 了。
    就像前面所说，交叉类型会把同一类型做合并，不同类型舍弃。
*/
// 除了可以修改映射的值类型 还可以修改索引的类型
type MapType3<T> = {
  // 修改索引的类型为原来索引的两个连续的索引拼接 a->aa b->bb
  [key in keyof T as `${key & string}${key & string}`]: [T[key]];
};
const b: MapType3<{ a: 1; b: 2 }> = {
  aa: [1],
  bb: [2],
};

type k = keyof {name:"zs"}
const key:`${"name"&string}` = "name"

