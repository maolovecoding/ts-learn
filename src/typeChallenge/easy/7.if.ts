// 实现类型 If<Condition, True, False>，当 C 为 true 时返回 T，否则返回 F：

type If<Condition, T, F> = Condition extends true ? T : F;
export {}