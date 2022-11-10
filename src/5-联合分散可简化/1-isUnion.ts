/**
 * 判断一个类型A是否是联合类型
 * A extends A 是为了触发联合类型的分发
 * [B] extends [A] 是表示联合类型的整体
 */
type isUnionOrigin<A, B = A> = A extends A ? ([B] extends [A] ? false : true) : never;
type isUnion<A> = isUnionOrigin<A>

type a1 = isUnion<'a'|'b'>
type a2 = isUnion<[]>

export {}