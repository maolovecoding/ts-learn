function demo<T extends new (...args: any[]) => any>(target: T) {
  console.log(target);
  return class extends target{
    constructor(...args){
      super(...args)
      console.log(2)
    }
  }
}
@demo
class Person {
  constructor(){
    console.log(1)
  }

}
new Person
console.log(Person)


export {};
