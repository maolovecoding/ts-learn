type Obj = {
  name: string;
  age: number;
};
// 把索引全都变成大写 name -> NAME
type UppercaseKey<Obj extends object> = {
  [key in keyof Obj as Uppercase<key & string>]: Obj[key];
};

type UppercaseKeyFirst<Obj extends object> = {
  [key in keyof object as key extends `${infer Start}${infer Rest}`
    ? `${Uppercase<Start>}${Rest}`
    : key]: Obj[key];
};



type o2 = UppercaseKeyFirst<Obj>

type o1 = UppercaseKey<Obj>;


export {};
