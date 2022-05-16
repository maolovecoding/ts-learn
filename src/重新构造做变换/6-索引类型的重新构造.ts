// 索引类型是聚合多个元素的类型，比如这就是一个索引类型：
type Obj = {
  readonly name: string; // 只读
  age?: number; // 可选
  gender: "男" | "女";
};
// 对它的修改和构造新类型涉及到了映射类型的语法：
type Mapping<Obj extends object> = {
  [key in keyof Obj]: Obj[key];
};

type o1 = Mapping<Obj>;

// 对值做重新变换
type MappingValue<Obj extends object> = {
  [key in keyof Obj]: [Obj[key], key];
};
type o2 = MappingValue<Obj>;
export {};
