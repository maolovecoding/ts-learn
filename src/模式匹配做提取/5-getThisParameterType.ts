// 获取this的类型

class Dog {
  say(this: Dog) {
    console.log("say hello");
  }
}

type getThisParameterType<T> = T extends (
  this: infer This,
  ...args: any
) => unknown
  ? This
  : unknown;

const say = new Dog().say;

type t1 = getThisParameterType<typeof say>; //Dog
type t2 = getThisParameterType<(this: { name: "zs" }, age: number) => void>;

export {};
