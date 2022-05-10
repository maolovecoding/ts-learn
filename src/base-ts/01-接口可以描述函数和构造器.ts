interface SayHello {
  (name: string): void;
}
const sayHello: SayHello = (name) => {
  console.log(`${name}, 你好啊兄弟！`);
};

interface IPerson {
  name: string;
  age: number;
}
class Person {
  public name: string;
  public age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
interface IPersonConstructor {
  new (name: string, age: number): IPerson;
}
function createPersonInstance(Ctor: IPersonConstructor): IPerson {
  return new Ctor("zs", 22);
}

// 索引签名 -> 索引了多个元素的类型的意思
// 对于不知道一个对象中是否会有的属性 可以使用索引签名
interface IObj {
  [props: string]: string | number;
}
// 虽然可以这样使用 但是使用对象的时候 不会具有类型提示
const obj: IObj = {
  name: "zs",
  age: 22,
  // friends:[]
};
