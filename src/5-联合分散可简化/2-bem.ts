/**
 * bem 是 css 命名规范，用 block__element--modifier 的形式来描述某个区块下面的某个元素的某个状态的样式。
 */

type BEM<
  Block extends string,
  Element extends string[],
  Modifier extends string[]
> = `${Block}__${Element[number]}--${Modifier[number]}`;

type a1 = BEM<"div", ["aa", "cc"], ["bb", "ee"]>;

export {}
