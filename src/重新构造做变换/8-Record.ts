
// type a = Record<keyof {"name":string,age:number},"1">

type Obj = {
  name: string;
  age: number;
  [gender:symbol]:symbol
};
// 把索引全都变成大写 name -> NAME
type UppercaseKey<Obj extends Record<string, any>> = {
  [key in keyof Obj as Uppercase<key & string>]: Obj[key];
};
const obj = {
  name:'zs',
  [Symbol()]:1
}
type o1 = UppercaseKey<typeof obj>
type o2 = UppercaseKey<Obj>

export {}