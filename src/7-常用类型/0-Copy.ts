/**
 * 重映射 让ts计算实际的类型
 */
type Copy<T extends Record<keyof any, unknown>> = {
  [key in keyof T]: T[key];
};

export type { Copy };
