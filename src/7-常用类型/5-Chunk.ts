/**
 * 对数组做分组，比如 1、2、3、4、5 的数组，每两个为 1 组，那就可以分为 1、2 和 3、4 以及 5 这三个 Chunk。
 */
type ChunkArrOrigin<
  Arr extends unknown[],
  ChunkLen extends number,
  CurChunkItem extends unknown[] = [],
  Res extends unknown[] = []
> = Arr extends [infer First, ...infer Rest extends unknown[]]
  ? CurChunkItem["length"] extends ChunkLen
    ? ChunkArrOrigin<Rest, ChunkLen, [First], [...Res, CurChunkItem]>
    : ChunkArrOrigin<Rest, ChunkLen, [...CurChunkItem, First], Res>
  : Res["length"] extends 0 // 只有一个分组
  ? CurChunkItem
  : [...Res, CurChunkItem];
type ChunkArr<Arr extends unknown[], ChunkLen extends number> = ChunkArrOrigin<
  Arr,
  ChunkLen
>;

type t1 = ChunkArr<[1, 2, 3, 4, 5], 3>;
type t2 = ChunkArr<[1, 2, 3, 4, 5], 6>;

export type { ChunkArr };
