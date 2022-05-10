// 获取构造器的类型

interface Person {
  name: string;
  age: number;
}
interface PersonConstructor {
  new (name: string, age: number): Person;
}

type getInstanceType<T extends new (...args: any) => any> = T extends new (
  ...args: any
) => infer Ctor
  ? Ctor
  : any;

type c1 = getInstanceType<PersonConstructor>;

class Son {
  constructor(public name:string) {
    
  }
}

type s1 = getInstanceType<typeof Son>;
export {};

type getConstructorParameters<T extends new (...args: any) => any> =
  T extends new (...args: infer Args) => unknown ? Args : never;

type s2 = getConstructorParameters<typeof Son>