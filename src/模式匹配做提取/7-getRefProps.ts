type GetRefProps<Props> = "ref" extends keyof Props
  ? Props extends { ref?: infer Value | undefined }
    ? Value
    : never
  : never;

type p1 = GetRefProps<{ ref: string; name: string }>;
type k1 = keyof { ref: string; name: string };
export {};
