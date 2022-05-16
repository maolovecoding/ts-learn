// 根据值类型进行过滤
type FilterByValueType<Obj extends Record<string, any>, ValueType> = {
  [key in keyof Obj as ValueType extends Obj[key] ? key : never]: Obj[key];
};

type o = FilterByValueType<{ name: string; age: number }, number>;

interface P{
  name:string
  age:number
}
type o1 = FilterByValueType<P, number>;

export {};
