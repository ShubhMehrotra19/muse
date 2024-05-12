import * as z from "zod";

export const PostContext = z.object({
  params: z.object({
    id: z.string().cuid(),
  }),
});

export type PostContext = z.infer<typeof PostContext>;
