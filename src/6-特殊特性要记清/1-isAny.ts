type a1 = 1 & any; // => any

/**
 * any & 任何类型 都是any
 */
type isAny<T> = 1 extends 2 & T ? true : false;
type t2 = isAny<any>;
type t3 = isAny<"">;

export { isAny };
