/**
 * 过滤出 class的public属性
 * 利用 keyof 类 = 类中的public属性的联合类型
 */
type GetClassPublicProps<T extends Record<string, any>> = {
  [key in keyof T]: T[key]
}
class Person {
  public name: string;
  public address: string;
  private age: number;
  protected gender: boolean;
}

type t2 =GetClassPublicProps<Person>



export type {
  GetClassPublicProps
}