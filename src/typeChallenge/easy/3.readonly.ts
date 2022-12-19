export {};

interface P {
  name: string;
  age: number;
  addr: string;
}

type Readonly<T> = {
  readonly [Key in keyof T]: T[Key];
};

type t = Readonly<P>
