/**
 * 是否是 never
 */
type isNever<T> = [T] extends [never] ? true : false;

type a2 = isNever<never>;

export { isNever };
