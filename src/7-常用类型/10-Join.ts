/**
 * join('-')('aa', 'bb', 'cc')  -> aa-bb-cc
 */

type Join<S extends string, T extends string[]> = T extends [
  infer First extends string,
  ...infer Rest extends string[]
]
  ? `${First}${S}${Join<S, Rest>}`
  : "";
type RemoveLastSeparator<
  T extends string,
  S extends string
> = T extends `${infer Head}${S}` ? Head : T;

declare function join<S extends string>(
  separator: S
): <T extends string[]>(...args: T) => RemoveLastSeparator<Join<S, T>, S>;

const a = join("-")("aa", "bb", "cc");

export type { Join };
