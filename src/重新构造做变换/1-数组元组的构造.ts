
// 数组元组类型追加元素 -》数组开始的类型都是未知的，也就是是任意的
type Push<Arr extends Array<unknown>, Ele> = [...Arr, Ele]

type p1 = Push<[1,2,3],4>
export {}

// 在数组 元组的前面添加
type UnShift<Arr extends unknown[],Ele> = [Ele, ...Arr]

type p2 = UnShift<[3,2,1],4>

